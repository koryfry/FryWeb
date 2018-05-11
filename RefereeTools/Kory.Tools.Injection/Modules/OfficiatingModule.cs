using System.Collections.Generic;
using Kory.Tools.Injection.BaseClasses;
using Kory.Tools.Data.Repository;
using Kory.Tools.Contracts.RepositoryInterfaces;
using Kory.Tools.Contracts.BaseClasses;
using Kory.Tools.Data;

namespace Kory.Tools.Injection.Modules
{
    public class OfficiatingModule : InjectionBase
    {
        public bool LoadContext;

        public OfficiatingModule(bool loadContext = true, BindingScopeType bindingScopeType = BindingScopeType.InRequestScope) :
            base(bindingScopeType)
        {
            LoadContext = loadContext;
        }

        public override void Load()
        {
            Bind<IAddressRepository>().To<AddressRepository>();
            Bind<IAddressTypeRepository>().To<AddressTypeRepository>();
            Bind<IAgeGroupRepository>().To<AgeGroupRepository>();
            Bind<IArenaRepository>().To<ArenaRepository>();
            Bind<IOfficialsRepository>().To<OfficialsRepository>();
            Bind<IOfficiatedGameRepository>().To<OfficiatedGameRepository>();

            if (LoadContext == true)
            {
                BindContext<IRepositoryContext, RefereeToolsContext>(name: "RefereeToolsContext");
            }
        }
    }
}
