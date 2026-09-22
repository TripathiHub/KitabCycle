import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import background from "../assets/background_for_hero.jpg";
export default function Hero() {
    return (
        <>
            <section className='hero' style={{ backgroundImage: `url(${background})` }}>
                <div className="hero-content">
                    <p className='hero-tagline'>
                        Used Books . New Stories.
                    </p>
                    <h1>Buy.Read.<span>Resell.Repeat</span></h1>
                    <p className='hero-description'>
                        Find affordable second-hand books from students around you.
                        Buy what you need and give your old books a new reader.
                    </p>
                    <div className="hero-search">
                        <Search size={40} />
                        <input type="text" placeholder='Search for books, authors or subjects...' />
                        <button type="button">Search</button>
                    </div>
                    <div className="hero-actions">
                        <Link to="/books" className="hero-btn-primary">
                            Browse Books
                        </Link>

                        <Link to="/sell" className="hero-btn-secondary">
                            Sell Your Books
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
