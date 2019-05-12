using System.Data;

namespace FryWeb.Data.BaseInterfaces
{
    public interface ICommand
    {
        string Sql { get; set; }

        int Execute(IDBContext context, IDbTransaction transaction = null);
    }
}
