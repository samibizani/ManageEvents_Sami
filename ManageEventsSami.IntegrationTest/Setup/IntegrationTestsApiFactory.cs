using FluentAssertions.Common;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;

namespace ManageEventsSami.IntegrationTest
{
    public class IntegrationTestsApiFactory : WebApplicationFactory<Program>
    {
        protected override void ConfigureWebHost(IWebHostBuilder builder)
        {
            builder.ConfigureServices(collection =>
            {
                //collection.RemoveAll(typeof(IDbConnectionFactory));
            });
        }
    }
}
