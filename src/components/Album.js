import React, { Component } from 'react';
import albumData from './../Data/albums';
import PlayerBar from './PlayerBar';


class Album extends Component {
    constructor(props) {
        super(props);


        const album = albumData.find(album => {
            return album.slug === this.props.match.params.slug
        });

        this.state = {
           	album: album,
            currentSong: album.songs[0],
            currentTime: 0,
            duration: album.songs[0].duration,
            isPlaying: false,
            isHovered: false,
            currentVolume: 1.0,
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

    componentDidMount() {
    	this.eventListeners = {
    		timeupdate: e => {
    			this.setState({currentTime: this.audioElement.currentTime});
    		},
    		durationchange: e => {
    			this.setState({duration: this.audioElement.duration});
    		},
    		volumechange: e => {
    			this.setState({currentVolume: this.audioElement.currentVolume});
    		}
    	};
    	this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
    	this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
    	this.audioElement.addEventListener('volumechange', this.eventListeners.volumechange);
    }

    componentWillUnmount() {
    	this.audioElement.src = null;
    	this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
    	this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
    	this.audioElement.removeEventListener('volumechange', this.eventListeners.volumechange);
    }

    setSong(song) {
        this.audioElement.src = song.audioSrc;
        this.setState({ currentSong: song });
    }

    handleSongClick(song) {
        const isSameSong = this.state.currentSong === song;
        if (this.state.isPlaying && isSameSong) {
            this.pause();
        } else {
            if (!isSameSong) { this.setSong(song); }
            this.play();
        }
    }

    onMouseEnter(index) {
        this.setState({ isHovered: index });
    }

    onMouseLeave() {
        this.setState({ isHovered: false });
    }

    isHovered(song, index) {
        if (this.state.isHovered === song) {
            return (<span className="icon ion-md-play"></span>);
        } else if (this.state.currentSong === song && this.state.isPlaying) {
            return (<span className="icon ion-md-pause"></span>);
        } else if (this.state.isHovered === index && !this.state.isPlaying) {
            return (<span className="icon ion-md-play"></span>);
        } else {
            return (index + 1);

        }
    }

    handlePrevClick() {
        const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);

        const newIndex = Math.max(0, currentIndex - 1);

        const newSong = this.state.album.songs[newIndex];

        this.setSong(newSong);

        this.play();
    }

    handleNextClick() {
        const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);

        const newIndex = Math.max(0, currentIndex + 1);

        const newSong = this.state.album.songs[newIndex];

        this.setSong(newSong);

        this.play();
    }

    handleTimeChange(e) {
    	const newTime = this.audioElement.duration * e.target.value;
    	
    	this.audioElement.currentTime = newTime;
    	
    	this.setState({currentTime: newTime});
    }

	handleVolumeChange(e) {
		const newVolume = this.audioElement.volume * e.target.value;
		
		this.audioElement.currentVolume = newVolume;
		
		this.setState({currentVolume: newVolume});
	}

	formatTime(time) {
		var minutes = Math.floor(time / 60);
   		var seconds = Math.floor(time % 60);
		if (time === isNaN) return ("-:--")
        else return (seconds < 10 ? (`${minutes}:0${seconds}`) : (`${minutes}:${seconds}`));
		

	}


    render() {

        return (

            <section className="album">

                <section id="album-info">

                    <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title} />

                    <div className="album-details">
                        <h1 id="album-title">{this.state.album.title}</h1>
                        <div className="artist">{this.state.album.artist}</div>
                        <div id="release-info">{this.state.album.releaseInfo}</div>
                    </div>

                </section>

                <table id="song-list">
                    
                    <colgroup>
                        <col id="song-number-column" />
                        <col id="song-title-column" />
                        <col id="song-duration-column" />
                    </colgroup>
                   
                    <tbody>
                        {this.state.album.songs.map((song, index) =>
                            
                            <tr className="song" key={index}

                                onClick={() => this.handleSongClick(song)}

                                onMouseEnter={() => this.onMouseEnter(index)}
                                onMouseLeave={() => this.onMouseLeave(index)} >
                                <td>{this.isHovered(song, index)}</td>
                                <td>{song.title}</td>
                                <td>{song.duration}</td>
                            </tr>
                        )
                        }
                    </tbody>
               
                </table>
                

                <PlayerBar 
                	
                	isPlaying = {this.state.isPlaying}

                	currentSong = {this.state.currentSong} 

                	currentTime = {this.audioElement.currentTime}

                	duration = {this.audioElement.duration}

                	currentVolume = {this.audioElement.currentVolume}

                	handleSongClick = {() => this.handleSongClick(
                		this.state.currentSong)}

                	handlePrevClick = {() => this.handlePrevClick()}

               		handleNextClick = {() => this.handleNextClick()}

               		handleTimeChange={(e) => this.handleTimeChange(e)}

               		handleVolumeChange={(e) => this.handleVolumeChange(e)}

               		formatTime={(e) => this.formatTime(e)}
                />

			<div className="footer">
				<footer>
				</footer>
			 </div>

            </section>
        );
    };
}

export default Album;