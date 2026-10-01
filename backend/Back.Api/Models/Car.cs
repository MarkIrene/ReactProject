namespace Back.Api.Models;

public class Car
{
    public int Id { get; set; }

    public string Brand { get; set; } = string.Empty;

    public string Model { get; set; } = string.Empty;

    public int Year { get; set; }

    public decimal Price { get; set; }

    public int Mileage { get; set; }
    
    public string Color { get; set; } = string.Empty;

    public string? FuelType { get; set; }

    public string? Transmission { get; set; }

    public string? ImageUrl { get; set; }

    public string? Description { get; set; }

    public bool IsAvailable { get; set; } = true;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}