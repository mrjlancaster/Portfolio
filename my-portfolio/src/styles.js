import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
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
		 listStyle: 'none',
		 color: '#fff',
		 textDecoration: 'none'
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
		 height: '94vh',
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
		 transition: 'all 500ms ease',
		 '&:hover': {
			 backgroundColor: '#f5f6fa',
			 color: '#000'
		 }
	 }
}))

export default useStyles;

