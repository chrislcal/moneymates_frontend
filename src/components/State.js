import "../../src/App.css";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useAuth0 } from '@auth0/auth0-react';
import Main from "./Main";




export const State = () => {
  // state to keep track of the current loop number of the text rotation animation
  const [loopNum, setLoopNum] = useState(0);
  // state to keep track of whether the text rotation animation is in a "deleting" phase (removing text) or an "adding" phase (adding text)
  const [isDeleting, setIsDeleting] = useState(false);
  // state to store the current text being displayed in the banner
  const [text, setText] = useState('');
  // state to store the amount of time (in milliseconds) between each update of the text rotation animation
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  // array of strings to cycle through
  const toRotate = [ "Transparent", "Simplicity", "Efficient" ];
  // period of rotation
  const period = 2000;

  const history = useHistory();

  // Set bankToken
  const [hasBankToken, setHasBankToken] = useState(false);

  // setup an interval that calls the tick function at a frequency determined by the delta state variable
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  // function that updates the component's state based on the current phase of the text rotation animation (adding or deleting text) and the current loop number

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    } else {
    }
  }

  const {user, getAccessTokenSilently} = useAuth0();
  

  useEffect(() => {
    async function main() {
      const request = await fetch('http://localhost:3001/check-token-status', {
        method: 'GET',
        headers: {
          "token": await getAccessTokenSilently()
        }
      });

      // Banktoken status
      const { status } = await request.json();
      setHasBankToken(status)

      if(user && !status) {
        history.push('/get-token');
      }
    }
      
    main();
  }, [user])

  return (
    <section className="banner" id="home">
      <Container>
        {user? (<Main hasLinkedBankAccount={hasBankToken}/>
        
        ) : (


        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to MoneyMates</span>
                <h1>{`MoneyMates values are`} <span className="txt-rotate" ><span className="wrap">{text}</span></span></h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>)}
        
      </Container>
    </section>
  )
}
