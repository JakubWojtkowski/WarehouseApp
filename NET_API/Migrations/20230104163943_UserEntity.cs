using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WarehouseAPI.Migrations
{
    public partial class UserEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
               name: "Users",
               columns: table => new
               {
                   domainId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                   id = table.Column<int>(type: "int", nullable: false),
                   userName = table.Column<string>(type: "nvarchar(20)", nullable: false),
                   typeOfManager = table.Column<string>(type: "nvarchar(20)", nullable: false),
                   phoneNumber = table.Column<string>(type: "nvarchar(9)", nullable: false),
                   email = table.Column<string>(type: "nvarchar(25)", nullable: false),
                   password = table.Column<string>(type: "nvarchar(20)", nullable: false)
               },
               constraints: table =>
               {
                   table.PrimaryKey("PK_Users", x => x.domainId);
               });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
