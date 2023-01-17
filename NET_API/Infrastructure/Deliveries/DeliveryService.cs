using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WarehouseAPI.Domain;
using ZstdSharp.Unsafe;

namespace WarehouseAPI.Infrastructure.Deliveries
{
    public class DeliveryService : IDeliveryService
    {
        private readonly DataContext _context;
        public DeliveryService(DataContext context)
        {
            _context = context;
        }



        public async Task<List<Delivery>> GetAll()
        {
            var deliveries = await _context.Deliveries.ToListAsync();
            return deliveries;
        }

        public async Task<Delivery?> GetById(Guid id)
        {
            var delivery = await _context.Deliveries.FirstOrDefaultAsync(x => x.Id == id);
            if (delivery == null)
                return null;

            return delivery;
        }

        public async Task<List<Delivery>?> AddDelivery(Delivery delivery)
        {
            delivery.Id = Guid.NewGuid();
            _context.Deliveries.Add(delivery);
            await _context.SaveChangesAsync();

            return await _context.Deliveries.ToListAsync();
        }

        public async Task<List<Delivery>?> UpdateDelivery(Guid id, Delivery request)
        {
            var delivery = await _context.Deliveries.FindAsync(id);
            if (delivery == null)
                return null;

            delivery.dateOfDelivery = request.dateOfDelivery;
            delivery.deliveryMass = request.deliveryMass;
            delivery.WarehouseId = request.WarehouseId;
            delivery.placementTime = request.placementTime;
            delivery.receiveTime = request.receiveTime;

            await _context.SaveChangesAsync();
            return await _context.Deliveries.ToListAsync();
        }

        public async Task<List<Delivery>?> DeleteDelivery(Guid id)
        {
            var delivery = await _context.Deliveries.FindAsync(id);
            if (delivery is null)
                return null;

            _context.Deliveries.Remove(delivery);
            await _context.SaveChangesAsync();

            return await _context.Deliveries.ToListAsync();
        }

    }
}
