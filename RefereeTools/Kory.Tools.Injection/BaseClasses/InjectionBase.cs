using System;
using System.Collections.Generic;
using System.Linq;
using Ninject.Modules;
using Ninject.Web.Common;

namespace Kory.Tools.Injection.BaseClasses
{
    public class InjectionBase : NinjectModule
    {
        protected BindingScopeType BindingScopeType { get; set; }

        protected InjectionBase(BindingScopeType bindingScopeType)
        {
            BindingScopeType = bindingScopeType;
        }

        public override void Load()
        {
            // Do nothing, method required by Ninject
        }

        protected void BindContext<T, TImplementation>(string name = "")
        {
            Bind<T>().To(typeof(TImplementation)).InRequestScope().Named(name);
        }
    }
}
