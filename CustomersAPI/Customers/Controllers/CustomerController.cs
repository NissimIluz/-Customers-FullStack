using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Customers.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        readonly ICustomerController _customerController;
        readonly ILogger _logger;
        public CustomerController(ICustomerController customerController, ILogger logger)
        {
            _customerController = customerController;
            _logger = logger;
        }

        [HttpPost(Name = "login")]
        public ObjectResult Get(LoginDTO loginDTO)
        {
            ObjectResult retVal = new ObjectResult();
            try
            {
                retVal.Data = _customerController.GetCustomer(LoginDTO.IdNumber);
            }
            catch(Exception ex)
            {
                _logger.log(ex);
                retVal.Success = false;
            }
            return retVal;
        }
    }
}
