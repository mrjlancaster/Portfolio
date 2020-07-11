const projectsPage = document.querySelector('.projects_container');
const contactPage = document.querySelector('.contact_container');

const projectsBtn = document.querySelector('.nav-projects');
const contactBtn = document.querySelector('.nav-contact');

projectsBtn.addEventListener('click', function() {
	projectsPage.style.transform= 'translateX(0vw)';
});

contactBtn.addEventListener('click', function() {
	contactPage.style.transform= 'translateY(0vh)';
})
