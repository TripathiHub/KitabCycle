
import {
    Settings2,
    Stethoscope,
    GraduationCap,
    BookOpen,
    Target,
    Code2,
    LayoutGrid,
    ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
function Categories() {
    const categories = [
        {
            name: "Engineering",
            icon: Settings2,
            link: "/books?category=engineering"
        },
        {
            name: "Medical",
            icon: Stethoscope,
            link: "/books?category=medical"
        },
        {
            name: "School",
            icon: GraduationCap,
            link: "/books?category=school"
        },
        {
            name: "Novel",
            icon: BookOpen,
            link: "/books?category=novel"
        },
        {
            name: "Competitive Exams",
            icon: Target,
            link: "/books?category=competitive"
        },
        {
            name: "Programming",
            icon: Code2,
            link: "/books?category=programming"
        },
        {
            name: "Others",
            icon: LayoutGrid,
            link: "/books?category=others"
        }
    ];
    return (
        <section className='categories'>
            <div className='categories-header'>
                <div className="tagline">
                    <h2>Popular Categories</h2>
                    <p>Find books in your favourite subjects</p>
                </div>
                <Link to="/categories" className="view-all-link">
                    View all categories <ArrowRight size={16} />
                </Link>
            </div>

            <div className="category-grid">
                {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                        <Link
                            to={category.link}
                            className="category-card"
                            key={category.name}
                        >
                            <div className="category-icon">
                                <Icon size={24} />
                            </div>
                            <h3>{category.name}</h3>
                        </Link>
                    );
                })}
            </div>
        </section>
    )
}

export default Categories