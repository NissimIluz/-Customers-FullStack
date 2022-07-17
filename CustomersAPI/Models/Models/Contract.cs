using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Models
{
    public class Contract
    {
        public string ContractId { get; set; }
        public string ContractName { get; set; }
        public List<Package> PackagesList { get; set; }
    }
}
