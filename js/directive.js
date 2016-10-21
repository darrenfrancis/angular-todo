angular.module('NavDirective',[]).directive('navBar', function() {
	return {
		restrict: 'A',
		templateUrl: 'templates/directives/nav-bar.html'
	}
})

angular.module('TodoDirective',[]).directive('todoTable', function() {
	return {
		restrict: 'A', // A -> attribute
		templateUrl: 'templates/directives/todo-table.html'
	};
})

