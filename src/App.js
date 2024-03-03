import React from "react";

// Layout
import Layout from "./components/Layout";

// Sections
import WelcomeSection from "./sections/WelcomeSection";
import AboutSection from "./sections/AboutSection";
import MyWorkSection from "./sections/MyWorkSection";
import ShowcaseSection from "./sections/ShowcaseSection";

const App = () => {
	return (
		<div className="App">
			<Layout>
				<WelcomeSection />
				<AboutSection />
				<MyWorkSection />
				<ShowcaseSection />
			</Layout>
		</div>
	);
};

export default App;
