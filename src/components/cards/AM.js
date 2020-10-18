import React from 'react';

// image import
import am from '../../img/am.jpg';

//styles import
import useStyles from '../../styles';

// Material ui imports
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const AM = () => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={am}
					title="AM"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						AM Architecture & Design
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						This is a mockup website I've built based on a design I found as an inspiration. AM Architecture & Design was built utilizing <b>HTML5 and CSS3.</b> Simple, elegant and great design.
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions className={classes.cardAction}>
					<Button size="small" color="primary" className={classes.button}>
					<a href="https://mrjlancaster.github.io/Responsive-website/" target="blank" className={classes.buttonLink}>
						See Project
					</a>
					</Button>
			</CardActions>
		</Card>
	)
}

export default AM;
