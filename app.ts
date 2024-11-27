//  ============= menu btn ================== 

let showMenu = (toggleId , navId) => {
    let toggle  = document.getElementById(toggleId)
    let nav = document.getElementById(navId)

    if (toggle && nav){
        toggle.addEventListener('click' , () => {
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu ('nav-toggles' , 'nav-lists')


// ============== Remove menu btn when clicking any btn ===========

let navLink = document.querySelectorAll('.nav-link')
function removeLink () {
    let navMenu = document.querySelector('.nav-menu') as HTMLDivElement
    navMenu.classList.remove('show-menu')
}
navLink.forEach(item => item.addEventListener ('click' , removeLink))

//  ================= Arrow button to show or hide right section 

let arrow = document.querySelector('.arrows') as  HTMLAnchorElement
let right = document.querySelector ('.right') as HTMLDivElement
let icon = arrow.querySelector ('i')  as HTMLAnchorElement




arrow.addEventListener ('click' , (event) => {
    event.preventDefault() 
    if(right.style.display === 'none'){
        right.style.display = 'block'
        icon.classList.replace  ('bx-left-arrow-alt' , 'bx-right-arrow-alt')
    } else {
        right.style.display = 'none'
        icon.classList.replace  ('bx-right-arrow-alt' , 'bx-left-arrow-alt')
    }
})