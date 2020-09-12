const projectsPage = document.querySelector('.projects_container');
const contactPage = document.querySelector('.contact_container');
const homePage = document.querySelector('.welcome_container');

const homeBtn = document.querySelector('.home');
const projectsBtn = document.querySelector('.nav-projects');
const contactBtn = document.querySelector('.nav-contact');


// home menu button handler
homeBtn.addEventListener('click', function() {
	homePage.style.transform= 'translateY(0vh)';
	contactPage.style.transform= 'translateY(-100vh)';
	projectsPage.style.transform= 'translateX(-100vw)';
})

// projects menu button handler
projectsBtn.addEventListener('click', function() {
	// hide home page
	setTimeout(() => {
		homePage.classList.add('animate__animated', 'animate__fadeOut');
		
		setTimeout(() => {
			homePage.style.display = 'none';
		}, 1000);
	}, 1000);

	// display projects page
	setTimeout(() => {
		projectsPage.classList.add('animate__animated', 'animate__fadeIn');
		projectsPage.style.display = 'flex';
	}, 2500);
});



// contact menu button handler
contactBtn.addEventListener('click', function() {

	// hide home page if current
	if (homePage.style.display == 'flex') {
		setTimeout(() => {
			homePage.classList.add('animate__animated', 'animate__fadeOut');
			
			setTimeout(() => {
				homePage.style.display = 'none';
			}, 1000);
		}, 1000);

		// display contact page
		setTimeout(() => {
			contactPage.classList.add('animate__animated', 'animate__fadeInDown');
			contactPage.style.display = 'flex';
		}, 3000);
	}
});
