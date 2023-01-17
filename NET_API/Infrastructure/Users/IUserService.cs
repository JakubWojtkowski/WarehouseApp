using WarehouseAPI.Domain;

namespace WarehouseAPI.Infrastructure.Users
{
    public interface IUserService
    {
        Task<List<User>> GetAll();
        Task<User?> GetById(int id);
        Task<List<User>?> AddUser(User user);
        Task<List<User>?> UpdateUser(int id, User request);
    }
}
