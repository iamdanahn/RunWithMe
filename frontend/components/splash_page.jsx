import React from 'react';
import { AuthRoute } from "../util/route_util";
import SignupContainer from "./session/signup_container";
import LoginContainer from "./session/login_container";
import { Link } from 'react-router-dom'

class SplashPage extends React.Component {
  
  render() {
  
    return (
			<div className="splashpage">
				<div className="content1-bg">
					<div className="content1">
						<div className="heading">
							<hr></hr>
							<h2> Own every mile </h2>
							<hr></hr>
						</div>
						<br />
						<div className="h-text">
							<p>
								The best mobile run tracking experience, backed by the world's
								largest digital health and fitness community.
							</p>
						</div>
						<div className="h-footer">
							<Link to="/signup">
								<button className="button-signup" onClick={this.handleSignup}>
									Sign up
								</button>
							</Link>
							<Link to="/login">
								<button className="button-login" onClick={this.handleLogin}>
									Log in
								</button>
							</Link>
						</div>
					</div>
				</div>

				<div className="content2-bg">
					<div className="content2">
						<div className="c2 left">
							<h2 className="c2l-title">
								<hr></hr>
								  Syncs with Run With Me Smart Shoes
								<hr></hr>
							</h2>
              <div className="c2l-text-cntr">
                <p className="c2l-text">
                  Track everything from pace, stride length, and cadence, plus get
                  personalized coaching tips along the way.
                </p>
              </div>
						</div>
						<div className="c2 right">
              
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
							'Check it out' a tag (Make div with hover pointer and onClick
							action?)
						</div>
					</div>
					<div>Image on Content 3</div>
				</div>
			</div>
		);
  }
}

export default SplashPage;