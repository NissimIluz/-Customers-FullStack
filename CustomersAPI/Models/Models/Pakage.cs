using Enum;
using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Models
{
    public class Package
    {
        public PackageType PackageType { get; set; }
        public string PackageName { get; set; }
        public int PackageQuantity { get; set; }
        public int PackageBalance { get; set; }
    }
}
