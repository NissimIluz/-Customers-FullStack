using DTO.DTO;
using Models.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace Dal.services
{
    public class DALService : IDALService
    {
        private DataDTO data;
        public DALService()
        {
            using (StreamReader file = File.OpenText(_filePath))
            {
                string _dataAsString = file.ReadToEnd();
                data = JsonSerializer.Deserialize<DataDTO>(_dataAsString, new JsonSerializerOptions() { PropertyNameCaseInsensitive = true });
            }
        }
        public Customer GetCustomer(string idNumber)
        {
            return data.CustomersList.Where(customer => customer.IdNumber == idNumber).FirstOrDefault();
        }
        public async Task<bool> UpdateAddress(Address newAddress, string idNumber)
        {
            bool retVal = false;
            var customer = GetCustomer(idNumber);
            if (customer != null)
            {
                customer.Address = newAddress;
                retVal = true;
            }
            retVal = await SaveChange();
            return retVal;
        }

        public async Task<bool> SaveChange()
        {
            string _dataAsString = JsonSerializer.Serialize<DataDTO>(data, new JsonSerializerOptions() { PropertyNameCaseInsensitive = true });
            try
            {
                await File.WriteAllTextAsync(_filePath, _dataAsString);
                return true;
            }
            catch
            {
                return false;
            }
        }
        private string _filePath
        {
            get { return Path.Combine(System.Reflection.Assembly.GetEntryAssembly().Location, @"..\..\..\..\..\DataBase\CustomersJson.json"); }
        }
    }
}

