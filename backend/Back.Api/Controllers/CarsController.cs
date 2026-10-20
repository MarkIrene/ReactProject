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
    public async Task<ActionResult<IEnumerable<Car>>> GetCars(
        [FromQuery] bool? isUsed
    )
    {
        var query = _context.Cars.AsQueryable();

        if (isUsed.HasValue)
        {
            query = query.Where(car => car.IsUsed == isUsed.Value);
        }

        var cars = await query.ToListAsync();

        return Ok(cars);
    }

    [HttpGet("brands")]
    public async Task<ActionResult<IEnumerable<string>>> GetBrands()
    {
        var brands = await _context.Cars
            .Select(car => car.Brand)
            .Distinct()
            .OrderBy(brand => brand)
            .ToListAsync();

        return Ok(brands);
    }

    [HttpGet("colors")]
    public async Task<ActionResult<IEnumerable<string>>> GetColors()
    {
        var colors = await _context.Cars
            .Select(car => car.Color)
            .Distinct()
            .OrderBy(color => color)
            .ToListAsync();

        return Ok(colors);
    }

    [HttpGet("fuelType")]
    public async Task<ActionResult<IEnumerable<string>>> GetFuelTypes()
    {
        var fuelType = await _context.Cars
            .Select(car => car.FuelType)
            .Distinct()
            .OrderBy(fuelType => fuelType)
            .ToListAsync();

        return Ok(fuelType);
    }

    [HttpGet("transmission")]
    public async Task<ActionResult<IEnumerable<string>>> GetTransmission()
    {
        var transmission = await _context.Cars
            .Select(car => car.Transmission)
            .Distinct()
            .OrderBy(transmission => transmission)
            .ToListAsync();

        return Ok(transmission);
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