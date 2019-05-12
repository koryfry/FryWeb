using System.Data;

namespace FryWeb.Data.BaseInterfaces
{
    public interface IQuery<T>
    {
        string Sql { get; set; }

        T Execute(IDBContext context, IDbTransaction transaction = null);
    }
}
