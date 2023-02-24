namespace ManageEventsSami.Application;

public sealed class GetEventRequestValidator : AbstractValidator<GetEventRequest>
{
    public GetEventRequestValidator() => RuleFor(request => request.Id).Id();
}
