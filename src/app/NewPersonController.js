export default
class PersonController{
/* @ngInject */
constructor (PersonService,$window ){
this.person

this.submit= function(){
	PersonService.newPersonData(this.person).then(function(){$window.location.href='#/people'})
}


}}
