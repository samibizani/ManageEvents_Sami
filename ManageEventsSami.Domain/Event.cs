namespace ManageEventsSami.Domain;

public sealed class Event : Entity
{
    public Event(long id, string name) : this(name) => Id = id;

    public Event(string name) => Name = name;

    public string Name { get; }
    public string Description { get; init; }
    public DateTime StartDate { get; init; }
    public DateTime EndDate { get; init; }
    public string Location { get; init; }
}
