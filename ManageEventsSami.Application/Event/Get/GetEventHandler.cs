namespace ManageEventsSami.Application;

public sealed record GetEventHandler : IHandler<GetEventRequest, EventModel>
{
    private readonly IEventRepository _eventRepository;

    public GetEventHandler(IEventRepository eventRepository) => _eventRepository = eventRepository;

    public async Task<Result<EventModel>> HandleAsync(GetEventRequest request)
    {
        var evt = await _eventRepository.GetModelAsync(request.Id);

        return Result<EventModel>.Success(evt);
    }
}
