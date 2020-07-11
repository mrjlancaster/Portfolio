const projectsPage = document.querySelector('.projects_container');
const contactPage = document.querySelector('.contact_container');
const homePage = document.querySelector('.welcome_container');

const homeBtn = document.querySelector('.home');
const projectsBtn = document.querySelector('.nav-projects');
const contactBtn = document.querySelector('.nav-contact');

homeBtn.addEventListener('click', function() {
	homePage.style.transform= 'translateY(0vh)';
	contactPage.style.transform= 'translateY(-100vh)';
	projectsPage.style.transform= 'translateX(-100vw)';
})

projectsBtn.addEventListener('click', function() {
	contactPage.style.transform= 'translateY(-100vh)';
	projectsPage.style.transform= 'translateX(0vw)';
});

contactBtn.addEventListener('click', function() {
	homePage.style.transform= 'translateY(-100vh)';
	projectsPage.style.transform= 'translateX(-100vw)';
	contactPage.style.transform= 'translateY(0vh)';
});
