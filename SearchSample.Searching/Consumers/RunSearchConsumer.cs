using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MassTransit;
using SearchSample.Searching.Search;

namespace SearchSample.Searching.Consumers
{
    public class RunSearchMessage
    {
        public string Id { get; set; }
    }

    public class RunSearchConsumer : IConsumer<RunSearchMessage>
    {
        private readonly SearchService _searchService;

        public RunSearchConsumer(SearchService searchService)
        {
            _searchService = searchService;
        }

        public Task Consume(ConsumeContext<RunSearchMessage> context)
        {
            return _searchService.DoSearch(context.Message.Id);
        }
    }
}
