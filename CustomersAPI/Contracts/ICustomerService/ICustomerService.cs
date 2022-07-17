using Models.Models;
using System;
using System.Threading.Tasks;

namespace Contracts.ICustomerService
{
    public interface ICustomerService
    {
        Customer GetCustomer(string idNumber);
        Task<bool> UpdateAddress(Address newAddress, string idNumber);
    }
}
