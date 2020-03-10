// JavaScript Document
@charset "utf-8";
var n=0;
function nightMode() {
	n=n+1;
 	if(n%2==0){
		x= document.getElementsByClassName("style_text_eng");
		for (var i = 0; i < x.length; i++) {
	  			x[i].style.color = "gold";
  		}
	    x= document.getElementsByClassName("style_text_per");
  		for (var i = 0; i < x.length; i++) {
	  		x[i].style.color = "gold";
  		}
	}
	else{
		x= document.getElementsByClassName("style_text_eng");
		for (var i = 0; i < x.length; i++) {
	  		x[i].style.color = "black";
  		}
		x= document.getElementsByClassName("style_text_per");
  		for (var i = 0; i < x.length; i++) {
	  		x[i].style.color = "black";
  		}
	}				
}