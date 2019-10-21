




function createCard(number){
	var html = '<div class="card" id="popup'+number+'">'+ '<img class="card-img" id="card-img'+number+'" src="">'+
	'<h1 class = "hotel-name" id="hotel-title'+number+'"></h1>'+
	'<p class = "hotel-content" id = "hotel-loc'+number+'"></p>'+



	'<div id="myModal'+number+'" class="modal">'+

	'<div class="modal-content">'+

	'<img class="modal-header" id="modal-header'+number+'" src="">'+

	'<div class="modal-text">'+
	'<div class="model-title">'+
	'<h1 id="modal-title'+number+'"></h1>'+
	'</div>'+

	'<div class="modal-address">'+
	'<p id="address'+number+'"></p>'+
	'</div>'+

	'<div class="modal-desc" id="modal-desc'+number+'"></div>'+
	'<p id="description'+number+'"></p>'+
	



	'<div class="modal-review" id="review'+number+'">'+
	'"blah blah"'+
	'</div>'+

	'<div class="modal-user">'+
	'<p id="user'+number+'">- by me '+
	'</p>'+
	'</div>'+

	'<div class="extra-pics">'+
	'<img id="pic1'+number+'" src="">'+
	'<img id="pic2'+number+'" src="">'+
	'<img id="pic3'+number+'" src="">'+



	'</div>'+

	'</div>'+

	'</div>'+

	'</div>'

	return html;
}


$(window).load(function() {
	setUp();
	console.log("set up");


// dynamic content here works but very inelegant (clearly) and will only work for one hotel at a time
// attempted to fix with functions below but ran into too many bugs

	// var hotelinfo = JSON.parse(xhttp.responseText);
	// for(i=0;i<hotelinfo.length; i++){
	// 	var card = createCard();
	// 	document.getElementById('main').innerHTML = card;
	// 	var id = hotelinfo[i].id;
	// 	var title = hotelinfo[i].title;
 //    	var add1 = hotelinfo[i].location.address_1;
 //    	var add2 = hotelinfo[i].location.address_2;
 //    	var city = hotelinfo[i].location.city;
 //    	var postcode = hotelinfo[i].location.postcode;
 //    	var country = hotelinfo[i].location.country;
 //    	// var long = hotelinfo[i].location.longitude;
 //    	// var lat = hotelinfo[i].location.latitude;
 //    	var descr = hotelinfo[i].description;
 //    	// var quote = hotelinfo[i].quotation.text;
 //    	// var author = hotelinfo[i].quotation.citation;
 //    	var cover = hotelinfo[i].cover_image;
 //    	// var img1 = hotelinfo[i].images[0];
 //    	// var img2 = hotelinfo[i].images[1];
 //    	// var img3 = hotelinfo[i].images[2];
 //    	document.getElementById("hotel-title").innerHTML = title;
 //    	document.getElementById("hotel-loc").innerHTML = city + ", " + country;
 //    	document.getElementById("card-img").src = cover;
 //    	document.getElementById("modal-header").src=cover;
 //    	document.getElementById("modal-title").innerHTML = title;
 //    	document.getElementById("address").innerHTML = add1+ "<br>"+add2+ "<br>" +city+"<br>"+postcode+"<br>"+country;

 // below can be commented back in to see functionality of modal/popup


  //   	var modal = document.getElementById("myModal");
  //   	var btn = document.getElementById("popup");
  //   	// var url = "http://hotel.pi.tv/api.php"+"?id=" +id;

		// btn.onclick = function() {
		// 	modal.style.display = "block";
		// 	}


// window.onclick = function(event) {
// 	if (event.target == modal) {
// 		modal.style.display = "none";
// 	}
// }



    })




// xhttp.open("GET", "http://hotel.pi.tv/api.php", true);
// xhttp.send();

var hotelinfo;

// main bug was in this function

function getInfo(callback){
	var url = "http://hotel.pi.tv/api.php";
	var xhr=new XMLHttpRequest();
	xhr.open("GET", url, true);
	console.log("xhr opened");

	xhr.onload = function(e){
		hotelinfo = JSON.parse(xhr.responseText);
		return hotelinfo;
		callback();
	}
	xhr.send();
	console.log("sent")


}


function setCardInfo(hotelinfo){
	for (var i = this.length - 1; i >= 0; i--) {
	var cardhtml=createCard(i);
	document.getElementById("main").innerHTML = cardhtml;
	var title = hotelinfo[i].title;	
	var city = hotelinfo[i].location.city;
	var country = hotelinfo[i].location.country;
	var cover = hotelinfo[i].cover_image;
	var idno = hotelinfo[i].id;
	document.getElementById("hotel-title"+idno).innerHTML = title;
    document.getElementById("hotel-loc"+idno).innerHTML = city + ", " + country;
    document.getElementById("card-img"+idno).src = cover;


}


}

function setUp(){
	getInfo(setCardInfo(hotelinfo));

}




