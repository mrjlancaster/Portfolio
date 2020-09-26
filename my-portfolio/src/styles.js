import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	toolbar: {
		height: '10vh'
	},
	 bar: {
		 backgroundColor: '#1e272e',
	 },
	 title: {
		flexGrow: 1,
	 },
	 
	 // Header styles
	 ul: {
		 width: '100%',
		 display: 'flex',
		 listStyle: 'none',
		 justifyContent: 'flex-end'
	 },
	 
	 li: {
		 marginLeft: 20,
		 color: '#fff',
		 textDecoration: 'none',
		 cursor: 'pointer'
	 },
	 // Welcome section
	 welcomeContainer: {
		 display: 'flex',
		 position: 'absolute',
		 width: '100vw',
	 },
	 welcomeSection: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			textAlign: 'center',
			margin: '0 auto',
			height: '90vh',
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
	 projectsHeading: {
		 textAlign: 'center'
	 },
	 projectBox: {
		 backgroundColor: 'green'
	 },

	 // Contact component styles
	 contactBox: {
		 backgroundColor: '#1e272e',
		 height: '90vh',
		 display: 'flex',
		 flexDirection: 'column',
		 alignItems: 'center',
		 justifyContent: 'space-evenly'
	 },
	 contactTitle: {
		 color: '#fff',
		 fontSize: 40,
		 fontWeight: 200,
		 letterSpacing: '1px',
	 },
	 contactButton: {
		 color: '#fff',
		 padding: '15px 50px',
		 border: '1px solid #7f8fa6',
		 cursor: 'pointer',
		 background: 'none',
		 borderRadius: 4,
		 textDecoration: 'none',
		 transition: 'all 500ms ease',
		 '&:hover': {
			 backgroundColor: '#f5f6fa',
			 color: '#000'
		 }
	 }
}))

export default useStyles;

