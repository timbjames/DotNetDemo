namespace DotNetDemo.Business.Interfaces
{
    using System.Collections.Generic;
    using Models;
    using Filters;

    public interface IPersonService
    {
         public ViewModels.Person GetPerson(int id);

         public IEnumerable<ViewModels.Person> GetPeople();

         public SearchResult<ViewModels.Person, PersonFilter> Search(PersonFilter filter);

         public ViewModels.PersonTools GetTools();

         public Upsert<ViewModels.Person, ViewModels.PersonTools> GetTemplate();

         public void Upsert(ViewModels.Person person);
    }
}