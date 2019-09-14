using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SearchSample.Searching;
using SearchSample.Searching.Model;
using SearchSample.Web.Model;

namespace SearchSample.Web.Controllers
{
    [Route("api/search")]
    [ApiController]
    public class SearchController : ControllerBase
    {
        private readonly SearchQueueService _searchQueueService;

        public SearchController(SearchQueueService searchQueueService)
        {
            _searchQueueService = searchQueueService;
        }
      
        [HttpPost]
        [Route("start")]
        public async Task<ActionResult<StartSearchResponse>> StartSearch([FromBody] StartSearchRequest request)
        {
            var searchId = await _searchQueueService.StartSearch(request.Queue);
            return new StartSearchResponse()
            {
                SearchId = searchId
            };
        }

        [HttpPost]
        [Route("get-status")]
        public async Task<ActionResult<GetSearchStatusResponse>> GetSearchStatus([FromBody] GetSearchStatusRequest request)
        {
            var status = await _searchQueueService.GetSearchStatus(request.SearchId);
            return new GetSearchStatusResponse()
            {
                SearchId = request.SearchId,
                Status = status
            };
        }

        [HttpPost]
        [Route("get-result")]
        public async Task<ActionResult<SearchResult>> GetSearchResult([FromBody] GetSearchResultRequest request)
        {
            var result = await _searchQueueService.GetSearchResult(request.SearchId);
            return result;
        }

        [HttpPost]
        [Route("cancel")]
        public async Task<ActionResult> Cancel([FromBody] CancelSearchRequest request)
        {
            await _searchQueueService.CancelSearch(request.SearchId);
            return Ok();
        }
    }
}
