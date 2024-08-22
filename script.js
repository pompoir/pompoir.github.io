function toggleDarkMode() {
    const body = document.body;
    const darkModeToggle = document.getElementById('darkModeToggle');
  
    body.classList.toggle("dark-mode");
  
    if (body.classList.contains("dark-mode")) {
      darkModeToggle.textContent = 'Light Mode';
      setCookie('darkMode', 'true', 30); // set cookie for 30 days
    } else {
      darkModeToggle.textContent = 'Dark Mode';
      setCookie('darkMode', 'false', 30); // set cookie for 30 days
    }
  }
  
  // function to set cookie
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  // function to get cookie
  function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  // check cookie on page load
  window.addEventListener('load', () => {
    const darkMode = getCookie('darkMode');
    if (darkMode == 'true') {
      document.body.classList.add('dark-mode');
    }
  });
  
  const currentTimeElement = document.getElementById('current-time');
  
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();
  
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const suffix = getSuffix(day);
  
  const currentTime = `${monthNames[month]} ${day}${suffix}, ${year}`;
  
  currentTimeElement.textContent = currentTime;
  
  function getSuffix(day) {
    switch (day) {
      case 1:
      case 21:
      case 31:
        return "st";
      case 2:
      case 22:
        return "nd";
      case 3:
      case 23:
        return "rd";
      default:
        return "th";
    }
  }