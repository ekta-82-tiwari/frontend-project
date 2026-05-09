 
document.querySelectorAll('.nav-item.dropdown').forEach(function (dropdown) {
    dropdown.addEventListener('mouseenter', function () {
        let menu = this.querySelector('.dropdown-menu');
        let toggle = this.querySelector('.dropdown-toggle');
        let bsDropdown = bootstrap.Dropdown.getOrCreateInstance(toggle);
        bsDropdown.show();
    });

    dropdown.addEventListener('mouseleave', function () {
        let toggle = this.querySelector('.dropdown-toggle');
        let bsDropdown = bootstrap.Dropdown.getOrCreateInstance(toggle);
        bsDropdown.hide();
    });
});













const items = document.querySelectorAll('.item');

items.forEach(function(item) {
    const oldPrice = item.querySelector('.original-price');
    const newPrice = item.querySelector('.discounted-price');

    oldPrice.addEventListener('click', function() {
        oldPrice.classList.add('strike');      // लाल लाइन
        newPrice.style.display = 'inline-block'; // नया प्राइस दिखाएँ
    });
});







   /*sin up page */

  function data(){
    let username = document.querySelector("#username").value
    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value
     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Basic empty field check

    if(username==""|| email==""|| password==""){
      alert("Please fill in all the fields.")
      return false;
    }
     else if (username !== username.toUpperCase()) {
    alert("Username must be in uppercase.");
    return false;
  }

     // Password length check

    else if(password.length<6){
     alert("Password must be at least 6 characters long.");
      return false;
  }
   if (!emailPattern.test(email)) {
  alert("Please enter a valid email address.");
  return false;
}
 
else{

alert("✅ Form submitted successfully!")
return true;

}
}



/*order-tracking.html*/

 function revealOnScroll() {
  const elements = document.querySelectorAll('.progress-text');
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');  // optional: remove class if scrolled out of view
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('resize', revealOnScroll); // optional: on resize
revealOnScroll(); // initial check on page load
