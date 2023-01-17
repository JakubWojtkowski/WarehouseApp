namespace WarehouseAPI.Domain
{
    public class Delivery
    {
        public Guid Id { get; set; }
        public DateTime dateOfDelivery { get; set; }

        public int deliveryMass { get; set; } // in kilos

        public int? WarehouseId { get; set; }

        public int placementTime { get; set; } // in minutes

        public int receiveTime { get; set; } // in minutes
    }
}
