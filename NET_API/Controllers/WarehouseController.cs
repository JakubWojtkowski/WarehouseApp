using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using WarehouseAPI.Domain;
using WarehouseAPI.Infrastructure.Warehouses;

namespace WarehouseAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WarehouseController : ControllerBase
    {

        private readonly IWarehouseService _service;

        public WarehouseController(IWarehouseService service)
        {
            this._service = service;
        }


        // Get all method
        [HttpGet]
        public async Task<ActionResult<List<Warehouse>>> GetAll()
        {
            return await _service.GetAll();
        }

        // Get single object by Id method
        [HttpGet("{id}")]
        public async Task<ActionResult<List<Warehouse>>> GetById(int id)
        {
            var warehouse = await _service.GetById(id);
            if (warehouse == null)
                return BadRequest("Warehouse not found.");

            return Ok(warehouse);
        }


        // Post method
        [HttpPost]
        public async Task<ActionResult<List<Warehouse>>> AddWarehouse(Warehouse warehouse)
        {
            var result = await _service.AddWarehouse(warehouse);

            return Ok(result);
        }


        // Put method
        [HttpPut]
        public async Task<ActionResult<List<Warehouse>>> UpdateWarehouse(int id, Warehouse request)
        {
            var result = await _service.UpdateWarehouse(id, request);
            if (result == null)
                return NotFound("Warehouse not found.");

            return Ok(result);
        }

       /* // PATCH: api/warehouses/id
        [HttpPatch("{id}")]
        public async Task<IActionResult> InhibitWarehousePatchAsync(int id, JsonPatchDocument warehouse)
        {
            var updatedWarehouse = await _service.InhibitWarehousePatchAsync(id, warehouse);
            if (updatedWarehouse == null)
            {
                return NotFound();
            }
            return Ok(updatedWarehouse);
        }*/

          [HttpPut("/status/inhibit/{id}")]
          public async Task<ActionResult<List<Warehouse>>> InhibitWarehouse(int id)
          {
            var warehouse = await _service.InhibitWarehouse(id);
            if (warehouse == null)
            return BadRequest("Warehouse not found.");
                
            return Ok(warehouse);
          }

        [HttpPut("/status/active/{id}")]
        public async Task<ActionResult<List<Warehouse>>> ActiveWarehouse(int id)
        {
            var warehouse = await _service.ActiveWarehouse(id);
            if (warehouse == null)
                 return BadRequest("Warehouse not found.");

            return Ok(warehouse);
        }

        // Delete method by id
        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Warehouse>>> DeleteWarehouse(int id)
        {
            var result = await _service.DeleteWarehouse(id);
            if (result == null)
                return NotFound("Warehouse not found.");

            return Ok(result);
        }

    }
}

