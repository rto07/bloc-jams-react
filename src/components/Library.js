import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../Data/albums';



class Library extends Component {
	constructor(props){
		super(props);
		this.state = { albums: albumData };
	}
	
	render(){
		return (
			<section className = "library">
				{this.state.albums.map((album, index) =>
						<Link to = {`/album/${album.slug}`} key = {index} >
								<div className="albumCover">
									<img src = {album.albumCover} alt = {album.title}/>
									<div className="albumTitle">
										<h2>{album.title}</h2>
										<div className="albumInfo">
											{album.artist}<br></br>
											{album.songs.length}songs
										</div>
									</div>
								</div>
						</Link>
					)
				}
			
				<div className="footer">
					<footer>
					</footer>	
				</div>
			
			</section>
		);
	}
}

export default Library;