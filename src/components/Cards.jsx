import { useState } from "react";
import Image1 from "../assets/canada.jpg";
import Image2 from "../assets/usa.jpg";
import Image3 from "../assets/españa.jpg";
import Image4 from "../assets/rusia.jpg";

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
    return (
        <>
        <section>
            {items.map((card, index)) => (
                 <article key={index}
                 className={
                     active === index ? "active" : ""

                 }
                 onClick={() => setActive(index)}
             >
                 <img src={Cards.image}/> 
                 <div className="content">
                    <span>
                        photo_camera
                    </span>
                    <div>
                        <h2>{card.header}</h2>
                        <p>{card.text}</p>
                    </div>

                 </div>

            )


            }
        </section>
        </>
    )
}