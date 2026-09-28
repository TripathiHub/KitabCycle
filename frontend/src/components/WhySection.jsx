import { IndianRupee, UsersRound , Leaf } from "lucide-react";

export default function WhySection() {
    const whySteps =[
        {
         icon : IndianRupee,
         name :  "Affordable",
         description : "Gey quality book at lower price"
        },
        {
            icon: UsersRound,
            name: "Student Focused",
            description: "Built for students, by students."
        },
        {
            icon: Leaf,
            name: "Sustainable",
            description: "Reduce waste. Save the planet."
        },
        {
            icon: UsersRound,
            name: "Community Driven",
            description: "Support your peers and grow together."
        }
    ]
  return (
    <section className='why-section'>
        <div className="why-section-header">
            <h2>Why KitabCycle ?</h2>
            <p>More than just a book market</p>
        </div>
        <div className="why-section-grid">
             {
                whySteps.map((step)=>{
                    const Icon = step.icon
                  return(
                    <div className="step" key={step.name}>
                        <div className="step-icon">
                             <Icon size={21} strokeWidth={2.2}/>
                        </div>
                       
                       <div className="step-content">
                        <div className="step-heading">
                            {step.name}
                        </div>
                        <p>{step.description}</p>
                       </div>
                    </div>
                  )  
                }
                )
             }
        </div>
    </section>
  )
}
