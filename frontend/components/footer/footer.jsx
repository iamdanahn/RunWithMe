import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
	render() {
		return (
			<footer className="footer-main-cntr">
				<section className="f1-bg">
					<div className="f1-cntr">
						<div>
							<p>
								Track every mile you run, connect your devices and get closer to
								your next PR.
							</p>
						</div>
					</div>
				</section>

				<section className="f2-bg">
					<div className="f2-cntr">
						<div className="f2-content">
							<img
								className="f2c-left"
								src={window.footerLogo}
								alt="Run with me footer logo"
							/>
							<div className="f2c-right">
								<div className="f2 ride">Ride</div>
								<div className="f2 walk">Walk</div>
								<div className="f2 fitness">Fitness</div>
							</div>
						</div>
					</div>
				</section>

				<section className="f3-bg">
					<div className="f3-cntr">
						<div className="f3-content">
							<img
								src={window.footerPhone}
								alt="phone photo"
								className="footer-iphone"
							/>
							<div className="f3c-right">
								<div className="f3cr social">
									<ul>
										<li className="f3cr-link-headers">Social</li>
										<li>
											<Link to="https://angel.co/u/daniel-ahn-1">
												AngelList
											</Link>
										</li>
										<li>
											<Link to="https://www.linkedin.com/in/daniel-ahn-6b34151bb/">
												LinkedIn
											</Link>
										</li>
									</ul>
								</div>
								<div className="f3cr github">
									<ul>
										<li className="f3cr-link-headers">Github</li>
										<li>
											<Link to="https://www.github.com/iamdanahn/RunWithMe">
												Check out this project's repo
											</Link>
										</li>
										<li>
											<Link to="https://www.github.com/iamdanahn">
												Follow me on GitHub
											</Link>
										</li>
										<li></li>
									</ul>
								</div>
								<div className="f3cr about">
									<ul>
										<li className="f3cr-link-headers">About Me</li>
										<li>Car Enthusiast</li>
										<li>Food Lover</li>
										<li>Always Coding</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="f4-bg">
					<div className="f4-cntr">
						<div className="f4-content">Created by Daniel Ahn</div>
					</div>
				</section>
			</footer>
		);
	}
}

export default Footer;
