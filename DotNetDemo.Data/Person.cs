using System;

namespace DotNetDemo.Data
{
    public class Person
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public Pet Pet { get; set; }

        public bool IsActive { get; set; }
    }
}
