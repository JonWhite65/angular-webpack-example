export default
class HomeService{
	/* @ngInject */
	constructor($http){
		this.id=""
		this.username
		this.sendLogin=function(username,password){
			let user={"username":username,
			"password":password}
			return $http.put('http://localhost:8080/user/',user)}


		this.saveId=function(id,username){
			this.id=id
			this.username=username
		}
		this.newUser=function(username,password){
			let user={"username":username,
			"password":password}
			return $http.post('http://localhost:8080/user/',user)}
		}
	}
