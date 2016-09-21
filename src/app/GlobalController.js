
export default
class GlobalController{
	/* @ngInject */
	constructor (HomeService,$window,$scope){
		let originatorEv

    $scope.user={"username":"","password":"","id":""}
		this.toggleLogin=function($mdOpenMenu,ev){
		originatorEv = ev;
		$mdOpenMenu(ev);
	}
	$scope.Feed=true
		if(HomeService.id!==""){
			$scope.user.username=HomeService.username
			$scope.user.id=HomeService.id
		$scope.ButtonGuest="HomePage"
		$scope.ButtonLogin=HomeService.username
		$scope.MenuMessage=""
		$scope.LoginFields=false


	}
	else{
		var bcrypt = require('bcryptjs')
		this.hash
		$scope.GuestHide=false
		$scope.ButtonLogin="Login/New User"
		$scope.MenuMessage="Please Login!"
		$scope.LoginFields=true

		this.newUser= function(){
      var salt = bcrypt.genSaltSync(10);
      this.hash = bcrypt.hashSync($scope.user.password, salt);
      HomeService.newUser($scope.user.username,this.hash).then((result)=>{
        (result.data!==0&&bcrypt.compareSync($scope.user.password, result.data.password))?
        (HomeService.saveId(result.data.id,$scope.user.username),
        $window.location.href='#/User/'+result.data):
        this.error("Cannot use this Username")
    })
	}




	this.login= function(){
		var salt = bcrypt.genSaltSync(10);
		this.hash = bcrypt.hashSync($scope.user.password,salt );
		HomeService.sendLogin($scope.user.username,this.hash).then((result)=>{

			(result.data.id!==0&&bcrypt.compareSync($scope.user.password, result.data.password))?
			(HomeService.saveId(result.data.id,$scope.user.username),
			$window.location.href='#/User/'+result.data):
			this.error("Invalid login")
	 })

		}

	}

}
}
