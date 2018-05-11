using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Web;
using Kory.Tools.Data.Entities.RefereeTools;
using Kory.Tools.Contracts.RepositoryInterfaces;
using Kory.Tools.Data;
using Kory.Tools.Contracts.BaseClasses;

namespace Kory.Tools.Data.Repository
{
    public class AddressRepository : RepositoryBase<Address>, IAddressRepository
    {
        public AddressRepository(IRepositoryContext context) : base(context) {}
    }
}
