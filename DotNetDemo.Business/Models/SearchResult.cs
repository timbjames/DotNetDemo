namespace DotNetDemo.Business.Models
{
    using System.Collections.Generic;

    public class SearchResult<R, F>
    {
        public IEnumerable<R> Results { get; set; }

        public int PageSize { get; set; }

        public int CurrentPage { get; set; }

        public F Filter { get; set; }
    }
}