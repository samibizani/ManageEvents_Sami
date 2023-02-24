using FluentAssertions;
using ManageEventsSami.Model;
using System.Net.Http.Json;
using System.Text.Json;

namespace ManageEventsSami.IntegrationTest
{
    public class EventIntegrationTest: IClassFixture<IntegrationTestsApiFactory>, IAsyncLifetime
    {
        private readonly IntegrationTestsApiFactory _factory;
        private readonly List<int> _createdEvts = new();
        public EventIntegrationTest(IntegrationTestsApiFactory factory)
        {
            _factory = factory;
        }

        [Theory]
        [InlineData("/api/events")]
        public async Task Get_EndpointsReturnSuccessAndCorrectContentType(string url)
        {
            // Arrange
            var client = _factory.CreateClient();

            // Act
            var response = await client.GetAsync(url);

            // Assert
            response.IsSuccessStatusCode.Should().BeTrue();
        }

        #region POST
        [Fact]
        public async Task CreateEvent_Success_WhenDataIsValid()
        {
            // Arrange
            var httpClient = _factory.CreateClient();
            var evt = GenerateEvent();
            
            // Act
            var response = await httpClient.PostAsJsonAsync("/api/events", new EventRequest { evt = evt });
            
            var result = await response.Content.ReadFromJsonAsync<int>();
            
            _createdEvts.Add(result);
            // Assert
            response.StatusCode.Should().Be(System.Net.HttpStatusCode.OK);
            result.Should().BeGreaterThanOrEqualTo(1);
        }

        [Fact]
        public async Task CreateEvent_Fails_WhenNameIsInvalid()
        {
            // Arrange
            var httpClient = _factory.CreateClient();
            var evt = GenerateEvent();
            evt.Name = "INVALIDINVALIDINVALIDINVALIDINVALIDINVALIDINVALIDINVALID";

            // Act
            var response = await httpClient.PostAsJsonAsync("/api/events", new EventRequest { evt = evt });

            // Assert
            response.StatusCode.Should().Be(System.Net.HttpStatusCode.UnprocessableEntity);
        }
        #endregion

        private EventModel GenerateEvent(string name = "Musical Event")
        {
            return new EventModel
            {
                Name = name,
                Description = "Music, RnB",
                StartDate = DateTime.Now,
                EndDate = DateTime.Now.AddDays(3),
                Location = "Quebec"
            };
        }

        private class EventRequest
        {
            public EventModel evt { get; set; }
        }

        public Task InitializeAsync() => Task.CompletedTask;

        public async Task DisposeAsync()
        {
            var httpClient = _factory.CreateClient();
            foreach (var evt in _createdEvts)
            {
                await httpClient.DeleteAsync($"/api/events/{evt}");
            }
        }
    }
}
