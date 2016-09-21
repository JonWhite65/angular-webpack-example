export default
class PersonService{
	/* @ngInject */
	constructor($http){
		this.getPersonData = function(id) { return $http.get('http://localhost:8080/people/' + id) }
		this.patchPersonData=function(person){
			return $http.patch('http://localhost:8080/people/'+person.id,person)}
		this.newPersonData= function(person){
			return $http.post('http://localhost:8080/people/',person)}
		}
	}
