using Microsoft.AspNetCore.Mvc;

namespace SimpleStore.Web.Controllers
{
    public class HomeController : Controller
    {
        // GET
        public IActionResult Index()
        {
            return View();
        }
    }
}