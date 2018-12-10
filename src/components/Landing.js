import React from 'react';
import '/Users/tar845/bloc/bloc-jams-react/src/landing.css';

const Landing = () => (
  <section className="landing">
  		<div className = "columns">
	     <h2 className="point-title">
	     	TURN THE MUSIC UP!
	     </h2>
	     <p className = "point-description">Unlimited streaming <br/> 
	     	Ad-free <br/> No arbitrary limits <br/> No distractions
	     </p>

			<section className = "selling points">
					<h2 className = "point-title">
						CHOOSE YOUR MUSIC
					</h2>
					<p className = "point-description">
						The world is full of music; why should you have to
						listen to music that someone else chose?
					</p>	

					<h2 className="point-title">
						MOBILE ENABLED
					</h2>
	        		<p className="point-description">
	        			Listen to your music on the go. This streaming 
						service is available on all mobile platforms.
	        		</p>
			</section>
		</div>
			<div className="footer">
				<footer>
				</footer>
			 </div>
	</section>
	);



	export default Landing;