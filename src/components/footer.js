import './footer.css';
import { useRef, useState } from 'react';
import { musics } from '../musics';
import next from '../assets/next.svg';
import pause from '../assets/pause.svg';
import play from '../assets/play.svg';
import stop from '../assets/stop.svg';
import previous from '../assets/previous.svg';


export default function Footer() {
    const audioRef = useRef(null);
    const [count, setCount] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false)

    function handlePlay() {
        audioRef.current.play();
        setIsPlaying(true);
    }

    function handlePause() {
        audioRef.current.pause();
        setIsPlaying(false);
    }

    function handleStop() {
        audioRef.current.pause();
        setIsPlaying(false);
        audioRef.current.currentTime = 0;
    }

    function handlePrevious() {
        let localCount = count - 1;

        if (localCount < 0)
            localCount = musics.length - 1;

        setCount(localCount);
        setIsPlaying(false);
    }

    function handleNext() {
        let localCount = count + 1;

        if (localCount >= musics.length)
            localCount = 0

        setCount(localCount);
        setIsPlaying(false);
    }

    return (
        <footer>
            <audio src={musics[count].url} ref={audioRef}></audio>
            <div className='music-info'>
                <h1>{isPlaying && musics[count].title}</h1>
                <span>{isPlaying && musics[count].artist}</span>
            </div>
            <div className='music-btns'>
                <div className='btns'>
                    <img onClick={handleStop} src={stop} alt='stop'></img>
                    <img onClick={handlePrevious} src={previous} alt='previous'></img>
                    <img className='play' onClick={isPlaying ? handlePause : handlePlay} src={!isPlaying ? play : pause} alt='play / pause'></img>
                    <img onClick={handleNext} src={next} alt='next'></img>
                </div>
                <div className='music-time'></div>
            </div>
        </footer >
    );
}