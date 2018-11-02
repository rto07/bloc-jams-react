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

		onMouseEnter( index ) {
			var index = "isMouseInside";
			( this.setState.isHovered: true, this.state.isPlaying );
				return onMouseEnter= this.mouseEnter;
		}

		onMouseLeaving() {
			( this.state.isHovered, this.setState.play: false );
				return onMouseLeaving= this.mouseLeave;
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

			                  	onClick = {() => this.handleSongClick( song ) }

								onHover = {() => this.onMouseEnter( index ) }
								
								onHover = {() => this.onMouseLeaving()}
							>

					        	< td 
					              	className = "song-actions"
					              		< span className = "ion-play" > className = "song-number" >this.onMouseEnter < /span >
					              		< span className = "ion-pause" > className = "song-number" >this.onMouseLeaving < /span >
					            > 	< /td >

					                < td >
					                	className = "song-title" >{ song.title }
					                < /td >
					                
					                < td >
					                	className = "song-duration">{ song.duration }
					                < /td >
					              
				              < /tr >
				            )}

	          			< /tbody >
			 	< /table >		
			< /section >
		)
	}
};

	export default Album;



	//* Your event listeners should be placed alongside side this.handleSongClick():

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
onMouseEnter={() => this.onMouseEnter( index )}

You should not have a `setState()` method in the block above `this.setState({ isHovered = true; })`  
You can set the `isHovered` state inside the event handlers `onMouseEnter( index)`  and `onMouseLeave()` (the functions)
Also, do you see the way you are setting up the `onClick` event listener? `onClick = {() => this.handleSongClick(song)}`
This is the same way you should set up the event listeners for `mouseEnter` and `mouseLeave`
All other code in that block is unnecessary*//