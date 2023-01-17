using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WarehouseAPI.Domain;
using WarehouseAPI.Infrastructure.Users;

namespace WarehouseAPI.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        private readonly IUserService _service;

        public UserController(IUserService service)
        {
            _service = service;
        }


        // Get all method
        [HttpGet]
        public async Task<ActionResult<List<User>>> GetAll()
        {
            return await _service.GetAll();
        }

        // Get single object by Id method
        [HttpGet("{id}")]
        public async Task<ActionResult<List<User>>> GetById(int id)
        {
            var user = await _service.GetById(id);
            if (user == null)
                return BadRequest("User not found.");

            return Ok(user);
        }


        // Post method
        [HttpPost]
        public async Task<ActionResult<List<User>>> AddUser(User user)
        {
            var result = await _service.AddUser(user);

            return Ok(result);
        }


        // Put method
        [HttpPut]
        public async Task<ActionResult<List<User>>> UpdateUser(int id, User request)
        {
            var result = await _service.UpdateUser(id, request);
            if (result == null)
                return NotFound("User not found.");

            return Ok(result);
        }

    }
}
