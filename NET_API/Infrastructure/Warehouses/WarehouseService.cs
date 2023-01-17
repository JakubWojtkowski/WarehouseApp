using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WarehouseAPI.Domain;

namespace WarehouseAPI.Infrastructure.Warehouses
{
    public class WarehouseService : IWarehouseService
    {
        private readonly DataContext _context;
        public WarehouseService(DataContext context)
        {
            _context = context;
        }



        public async Task<List<Warehouse>> GetAll()
        {
            var warehouses = await _context.Warehouses.ToListAsync();
            return warehouses;
        }

        public async Task<Warehouse?> GetById(int id)
        {
            var warehouse = await _context.Warehouses.FirstOrDefaultAsync(x => x.Id == id);
            if (warehouse == null)
                return null;

            return warehouse;
        }

        public async Task<List<Warehouse>?> AddWarehouse(Warehouse warehouse)
        {
            _context.Warehouses.Add(warehouse);
            await _context.SaveChangesAsync();

            return await _context.Warehouses.ToListAsync();
        }

        public async Task<List<Warehouse>?> UpdateWarehouse(int id, Warehouse request)
        {
            var warehouse = await _context.Warehouses.FindAsync(id);
            if (warehouse == null)
                return null;

            warehouse.name = request.name;
            warehouse.address = request.address;
            warehouse.coOrdinates = request.coOrdinates;


            await _context.SaveChangesAsync();
            return await _context.Warehouses.ToListAsync();
        }

        public async Task<List<Warehouse>?> InhibitWarehouse(int id)
        {
            var warehouse = await _context.Warehouses.FindAsync(id);
            if (warehouse == null)
                return null;

           
            warehouse.active = "false";

            await _context.SaveChangesAsync();
            return await _context.Warehouses.ToListAsync();
        }

        public async Task<List<Warehouse>?> ActiveWarehouse(int id)
        {
            var warehouse = await _context.Warehouses.FirstOrDefaultAsync(x => x.Id == id);
            if (warehouse == null)
                return null;

            warehouse.active = "true";

            await _context.SaveChangesAsync();
            return await _context.Warehouses.ToListAsync();
        }

        public async Task<List<Warehouse>?> DeleteWarehouse(int id)
        {
            var warehouse = await _context.Warehouses.FindAsync(id);
            if (warehouse is null)
                return null;

            _context.Warehouses.Remove(warehouse);
            await _context.SaveChangesAsync();

            return await _context.Warehouses.ToListAsync();
        }
    }
}
