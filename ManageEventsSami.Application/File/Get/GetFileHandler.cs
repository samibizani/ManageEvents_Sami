namespace ManageEventsSami.Application;

public sealed record GetFileHandler : IHandler<GetFileRequest, BinaryFile>
{
    public async Task<Result<BinaryFile>> HandleAsync(GetFileRequest request)
    {
        var file = await BinaryFile.ReadAsync("Files", request.Id);

        return Result<BinaryFile>.Success(file);
    }
}
