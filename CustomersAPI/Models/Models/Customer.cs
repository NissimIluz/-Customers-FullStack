﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Models.Models
{
    public class Customer
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string IdNumber { get; set; }
        public Address Address { get; set; }
        public List<Contract> ContractList { get; set; }
    }
}
