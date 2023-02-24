using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);

builder.Host.UseSerilog();

builder.Services.AddResponseCompression();
builder.Services.AddJsonStringLocalizer();
builder.Services.AddHashService();
builder.Services.AddJwtService();
builder.Services.AddAuthorization().AddAuthentication().AddJwtBearer();
builder.Services.AddContext<Context>(options => options.UseSqlServer(builder.Configuration.GetConnectionString(nameof(Context))));
builder.Services.AddClassesMatchingInterfaces(nameof(ManageEventsSami));
builder.Services.AddMediator(nameof(ManageEventsSami));
builder.Services.AddSwaggerGen();
builder.Services.AddCore();
builder.Services.AddControllers()
    .AddJsonOptions().AddAuthorizationPolicy();

var application = builder.Build();

application.UseException();
application.UseHttps();
application.UseLocalization("en", "pt");
application.UseResponseCompression();
application.UseStaticFiles();
application.UseSwagger().UseSwaggerUI();
application.UseRouting();
application.MapControllers();
if (application.Environment.IsDevelopment())
    application.MapControllers().AllowAnonymous();

application.MapFallbackToFile("index.html");

application.Run();

public partial class Program { }
