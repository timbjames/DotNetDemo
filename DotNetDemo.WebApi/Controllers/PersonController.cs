namespace DotNetDemo.WebApi.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Logging;
    using DotNetDemo.Business.Interfaces;
    using DotNetDemo.Business.Filters;
    using DotNetDemo.Business.Models;
    using DotNetDemo.Business.ViewModels;
    using System.Collections.Generic;

    [ApiController]
    [Route("[controller]")]
    public class PersonController : ControllerBase
    {
        private readonly ILogger<PersonController> _logger;
        private readonly IPersonService _personService;

        public PersonController(ILogger<PersonController> logger, IPersonService personService)
        {
            _logger = logger;
            _personService = personService;
        }

        [HttpGet]
        public IEnumerable<Person> Get(){
            return _personService.GetPeople();
        }

        [HttpGet, Route("{id:int}")]
        public Person Get(int id)
        {
            return _personService.GetPerson(id);
        }

        [HttpGet, Route("Search")]
        public SearchResult<Person, PersonFilter> Search([FromQuery]PersonFilter filter) {
            return _personService.Search(filter);
        }

        [HttpGet, Route("Tools")]
        public PersonTools Tools(){
            return _personService.GetTools();
        }

        [HttpGet, Route("Template")]
        public Upsert<Person, PersonTools> Template(){
            return _personService.GetTemplate();
        }
    }
}
