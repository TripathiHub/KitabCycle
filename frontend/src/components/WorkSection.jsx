import { Search,
         ShoppingCart,
         BookOpen,
         Recycle,
         ArrowRight
} from "lucide-react"

function WorkSection() {
    const steps = [
        {
            icon: Search,
            title: "1. Find",
            description: "Search for your favourite books or browse categories."
        },
        {
            icon: ShoppingCart,
            title: "2. Buy / Request",
            description: "Connect with sellers and get your book."
        },
        {
            icon: BookOpen,
            title: "3. Read",
            description: "Enjoy your book and learn something new."
        },
        {
            icon: Recycle,
            title: "4. Resell",
            description: "Give your books a new life and earn back."
        }
    ];

    return (
        <section className='work-section'>
            <div className="work-section-header">
                <h2>How KitabCycle Works</h2>
                <p>Simple steps to get your next book</p>
            </div>
            <div className="work-section-grid">
                {steps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                        <div className="work-step" key={step.title}>
                            <div className="work-step-icon">
                                <Icon size={25} />
                            </div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                            {index < steps.length - 1 && (
                                <ArrowRight className="work-step-arrow" size={20} />
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default WorkSection