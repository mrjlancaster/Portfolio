import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	 // Header styles

	 bar: {
		 display: 'flex',
		 justifyContent: 'center',
		 backgroundColor: 'rgba(0, 0, 0, 0.8)',
		 position: 'fixed',
		 height: '7%',
	 },
	 title: {
		flexGrow: 1,
	 },
	 
	 signature: {
		 position: 'absolute',
		 opacity: '0.8',
		 color: '#f5f5f7',
	 },
	 ul: {
		 width: '50%',
		 margin: '0 auto',
		 display: 'flex',
		 listStyle: 'none',
		 justifyContent: 'space-evenly',
	 },
	 
	 li: {
		 opacity: '0.8',
		 fontSize: 14,
		 marginLeft: 20,
		 textDecoration: 'none',
		 cursor: 'pointer',
	 },
	 // Welcome section
	 welcomeContainer: {
		 display: 'flex',
	 },
	 welcomeSection: {	
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		textAlign: 'center',
		margin: '0 auto',
		height: '94vh',
		width: '75%'
	 },
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
	 projectsContainer: {
		 padding: '30px 0',
		display: 'flex',
		width: '85%',
		margin: '0 auto',
		flexWrap: 'wrap',
		justifyContent: 'space-evenly',
	},
	 root: {
		maxWidth: 345,
		margin: '20px 0'
	 },
	 media: {
		height: 170
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
		display: 'flex',
		height: 600,
		justifyContent: 'space-evenly',
		alignItems: 'center',
		margin: '0 auto',
		width: '85%',
		backgroundColor: 'brown'
	},
	leftBox: {
		height: 573,
		width: '48%',
		backgroundColor: 'green'
	},
	rightBox: {
		height: 573,
		width: '48%',
		backgroundColor: 'blue'
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

