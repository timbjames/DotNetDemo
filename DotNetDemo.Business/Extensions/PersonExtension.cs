namespace DotNetDemo.Business.Extensions
{
    public static class PersonExtension
    {
        public static Data.Person ToDataModel(this ViewModels.Person person) {
            return new Data.Person {
                Id = person.Id,
                Name = person.Name
            };
        }

        public static ViewModels.Person ToViewModel(this Data.Person person) {

            return new ViewModels.Person {
                Id = person.Id,
                Name = person.Name,
                PetName = person.Pet?.Name,
                PetType = person.Pet?.PetType?.Description
            };
        }
    }
}