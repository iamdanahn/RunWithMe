import React from 'react';
import { AuthRoute } from "../util/route_util";
import SignupContainer from "./session/signup_container";
import LoginContainer from "./session/login_container";

class SplashPage extends React.Component {
  
  render() {
  
    return (
      <div className="splashpage">
        <div className="splashpage content1">
          Splash content 1 background
          <div>
            <h2>Heading with "own every mile"</h2>
          </div>
          <div>
            <p>
              Subheading - The best mobile run tracking experience, backed by the
              world's largest digital health and fitness community.
            </p>
          </div>
          <div>
            <div>
              <AuthRoute path="/signup" component={SignupContainer} />
            </div>
            <div>
              <AuthRoute path="/login" component={LoginContainer} />
            </div>
            <div>App Store logo - Google Play logo</div>
          </div>
        </div>

        <div className="splashpage content2">
          <h2> - Splash content 2 - </h2>
          <div>
            <div>
              <h4>SYNCS WITH UNDER ARMOUR SMART SHOES</h4>
            </div>
            <div>
              <p>
                Track everything from pace, stride length, and cadence, plus get
                personalized coaching tips along the way.
              </p>
            </div>
            <div>
              Learn More button (Make div with hover pointer and onClick action?)
            </div>
          </div>
        </div>
        
        <div className="splashpage content3">
          <h2> - Splash content 3 - </h2>
          <div>
            <div>
              <h3>Track Everything</h3>
              <p>
                Log any kind of workout using just your phone or with your
                favorite device like Garmin or Apple Watch.
              </p>
            </div>
            <div>
              <h3>Get Social</h3>
              <p>
                Find support and motivation from other runners, plus create
                challenges for you and your friends.
              </p>
            </div>
            <div>
              <h3>Train Smarter</h3>
              <p>
                Analyze your data in the app or on the web, then conquer that 5K
                or marathon using our adaptive training plans.
              </p>
            </div>
            <div>
              'Check it out' a tag (Make div with hover pointer and onClick action?)
            </div>
          </div>
          <div>Image on Content 3</div>
        </div>
      </div>
    )
  }
}

export default SplashPage;