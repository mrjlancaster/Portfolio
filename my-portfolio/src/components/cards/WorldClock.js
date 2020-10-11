import React from 'react';

// image import
import world from '../../img/world_clock.jpg';

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

const WorldClock = () => {
	const classes = useStyles();
	
	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={world}
					title="World Clock"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						World Clock (Web App)
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
						across all continents except Antarctica
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<a href="">
					<Button size="small" color="primary">
						See Project
					</Button>
				</a>
			</CardActions>
		</Card>
	)
}

export default WorldClock;
