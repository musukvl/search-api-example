using SearchSample.Searching.Model;

namespace SearchSample.Web.Model
{
    public class GetSearchStatusResponse
    {
        public string SearchId { get; set; }
        public SearchStatus Status { get; set; }
    }
}