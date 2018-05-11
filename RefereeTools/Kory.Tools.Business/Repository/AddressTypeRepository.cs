using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using Kory.Tools.Data.RefereeTools;
using Kory.Tools.Contracts.RepositoryInterfaces;
using Kory.Tools.Data;
using Kory.Tools.Data.Entities.RefereeTools;
using Kory.Tools.Contracts.BaseClasses;

namespace Kory.Tools.Data.Repository
{
    public class AddressTypeRepository : RepositoryBase<AddressType>, IAddressTypeRepository
    {
        public AddressTypeRepository(IRepositoryContext context) : base(context) {}
    }
}
