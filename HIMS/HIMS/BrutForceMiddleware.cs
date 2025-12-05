using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace HIMS
{
    // You may need to install the Microsoft.AspNetCore.Http.Abstractions package into your project
    public class BrutForceMiddleware
    {
        private readonly RequestDelegate _next;

        public BrutForceMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public Task Invoke(HttpContext httpContext)
        {
            //check 10 sec
            return _next(httpContext);
        }
    }

    // Extension method used to add the middleware to the HTTP request pipeline.
    public static class BrutForceMiddlewareExtensions
    {
        public static IApplicationBuilder UseBrutForceMiddleware(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<BrutForceMiddleware>();
        }
    }
}
