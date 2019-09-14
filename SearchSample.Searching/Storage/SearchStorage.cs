using System.Collections.Concurrent;
using System.Runtime.InteropServices.ComTypes;
using System.Threading.Tasks;
using SearchSample.Searching.Model;

namespace SearchSample.Searching.Storage
{
    public class SearchStorage
    {
        private static readonly ConcurrentDictionary<string, SearchOperationDescriptor> Storage = new ConcurrentDictionary<string, SearchOperationDescriptor>();
        public Task<SearchOperationDescriptor> Find(string id)
        {
            if (Storage.TryGetValue(id, out var searchOperationDescriptor))
            {
                return Task.FromResult(searchOperationDescriptor);
            }
            return Task.FromResult<SearchOperationDescriptor>(null);
        }

        public Task Update(string id, SearchOperationDescriptor searchOperationDescriptor)
        {
            Storage.AddOrUpdate(id, x => searchOperationDescriptor, (existingId, descriptor) => searchOperationDescriptor);
            return Task.CompletedTask;
        }

        public Task<SearchStatus> GetStatus(string id)
        {
            if (Storage.TryGetValue(id, out var searchOperationDescriptor))
            {
                return Task.FromResult(searchOperationDescriptor.SearchStatus);
            }
            return Task.FromResult(SearchStatus.Unknown);
        }
    }
}