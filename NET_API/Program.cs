global using WarehouseAPI.Data;
global using Microsoft.EntityFrameworkCore;
using WarehouseAPI.Infrastructure.Deliveries;
using WarehouseAPI.Infrastructure.Warehouses;
using WarehouseAPI.Infrastructure.Users;
using Microsoft.AspNetCore.Authentication.AzureAD.UI;
using Microsoft.AspNetCore.Authentication;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<DataContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IDeliveryService, DeliveryService>();
builder.Services.AddScoped<IWarehouseService, WarehouseService>();
builder.Services.AddScoped<IUserService, UserService>();

//builder.Services.AddAuthentication(AzureADDefaults.BearerAuthenticationScheme)
  //.AddAzureADBearer(options => Configuration.Bind("AzureActiveDirectory", options));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(policy => policy
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowAnyOrigin()
            );

app.UseAuthorization();

app.UseAuthentication();

app.MapControllers();

app.Run();
