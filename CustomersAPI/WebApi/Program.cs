using Contracts.ICustomerService;
using Dal;
using Dal.services;
using Services.CustomerService;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSingleton<IDALService, DALService>();
builder.Services.AddScoped<ICustomerService, CustomerService>();
builder.Services.AddLogging(config =>
{
    config.AddDebug();
    config.AddConsole();
    //etc
});
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
