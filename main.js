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
	// setTimeout(() => {
	// 	homePage.style.transform= 'translateX(-100vw)';
	// }, 300);
	projectsPage.style.transform= 'translateX(0vw)';
	contactPage.style.transform= 'translateY(-100vh)';
});

contactBtn.addEventListener('click', function() {
	setTimeout(() => {
		projectsPage.style.transform= 'translateX(-100vw)';
	}, 300);

	homePage.style.transform= 'translateY(-100vh)';
	// projectsPage.style.transform= 'translateX(-100vw)';
	contactPage.style.transform= 'translateY(0vh)';
});
