import React from 'react';
import './About.css';

// material ui imports
import { Typography } from '@material-ui/core';

const About = () => {
	return (
		<div id="about" className="about-me">
			<div className="profile-pic">
				<img src="" alt="me" />
			</div>
			<div className="text-wrapper">
				<Typography className="about-title" variant="h4">About me</Typography>
				<Typography className="about-bio" variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, laborum voluptatibus pariatur ut quis officiis nisi magni accusamus nostrum ducimus labore corrupti harum consequatur, ipsam tempore ad iusto ab quia. Iste culpa dicta repudiandae impedit cumque at quis porro in laboriosam incidunt minima, doloribus maiores quidem saepe aperiam laudantium alias unde, facere excepturi! Harum, cumque cum deserunt debitis ad vel modi quia doloribus, accusamus earum esse atque quo inventore obcaecati assumenda consequatur voluptas tempore, autem quos tempora. Est alias dolorum quis tempore neque omnis ad pariatur provident quos consequatur magnam, enim, molestiae veritatis voluptatibus sequi error sit libero id ea. Atque enim unde, fugit laboriosam ducimus magni perferendis exercitationem ut maiores, corrupti saepe iste, expedita quos reiciendis? Maiores, dicta odio. Eos voluptatum harum vero illum eum dolorem praesentium sequi inventore, aliquid delectus cum quidem, dicta aspernatur natus, alias atque quos est veniam sint voluptates! Doloremque cum ex ratione repellat non tempora sapiente dicta odio repudiandae, quidem laboriosam quia in.</Typography>
			</div>
		</div>
	)
}

export default About;
