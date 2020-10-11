import React from 'react';

// import styles
import useStyles from '../styles';

// images import
import Trans1go from '../img/trans1go.jpg';
import am from '../img/am.jpg';
import padaOne from '../img/padaone.jpg';
import WorldClock from '../img/world_clock.jpg';
import ArcadeGame from '../img/arcade_game.jpg';

// Material ui imports
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Cards = () => {
	const classes = useStyles()
	return (
		<Card className={classes.root}>

			{/* trans1go */}
			<CardActionArea>
			<CardMedia
				className={classes.media}
				image={Trans1go}
				title="trans1go.com"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					Trans1go.com
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
					across all continents except Antarctica
				</Typography>
			</CardContent>
			</CardActionArea>
			<CardActions>
			<Button size="small" color="primary">
				See Project
			</Button>
			</CardActions>

		{/* padaone */}
			<CardActionArea>
			<CardMedia
				className={classes.media}
				image={padaOne}
				title="PadaOne"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					PadaOne
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
					across all continents except Antarctica
				</Typography>
			</CardContent>
			</CardActionArea>
			<CardActions>
			<Button size="small" color="primary">
				See Project
			</Button>
			</CardActions>

			{/* am */}
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
					Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
					across all continents except Antarctica
				</Typography>
			</CardContent>
			</CardActionArea>
			<CardActions>
			<Button size="small" color="primary">
				See Project
			</Button>
			</CardActions>

			{/* world clock */}
			<CardActionArea>
			<CardMedia
				className={classes.media}
				image={WorldClock}
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

			{/* arcade game */}
			<CardActionArea>
			<CardMedia
				className={classes.media}
				image={ArcadeGame}
				title="arcade game"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					Arcade Game
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
					across all continents except Antarctica
				</Typography>
			</CardContent>
			</CardActionArea>
			<CardActions>
			<Button size="small" color="primary">
				See Project
			</Button>
			</CardActions>
			</Card>
  );
}

export default Cards;
