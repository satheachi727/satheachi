function order(product){

let phone="8801XXXXXXXXX";

let message=
"আমি "+product+" অর্ডার করতে চাই।";

let url=
"https://wa.me/"+phone+
"?text="+encodeURIComponent(message);

window.open(url);

}


function scrollProducts(){

document.getElementById("products")
.scrollIntoView();

}
