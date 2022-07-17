using Contracts.ICustomerService;
using DTO.Request;
using DTO.Response;
using Microsoft.AspNetCore.Mvc;
using Models.Models;
using System.Text.RegularExpressions;
using System.Xml.Linq;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        readonly ICustomerService _customerService;
        readonly ILogger<CustomerController> _logger;
        public CustomerController(ICustomerService customerService, ILogger<CustomerController> logger)
        {
            _customerService = customerService;
            _logger = logger;
        }

        [HttpPost("Login")]
        public DTO.Response.ObjectResult Login(LoginDTO loginDTO)
        {
            DTO.Response.ObjectResult retVal = new DTO.Response.ObjectResult();
            try
            {
                retVal.Data = _customerService.GetCustomer(loginDTO.IdNumber);
            }
            catch (Exception ex)
            {
                _logger.LogInformation(ex.Message);
                retVal.Success = false;
            }
            return retVal;
        }
        [HttpPut("UpdateAddress")]
        public async Task<DTO.Response.ObjectResult> UpdateAddress(Address newAddress, string idNumber)
        {
            DTO.Response.ObjectResult retVal = new DTO.Response.ObjectResult();
            try
            {
                if (Regex.IsMatch(idNumber, "^[0-9]{9}$"))
                {
                    retVal.Data = await _customerService.UpdateAddress(newAddress, idNumber);
                }
            }
            catch (Exception ex)
            {
                _logger.LogInformation(ex.Message);
                retVal.Success = false;
            }
            return retVal;
        }
    }
}
