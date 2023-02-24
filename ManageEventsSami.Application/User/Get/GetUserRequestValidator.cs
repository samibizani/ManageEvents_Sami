namespace ManageEventsSami.Application;

public sealed class GetUserRequestValidator : AbstractValidator<GetUserRequest>
{
    public GetUserRequestValidator() => RuleFor(request => request.Id).Id();
}
