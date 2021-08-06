namespace DotNetDemo.Business.Services
{
    using ViewModels;
    using Interfaces;
    using System.Collections.Generic;
    using System.Linq;
    using Extensions;
    using Models;
    using Filters;

    public class PersonService : IPersonService
    {
        private Data.Person GetDataPerson(int id)
        {
            return null;
        }

        private IEnumerable<Data.Person> GetDataPeople() {
            return new List<Data.Person> {
                new Data.Person {
                    Id = 1,
                    IsActive = true,
                    Name = "Tim",
                    Pet = new Data.Pet {
                        Id = 1,
                        Name = "Oscar",
                        PetType = new Data.PetType {
                            Id = 1,
                            Description = "Cat"
                        }
                    },
                },
                new Data.Person {
                    Id = 2,
                    IsActive = true,
                    Name = "Tom",
                    Pet = new Data.Pet {
                        Id = 2,
                        Name = "Mittens",
                        PetType = new Data.PetType {
                            Id = 1,
                            Description = "Cat"
                        }
                    },
                },
                new Data.Person {
                    Id = 3,
                    IsActive = true,
                    Name = "Matt",
                    Pet = new Data.Pet {
                        Id = 3,
                        Name = "Amy",
                        PetType = new Data.PetType {
                            Id = 2,
                            Description = "Dog"
                        }
                    },
                }
            };
        }

        public IEnumerable<Person> GetPeople()
        {
            return GetDataPeople().Select(x => x.ToViewModel());
        }

        public Person GetPerson(int id)
        {
            var people = GetDataPeople();

            return people.FirstOrDefault(x => x.Id == id).ToViewModel();
        }

        public SearchResult<Person, PersonFilter> Search(PersonFilter filter)
        {
            return new SearchResult<Person, PersonFilter> {
                CurrentPage = 1,
                Filter = filter,
                PageSize = 99,
                Results = FilterResults(filter)
            };
        }

        private IEnumerable<Person> FilterResults(PersonFilter filter) {

            var people = GetDataPeople();
            var query = people.Where(x => x.IsActive);

            if (filter?.PetTypeId != null) {
                query = query.Where(x => x.Pet?.PetType?.Id == filter.PetTypeId);
            }

            return query.Select(x => x.ToViewModel());
        }

        public PersonTools GetTools()
        {
            return new PersonTools {
                PetTypes = new List<KeyValuePair<string, int>>{
                    new KeyValuePair<string, int>("Cat", 1),
                    new KeyValuePair<string, int>("Dog", 2)
                }
            };
        }

        public Upsert<Person, PersonTools> GetTemplate()
        {
            return new Upsert<Person, PersonTools>{
                Model = new ViewModels.Person(),
                Tools = GetTools()
            };
        }

        public void Upsert(Person person)
        {
            throw new System.NotImplementedException();
        }
    }
}