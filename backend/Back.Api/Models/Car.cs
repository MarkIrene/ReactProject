namespace Back.Api.Models;

public class Car
{
    public int Id { get; set; }

    public string Brand { get; set; } = string.Empty;

    public string Model { get; set; } = string.Empty;

    public int Year { get; set; }

    public int Mileage { get; set; }

    public int EngineCc { get; set; }

    public int Horsepower { get; set; }

    public string Color { get; set; } = string.Empty;

    public decimal Price { get; set; }

    public string FuelType { get; set; } = string.Empty;

    public string Transmission { get; set; } = string.Empty;

    public bool IsUsed { get; set; }

    public string? Description { get; set; }

    public string? ImageUrl { get; set; }
}