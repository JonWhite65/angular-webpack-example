export default ['$http',
class PersonService{
	/* @ngInject */
	constructor($http){
		this.getPersonData = function(id) { return $http.get('/people/' + id) }
		this.patchPersonData=function(person){return $http.patch('/people/'+person.id,person)}
	}


}]
