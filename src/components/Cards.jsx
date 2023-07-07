import { useState } from "react";
import Image1 from "../assets/canada.jpg";
import Image2 from "../assets/usa.jpg";
import Image3 from "../assets/españa.jpg";
import Image4 from "../assets/rusia.jpg";
import "material-symbols"
import "../styles.css";


const items = [
    {
        header: "Canada",
        image: Image1,
        text: 'image description here'
    },
    {
        header: "USA",
        image: Image2,
        text: 'image description here'
    },
    {
        header: "España",
        image: Image3,
        text: 'image description here'
    },
    {
        header: "Rusia",
        image: Image4,
        text: 'image description here'
    }
]

export default function Cards() {
    const [active, setActive] = useState(0);
    return (
        <>
        <section>
            {items.map((card, index) => (
                 <article key={index}
                 className={
                     active === index ? "active" : ""

                 }
                 onClick={() => setActive(index)}
             >
                 <img src={card.image}/> 
                 <div className="content">
                    <span className="material-symbols-outlined">
                        photo_camera
                    </span>
                    <div>
                        <h2>{card.header}</h2>
                        <p>{card.text}</p>
                    </div>
                 </div>
                </article>
            ))}
        </section>
        </>

    )
}