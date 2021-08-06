namespace DotNetDemo.Business.ViewModels
{
    using System.Collections.Generic;
    
    public class PersonTools
    {
        public IEnumerable<KeyValuePair<string, int>> PetTypes { get; set; }
    }
}