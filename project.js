function gfunction() {
	  var checkbox=document.getElementById("flexCheckDefault");
		var button =document.getElementById("abc");
	
		       if(checkbox.checked==true){
		       
			  
                              window.location.href="firstpage.html";
			  
                  
			  }
			  else
			  	if(checkbox.checked==false){
			  		
			  		 swal("Kindly fill the checkbox"," ","warning");
			  	      window.location.href="";
			 }
			 }

             function wfunction(){
			 var btn= document.getElementById("abd");
			 var number=document.getElementById("quantity");
			 if(number.value==""){
			 	
			 	swal("Kindly answer the question"," ","warning");
			 }
			 else
			 if(number.value>=99&&number.value<=101){
			 
			  swal("Correct Answer","You clicked this button","success");
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
      window.location.href=""
  } else if ( val == "Scripting" ) {
    swal("Correct Answer","You clicked this button","success");
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
			 	 swal("Kindly answer the question"," ","warning");
			 }
			 else
			 if(number.value>=99&&number.value<=101){
			  swal("Correct Answer","You clicked this button","success");
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
			 }
			 else
			 if(number.value>=99&&number.value<=101){
			 swal("Correct Answer","You clicked this button","success");
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
