let navProject = document.getElementById("navProject");
let navCertificate = document.getElementById("navCertificate");
let navSkill = document.getElementById("navSkill");
document.getElementById('section1').style.display = 'block';
function projectEvent(){
    navProject.classList.add("nav-select");
    navCertificate.classList.remove("nav-select");
    navSkill.classList.remove("nav-select");

}
function certificateEvent(){
    navCertificate.classList.add("nav-select");
    navProject.classList.remove("nav-select");
    navSkill.classList.remove("nav-select");
}

function skillsEvent(){
    navSkill.classList.add("nav-select");
    navCertificate.classList.remove("nav-select");
    navProject.classList.remove("nav-select");

}

function display(sectionId) {
  // Hide all sections
  document.getElementById('section1').style.display = 'none';
  document.getElementById('section2').style.display = 'none';
  document.getElementById('section3').style.display = 'none';

  // Show the clicked section
  document.getElementById(sectionId).style.display = 'block';
}
