// Hamburger

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navLink = document.querySelectorAll(".nav-link");

// Function to open / close

hamburger.addEventListener("click", mobileMenu);

function mobileMenu(){
    hamburger.classList.toggle("active"); // 
    navLinks.classList.toggle("active");  // 
}

// Closing navbar when clicking a link

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
};

// Smart navigation bar

const navBar = document.getElementById('nav-bar')

let previousScrollPosition = 0;

const isScrollingDown = () => {
  let currentScrolledPosition = window.scrollY || window.pageYOffset;
  let scrollingDown;

  if (currentScrolledPosition > previousScrollPosition) {
    scrollingDown = true;
  } else {
    scrollingDown = false;
  }
  previousScrollPosition = currentScrolledPosition;
  return scrollingDown;
};


const handleNavScroll = () => {
    if (isScrollingDown()) {
      navBar.classList.add('scroll-down');
      navBar.classList.remove('scroll-up');
    } else {
      navBar.classList.add('scroll-up');
      navBar.classList.remove('scroll-down');
    }
  }

  // initialize a throttleWait variable
var throttleWait;

const throttle = (callback, time) => {
  // if the variable is true, don't run the function
  if (throttleWait) return;

  // set the wait variable to true to pause the function
  throttleWait = true;
  
  // use setTimeout to run the function within the specified time
  setTimeout(() => {
    callback();

    // set throttleWait to false once the timer is up to restart the throttle function
    throttleWait = false;
  }, time);
}

window.addEventListener("scroll", () => {
    throttle(handleNavScroll, 250)
  });