namespace ManageEventsSami.Database;

public sealed class EventRepository : EFRepository<Event>, IEventRepository
{
    public EventRepository(Context context) : base(context) { }

    public static Expression<Func<Event, EventModel>> Model => evt => new EventModel { Id = evt.Id, Name = evt.Name };

    public Task<EventModel> GetModelAsync(long id) => Queryable.Where(evt => evt.Id == id).Select(Model).SingleOrDefaultAsync();

    public Task<Grid<EventModel>> GridAsync(GridParameters parameters) => Queryable.Select(Model).GridAsync(parameters);

    public async Task<IEnumerable<Event>> ListModelAsync() => await Queryable.ToListAsync();
}
