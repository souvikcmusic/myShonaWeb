
	function getCookie(cname) {
	    var name = cname + "=";
	    var decodedCookie = decodeURIComponent(document.cookie);
	    var ca = decodedCookie.split(';');
	    for(var i = 0; i <ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0) == ' ') {
	            c = c.substring(1);
	        }
	        if (c.indexOf(name) == 0) {
	            return c.substring(name.length, c.length);
	        }
	    }
	    return "";
	}
	
	function isLoggedIn(){
	 	if(getCookie("loggedin")!=undefined && getCookie("loggedin")!=null && getCookie("loggedin")!=""){
	 		return true;
	 	}
	 	return false;
	}
	
	function redirect() {
	   window.location = "https://souvikcmusic.github.io/myShonaWeb/index.html";
	}
	
	
	    if(!isLoggedIn()){
	    redirect();
		}

