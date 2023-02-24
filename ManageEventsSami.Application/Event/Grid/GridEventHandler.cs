namespace ManageEventsSami.Application;

public sealed record GridEventHandler : IHandler<GridEventRequest, Grid<EventModel>>
{
    private readonly IEventRepository _eventRepository;

    public GridEventHandler(IEventRepository eventRepository) => _eventRepository = eventRepository;

    public async Task<Result<Grid<EventModel>>> HandleAsync(GridEventRequest request)
    {
        var grid = await _eventRepository.GridAsync(request);

        return Result<Grid<EventModel>>.Success(grid);
    }
}
