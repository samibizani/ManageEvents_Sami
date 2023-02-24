namespace ManageEventsSami.Application.Mapper;

    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Event, EventModel>().ReverseMap();
        }
    }
