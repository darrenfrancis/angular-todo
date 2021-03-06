angular.module('TodoApp', ['ngRoute', 'RouteController', 'UserService', 'angular-storage', 'TodoService','TodoDirective', 'NavDirective',]);

angular.module('TodoApp').config(function($routeProvider) {

	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	})

	.when('/accounts/register', {
		templateUrl: 'templates/register.html',
		controller: 'RegisterController'
	})

	.when('/login', {
		templateUrl: 'templates/login.html',
		controller: 'LoginController'
	})

	.when('/todo', {
		templateUrl: 'templates/todo.html',
		controller: 'TodoController'
	})

	.when('/todo/edit/:id', {
		templateUrl:'templates/edit-todo.html',
		controller: 'EditTodoController'
	})

	.when('/logout', {
		templateUrl: 'templates/logout.html',
		controller: 'LogoutController'
	})


});