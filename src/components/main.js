import './main.css';
import { musics } from '../musics';

export default function Main() {
    return (
        <main>
            <h1>The best play list</h1>
            <div className='line'></div>
            <div className='musics'>
                {musics.map((music) => (
                    <div className='music' key={music.id}>
                        <img className='cover' src={music.cover} alt='capa'></img>
                        <h2>{music.title}</h2>
                        <p>{music.description}</p>
                    </div>
                ))}
            </div>
        </main>
    )
}