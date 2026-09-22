import { Link } from "react-router-dom";
import { ArrowRight, Heart } from "lucide-react";
function FeaturedBooks() {
    const books = [
        {
            id: 1,
            title: "Database Management System",
            author: "Raghu Ramakrishnan",
            price: 250,
            condition: "Good",
            category: "Engineering"
        },
        {
            id: 2,
            title: "Java: The Complete Reference",
            author: "Herbert Schildt",
            price: 300,
            condition: "Like New",
            category: "Programming"
        },
        {
            id: 3,
            title: "Data Structures",
            author: "Seymour Lipschutz",
            price: 200,
            condition: "Good",
            category: "Engineering"
        },
        {
            id: 4,
            title: "The Alchemist",
            author: "Paulo Coelho",
            price: 180,
            condition: "Like New",
            category: "Novels"
        },
        {
            id: 5,
            title: "Concepts of Physics",
            author: "HC Verma",
            price: 220,
            condition: "Good",
            category: "School"
        }
    ];
  return (
    <section className='featured-books'>
            <div className='featured-books-header'>
                <div className="tagline">
                    <h2>Featured Books</h2>
                    <p>Handpicked books from our community</p>
                </div>
                <Link to="/books" className="view-all-books">
                    View all categories <ArrowRight size={16} />
                </Link>
            </div>

            <div className="featured-books-grid">
                {books.map((book) => {
                    return (
                        <Link
                            to={`/books/${book.id}`}
                            className="featured-books--card"
                            key={book.id}
                        >
                            <div className="book-cover">
                                <button 
                                className="wishlist-btn"
                                onClick={(e)=> e.preventDefault()}
                                aria-label="Add to wishlist"
                                >
                               <Heart/>
                                </button>
                                <span>will fetch book cover...</span>
                            </div>
                            <div className="featured-books-info">
                                <h3>{book.title}</h3>
                                <p className="book-author">{book.author}</p>
                                <p className="book-condition">{book.condition}</p>
                                <p className="book-price">{book.price}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
  )
}

export default FeaturedBooks