namespace ManageEventsSami.Application;

public sealed record ListEventHandler : IHandler<ListEventRequest, IEnumerable<EventModel>>
{
    private readonly IEventRepository _eventRepository;
    private readonly IMapper _mapper;

    public ListEventHandler(IEventRepository eventRepository, IMapper mapper)
    {
        _eventRepository = eventRepository;
        _mapper = mapper;
    }

    public async Task<Result<IEnumerable<EventModel>>> HandleAsync(ListEventRequest request)
    {
        var events = await _eventRepository.ListModelAsync();

        return Result<IEnumerable<EventModel>>.Success(_mapper.Map<IEnumerable<EventModel>>(events));
    }
}
