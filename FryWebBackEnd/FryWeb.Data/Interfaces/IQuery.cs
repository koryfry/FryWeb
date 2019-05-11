using System.Data;

namespace FryWeb.Data.Interfaces
{
    public interface IQuery<T>
    {
        string Sql { get; set; }

        T Execute(IDBContext context, IDbTransaction transaction = null);
    }
}
