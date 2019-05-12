using System.Collections.Generic;
using System.Data;
using FryWeb.Data.BaseInterfaces;
using System.ComponentModel;
using System.Reflection;
using System.Collections;
using System;
using Dapper;

namespace FryWeb.Data.BaseClasses
{
    public class Command : ICommand
    {
        private readonly List<Dictionary<string, object>> _entities;
        public string Sql { get; set; }


        public Command(object dtoEntity)
        {
            if (dtoEntity != null)
            {
                _entities = ToDictionaryList(dtoEntity);
            }
            else
            {
                _entities = null;
            }
        }

        protected List<Dictionary<string, object>> ToDictionaryList(object source)
        {
            var dictionary = new List<Dictionary<string, object>>();

            if (source.GetType().IsArray)
            {
                IEnumerable enumerable = source as IEnumerable;
                foreach (object item in enumerable)
                {
                    dictionary.Add(ToDictionary(item));
                }
            }
            else
            {
                dictionary.Add(ToDictionary(source));
            }

            return dictionary;
        }

        private Dictionary<string, object> ToDictionary(object source)
        {
            var dictionary = new Dictionary<string, object>();

            var t = source.GetType();

            // https://stackoverflow.com/questions/2442534/how-to-test-if-type-is-primitive
            if (t.IsPrimitive || t == typeof(Decimal) || t == typeof(String) /*add others here if using in command*/ )
            {
                dictionary.Add("PrimitiveParamValue", source);
            }
            else
            {
                foreach (PropertyInfo propertyInfo in t.GetProperties())
                {
                    object tempValue = propertyInfo.GetValue(source, null);
                    dictionary.Add(propertyInfo.Name, tempValue);
                }
            }

            return dictionary;
        }

        public int Execute(IDBContext context, IDbTransaction transaction = null)
        {
            return context.Command(Sql, _entities, transaction: transaction);
        }
    }
}
