
export default
class PeopleService{
	/* @ngInject */
	constructor ($http){
	this.getAllPeople = function() { return $http.get('http://localhost:8080/people') }

	}
}
