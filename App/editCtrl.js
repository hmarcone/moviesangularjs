(function(app) {
	var editCtrl = function($scope, movieService) {
		$scope.isEdit = function() {
			return $scope.edit && $scope.edit.movie;
		};

		$scope.cancel = function() {
			$scope.edit.movie = null;
		};
		var upDateMovie;
		var createMovie;

		$scope.save = function() {
			if ($scope.edit.movie.Id) {
				upDateMovie();
			} else {
				createMovie();
			}
		};

		upDateMovie = function() {
			movieService.update($scope.edit.movie)
				.success(function() {
					angular.extend($scope.movie, $scope.edit.movie);
					$scope.edit.movie = null;
				});
		};
		createMovie = function () {
			movieService.create($scope.edit.movie)
				.success(function (movie) {
					$scope.movies.push(movie);
					$scope.edit.movie = null;
				});
		};
	};

	app.controller("editCtrl", editCtrl);
}(angular.module("movie")))