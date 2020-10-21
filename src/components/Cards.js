import React from 'react';

//styles import
import useStyles from '../styles';

// components imports
import Trans1go from './cards/Trans1go';
import PadaOne from './cards/PadaOne';
import AM from './cards/AM';
import WorldClock from './cards/WorldClock';
import ArcadeGame from './cards/ArcadeGame';

// Material ui imports
import Box from '@material-ui/core/Box';

const Cards = () => {
	const classes = useStyles();

	return (
		<Box className={classes.projectsContainer}>
			<Trans1go />
			<PadaOne />
			<AM />
			<WorldClock />
			<ArcadeGame />
		</Box>
  );
}

export default Cards;
