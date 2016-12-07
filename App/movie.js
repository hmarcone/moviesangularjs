(function() {

	var app = angular.module("movie", ["ngRoute"]);

	var config = function ($routeProvider) {
		$routeProvider
			.when("/",
				{ templateUrl: "/client/html/list.html", controller: "listCtrl" })
			.when("/details/:id",
				{ templateUrl: "/client/html/details.html", controller: "detailsCtrl" })
			.otherwise(
				{ redirecTo: "/" });
	};
	app.config(config);

	//Inclusão
	app.constant("movieApiUrl", "/api/movie/");
}());