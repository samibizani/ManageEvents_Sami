namespace ManageEventsSami.Application;

public sealed class UpdateEventRequestValidator : AbstractValidator<UpdateEventRequest>
{
    public UpdateEventRequestValidator()
    {
        RuleFor(request => request.Id).Id();
        RuleFor(request => request.Name).Name();
    }
}
