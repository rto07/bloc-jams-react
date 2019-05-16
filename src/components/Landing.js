import React from 'react';

const Landing = () => (
  <section className="landing">
     <h1 className="hero-title">TURN THE MUSIC UP</h1>

		<section className = "selling-points">
			<div className = "point">
				<h2 className = "point-title">Choose Your Music</h2>
				<p className = "point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
				
			</div>

			<div className = "point">
				<h2 className = "point-title">Unlimited Streaming, Ad-Free</h2>
        		<p className = "point-description"> No arbitrary limits. No distractions. </p>
			</div><br/>

			<div className = "point">
				<h2 className="point-title">Mobile Enabled</h2>
        		<p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>

			</div>
		</section>
	</section>
	);



	export default Landing;