using System;
using System.ComponentModel.DataAnnotations;

namespace DTO.Request
{
    public class LoginDTO
    {
        [RegularExpression("^[0-9]{9}$")]
        public string IdNumber { get; set; }
    }
}
