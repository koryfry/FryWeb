using Kory.Tools.Business.Repository;
using Kory.Tools.Data.RefereeTools;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Kory.Tools.BR.Utils;

namespace Kory.Tools.Data.Business.Services.Officiating
{
    //public class AddressTypeService
    //{
    //    private readonly AddressTypeRepository _addressTypeRepository;

    //    public AddressTypeService()
    //    {
    //        _addressTypeRepository = new AddressTypeRepository();
    //    }

    //    public AddressType GetAddressType(int addressTypeKey)
    //    {
    //        var addressType = new AddressType();

    //        try
    //        {
    //            addressType = _addressTypeRepository.GetById(addressTypeKey);

    //            if (addressType != null)
    //            {
    //                addressType.ModelCode = (int)MessageCodes.Success;
    //            }
    //        }
    //        catch (Exception ex)
    //        {
    //            if (addressType != null)
    //            {
    //                addressType.ModelCode = (int)MessageCodes.Failure;
    //                addressType.Message = ex.Message;
    //            }
    //        }

    //        return addressType;
    //    }

    //    public int GetAddressTypeKey (string addressTypeDescription)
    //    {
    //        var addressType =
    //                _addressTypeRepository.GetAllByQuery(at => at.AddressTypeDescription.Contains(addressTypeDescription));

    //        return addressType.First().AddressTypeKey;
    //    }
    //}
}
