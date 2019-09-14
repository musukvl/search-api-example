namespace SearchSample.Searching.Model
{
    public class SearchOperationDescriptor
    {
        public string Id { get; set; }
        public string Query { get; set; }
        public SearchStatus SearchStatus { get; set; }

        public string SearchResult { get; set; }
        public string Error { get; set; }
    }
}