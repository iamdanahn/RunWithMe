import React from "react";
import { Links } from "react-router-dom";

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
							<div>RunWithMe logo</div>
							<div>Ride</div>
							<div>Walk</div>
							<div>Fitness</div>
						</div>
					</div>
				</section>
				<section className="f3-bg">
					<div className="f3-cntr">Section 3</div>
				</section>
				<section className="f4-bg">
					<div className="f4-cntr">Section 4</div>
				</section>
			</footer>
		);
	}
}
