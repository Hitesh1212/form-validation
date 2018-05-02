



$(document).ready(function(){
	$("#err_nammsg").hide();
	$("#err_birthmsg").hide();
	$("#err_pwdmsg").hide();
	$("#err_repwdmsg").hide();

	   var err_nam = false;
	   var err_birth = false;
	   var err_pwd = false;
	   var err_repwd = false;

	 $("#usrfstnam").focusout(function(){
		check_nam();
	});
	$("#usrsecnam").focusout(function(){
		check_secnam();
	});
	$("#Usrdob").focusout(function(){
		check_dob();
	});
	$("#usrpwd").focusout(function(){
		check_pwd();
	});
	$("#usrpwd1").focusout(function(){
		check_pwd1();
	});


	function check_nam(){
		var pattern = /^[a-zA-Z]*$/;
		var nam = $("#usrfstnam").val()
		if (pattern.test(nam) && nam !== ''){
			$("#err_nammsg").hide();
		} else{
			$("#err_nammsg").html("should contain charactor");
			$("#err_nammsg").show();
			$("#err_nammsg").css("border","2px solid red");
			err_nam = true;
		}
	}
	function check_secnam(){
		var sec_pattern = /^[a-zA-Z]*$/;
		var sec_nam = $("#usrsecnam").val()
		if (sec_pattern.test(sec_nam) && sec_nam !== ''){
			$("#err_nammsg").hide();
		} else {
			$("#err_nammsg").html("should contain charactor");
			$("#err_nammsg").show();
			$("#err_nammsg").css("border","2px solid red");
			err_nam = true;
		}
	}
	function check_dob(){
        var dob = $("#Usrdob").val()
        if (dob !==''){
        	$("#err_birthmsg").hide();
        } else {
        	$("#err_birthmsg").html("fill date of birth");
        	$("#err_birthmsg").show();
        	$("#err_birthmsg").css("border","2px solid red");
        	err_birth = true;
        }
	}
	function check_pwd(){
		var pwd_length = $("#usrpwd").val().length;
		if (pwd_length < 8){
			$("#err_pwdmsg").html("atleast 8 charactors");
			$("#err_pwdmsg").show();
			$("#err_pwdmsg").css("border","2px solid red");
			err_pwd = true;
		} else {
			$("#err_pwdmsg").hide();
		}
	}
    function check_pwd1(){
    	var repwd1 = $("#usrpwd").val();
    	var re_pwd1 = $("#usrpwd1").val();
    	if (repwd1 != re_pwd1){
    		$("#err_repwdmsg").html("password should match");
    		$("#err_repwdmsg").show();
    		$("#err_repwdmsg").css("border","2px solid red");
    		err_repwd = true;
    	}else {
    		$("#err_repwdmsg").hide();
    	}
    }

    $("#okbtn").click(function(){
    	err_nam = false;
	    err_birth =false;
	    err_pwd = false;
	    err_repwd = false;

	    check_nam();
	    check_dob();
	    check_pwd();
	    check_pwd1();

	    if( err_nam === false && err_birth=== false && err_pwd === false && err_repwd === false){
	    	alert("registration successfull");
	    	return true;
	    } else{
	    	alert("fill form correctly");
	    	return false;
	    }
    });
});

/*forgot password*/

$(document).ready(function(){
	$("#err_pwd1msg").hide();
	$("#err_pwd2msg").hide();

	var err_pwd1 = false;
	var err_pwd2 = false;

    $("#pwd1").focusout(function(){
    	check_pwd();
    });
    $("#pwd2").focusout(function(){
    	check_pwd1();
    });

    function check_pwd(){
    	var password = $("#pwd1").val().length;
    	if (password < 8){
    		$("#err_pwd1msg").html("atleast 8 charactor");
    		$("#err_pwd1msg").show();
    		$("#err_pwd1msg").css("border","2px solid red");
    		err_pwd1 = true;
    	} else {
    		$("#err_pwd1msg").hide();
    	}
    }
    function check_pwd1(){
    	var repwd = $("#pwd1").val();
    	var repwd1 = $("#pwd2").val();
    	if (repwd === repwd1){
    		$("#err_pwd2msg").hide();
    	} else {
    		$("#err_pwd2msg").html("password should match");
    		$("#err_pwd2msg").show();
    		$("#err_pwd2msg").css("border","2px solid red");
    		err_pwd2 = true;
    	}
    }
    $("#okfgbtn").click(function(){
       err_pwd1 = false;
	   err_pwd2 = false;

	   	check_pwd();
	   	check_pwd1();

	   	if (err_pwd1 === false && err_pwd2 === false) {
	   		alert("password changed successfull");
	   		return true;
	   	} else {
	   		alert("fill password again");
	   		return false;
	   	}
    });
});