export default
class PersonController{
/* @ngInject */
constructor (PersonService,$stateParams,$window ){
var ctrl = this
PersonService.getPersonData($stateParams.id).then(function(result){
	ctrl.person = result.data
})

this.submit= function(){
	PersonService.patchPersonData(this.person).then(function(){$window.location.href='#/people'})
}


}}
