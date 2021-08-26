import React from 'react'
import './Testimonicals.css'
export default function Testimonicals() {
    return (
        <section className="testimonials" id="testimonials">
        <div className="title white">
            <h2 className="title-text">They <span>S</span>aid About Us</h2>
        </div>
        <div>
            <div className="content">
                <div className="box">
                    <div className="imgBx">
                        <img src="https://media.gettyimages.com/photos/he-is-in-his-element-when-cooking-picture-id1181904833" />
                    </div>
                    <div className="text">
                        <h3>MARCOS GRANADOS</h3>
                        <p>A good crockery always enhances food presentation. In the case of
Churchill, that added bonus gives us a different perspective, since
the designs and colours give multiple possibilities of presentation,
something that you don’t find in other brands</p>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBx">
                        <img src="https://media.gettyimages.com/photos/check-out-counter-in-the-bakery-picture-id628092942" />
                    </div>
                    <div className="text">
                        <h3>BERTL SEEBACHER</h3>
                        <p>Standstill is regressive - the continuous new product development reminds us of chefs.... The product ranges by Churchill are so wide that they can cater for all concepts - from alpine, soul food to fine food</p>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBx">
                        <img src="https://media.gettyimages.com/photos/male-chef-garnishing-food-in-kitchen-picture-id877309726" />
                    </div>
                    <div className="text">
                        <h3>Danny Garris</h3>
                        <p>I got my large order of Raw Vegan foods in today via UPS and was very impressed with the packaging & freshness as well as the quality of my meals. The Raw Tuna Sandwich was soooo good!! </p>
                    </div>
                </div>


            </div>
        </div>
    </section>
    )
}
