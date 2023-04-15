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
  window.location.href = "../pages/Log.html";
}

function toLogout() {
  alert("Success!")
  window.location.href = "../index.html";
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

//sub question
function sub_que() {
  alert ("Success")
}
//sub booking
function sub_booking() {
  date = document.getElementById("book_date").value;
  if (date == null || date == undefined || date == '') {
    alert("Please select a date!")
  } else {
    alert(date)
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
      setTimeout(2500);
      window.location.href = "../pages/admin_book.html";
    } else {
      alert("Welcome "+email);
      setTimeout(2500);
      window.location.href = "../index.html";
      // setTimeout (function () {
        // window.alert=function(){}
      //   window.location.href = "../index.html";
      // },2500);
    }
  }
}
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
    setTimeout(2500)
    window.location.href = "../index.html";
  }

}