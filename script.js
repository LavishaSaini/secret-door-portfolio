function opendoor() {
      document.getElementById("door").src = "imgB.jpg" ;
      document.getElementById("link").style.zIndex = 1;

}
function openhome() {
    document.getElementById("home-preview").src = "imgB.jpg" ;
}
function showSkillMenu() {
    resetOpacity();
    document.getElementById("skill-front").style.opacity = "1";
}
function showHomeMenu() {
    resetOpacity();
    document.getElementById("home-front").style.opacity = "1";
}
function showProjectMenu() {
    resetOpacity();
    document.getElementById("project-front").style.opacity = "1";
}
function showEducationMenu() {
    resetOpacity();
    document.getElementById("education-front").style.opacity = "1";
}

function resetOpacity() {
    document.getElementById("skill-front").style.opacity = "0";
    document.getElementById("home-front").style.opacity = "0";
    document.getElementById("project-front").style.opacity = "0";
    document.getElementById("education-front").style.opacity = "0";
}


