using System.Data;

namespace FryWeb.Data.Interfaces
{
    public interface ICommand
    {
        string Sql { get; set; }

        int Execute(IDBContext context, IDbTransaction transaction = null);
    }
}
