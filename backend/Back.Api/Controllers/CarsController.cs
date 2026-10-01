using Back.Api.Data;
using Back.Api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc; //Μας δίνει πρόσβαση σε πράγματα όπως ControllerBase, [ApiController], [Route], [HttpGet]

namespace Back.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CarsController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public CarsController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Car>>> GetCars()
    {
        //Φέρε όλες τις εγγραφές και κάν' τες List<Car> απτο DB
        // Το EF(ENTITIY FRAMEWORK) θα εκτελέσει SQL αντίστοιχο περίπου με:
        // SELECT * FROM "Cars";
        var cars = await _context.Cars.ToListAsync();

        return Ok(cars);
    }

    /* ΣΧΟΛΙΑ:

    Task<...> σημαίνει:
    «Αυτή η method θα ολοκληρωθεί στο μέλλον και τότε θα επιστρέψει αυτό που βρίσκεται μέσα στα < >.»

    Το:
    ActionResult

    μας επιτρέπει να επιστρέφουμε HTTP responses όπως:
    200 OK
    404 Not Found
    400 Bad Request +και μαζί δεδομένα.

    IEnumerable<Car>

    σημαίνει ουσιαστικά:
    «Μία συλλογή από Car objects.»


    */
}