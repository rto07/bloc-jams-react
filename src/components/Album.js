import React, { Component } from 'react';
import albumData from './../Data/albums';

class Album extends Component {
	constructor(props){
		super(props);

		const album = albumData.find(album => {
			return album.slug === this.props.match.params.slug
		});

		this.state = {
			album : album,
			currentSong: album.songs[0],
			isPlaying : false
		};

		this.audioElement = document.createElement('audio');
		this.audioElement.src = album.songs[0].audioSrc;
	}

		play() {
			this.audioElement.play();
			this.setState({ isPlaying: true });
		}

		pause() {
			this.audioElement.pause();
			this.setState({ isPlaying: false });
		}

		setSong(song) {
			this.audioElement.src = song.audioSrc;
			this.setState({ currrentSong: song });
		}

		handleSongClick(song) {
			const isSameSong = this.state.currentSong === song;
			if (this.state.isPlaying && isSameSong) {
				this.pause();
			} else {
				if (!isSameSong) {this.setSong(song); }
				this.play();
			}
		}



		onMouseEnter(index) {
			const index = (isMouseInside);
				this.setState( onMouseEnter: true );
		}

		onMouseLeave(index) {
			const indexTwo = (isMouseInside);
			this.setState( onMouseLeave: true );
		}


	render() {
		
		return (
			
			<section className = "album">
		        <section id = "album-info">
		        
		           <img id = "album-cover-art" src = {this.state.album.albumCover} alt = {this.state.album.title}/>
		           
		           <div className = "album-details">
		             
		             <h1 id = "album-title" > {this.state.album.title}</h1>
		             
		             <h2 className = "artist" > {this.state.album.artist}</h2>
		             
		             <div id = "release-info" > {this.state.album.realeaseInfo}
		             </div>
		           
		           </div>
				
				</section>

		        <table id = "song-list">
			    
			        <div className= "onMouseEnter">
			    
			        	<colgroup>
			        		<col id = "song-number-column" />
			        		<col id = "song-title-column" />
			        		<col id = "song-duration-column" />
			        	</colgroup>
			        	
			        	<tbody>
			        		{this.state.album.songs.map( ( song, index )
				              
				              <tr className = "song" key = { index }  onClick = { () => this.handleSongClick( song )} onMouseEnter = {() => this.onMouseEnter( index )} onMouseLeave = {() => this.onMouseLeave( index )}>		        
				              	<td className = "song-number"> { song.index } <span className = "ion-play"><span className = "ion-pause"> { index + 1 } </span></span></td>
				                
				                <td className = "song-title">{ song.title }</td>
				                
				                <td className = "song-duration">{ song.duration }</td>
				              
				              </tr>
				            )}

	          			</tbody>
	          		</div>
			 	</table>		

		)
	}
};

	export default Album;