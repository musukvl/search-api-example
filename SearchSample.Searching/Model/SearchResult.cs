namespace SearchSample.Searching.Model
{
    public class SearchResult
    {
        public string SearchId { get; set; }
        public string Data { get; set; }

        public bool IsCanceled { get; set; }
        public string Error { get; set; }
        public bool IsSuccess
        {
            get => string.IsNullOrWhiteSpace(Error);
        }
    }
}