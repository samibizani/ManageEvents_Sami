namespace ManageEventsSami.Application;

public sealed class GridEventRequestValidator : AbstractValidator<GridEventRequest>
{
    public GridEventRequestValidator() => RuleFor(request => request).Grid();
}
