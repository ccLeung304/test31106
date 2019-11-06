
function on_receive(){

swal({
  title: "Error!",
  text: "This function still on it's way to finish!",
  type: "error",
  confirmButtonText: "I see!"
});
}

function on_pay(){
	swal({
  title: "Error!",
  text: "This function still on it's way to finish!",
  type: "error",
  confirmButtonText: "I see!"
});
}
	
function on_scan(){
	window.location.href = "Scan.html";
}

function on_transfer(){
	

  jQuery('#qrcode').qrcode({
		render	: "table",
		text	: "http://jetienne.com"
	
 
});
	
}


	

