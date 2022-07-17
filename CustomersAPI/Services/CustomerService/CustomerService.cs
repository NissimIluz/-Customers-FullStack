using Contracts.ICustomerService;
using Dal;
using Models;
using Models.Models;
using System;
using System.Threading.Tasks;

namespace Services.CustomerService
{
    public class CustomerService : ICustomerService
    {
        readonly IDALService _dalService;
        public CustomerService(IDALService dalService)
        {
            _dalService = dalService;
        }

        public Customer GetCustomer(string idNumber)
        {
            return _dalService.GetCustomer(idNumber);
        }
        public Task<bool> UpdateAddress(Address newAddress, string idNumber)
        {
            return _dalService.UpdateAddress(newAddress, idNumber);
        }
    }
}
