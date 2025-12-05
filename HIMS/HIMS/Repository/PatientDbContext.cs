using HIMS.Models;
using Microsoft.EntityFrameworkCore;

namespace HIMS.Repository
{
    public class PatientDbContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=localhost\\SQLEXPRESS;Initial Catalog=PatientDbKMC;Integrated Security=True;Trust Server Certificate=True");
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Patient>().ToTable("tblPatients");
            modelBuilder.Entity<Address>().ToTable("tblAddress");

            modelBuilder.Entity<Patient>()
         .HasMany(p => p.Addresses)
         .WithOne(a => a.Patient)
         .HasForeignKey(a => a.PatientId)
         .OnDelete(DeleteBehavior.Cascade);
        }
        public DbSet<Patient> patients {  get; set; }
        public DbSet<Address> Addresses { get; set; }

    }
}
