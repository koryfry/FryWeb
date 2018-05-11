using Kory.Tools.Business.Repository;
using Kory.Tools.Data.RefereeTools;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kory.Tools.Data.Business.Services.Officiating
{
    //public class AddressService
    //{
    //    private readonly AddressRepository _addressRepository;

    //    public AddressService()
    //    {
    //        _addressRepository = new AddressRepository();
    //    }

    //    public Address GetAddress(int addressKey)
    //    {
    //        var address = new Address();

    //        try
    //        {
    //            address = _addressRepository.GetById(addressKey);

    //            if (address != null)
    //            {
    //                address.ModelCode = (int)MessageCodes.Success;
    //            }
    //        }
    //        catch (Exception ex)
    //        {
    //            if (address != null)
    //            {
    //                address.ModelCode = (int)MessageCodes.Failure;
    //                address.Message = ex.Message;
    //            }
    //        }

    //        return address;
    //    }

    //    public Address CreateAddress(Address address)
    //    {
    //        try
    //        {
    //            _addressRepository.Insert(address);
    //            _addressRepository.Save();

    //            address = GetAddress(address.AddressKey);
    //            address.ModelCode = (int)MessageCodes.Success;
    //        }
    //        catch (Exception ex)
    //        {
    //            address.ModelCode = (int)MessageCodes.Failure;
    //            address.Message = ex.Message;
    //        }

    //        return address;
    //    }

    //    public void DeleteAddress(int addressKey)
    //    {
    //        var address = new Address();

    //        try
    //        {
    //            _addressRepository.DeleteById(addressKey);
    //            _addressRepository.Save();

    //            // Report the success
    //            address.ModelCode = (int)MessageCodes.Success;
    //        }

    //        catch (Exception ex)
    //        {
    //            // Report the failure
    //            address.ModelCode = (int)MessageCodes.Failure;

    //            // Assign the message
    //            address.Message = ex.Message;
    //        }
    //    }
    //}
}