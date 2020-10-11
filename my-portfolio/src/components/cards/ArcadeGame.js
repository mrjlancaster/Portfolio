import React from 'react';

// image import
import arcade from '../../img/arcade_game.jpg';

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

const ArcadeGame = () => {
	const classes = useStyles();
	
	return (
		<Card className={classes.root}>
				<CardActionArea>
				<CardMedia
					className={classes.media}
					image={arcade}
					title="arcade game"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						Arcade Game
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						I've used my Javascript skills to build an Arcade game. Just for the fun also for my daily coding practices. Check it out!
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions className={classes.cardAction}>
				<Button size="small" color="primary" className={classes.button}>
					<a href="https://mrjlancaster.github.io/Arcade-Game/" target="blank" className={classes.buttonLink}>
						See Project
					</a>
				</Button>
			</CardActions>
		</Card>
	)
}

export default ArcadeGame;
