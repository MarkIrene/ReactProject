using Back.Api.Models; //θέλουμε να μπορούμε να χρησιμοποιήσουμε classes που βρίσκονται στο namespace: Back.Api.Models
using Microsoft.EntityFrameworkCore;

namespace Back.Api.Data; // Αυτή η κλάση ανήκει στο namespace Back.Api.Data

public class ApplicationDbContext : DbContext /* Το DbContext είναι έτοιμη class του Entity Framework.
Μας δίνει όλη τη βασική λειτουργικότητα για να μιλάμε με βάση δεδομένων*/
{
    public ApplicationDbContext(
        DbContextOptions<ApplicationDbContext> options
    ) : base(options) // Καλεί τον constructor της parent/base class. 
    {
    }

    public DbSet<Car> Cars { get; set; } // Μια συλλογή από Car objects που το Entity Framework θα διαχειρίζεται μέσα στη database.
}