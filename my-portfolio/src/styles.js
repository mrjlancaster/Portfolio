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
	 ul: {
		 display: 'flex',
		 listStyle: 'none'
	 },
	 li: {
		 marginLeft: 20
	 }
}))

export default useStyles;
