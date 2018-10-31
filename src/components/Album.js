import React, { Component } from 'react';
import albumData from './../Data/albums';

{/* Your event listeners should be placed alongside side this.handleSongClick():

Move them from here:

`<td className = "song-number"> <span className = "ion-play" this.onMouseEnter ><span className = "ion-pause" this.onMouseLeave>{index + 1}</span></span></td>`

To here:

 `<tr className = "song" key = {index} onClick = {() => this.handleSongClick(song)} >`

You should not attempt to return a <span> alongside the event listeners.

This is the approach you should take:

1. add event listeners ONLY to the <tr> tag. 
2. Pass parameter index into onMouseEnter()
3. In onMouseEnter(index) assign index to `isMouseInside`
4. Do not call `handleSongClick` inside onMouseEnter() and onMouseLeave()

We can go through the logic to display icons in a <span> after. They will be part of a <td> tag 

I would look up how to formulate event listeners. This is the proper way:

onClick = {() => this.handleSongClick( song )}    
onMouseEnter={() => this.onMouseEnter( index )}*/}

class Album extends Component {
	constructor(props){
		super(props);

		const album = albumData.find(album => {
			return album.slug === this.props.match.params.slug
		});

		this.state = {
			album : album,
			currentSong: album.songs[0],
			isPlaying : false,
			isHovered : false
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

		onMouseEnter( index) {
			var index = "isMouseInside";
			if ( this.setState.isHovered = true && this.state.currentSong ) {
					onClick( this.play );
			}
		}

		onMouseLeaving( index ) {
			if ( this.setState.isHovered = false && this.state.currentSong ) {
					onClick(this.pause );
			}
		}

	render() {
		
		return (

			
			< section className = "album">
		       
		        < section id = "album-info">
		        
		           < img id = "album-cover-art" src = { this.state.album.albumCover } alt = { this.state.album.title } />
		           
		           < div className = "album-details" >
		             
		             < h1 id = "album-title" > { this.state.album.title }< /h1 >
		             
		             < h2 className = "artist" > { this.state.album.artist }< /h2 >
		             
		             < div id = "release-info" > { this.state.album.realeaseInfo }
		             < /div >
		           
		           < /div >
				
				< /section >

		        <table id = "song-list">
			    			    
			        	< colgroup >

			        		< col id = "song-number-column" />
			        		< col id = "song-title-column" />
			        		< col id = "song-duration-column" />

			        	< /colgroup >
			        	
			        	< tbody >

			        		{this.state.album.songs.map( ( song, index ) => (
				              
			                < tr 
			                  	className="song" 
			                  	key={index} 
			                  	onClick = {() => this.handleSongClick(song)}

			                   	this.setState({ isHovered = true; })

			                    document.getElementById(" song-list ").addEventListener("mouseEnter", onMouseEnter(isMouseInside));>
			                   	
			                   	this.setState({ isHovered: false; })}

			                    document.getElementById(" song-list ").addEventListener("mouseLeave", onMouseLeave);>
			                }

				             < td 
				              		className = "song-actions"> 
				              		{''}
				              		{ this.state.isPlaying ? (
				              			< span >
				              				{''}
				              				{this.state.currentSong.title === song.title ? (
						                <span className="ion-pause" />
						              ) : (
						                < span >
						                	{index + 1}</span>
						              		)}
						            	< /span >
						          		) : this.state.isHovered === index + 1 ? (
						            < span className="ion-play" />
						          ) : (
						            < span className="song-number">{index + 1}< /span >
						          )}
						        < /td >
				                
				                < td 
				                	className = "song-title">{ song.title }
				                < /td >
				                
				                <td 
				                	className = "song-duration">{ song.duration }
				                </td>
				              
				              </tr>
				            ))}

	          			</tbody>
			 	</table>		
			</section>
		)
	}
};

	export default Album;