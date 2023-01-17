using Microsoft.AspNetCore.Mvc;
using WarehouseAPI.Domain;

namespace WarehouseAPI.Infrastructure.Deliveries
{
    public interface IDeliveryService
    {
        Task<List<Delivery>> GetAll();
        Task<Delivery?> GetById(Guid id);
        Task<List<Delivery>?> AddDelivery(Delivery delivery);
        Task<List<Delivery>?> UpdateDelivery(Guid id, Delivery request);
        Task<List<Delivery>?> DeleteDelivery(Guid id);
    }
}
