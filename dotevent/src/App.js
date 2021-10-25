import logo from "./logo.svg";
import searchIcon from "./search.svg";
import calenderIcon from "./calender-icon.svg";
import twitterLogo from "./twitter-logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import HeroImage from "./Frame.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import "./App.css";
import Footer from "./Footer";
import { useState,useEffect  } from 'react' 
import axios from 'axios';
function App() {
  const [locations, setlocations] = useState([]);
  const [names, setnames] = useState([]);
  const [cards, setcards] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3200/locations')
  .then(function (response) {
   setlocations(response.data.data)
  })
  axios.get('http://localhost:3200/names')
  .then(function (response) {
    setnames(response.data.data)
  })
  axios.get('http://localhost:3200/cards')
  .then(function (response) {
    setcards(response.data.data)
  })
  },[]); 
  return (
    <div className="App">
      <header className="App-header">
        <Navbar collapseOnSelect expand="lg">
          <Container>
            <Navbar.Brand href="/home">
              <img src={logo} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="customNav">
                <Nav.Link href="/features">General</Nav.Link>
                <Nav.Link href="/pricing">Meetup</Nav.Link>
                <Nav.Link href="/pricing">AMA</Nav.Link>
                <Nav.Link href="/pricing">Event</Nav.Link>
                <Nav.Link href="/pricing">Learning</Nav.Link>
                <Nav.Link className="navCta" href="/pricing">
                  Add Conference
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <section className="heroSection">
        <Container>
          <Row>
            <Col md={6}>
              <h1>Find your next tech conference in the Polkadot ecosystem</h1>
              <p>
                Open-source and crowd-sourced list of<br></br> meetup around pulkadot
                ecosystem
              </p>
              <button>Get Started</button>
            </Col>
            <Col md={6}>
              <img src={HeroImage} width="100%" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="searchBar">
        <Container>
          <Row>
            <Col md={12}>
              <div className="searchbarContainer">
                <input
                  type="search"
                  placeholder="Find conferences by name or location"
                />
                <span>
                  <img src={searchIcon} />
                </span>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <div className="filterCard">
                <div className="filterLocation">
                  <div className="filterTitle">Location</div>
                  <div className="searchbarCont">
                    <input type="search" placeholder="Enter location" />
                    <span>
                      <img src={searchIcon} />
                    </span>
                  </div>
                  {locations.map((item,index)=>{
                      return <div className="cityName">     
                      {item.name} <span className="cityCount">1</span>
                    </div>
                    })}
                  
                </div>

                <div className="filterName">
                  <div className="filterTitle">Name</div>
                  <div className="searchbarCont">
                    <input type="search" placeholder="Enter Name" />
                    
                    <span>
                      <img src={searchIcon} />
                    </span>
                    {names.map((item,index)=>{
                      return <div className="cityName">
                      {item.name} <span className="cityCount">1</span>
                    </div>
                    })}
                  </div>
                </div>
              </div>
            </Col>
            <Col md={8}>
              <Row>
                <Col xs={6}>
                  <p>
                    <em>Showing 15 conferences</em>
                  </p>
                </Col>
                <Col xs={6} className="d-flex justify-content-end">
                  <Form.Check
                    inline
                    type="radio"
                    name="group1"
                    aria-label="radio 1"
                    label="In person"
                  />
                  <Form.Check
                    inline
                    type="radio"
                    name="group1"
                    aria-label="radio 2"
                    label="Online"
                  />
                </Col>
              </Row>

              <Row>
              {/* 1st col PARITY TECHNOLOGY*/}
                <Col md={12}>
                  <div className="eventCard">
                    <span className="tag">Online</span>
                    <div className="displayFlex">
                      <div className="eventTitle">Parity Technologies</div>
                      <div className="eventDate">
                        {" "}
                        <img src={calenderIcon} /> 2 Oct - 7 Oct
                      </div>
                    </div>
                    <div className="eventDescription">
                      Offers interpretation to International sign language or
                      closed captions.
                    </div>
                    <div className="twitterUsserName">
                      <img src={twitterLogo} />&nbsp;@ParityTech
                    <span className="codeConduct"><Nav.Link href="/features">Code Of Conduct</Nav.Link></span></div>
                    
                    <button className="hashTag">#Parity Technologies</button>
                  </div>
                </Col>
                {/* 2nd col POLKADOT */}
                <Col md={12}>
                  <div className="eventCard">
                    <span className="tag">Online</span>
                    <div className="displayFlex">
                      <div className="eventTitle">Polkadot</div>
                      <div className="eventDate">
                        
                        <img src={calenderIcon} /> 2 Nov - 7 Nov
                      </div>
                    </div>
                    <div className="eventDescription">
                      Offers interpretation to International sign language or
                      closed captions.
                    </div>
                    <div className="twitterUsserName">
                      <img src={twitterLogo} />&nbsp;@Polkadot
                    <span className="codeConduct">Code Of Conduct</span></div>
                    
                    <button className="hashTag">#Polkadot</button>
                  </div>
                </Col>
                {/* 3rd Rust Network */}
                <Col md={12}>
                  <div className="eventCard">
                    <span className="tag">Online</span>
                    <div className="displayFlex">
                      <div className="eventTitle">Rust Network</div>
                      <div className="eventDate">
                        
                        <img src={calenderIcon} /> 3 Nov - 5 Nov
                      </div>
                    </div>
                    <div className="eventDescription">
                      Offers interpretation to International sign language or
                      closed captions.
                    </div>
                    <div className="twitterUsserName">
                      <img src={twitterLogo} />&nbsp;@CrustNetwork
                    <span className="codeConduct">Code Of Conduct</span></div>
                    
                    <button className="hashTag">#Rust Network</button>
                  </div>
                </Col>
                  {/* 4th Col ACALA  */}

                  <Col md={12}>
                  <div className="eventCard">
                    <span className="tag">Online</span>
                    <div className="displayFlex">
                      <div className="eventTitle">Acala - DeFi Hub of Polkadot</div>
                      <div className="eventDate">
                        
                        <img src={calenderIcon} /> 3 Nov - 5 Nov
                      </div>
                    </div>
                    <div className="eventDescription">
                      Offers interpretation to International sign language or
                      closed captions.
                    </div>
                    <div className="twitterUsserName">
                      <img src={twitterLogo} />&nbsp;@AcalaNetwork
                    <span className="codeConduct">Code Of Conduct</span></div>
                    
                    <button className="hashTag">#Acala</button>
                  </div>
                </Col>
                {/* 5th Col  */}
                <Col md={12}>
                  <div className="eventCard">
                    <span className="tag">Online</span>
                    <div className="displayFlex">
                      <div className="eventTitle">Moonriver Network</div>
                      <div className="eventDate">
                        
                        <img src={calenderIcon} /> 5 Nov - 8 Nov
                      </div>
                    </div>
                    <div className="eventDescription">
                      Offers interpretation to International sign language or
                      closed captions.
                    </div>
                    <div className="twitterUsserName">
                      <img src={twitterLogo} />&nbsp;@MoonriverNW
                    <span className="codeConduct">Code Of Conduct</span></div>
                    
                    <button className="hashTag">#Moonriver Network</button>
                  </div>
                </Col>
                  {/* 6th Col */}

                  {/* 5th Col  */}
                <Col md={12}>
                  <div className="eventCard">
                    <span className="tag">Online</span>
                    <div className="displayFlex">
                      <div className="eventTitle">Karura</div>
                      <div className="eventDate">
                        
                        <img src={calenderIcon} /> 10 Nov - 12 Nov
                      </div>
                    </div>
                    <div className="eventDescription">
                      Offers interpretation to International sign language or
                      closed captions.
                    </div>
                    <div className="twitterUsserName">
                      <img src={twitterLogo} />&nbsp;@KaruraNetwork
                    <span className="codeConduct">Code Of Conduct</span></div>
                    
                    <button className="hashTag">#Karura</button>
                  </div>
                </Col>
                {/* 7th Col  */}
                <Col md={12}>
                  <div className="eventCard">
                    <span className="tag">Online</span>
                    <div className="displayFlex">
                      <div className="eventTitle">Anyswap</div>
                      <div className="eventDate">
                        
                        <img src={calenderIcon} /> 10 Nov - 12 Nov
                      </div>
                    </div>
                    <div className="eventDescription">
                      Offers interpretation to International sign language or
                      closed captions.
                    </div>
                    <div className="twitterUsserName">
                      <img src={twitterLogo} />&nbsp;@AnyswapNetwork
                    <span className="codeConduct">Code Of Conduct</span></div>
                    
                    <button className="hashTag">#Anyswap</button>
                  </div>
                </Col>
                {/* 8th Col */}

                <Col md={12}>
                  <div className="eventCard">
                    <span className="tag">Online</span>
                    <div className="displayFlex">
                      <div className="eventTitle">Shiden Network</div>
                      <div className="eventDate">
                        
                        <img src={calenderIcon} /> 12 Nov - 14 Nov
                      </div>
                    </div>
                    <div className="eventDescription">
                      Offers interpretation to International sign language or
                      closed captions.
                    </div>
                    <div className="twitterUsserName">
                      <img src={twitterLogo} />&nbsp;@shidenNetwork
                    <span className="codeConduct">Code Of Conduct</span></div>
                    
                    <button className="hashTag">#Shiden Network</button>
                  </div>
                </Col>
                  {/* 9th Col */}

                  <Col md={12}>
                  <div className="eventCard">
                    <span className="tag">Online</span>
                    <div className="displayFlex">
                      <div className="eventTitle">Binance Coin (BNB)</div>
                      <div className="eventDate">
                        
                        <img src={calenderIcon} /> 15 Nov - 16 Nov
                      </div>
                    </div>
                    <div className="eventDescription">
                      Offers interpretation to International sign language or
                      closed captions.
                    </div>
                    <div className="twitterUsserName">
                      <img src={twitterLogo} />&nbsp;@binance
                    <span className="codeConduct">Code Of Conduct</span></div>
                    
                    <button className="hashTag">#Binance Coin</button>
                  </div>
                </Col>

                    {/* 10th Col */}
                    <Col md={12}>
                  <div className="eventCard">
                    <span className="tag">Online</span>
                    <div className="displayFlex">
                      <div className="eventTitle">Aave (AAVE)</div>
                      <div className="eventDate">
                        
                        <img src={calenderIcon} /> 18 Nov - 20 Nov
                      </div>
                    </div>
                    <div className="eventDescription">
                      Offers interpretation to International sign language or
                      closed captions.
                    </div>
                    <div className="twitterUsserName">
                      <img src={twitterLogo} />&nbsp;@AaveAave
                    <span className="codeConduct">Code Of Conduct</span></div>
                    
                    <button className="hashTag">#Aave</button>
                  </div>
                </Col>
                  {/* 11th Col */}
                  <Col md={12}>
                  <div className="eventCard">
                    <span className="tag">Online</span>
                    <div className="displayFlex">
                      <div className="eventTitle">kusama.com</div>
                      <div className="eventDate">
                        
                        <img src={calenderIcon} /> 18 Nov - 20 Nov
                      </div>
                    </div>
                    <div className="eventDescription">
                      Offers interpretation to International sign language or
                      closed captions.
                    </div>
                    <div className="twitterUsserName">
                      <img src={twitterLogo} />&nbsp;@kusamaNetwork
                    <span className="codeConduct">Code Of Conduct</span></div>
                    
                    <button className="hashTag">#kusama</button>
                  </div>
                </Col>


              </Row>
            </Col>
          </Row>
        </Container>
      </section>
     <Footer/>
    </div>
    
  );
}

export default App;
