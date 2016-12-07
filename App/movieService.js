(function(app) {
	var movieService = function($http, movieApiUrl) {
		var getMovies = function() {
			return $http.get(movieApiUrl);
		};

		var getMovieById = function(id) {
			return $http.get(movieApiUrl + id);
		};

		var update = function(movie) {
			return $http.put(movieApiUrl + movie.Id, movie);
		}

		var create = function(movie) {
			return $http.post(movieApiUrl, movie);
		};

		var remove = function(movie) {
			return $http.delete(movieApiUrl + movie.Id);
		};

		return {
			getMovies: getMovies,
			getMovieById: getMovieById,
			update: update,
			create: create,
			remove: remove
		};
	};
	app.factory("movieService", movieService);
}(angular.module("movie")))