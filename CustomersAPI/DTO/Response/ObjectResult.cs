using System;
using System.Collections.Generic;
using System.Text;

namespace DTO.Response
{
    public class ObjectResult
    {
        public bool Success { get; set; } = true;
        public object Data { get; set; } = null;
        public string Message { get; set; }

    }
}
