using System;

namespace WarehouseAPI.Domain
{
    public class User
    {
        public Guid domainId { get; set; }
        public int id { get; set; }
        public string userName { get; set; } = string.Empty;
        public string typeOfManager { get; set; } = string.Empty;
        public string phoneNumber { get; set; } = string.Empty;
        public string email { get; set; } = string.Empty;
        public string password { get; set; } = string.Empty;
    }
}
