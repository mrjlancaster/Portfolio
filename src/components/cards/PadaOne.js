import React from 'react';

// image import
import pada from '../../img/padaone.jpg';

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

const PadaOne = () => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={pada}
					title="PadaOne"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						Padaone
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						Padaone is a marketplace for individuals to take classes and train with coaches all over the world. I was responsible to build the first company's Landing Page. Technologies used in this project were <b>HTML5, CSS3/Sass, and Javascript.</b>
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions className={classes.cardAction}>
				<Button size="small" color="primary" className={classes.button}>
					<a href="https://www.padaone.app/" target="blank" className={classes.buttonLink}>
						See Project
					</a>
				</Button>
			</CardActions>
		</Card>
	)
}

export default PadaOne;
