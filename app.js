//  ============= menu btn ================== 
var showMenu = function (toggleId, navId) {
    var toggle = document.getElementById(toggleId);
    var nav = document.getElementById(navId);
    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            nav.classList.toggle('show-menu');
        });
    }
};
showMenu('nav-toggles', 'nav-lists');
// ============== Remove menu btn when clicking any btn ===========
var navLink = document.querySelectorAll('.nav-link');
function removeLink() {
    var navMenu = document.querySelector('.nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(function (item) { return item.addEventListener('click', removeLink); });
//  ================= Arrow button to show or hide right section 
var arrow = document.querySelector('.arrows');
var right = document.querySelector('.right');
var icon = arrow.querySelector('i');
arrow.addEventListener('click', function (event) {
    event.preventDefault();
    if (right.style.display === 'none') {
        right.style.display = 'block';
        icon.classList.replace('bx-left-arrow-alt', 'bx-right-arrow-alt');
    }
    else {
        right.style.display = 'none';
        icon.classList.replace('bx-right-arrow-alt', 'bx-left-arrow-alt');
    }
});
