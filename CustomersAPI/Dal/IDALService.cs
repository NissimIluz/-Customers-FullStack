using Models.Models;
using System;
using System.Threading.Tasks;

namespace Dal
{
    public interface IDALService
    {
        Customer GetCustomer(string idNumber);
        Task<bool> UpdateAddress(Address newAddress, string idNumber);
    }
}
