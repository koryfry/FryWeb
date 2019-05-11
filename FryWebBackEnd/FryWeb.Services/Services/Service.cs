using FryWeb.Services.Interfaces;
using FryWeb.Data.Interfaces;

namespace FryWeb.Services.Services
{
    public class Service : IService
    {
        #region protected properties

        protected readonly IDBContext Context;

        #endregion

        #region constructor

        public Service() { }
        public Service(IDBContext context)
        {
            Context = context;
        }

        #endregion

        #region disposal

        public virtual void Dispose()
        {
            /** dispose of the context */
            if (Context != null)
            {
                Context.Dispose();
            }
        }

        ~Service()
        {
            Dispose();
        }

        #endregion
    }
}
