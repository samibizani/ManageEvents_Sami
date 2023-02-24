namespace ManageEventsSami.Model;

public sealed record EventModel
{
    public long Id { get; init; }

    public string Name { get; set; }

    public string Description { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public string Location { get; set; }
}
