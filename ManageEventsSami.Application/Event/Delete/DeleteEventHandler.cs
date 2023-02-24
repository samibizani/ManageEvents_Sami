namespace ManageEventsSami.Application;

public sealed record DeleteEventHandler : IHandler<DeleteEventRequest>
{
    private readonly IEventRepository _eventRepository;
    private readonly IUnitOfWork _unitOfWork;

    public DeleteEventHandler
    (
        IEventRepository eventRepository,
        IUnitOfWork unitOfWork
    )
    {
        _eventRepository = eventRepository;
        _unitOfWork = unitOfWork;
    }

    public async Task<Result> HandleAsync(DeleteEventRequest request)
    {
        await _eventRepository.DeleteAsync(request.Id);

        await _unitOfWork.SaveChangesAsync();

        return Result.Success();
    }
}
