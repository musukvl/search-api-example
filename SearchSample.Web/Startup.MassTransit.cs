using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MassTransit;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using SearchSample.Searching;
using SearchSample.Searching.Consumers;
using SearchSample.Searching.Search;
using SearchSample.Searching.Storage;
using SearchSample.Web.Infrastructure;

namespace SearchSample.Web
{
    public partial class Startup
    {
        private void ConfigureMassTransit(IServiceCollection services)
        {
            services.AddMassTransit(x =>
            {
                x.AddConsumer<RunSearchConsumer>();

                x.AddBus(provider => Bus.Factory.CreateUsingInMemory(cfg =>
                {
                    cfg.ReceiveEndpoint("web-service-endpoint", e =>
                    {
                        e.Consumer<RunSearchConsumer>(provider);
                    });
                    cfg.ConfigureEndpoints(provider);
                }));
                 
            });

            services.AddSingleton<IHostedService, BusHostedService>();
        } 
    }
}
