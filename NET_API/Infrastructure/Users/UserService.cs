using WarehouseAPI.Domain;

namespace WarehouseAPI.Infrastructure.Users
{
    public class UserService : IUserService
    {
        private readonly DataContext _context;
        public UserService(DataContext context)
        {
            _context = context;
        }

        public async Task<List<User>> GetAll()
        {
            var users = await _context.Users.ToListAsync();
            return users;
        }

        public async Task<User?> GetById(int id)
        {
            var users = await _context.Users.FirstOrDefaultAsync(x => x.id == id);
            if (users == null)
                return null;

            return users;
        }

        public async Task<List<User>?> AddUser(User user)
        {
            user.domainId = Guid.NewGuid();
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return await _context.Users.ToListAsync();
        }

        public async Task<List<User>?> UpdateUser(int id, User request)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
                return null;

            user.userName = request.userName;
            user.typeOfManager = request.typeOfManager;
            user.phoneNumber = request.phoneNumber;
            user.email = request.email;
            user.password = request.password;


            await _context.SaveChangesAsync();
            return await _context.Users.ToListAsync();
        }

    }
}
