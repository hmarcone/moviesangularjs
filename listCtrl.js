(function (app) {
	var listCtrl = function ($scope, movieService) {
		movieService
			.getMovies()
			.success(function(data) {
				$scope.movies = data;
			});

		var removeMovieById;

		$scope.create = function () {
			$scope.edit = {
				movie: {
					Title: "",
					Duration: 0,
					LaunchYear: new Date().getFullYear()
				}
			};
		};

		$scope.remove = function (movie) {
			movieService.remove(movie)
				.success(function () {
					removeMovieById(movie.Id);
				});
		};

		removeMovieById = function (id) {
			for (var i = 0; i < $scope.movies.length; i++) {
				if ($scope.movies[i].Id === id) {
					$scope.movies.splice(i, 1);
					break;
				}
			}
		};
	};

	app.controller("listCtrl", listCtrl);

}(angular.module("movie")));