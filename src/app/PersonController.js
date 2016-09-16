export default ['PersonService', '$stateParams','$location',
class PersonController{
/* @ngInject */
constructor (personService,stateParams,location ){
var ctrl = this
PersonService.getPersonData(stateParams.id).then(function(result){
	ctrl.person = result.data
})
this.submit= function(){
	console.dir()
	PersonService.patchPersonData(this.person).then(function(){location.path('#/peoples')})
}


}}]
