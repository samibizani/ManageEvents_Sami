namespace ManageEventsSami.Database;

public interface IEventRepository : IRepository<Event>
{
    Task<EventModel> GetModelAsync(long id);

    Task<Grid<EventModel>> GridAsync(GridParameters parameters);

    Task<IEnumerable<Event>> ListModelAsync();
}
