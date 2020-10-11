import React from 'react';

// image import
import T1Go from '../../img/trans1go.jpg';

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

const Trans1go = () => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={T1Go}
					title="trans1go.com"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						Trans1go.com
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						Trans1go.com is an auto repair shop focused on delivering mobile repairs (service at your door). Responseive website, mobile and tablet friendly. Front-end and back-end technologies were used in this project, such as 
						<span className={classes.techText}>HTML5, CSS3/Sass, Javascript, nodeJS, and REST APIs.</span>
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions className={classes.cardAction}>
				<Button size="small" color="primary" className={classes.button}>
					<a href="http://trans1go.com/" target="blank" className={classes.buttonLink}>
						See Project
					</a>
				</Button>
			</CardActions>
		</Card>
	)
}

export default Trans1go;
