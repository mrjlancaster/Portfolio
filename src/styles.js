import { makeStyles } from '@material-ui/core/styles';

const opacity = 0.8;

const useStyles = makeStyles((theme) => ({

	 // Header styles
	 bar: {
		 display: 'flex',
		 justifyContent: 'center',
		 backgroundColor: '#ffff',
		 position: 'fixed',
		 maxHeight: '7%',
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
		 opacity: opacity,
		//  color: '#f5f5f7',
		color: '#000',
		 cursor: 'pointer'
	 },

	 // Welcome section
	 welcomeContainer: {
		 display: 'flex',
		 height: '100vh'
	 },

	 welcomeTitle: {
		 opacity: '0.8',
		 lineHeight: '1.3em',
		 letterSpacing: 1,
	 },
	 socialLinks: {
		 display: 'inline',
		 color: '#000',
		 opacity: opacity,
		 margin: '20px 30px',
		 fontSize: 25,
		 transition: 'all 300ms ease',
		 '&:hover': {
			 color: '#74b9ff'
		 }
	 },

	 // Projects styles
	 projectsBox: {
		margin: '0 auto',
		paddingBottom: 25,
		backgroundColor: '#f1f2f6'
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
		 padding: '60px 0 40px 0',
		 opacity: opacity,
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
}))

export default useStyles;

