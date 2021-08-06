namespace DotNetDemo.Business.Models
{
    public class Upsert<V, T>
    {
        public V Model { get; set; }

        public T Tools { get; set; }
    }
}