window.onload = function () {
  let n = getCookie("username");
  console.log(document.cookie)
  if (n == null || n == undefined || n == '') {
    document.getElementById("username").innerHTML = "Login";
    document.getElementById("nav_login_ch").innerHTML = "Login";
  } else {
    document.getElementById("username").innerHTML = n;
    document.getElementById("nav_login_ch").innerHTML = n;
  }
}
//page
function toHome() {
  window.location.href = "../index.html";
}
function toFAQ() {
  window.location.href = "../pages/FAQ.html";
}
function toBlog() {
  window.location.href = "../pages/blog.html";
}

function toBook() {
  window.location.href = "../pages/book.html";
}

function toLog() {
  let n = getCookie("username");
  if (n == "admin") {
    toAdBookings()
  } else if (n == null || n == undefined || n == '') {
    window.location.href = "../pages/Log.html";
  } else {
    window.location.href = "../pages/account.html"
  }
}

function toLogout() {
  let logout =confirm("Are you sure you want to Log out?");
	if (logout==true){
		alert("Success!")
    setCookie("username","","",-1);
    window.location.href = "../index.html";
	}
}

function toAdBookings () {
  window.location.href = "../pages/admin_book.html"
}

function toAdBlog() {
  window.location.href = "../pages/admin_blog.html"
}
function toAdquestion() {
  window.location.href = "../pages/admin_questions.html"
}

function toAdfaq () {
  window.location.href = "../pages/admin_FAQ.html"
}

//Cookie
//getCookie
function getCookie(uinfo){
	var str = document.cookie;
	var arr = str.split(';');
	for(let i=0; i<arr.length; i++) {
		let ar = arr[i].trim().split("=");
		if (ar[0] == uinfo) {
      return ar[1]
    }
	}
	return "";
}
//checkCookie
// function checkCookie(uname,upass) {
//   let n = getCookie(uname);
//   let p = getCookie(upass);

//   if (n == null || n == undefined || n == '') {
//     alert("Don't have this account, please create an account")
//   } else {

//   }
// }
//setCookie
function setCookie(uname,uemail,upass, exdays){
  var d = new Date();
  d.setTime(d.getTime()+(exdays*24*60*60*1000));
  var expires = "expires="+d.toGMTString();
	document.cookie = "username="+uname+ "; " + expires;
  document.cookie = "email="+uemail+ "; " + expires;
  document.cookie = "password="+upass+ "; " + expires;
  document.cookie = uname+"="+upass;
}

//sub question
function sub_que() {
  alert ("Success!")
}
//sub booking
function sub_booking() {
  let uname = getCookie("username");
  if (uname == null || uname == undefined || uname == ''){
		toLog()
	} else {
    date = document.getElementById("book_date").value;
    if (date == null || date == undefined || date == '') {
      alert("Please select a date!")
    } else {
      alert(date)
      toHome()
    }
  }
}
//log in
function sub_login() {

  email = document.getElementById("login_email").value;
  pass = document.getElementById("login_pass").value;
  
  if (email == null || email == undefined || email == '') {
    alert("Please enter your vaild email!")
  } else if (pass == null || pass == undefined || pass == ''){
    alert("Please enter your vaild password!")
  } else {
    if (email == "admin" & pass == "admin") {
      alert("Welcome "+email);
      setCookie(email,email,pass,0.0104);
      setTimeout(2500);
      window.location.href = "../pages/admin_book.html";
    } else {
      let nemail = getCookie(email);
      let n = getCookie("username");
      let p = getCookie("password");

      if (n == email && p == pass) {
        alert("Welcome "+ n);
        setTimeout(2500);
        window.location.href = "../index.html";
      } else if (nemail == null || nemail == undefined || nemail == '') {
        alert("Don't have this account, please create an account")
      } else if (nemail != null || nemail != undefined || nemail != '' & pass == p){
        alert("Welcome "+ nemail);
        setCookie(email,email,nemail,0.0104);
      } else{
        alert("You have entered a wrong password")
      }
    
      
      
      // setTimeout (function () {
        // window.alert=function(){}
      //   window.location.href = "../index.html";
      // },2500);
    }
  }
}
// //cookie prit
// function print() {
//   var st = document.cookie;
//   var ar = st.split(";");

//   for (let i = 0; i < ar.length; i++) {
//     var arr = ar[i].split("=");
//     console.log(arr[0]+": "+arr[1]);
//   }
// }
//sign up
function sub_signup() {
  uname = document.getElementById("signup_name").value;
  email = document.getElementById("signup_email").value;
  pass = document.getElementById("signup_pass").value;
  
  if (uname == null || uname == undefined || uname == '') {

    alert("Please enter your vaild email!")
  } else if (email == null || email == undefined || email == ''){
    alert("Please enter your vaild password!")
  }else if (pass == null || pass == undefined || pass == ''){
    alert("Please enter your vaild password!")
  } else {
    alert("Thanks for joining! Welcome "+ uname);
    setCookie(uname,email,pass,0.0104 );
    setTimeout(2500)
    window.location.href = "../index.html";
  }

}

//user delete booking
function userDelBook(){
	let del =confirm("Are you sure you want to delete the Booking?");
	if (del==true){
    alert ("Success");
    setTimeout(2000);
    document.getElementById("bitem1").style.display = "none";
	}
	
}