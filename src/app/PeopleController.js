export default ['PeopleService',
class PeopleController{
	/* @ngInject */
	constructor (peopleService){
		var ctrl = this
		PeopleService.getAllPeople().then(function(result){
		ctrl.people=result.data
	})}
}]
