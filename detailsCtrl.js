(function(app) {
	var detailsCtrl = function ($scope, $routeParams, movieService) {
		var id = $routeParams.id;

		movieService.getMovieById(id)
			.success(function(data) {
				$scope.movie = data;
			})
			.error(function(e) {
				console.log(e.message);
			});

		$scope.edit = function () {
			$scope.edit.movie = angular.copy($scope.movie);
		};
	};

	app.controller("detailsCtrl", detailsCtrl);

})(angular.module("movie"));