using WarehouseAPI.Domain;

namespace WarehouseAPI.Infrastructure.Warehouses
{
    public interface IWarehouseService
    {
        Task<List<Warehouse>> GetAll();
        Task<Warehouse?> GetById(int id);
        Task<List<Warehouse>?> AddWarehouse(Warehouse warehouse);
        Task<List<Warehouse>?> UpdateWarehouse(int id, Warehouse request);
        Task<List<Warehouse>?> InhibitWarehouse(int id);
        Task<List<Warehouse>?> ActiveWarehouse(int id);
        Task<List<Warehouse>?> DeleteWarehouse(int id);
    }
}

