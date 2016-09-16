import home from './home.html'
import PeopleControler from './PeopleController.js'
import PersonControler from './PersonController.js'
import PersonService from './PersonService.js'
import PeopleService from './PeopleService.js'
import people from './people.component.html'
import person from './individual.component.html'
import uirouter from 'angular-ui-router'

export default
angular.module('App', [uirouter])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/")
    $stateProvider
      .state('welcome',{
        url:'/',
        templateUrl: home
      })
      .state('people',{ 
        url:'/people',
        templateUrl:people,
        controller:PeopleControler,
        controllerAs:'pC',
        service:PeopleService,
        data:{}
      })
      .state('person',{
        url:'/people/:id',
        templateURl:person,
        controllerAs:'pC1',
        controller:PersonControler,
        service:PersonService,
        data:{}
      })
  }).name
