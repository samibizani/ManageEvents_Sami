using AutoMapper;

namespace ManageEventsSami.Application;

public sealed record AddEventHandler : IHandler<AddEventRequest, long>
{
    private readonly IEventRepository _eventRepository;
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;

    public AddEventHandler
    (
        IEventRepository eventRepository,
        IUnitOfWork unitOfWork,
        IMapper mapper
    )
    {
        _eventRepository = eventRepository;
        _unitOfWork = unitOfWork;
        _mapper = mapper;
    }

    public async Task<Result<long>> HandleAsync(AddEventRequest request)
    {
        var evt = _mapper.Map<Event>(request.evt);

        await _eventRepository.AddAsync(evt);

        await _unitOfWork.SaveChangesAsync();

        return Result<long>.Success(evt.Id);
    }
}
