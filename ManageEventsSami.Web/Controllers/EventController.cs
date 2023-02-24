namespace ManageEventsSami.Web;

[ApiController]
[Route("api/events")]
[AllowAnonymous]
public sealed class EventController : BaseController
{
    [HttpPost]
    [AllowAnonymous]
    public IActionResult Add(AddEventRequest request) => Mediator.HandleAsync<AddEventRequest, long>(request).ApiResult();

    [HttpDelete("{id:long}")]
    public IActionResult Delete(long id) => Mediator.HandleAsync(new DeleteEventRequest(id)).ApiResult();

    [HttpGet("{id:long}")]
    [AllowAnonymous]
    public IActionResult Get(long id) => Mediator.HandleAsync<GetEventRequest, EventModel>(new GetEventRequest(id)).ApiResult();

    [HttpGet("grid")]
    [AllowAnonymous]
    public IActionResult Grid([FromQuery] GridEventRequest request) => Mediator.HandleAsync<GridEventRequest, Grid<EventModel>>(request).ApiResult();

    [HttpGet]
    public IActionResult List() => Mediator.HandleAsync<ListEventRequest, IEnumerable<EventModel>>(new ListEventRequest()).ApiResult();

    [HttpPut("{id:long}")]
    public IActionResult Update(UpdateEventRequest request) => Mediator.HandleAsync(request).ApiResult();
}
