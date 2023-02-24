namespace ManageEventsSami.Application;

public sealed record UpdateEventHandler : IHandler<UpdateEventRequest>
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IEventRepository _eventRepository;

    public UpdateEventHandler
    (
        IUnitOfWork unitOfWork,
        IEventRepository eventRepository
    )
    {
        _unitOfWork = unitOfWork;
        _eventRepository = eventRepository;
    }

    public async Task<Result> HandleAsync(UpdateEventRequest request)
    {
        var evt = new Event(request.Id, request.Name);

        await _eventRepository.UpdateAsync(evt);

        await _unitOfWork.SaveChangesAsync();

        return Result.Success();
    }
}
