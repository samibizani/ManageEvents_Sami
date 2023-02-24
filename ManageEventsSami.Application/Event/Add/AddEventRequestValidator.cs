namespace ManageEventsSami.Application;

public sealed class AddEventRequestValidator : AbstractValidator<AddEventRequest>
{
    public AddEventRequestValidator() => RuleFor(request => request.evt.Name).Name();
}
