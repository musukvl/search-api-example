using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using SearchSample.Searching;
using SearchSample.Searching.Search;
using SearchSample.Searching.Storage;

namespace SearchSample.Web
{
    public partial class Startup
    {
        private void ConfigureAppServices(IServiceCollection services)
        {
            services.AddSingleton<SearchStorage>();
            services.AddSingleton<SearchService>();
            services.AddSingleton<SearchQueueService>();
        } 
    }
}
