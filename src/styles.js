import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

	 // Header styles
	 bar: {
		 display: 'flex',
		 justifyContent: 'center',
		 backgroundColor: '#ffff',
		 position: 'fixed',
		 height: '7%',
	 },
	 activeBar: {
		display: 'flex',
		justifyContent: 'center',
	   backgroundColor: '#ffff',
		height: '7%',
	 },

	 title: {
		flexGrow: 1,
	 },
	 
	 signature: {
		 position: 'absolute',
		 opacity: '0.8',
		//  color: '#f5f5f7',
		color: '#000',
		 cursor: 'default'
	 },

	 // Welcome section
	 welcomeContainer: {
		 display: 'flex',
		 height: '100vh'
	 },
	//  welcomeSection: {	
	// 	display: 'flex',
	// 	flexDirection: 'column',
	// 	justifyContent: 'center',
	// 	textAlign: 'center',
	// 	margin: '0 auto',
	// 	width: '75%'
	//  },
	 welcomeTitle: {
		 fontSize: 40,
		 lineHeight: '1.3em',
		 letterSpacing: 1,
		 fontWeight: 200,
		 fontFamily: 'Arial, Helvetica, sans-serif'
	 },
	 welcomeSeparator: {
		 margin: '15px 0'
	 },
	 socialLinks: {
		 display: 'inline',
		 color: '#000',
		 margin: '20px 30px',
		 fontSize: 25,
		 transition: 'all 300ms ease',
		 '&:hover': {
			 color: '#05c46b'
		 }
	 },

	 // Projects styles
	 projectsBox: {
		margin: '0 auto',
		paddingBottom: 25,
		backgroundColor: '#54a0ff'
	},
	 projectsContainer: {
		 width: '100%',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-evenly',
	},
	 root: {
		maxWidth: 500,
		margin: '30px 0'
	 },
	 media: {
		height: 245
	 },
	 projectsHeading: {
		 textAlign: 'center',
		 padding: '40px 0'
	 },
	 cardAction: {
		 justifyContent: 'flex-end',
		 alignItems: 'end',
	 },
	 buttonLink: {
		 textDecoration: 'none',
		 color: '#1769aa'
	},

	// calculator styles
	calculatorContainer: {
		padding: '20px 0',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		width: '98%',
		margin: '50px auto',
		// boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
	},
	uiDesign: {
		paddingTop: 20,
		paddingBottom: 10
	},
	leftBox: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%'
	},
	rightBox: {
		display: 'flex',
		alignItems: 'center',
		width: '100%'
	},
	lightCalc: {
		position: 'relative',
		left: 100,
		height: '680px',
		width: '900px',
	},
	calc: {
		height: '680px',
		width: '900px'
	},
	darkModeText: {
		width: 340,
	},
	ifStatements: {
		textDecoration: 'underline'
	},
	
	 // Contact component styles
	 contactBox: {
		 backgroundColor: '#000',
		 height: '100vh',
		 display: 'flex',
		 flexDirection: 'column',
		 alignItems: 'center',
		 justifyContent: 'space-evenly'
	 },
	 contactTitle: {
		 color: '#f5f5f7',
		 fontSize: 40,
		 fontWeight: 200,
		 letterSpacing: '1px',
	 },
	 contactButton: {
		 color: '#f5f5f7',
		 padding: '15px 50px',
		 border: '1px solid #f5f5f7',
		 cursor: 'pointer',
		 background: 'none',
		 borderRadius: 2,
		 textDecoration: 'none',
		 transition: 'all 500ms ease',
		 '&:hover': {
			 backgroundColor: '#f5f6fa',
			 color: '#000',
		 }
	 },
}))

export default useStyles;

