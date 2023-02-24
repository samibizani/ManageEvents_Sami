namespace ManageEventsSami.Database;

public sealed class EventConfiguration : IEntityTypeConfiguration<Event>
{
    public void Configure(EntityTypeBuilder<Event> builder)
    {
        builder.ToTable(nameof(Event), nameof(Event));

        builder.HasKey(entity => entity.Id);

        builder.Property(entity => entity.Id).ValueGeneratedOnAdd().IsRequired();

        builder.Property(entity => entity.Name).HasMaxLength(250).IsRequired();
    }
}
