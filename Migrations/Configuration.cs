using Filmoteca.Models;

namespace Filmoteca.Migrations
{
	using System.Data.Entity.Migrations;

	internal sealed class Configuration : DbMigrationsConfiguration<MovieDb>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(MovieDb context)
        {
			//  This method will be called after migrating to the latest version.

			//  You can use the DbSet<T>.AddOrUpdate() helper extension method 
			//  to avoid creating duplicate seed data. E.g.
			//
			context.Movies.AddOrUpdate(
				p => p.Title,
				new Movie { Title = "Star Wars",  LaunchYear = 2016, Duration = 170 },
				new Movie { Title = "Casino Royale ", LaunchYear = 2006, Duration = 121 },
				new Movie { Title = "Riddick", LaunchYear = 2004, Duration = 130 },
				new Movie { Title = "Identidade Bourne", LaunchYear = 2002, Duration = 110 },
				new Movie { Title = "A Ilha", LaunchYear = 2005, Duration = 135 }
			);

		}
	}
}
