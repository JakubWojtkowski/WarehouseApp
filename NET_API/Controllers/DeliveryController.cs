using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WarehouseAPI.Domain;
using WarehouseAPI.Infrastructure.Deliveries;

namespace WarehouseAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DeliveryController : ControllerBase
    {

        private readonly IDeliveryService _service;
        public DeliveryController(IDeliveryService service) // ctor - skrót to konstruktora
        {
            this._service = service;
        }

        // Get all method
        [HttpGet]
        public async Task<ActionResult<List<Delivery>>> GetAll()
        {
            return await _service.GetAll();
        }

        // Get by Id method
        [HttpGet("{id:Guid}")]
        public async Task<ActionResult<List<Delivery>>> GetById(Guid id)
        {
            var delivery = await _service.GetById(id);
            if (delivery == null)
                return BadRequest("Delivery not found.");

            return Ok(delivery);
        }


        // Post method
        [HttpPost]
        public async Task<ActionResult<List<Delivery>>> AddDelivery(Delivery delivery)
        {
            var result = await _service.AddDelivery(delivery);

            return Ok(result);
        }

        // Put method
        [HttpPut]
        public async Task<ActionResult<List<Delivery>>> UpdateDelivery(Guid id, Delivery request)
        {
            var result = await _service.UpdateDelivery(id, request);
            if (result == null)
                return NotFound("Delivery not found.");

            return Ok(result);
        }


        // Delete method by id
        [HttpDelete("{id}")]
        public async Task<ActionResult<Delivery>> DeleteDelivery(Guid id)
        {
            var result = await _service.DeleteDelivery(id);
            if (result == null)
                return NotFound("Delivery not found.");

            return Ok(result);
        }
    }
}
