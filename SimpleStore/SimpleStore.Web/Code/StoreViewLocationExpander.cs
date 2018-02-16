using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc.Razor;

namespace SimpleStore.Web.Code
{
    public class StoreViewLocationExpander : IViewLocationExpander
    {
        private readonly string _site;

        public StoreViewLocationExpander(string site)
        {
            _site = site;
        }

        public void PopulateValues(ViewLocationExpanderContext context)
        {

        }

        public IEnumerable<string> ExpandViewLocations(ViewLocationExpanderContext context, IEnumerable<string> viewLocations)
        {
            var locations = new List<string>();

            locations.Add($"/Sites/{_site}/Views/{{1}}/{{0}}.cshtml");
            locations.Add($"/Sites/{_site}/Views/Shared/{{0}}.cshtml");
            locations.AddRange(viewLocations);

            return locations;
        }
    }
}