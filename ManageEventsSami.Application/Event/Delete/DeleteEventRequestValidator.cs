namespace ManageEventsSami.Application;

public sealed class DeleteEventRequestValidator : AbstractValidator<DeleteEventRequest>
{
    public DeleteEventRequestValidator() => RuleFor(request => request.Id).Id();
}
