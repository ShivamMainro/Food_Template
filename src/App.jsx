import React, { useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import Bar from "./Components/Bar";
import Barright from "./Components/Barright";
import Chef_pf from "./Components/Chef_pf";
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  // const [menuOpen, setMenuOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const pg3_data = [
    {
      src: "public/img/pg3-food1.png",
      title: "Old Fashioned Oatmeal",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam autem commodi voluptatem facere quis tenetur.",
      desc: "Read More",
    },
    {
      src: "public/img/pg3-food2.png",
      title: "Cranberry Pancake",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam autem commodi voluptatem facere quis tenetur.",
      desc: "Read More",
    },
    {
      src: "public/img/pg3-food3.png",
      title: "Classic Omelette",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam autem commodi voluptatem facere quis tenetur.",
      desc: "Read More",
    },
  ];

  const menu_left = [
    {
      title: "Classic Omelette",
      price: "$15.00",
      underscore: "_______________",
    },
    {
      title: "Cranberry Pancake",
      price: "$10.00",
      underscore: "___________",
    },
    {
      title: "Classic Pesto",
      price: "$11.50",
      underscore: "____________________",
    },
    {
      title: "Spagheti Italian Style",
      price: "$12.13",
      underscore: "__________",
    },
  ];
  const pg5_data = [
    {
      src: "public/img/chef_1.png",
      title: "Dan Larsson",
      desc: "Executive Chef",
    },
    {
      src: "public/img/chef_2.png",
      title: "Dana Sonlar",
      desc: "Executive Chef",
    },
    {
      src: "public/img/chef_3.png",
      title: "Deane Lars",
      desc: "Executive Chef",
    },
  ];
  const pg8_data = [
    {
      src: "public/img/pg3-food1.png",
      title: "Cooking Perfect Fried Rice in minutes",
      body: "Integer maximus accumsan nunc, sit ipsum id aliquam varius. Etiam la...",
      desc: "Feb 24, 2020 | Category | 4 Comments",
      rang_t: "pink",
      rang_b: "white",
      rang_d: "pink",
    },
    {
      src: "public/img/pg3-food2.png",
      title: "Secret of making Heart Shaped Eggs",
      body: "Integer maximus accumsan nunc, sit ipsum id aliquam varius. Etiam la...",
      desc: "Feb 24, 2020 | Category | 4 Comments",
      rang_t: "pink",
      rang_b: "white",
      rang_d: "pink",
    },
    {
      src: "public/img/pg3-food3.png",
      title: "How to check steak if it is tender or not",
      body: "Integer maximus accumsan nunc, sit ipsum id aliquam varius. Etiam la...",
      desc: "Feb 24, 2020 | Category | 4 Comments",
      rang_t: "pink",
      rang_b: "white",
      rang_d: "pink",
    },
  ];

  function scrollToHome() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function scrollToAbout() {
    if(window.innerWidth > 500){
      window.scrollTo({
        top: 704,
        behavior: "smooth",
      });
    }
    else{
      window.scrollTo({
        top: 427,
        behavior: "smooth",
      });
    }
    
  }

  function scrollToMenu() {
    if(window.innerWidth > 500){
      window.scrollTo({
        top: 2500,
        behavior: "smooth",
      });
    }
    else{
      window.scrollTo({
        top: 3000,
        behavior: "smooth",
      });
    }
  }

  function scrollToChef() {
    if(window.innerWidth > 500){
      window.scrollTo({
        top: 3650,
        behavior: "smooth",
      });
    }
    else{
      window.scrollTo({
        top: 4002,
        behavior: "smooth",
      });
    }
  }

  function scrollToNews() {
    if(window.innerWidth > 500){
      window.scrollTo({
        top: 5788,
        behavior: "smooth",
      });
    }
    else{
      window.scrollTo({
        top: 6900,
        behavior: "smooth",
      });
    }
  }

  function scrollToReserve() {
    if(window.innerWidth > 500){
      window.scrollTo({
        top: 4400,
        behavior: "smooth",
      });
    }
    else{
      window.scrollTo({
        top: 5800,
        behavior: "smooth",
      });
    }
  }

  function scrollToContact() {
    if(window.innerWidth > 500){
      window.scrollTo({
        top: 6100,
        behavior: "smooth",
      });
    }
    else{
      window.scrollTo({
        top: 8690,
        behavior: "smooth",
      });
    };
  }

  return (
    //fargment
    <>
      <div className="master">
        {/* page 1 */}
        <div className="page-1">
          <nav className="navbar">
            <div className="logo">
              <img src="img/Logo.png" alt="" className="logo-img" />
            </div>
            <div
              className={`hamburger ${isOpen ? "open" : ""}`}
              onClick={toggleMenu}
            >
              ☰
            </div>
            <ul className={`nav-links ${isOpen ? "open" : ""}`}>
              <li>
                <a href="#home" onClick={scrollToHome}>HOME</a>
              </li>
              <li>
                <a href="#about" onClick={scrollToAbout}>ABOUT US</a>
              </li>
              <li>
                <a href="#menu" onClick={scrollToMenu}>MENU</a>
              </li>
              <li>
                <a href="#reservations" onClick={scrollToReserve}>RESERVATIONS</a>
              </li>
              <li>
                <a href="#news" onClick={scrollToNews}>NEWS</a>
              </li>
              <li>
                <a href="#contact" onClick={scrollToContact}>CONTACT</a>
              </li>
            </ul>
          </nav>

          <div className="pg1-lv1">
            <h2>Discover</h2>
            <h2>
              A NEW LEVEL <br /> OF TASTE
            </h2>
          </div>

          <div className="pg1-lv2">
            <div className="interact">
              <h3>Come and eat well with our delicious & healthy foods.</h3>
              <button onClick={scrollToMenu}>Show Menu</button>
            </div>
          </div>
        </div>

        {/* page 2 */}

        <div className="page-2">
          <div className="pg2-design">
            <img className="d-t" src="public/img/design-top.png" alt="" />
            <img className="d-b" src="public/img/design-btm.png" alt="" />
          </div>

          <div className="pg2-img">
            <div className="pg2-head">
              <h2>THE</h2>
              <h2>RESTAURANT</h2>
            </div>
            <img
              className="pg2-behind"
              src="public/img/pg2-behind.png"
              alt=""
            />
            <img className="pg2-front" src="public/img/pg2-front.png" alt="" />
          </div>
          <div className="pg2-txt">
            <div className="interact-2">
              <p>
                Your website is almost ready. Simply click this text to edit.
                Tell your audience about the unique story of your product or
                service.
              </p>
              <button onClick={scrollToChef}>Read More</button>
            </div>
          </div>
        </div>

        {/* page-3 */}

        <div className="page-3">
          <div className="pg3-head">
            <h2>
              <span id="what">What</span> <span>we Make</span>
            </h2>
            <h3>Come and eat well with delicious and healthy foods.</h3>
          </div>

          <div className="cards">
            {pg3_data.map((data, index) => (
              <Card
                key={index}
                src={data.src}
                title={data.title}
                body={data.body}
                desc={data.desc}
                rang_t={data.rang_t}
                rang_b={data.rang_b}
              />
            ))}
          </div>
        </div>

        {/* page-4 */}

        <div className="page-4">
          <div className="pg4-up">
            <h2>DELICIOUS & NUTRITIOUS</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
              animi! Cumque quasi tempora dolorum magnam.
            </p>
          </div>

          <div className="pg4-down">
            <div className="dessign">
              <img src="public/img/design-top.png" alt="" className="d-top" />
              <img src="public/img/design-btm.png" alt="" className="d-btm" />
            </div>

            <div className="menu">
              <h2>Delicious Menu</h2>

              <div className="menu-contents">
                <div className="menu-left">
                  {menu_left.map((data, index) => (
                    <Bar
                      key={index}
                      src={data.src}
                      title={data.title}
                      desc={data.desc}
                      price={data.price}
                      underscore={data.underscore}
                    />
                  ))}
                </div>
                <div className="menu-right">
                  {menu_left.map((data, index) => (
                    <Barright
                      key={index}
                      src={data.src}
                      title={data.title}
                      desc={data.desc}
                      price={data.price}
                      underscore={data.underscore}
                    />
                  ))}
                </div>
              </div>
              <p>Come and eat well with our delicious & healthy foods.</p>
              <div className="pg4-button">
                <button className="book" onClick={scrollToReserve}>
                  Book A Table
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* page-5 */}

        <div className="page-5">
          <div className="pg5-head">
            <h2>OUR CHEFS</h2>
            <p>Talent & experience member</p>
          </div>
          <div className="pg5-cards">
            {pg5_data.map((data, index) => (
              <Chef_pf
                key={index}
                src={data.src}
                title={data.title}
                desc={data.desc}
              />
            ))}
          </div>
        </div>

        {/* page-6 */}
        <div className="page-6">
          <div className="pg6-head">
            <h2>MAKE A RESERVATION</h2>
            <p>Come and eat well with our delicious & healthy foods.</p>
          </div>
          <div className="pg6-content">
            <div className="pg6-left">
              <p>
                Him given and midst tree form seas she'd saw give evening one
                every make hath moveth you're appear female heaven had signs own
                days saw they're have let midst given him given and midst tree.
                Form seas she'd saw give evening.
              </p>
            </div>
            <form action="">
              <div className="pg6-right">
                <div className="pg6-pd">
                  <div className="pg6-people">
                    <label for="people">People</label> <br />
                    <select id="people" required>
                      <option value="1">1</option>
                      <option value="2" selected>
                        2
                      </option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select>
                  </div>
                  <div className="pg6-date">
                    <label for="date">Date</label> <br />
                    <input type="date" id="date" required />
                  </div>
                </div>
                <div className="pg6-tb">
                  <div className="pg6-t">
                    <label for="time">Time</label> <br />
                    <input type="time" id="time" required />
                  </div>
                  <div className="pg6-b">
                    <input
                      className="pg6-btn"
                      type="submit"
                      value="Book Seats"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* page-7 */}

        <div className="page-7">
          <img className="pg7-dt" src="public/img/design-top.png" alt="" />
          <img className="pg7-db" src="public/img/design-btm.png" alt="" />

          <div className="pg7-hero">
            <div className="pg7-left">
              <img className="imz" src="public/img/waffle.png" alt="" />
            </div>
            <div className="pg7-right">
              <div className="pg7-rtop">
                <img
                  className="omelette"
                  src="public/img/omelette.png"
                  alt=""
                />
              </div>
              <div className="pg7-rbtm">
                <h3>A New Level Of Taste</h3>
                <p>
                  Trifold brochures have long been a type of material used to
                  services. The best way to its use is to introduce.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* page-8 */}

        <div className="page-8">
          <div className="pg8-head">
            <h2>LATEST FOOD & RECIPE NEWS</h2>
          </div>
          <div className="pg8-cards">
            {pg8_data.map((data, index) => (
              <Card
                key={index}
                src={data.src}
                title={data.title}
                body={data.body}
                desc={data.desc}
                rang_t={data.rang_t}
                rang_b={data.rang_b}
                rang_d={data.rang_d}
              />
            ))}
          </div>
        </div>

        {/* footer */}

        <div className="footer">
          <div className="fc1">
            <img src="public\img\fLogo.png" alt="" />
            <h2>
              HAPPINESS IS <br /> <span>HOMEMADE</span>
            </h2>
            <p>
              Integer maximus accumsan nunc, sit amet Vestibulum convallis ipsum
              id aliquam .
            </p>
          </div>
          <div className="fc2">
            <h2>EXPLORE</h2>
            <h3 onClick={scrollToHome}>Home</h3>
            <h3 onClick={scrollToAbout}>About Us</h3>
            <h3 onClick={scrollToMenu}>Menu</h3>
            <h3 onClick={scrollToReserve}>Reservations</h3>
            <h3 onClick={scrollToNews}>News</h3>
            <h3 onClick={scrollToContact}>Contact</h3>
          </div>
          <div className="fc3">
            <h2>RESERVE NOW!</h2>
            <div className="details">
              <h4>123 Anywhere St., Any City, ST 12345</h4>
              <h4>+123-456-7890</h4>
              <h4>hello@brunchplace.com</h4>
              <h4>www.brunchplace.com</h4>
            </div>

            <img src="public\img\Social Media.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
