import React from 'react'
import { Link } from 'react-router-dom'


function indexcomponent() {
  return (
    <div>
      <nav className='navv'>
      <div className="navv__logo">OnlyVACATION.com</div>
      <ul className="navv__links">
        <li className="links"><a href="#">Home</a></li>
        <li className="links"><Link to="/booking">Book</Link></li>
        <li className="links"><Link to="/blog">blog</Link></li>
        <li className="links"><Link to="/aboutus">About Us</Link></li>
      </ul>
    </nav>
    <header className="section__container header__container">
      <div className="header__image__container">
        <div className="header__content">
        <Link to="/blog"><h1>Enjoy Your Dream Vacation</h1></Link>
          <p>Book Hotels, Flights and stay packages at lowest price.</p>
        </div>
        <div className="booking__container"> 
          <button className="btn">REGISTER & BOOK NOW</button> 
        </div>
      </div>
    </header>

    <section className="section__container popular__container">
      <h2 className="section__header">Popular Hotels</h2>
      <div className="popular__grid">
        <div className="popular__card">
          <img src="assests/hotel-1.jpg" alt="popular hotel" />
          <div className="popular__content">
            <div className="popular__card__header">
              <h4>Pattaya Hotal-1</h4>
              <h4>$499</h4>
            </div>
            <p>Pattaya</p>
          </div>
        </div>
        <div className="popular__card">
          <img src="assests/hotel-2.jpg" alt="popular hotel" />
          <div className="popular__content">
            <div className="popular__card__header">
              <h4>Pattaya Hotal-2</h4>
              <h4>$549</h4>
            </div>
            <p>Pattaya</p>
          </div>  
        </div>
        <div className="popular__card">
          <img src="assests/hotel-3.jpg" alt="popular hotel" />
          <div className="popular__content">
            <div className="popular__card__header">
              <h4>Pattaya Hotal-3</h4>
              <h4>$599</h4>
            </div>
            <p>Pattaya</p>
          </div>
        </div>
        <div className="popular__card">
          <img src="assests/hotel-4.jpg" alt="popular hotel" />
          <div className="popular__content">
            <div className="popular__card__header">
              <h4>Pattaya Hotal-4</h4>
              <h4>$449</h4>
            </div>
            <p>Pattaya</p>
          </div>
        </div>
        <div className="popular__card">
          <img src="assests/hotel-5.jpg" alt="popular hotel" />
          <div className="popular__content">
            <div className="popular__card__header">
              <h4>Pattaya Hotal-5</h4>
              <h4>$649</h4>
            </div>
            <p>Pattaya</p>
          </div>
        </div>
        <div className="popular__card">
          <img src="assests/hotel-6.jpg" alt="popular hotel" />
          <div className="popular__content">
            <div className="popular__card__header">
              <h4>Pattaya Hotal-6</h4>
              <h4>$549</h4>
            </div>
            <p>Pattaya</p>
          </div>
        </div>
      </div>
    </section>

    <section className="client">
      <div className="section__container client__container">
        <h2 className="section__header">What our client say</h2>
        <div className="client__grid">
          <div className="client__card">
            <img src="assests/client-1.jpg" alt="client" />
            <p>
              The booking process was seamless, and the confirmation was
              instant. I highly recommend WDM&Co for hassle-free hotel bookings.
            </p>
          </div>
          <div className="client__card">
            <img src="assests/client-2.jpg" alt="client" />
            <p>
              The website provided detailed information about hotel, including
              amenities, photos, which helped me make an informed decision.
            </p>
          </div>
          <div className="client__card">
            <img src="assests/client-3.jpg" alt="client" />
            <p>
              I was able to book a room within minutes, and the hotel exceeded
              my expectations. I appreciate WDM&Co's efficiency and reliability.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="section__container">
      <div className="reward__container">
        <p>100+ discount codes</p>
        <h4>Join rewards and discover amazing discounts on your booking</h4>
        <button className="reward__btn">Join Rewards</button>
      </div>
    </section>

    <footer className="footer">
      <div className="section__container footer__container">
        <div className="footer__col">
          <h3>OnlyVACATION.com</h3>
          <p>
            OnlyVACATION.com is a premier hotel booking website that offers a seamless and
            convenient way to find and book accommodations worldwide.
          </p>
          <p>
            With a user-friendly interface and a vast selection of hotels,
            OnlyVACATION.com aims to provide a stress-free experience for travelers
            seeking the perfect stay.
          </p>
        </div>
        <div className="footer__col">
          <h4>Company</h4>
          <p>About Us</p>
          <p>Our Team</p>
          <p>Blog</p>
          <p>Book</p>
          <p>Contact Us</p>
        </div>
        <div className="footer__col">
          <h4>Legal</h4>
          <p>FAQs</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className="footer__col">
          <h4>Resources</h4>
          <p>Social Media</p>
          <p>Help Center</p>
          <p>Partnerships</p>
        </div>
      </div>
      <div className="footer__bar">
        Gowtham A Ui/Ux & MERN-STACK developer. <br /> +91 934 562 6417.
      </div>
    </footer>
    </div>
  )
} 

export default indexcomponent
