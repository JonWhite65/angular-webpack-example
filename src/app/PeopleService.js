export default ['$http',
class PeopleService{
	/* @ngInject */
	constructor ($https){
	this.getAllPeople = function() { return $http.get('/people') }

	}
}]
