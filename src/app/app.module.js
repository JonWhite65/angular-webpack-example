import 'angular-material/angular-material.css'
import './home.css'
import home from './home.html'
import GlobalController from './GlobalController.js'
import HomeController from './HomeController.js'
import PersonController from './PersonController.js'
import NewPersonController from './NewPersonController.js'
import PersonService from './PersonService.js'
import PeopleService from './PeopleService.js'
import HomeService from './HomeService.js'
import globalTweet from './globalTweet.html'
import person from './individual.component.html'
import uirouter from 'angular-ui-router'
import material from 'angular-material'
import bcrypt from 'bcryptjs'

export default
angular.module('App', [uirouter, material])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/")
    $stateProvider
      .state('rettiwt',{
        url:'/',
        templateUrl: home,
        controller:HomeController,
        controllerAs:'hC',
        data:{}
      })
      .state('Feed',{
        url:'/RettiwtFeed',
        templateUrl:home,
        controller:GlobalController,
        controllerAs:'hC',
        data:{}
      })
      .state('Homepage',{
        url:'/User/:id',
        templateUrl:person,
        controllerAs:'pC1',
        controller:PersonController,
        data:{}
      })
      .state('UserProfile',{
        url:'/UserProfile/:id',
        templateUrl:person,
        controller:NewPersonController,
        controllerAs:'pC1',
        data:{}
      })
  })
  .service('PersonService', PersonService)
  .service('PeopleService', PeopleService)
  .service('HomeService', HomeService).name
