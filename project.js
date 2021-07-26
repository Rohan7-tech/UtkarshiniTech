function gfunction() {
	  var checkbox=document.getElementById("flexCheckDefault");
		var button =document.getElementById("abc");
	
		       if(checkbox.checked==true){
		       
			  
                              window.location.href="firstpage.html";
			  
                  
			  }
			  else
			  	if(checkbox.checked==false){
			  		
			  		 swal("Kindly fill the checkbox"," ","warning");
			  		 setTimeout(function(){
			  	      window.location.href="";
			  	  },1800)
			 }
			 }

             function wfunction(){
			 var btn= document.getElementById("abd");
			 var number=document.getElementById("quantity");
			 if(number.value==""){
			 	  setTimeout(function(){
			 	swal("Kindly answer the question"," ","warning");
			 },1800);
			 }
			 else
			 if(number.value>=5990&&number.value<=6010){
			 
			  swal("Correct Answer","Congratulations!!!!","success");
    setTimeout(function(){
    	
    window.location.href="secondpage.html"
},1800);
			}
			else{
				swal("Incorrect answer","Kindly Try Again","error");
    setTimeout(function(){
  	window.location.href=""
  },2000
    );
               }			}

           function submitAnswer(){

  var radios = document.getElementsByName('choice');
  var val= "";
  for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
         val = radios[i].value; 
         break;
       }
  }
  
  if (val == "" ) {

    swal("Kindly choose an option","Try Again","warning");
        setTimeout(function(){
      window.location.href=""
  },1800);
  } else if ( val == "Programming" ) {
    swal("Correct Answer","Congratulations !!!","success");
    setTimeout(function(){
    	
    window.location.href="thirdpage.html"
},1800);
   
  } else {
    swal("Incorrect answer","You clicked wrong answer","error");
    setTimeout(function(){
  	window.location.href=""
  },2000
    );
}
};

 function afunction(){
			 var btn= document.getElementById("abd");
			 var number=document.getElementById("quantity");
			 if(number.value==""){
			 	   setTimeout(function(){
			 	swal("Kindly answer the question"," ","warning");
			 },1800);
			 	}
			 else
			 if(number.value>=12725&&number.value<=12775){
			  swal("Correct Answer","Congratulations !!!","success");
    setTimeout(function(){
    	
    window.location.href="fourthpage.html"
},1800);
			}
			else{
				swal("Incorrect answer","Kindly Try Again","error");
    setTimeout(function(){
  	window.location.href=""
  },2000
    );
               }			}
               function lfunction(){
			 var btn= document.getElementById("abd");
			 var number=document.getElementById("quantity");
			 if(number.value==""){
			 	 swal("Kindly answer the question "," ","warning");
			 	 setTimeout(function(){
			 	 	window.location.href="";
			 	 },1800);
			 }
			 else
			 if(number.value>=4390&&number.value<=4410){
			 swal("Correct Answer","Congratulations !!!","success");
    setTimeout(function(){
    	
    window.location.href="finalpage.html"
},1800);
}
			else{
				swal("Incorrect answer","Kindly Try Again","error");
    setTimeout(function(){
  	window.location.href=""
  },2000
    );
               }			
           }
            function sAnswer(){

  var radios = document.getElementsByName('choice');
  var val= "";
  for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
         val = radios[i].value; 
         break;
       }
  }
  
  if (val == "" ) {

    swal("Kindly choose an option","Try Again","warning");
        setTimeout(function(){
      window.location.href=""
  },1800);
  } else if ( val == "Programming" ) {
    swal("Correct Answer","Congratulations !!!","success");
    setTimeout(function(){
    	
    window.location.href="finalpage2.html"
},1800);
   
  } else {
    swal("Incorrect answer","You clicked wrong answer","error");
    setTimeout(function(){
  	window.location.href=""
  },2000
    );
}
};
function opAnswer(){
 	window.location.href="abcd.html";
 }

