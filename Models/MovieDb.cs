using System.Data.Entity;

namespace Filmoteca.Models
{
	public class MovieDb : DbContext
	{
		public DbSet<Movie> Movies { get; set; }
	} 
}