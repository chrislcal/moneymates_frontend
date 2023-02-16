import "../../src/App.css";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios'




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
      console.log({user})
      if(!user?.sub) {
        return
      }

      try {
        const accessToken = await getAccessTokenSilently();
        const domain = process.env.REACT_APP_AUTH0_DOMAIN;
        const user_id = user.sub;
  
        const { data: userData } = await axios.get(
          `https://${domain}/api/v2/users/${user_id}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        console.log("step1")
  
        await axios({
          url: `${process.env.REACT_APP_API_URL}/save-user-data`,
          method: 'POST',
          data: {
            user_id: user_id,
            email: userData.email,
            nickname: userData.nickname
          },
          headers: {
            token: accessToken
          }
          
        });

        console.log("step2")
  
  
        const request = await fetch(`${process.env.REACT_APP_API_URL}/check-token-status`, {
          method: 'GET',
          headers: {
            "token": await getAccessTokenSilently()
          }
        });

        console.log("step3")
  
        // Banktoken status
        const { status } = await request.json();
  
        console.log(user.sub, status)
  
        if(user.sub && !status) {
          history.push('/get-token');
  
        } else if(user.sub && status) {
          history.push('/home');
        }
        
      } catch (error) {
        console.error(error)
      }
    }
      
    main();
  }, [user?.sub, getAccessTokenSilently, history])

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to MoneyMates</span>
                <h1>{`Our values are`} <span className="txt-rotate" ><span className="wrap">{text}</span></span></h1>
                  <p>Join forces with Moneymates to make your money work for you. Our user-friendly app and community support will help you achieve your financial goals. With Moneymates, saving money has never been easier.</p>
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
        </Row>
      </Container>
    </section>
  )
}
