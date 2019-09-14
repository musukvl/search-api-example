using System;
using System.Threading.Tasks;
using SearchSample.Searching.Model;
using SearchSample.Searching.Storage;

namespace SearchSample.Searching.Search
{
    public class SearchService
    {
        private readonly SearchStorage _searchStorage;

        public SearchService(SearchStorage searchStorage)
        {
            _searchStorage = searchStorage;
        }

        public async Task<string> QueueSearch(string query)
        {
            var searchDescriptor = new SearchOperationDescriptor()
            {
                Id = Guid.NewGuid().ToString("N"),
                Query = query,
                SearchStatus = SearchStatus.Queued
            };

            await _searchStorage.Update(searchDescriptor.Id, searchDescriptor);
            return searchDescriptor.Id;
        }

        public async Task Cancel(string id)
        {
            var searchOperationDescriptor = await _searchStorage.Find(id);
            if (searchOperationDescriptor == null)
            {
                return;
            }

            searchOperationDescriptor.SearchStatus = SearchStatus.Canceled;
            await _searchStorage.Update(searchOperationDescriptor.Id, searchOperationDescriptor);
        }

        private static readonly Random SearchRandom = new Random();
        public async Task<SearchResult> DoSearch(string id)
        {
            var searchOperationDescriptor = await _searchStorage.Find(id);
            if (searchOperationDescriptor == null)
            {
                return new SearchResult(){Error = "Search not found"};
            }

            searchOperationDescriptor.SearchStatus = SearchStatus.InProgress;
            await _searchStorage.Update(searchOperationDescriptor.Id, searchOperationDescriptor);
            var delay = SearchRandom.Next(1, 8);
            // Do fake searching
            await Task.Delay(delay);

            searchOperationDescriptor = await _searchStorage.Find(id);
            if (searchOperationDescriptor.SearchStatus == SearchStatus.Canceled)
            {
                return new SearchResult()
                {
                    SearchId = id,
                    IsCanceled = true
                };
            }

            var searchResult = Guid.NewGuid().ToString("D");
            searchOperationDescriptor.SearchStatus = SearchStatus.Completed;
            searchOperationDescriptor.SearchResult = searchResult;
            await _searchStorage.Update(searchOperationDescriptor.Id, searchOperationDescriptor);

            return new SearchResult()
            {
                SearchId = id,
                Data = searchResult
            };
        }
    }
}
