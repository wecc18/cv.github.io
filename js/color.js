const lightModeBtn= document.querySelector(".light-mode-btn");
const darkModeBtn= document.querySelector(".dark-mode-btn");

darkModeBtn.addEventListener("click", setDarkMode);
lightModeBtn.addEventListener("click", setLightMode);

function setDarkMode(){
    setUserTheme("dark");
}

function setLightMode(){
    setUserTheme("light");
}

function setUserTheme(newTheme){
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
}