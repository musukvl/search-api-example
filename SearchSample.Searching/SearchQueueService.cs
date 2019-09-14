using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MassTransit;
using SearchSample.Searching.Consumers;
using SearchSample.Searching.Model;
using SearchSample.Searching.Search;
using SearchSample.Searching.Storage;

namespace SearchSample.Searching
{
    public class SearchQueueService
    {
        private readonly SearchService _searchService;
        private readonly IBusControl _busControl;
        private readonly SearchStorage _searchStorage;

        public SearchQueueService(SearchService searchService, IBusControl busControl, SearchStorage searchStorage)
        {
            _searchService = searchService;
            _busControl = busControl;
            _searchStorage = searchStorage;
        }


        public async Task<string> StartSearch(string query)
        {
            var searchId = await _searchService.QueueSearch(query);
            await _busControl.Publish(new RunSearchMessage
            {
                Id = searchId
            });
            return searchId;
        }
        public async Task CancelSearch(string id)
        {
            await _searchService.Cancel(id);
        }

        public async Task<SearchStatus> GetSearchStatus(string id)
        {
            return await _searchStorage.GetStatus(id);
        }

        public async Task<SearchResult> GetSearchResult(string id)
        {
            var searchDescriptor = await _searchStorage.Find(id);
            return new SearchResult()
            {
                SearchId = searchDescriptor.Id,
                IsCanceled = searchDescriptor.SearchStatus == SearchStatus.Canceled,
                Error = searchDescriptor.Error,
                Data = searchDescriptor.SearchResult
            };
        }
    }
}
