export default function Footer() {
  return (
    <>
<footer className="main-footer">
	{/* Widgets Section */}
	<div className="widgets-section">
		<div className="auto-container">

			<div className="row">
				{/* Footer Column */}
				<div className="footer-column col-lg-4 col-md-6 col-sm-12">
					<div className="footer-widget about-widget">
						<div className="logo"><a href="index.php"><img src="images/logo-2.png" alt="" /></a></div>
						<div className="text">We’re providing every day fresh and quality products for you.</div>
						<ul className="social-icon-one">
							<li><a href="#"><i className="fab fa-twitter"></i></a></li>
							<li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
							<li><a href="#"><i className="fab fa-pinterest"></i></a></li>
							<li><a href="#"><i className="fab fa-instagram"></i></a></li>
						</ul>
					</div>
				</div>

				{/* Footer Column */}
				<div className="footer-column col-lg-2 col-md-6 col-sm-12">
					<div className="footer-widget">
						<h5 className="widget-title">Explore</h5>
						<ul className="user-links">
							<li><a href="index.php">Home</a></li>
							<li><a href="#">Pages</a></li>
							<li><a href="shop-products.php">Shop</a></li>
							<li><a href="news-grid.php">News</a></li>
							<li><a href="page-contact.php">Contact</a></li>
						</ul>
					</div>
				</div>

				{/* Footer Column */}
				<div className="footer-column col-lg-3 col-md-6 col-sm-12">
					<div className="footer-widget">
						<h5 className="widget-title">Contact</h5>
						<div className="widget-content">
							<ul className="contact-list contact-info">
								<li>
									<i className="fa fa-phone-square"></i>
									<strong>Phone</strong>
									<a href="tel:+918283000737">+91 82830 00737</a>
								</li>
								<li>
									<strong>Email</strong>
									<i className="fa fa-envelope"></i>
									<a href="mailto:info@devbhogbasmatirice.com">info@devbhogbasmatirice.com</a>
								</li>
								<li>
									<strong>Address</strong>
									<i className="fa fa-map-marker"></i>
									Ware house road Nihal Singh wala<br />Moga, Punjab 142055
								</li>
							</ul>
						</div>
					</div>
				</div>

				{/* Footer Column */}
				<div className="footer-column col-lg-3 col-md-6 col-sm-12">
					<div className="footer-widget Newsletter-widget">
						<h5 className="widget-title">Newsletter</h5>
						<div className="widget-content">
							<div className="subscribe-form">
								<form method="post" action="#">
									<div className="form-group">
										<input type="email" name="email" className="email" defaultValue="" placeholder="Enter your email" required />
										<button type="button" className="theme-btn btn-style-one"><span className="btn-title">Subscribe</span></button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	{/* Footer Bottom */}
	<div className="footer-bottom">
		<div className="auto-container">
			<div className="inner-container">
					<div className="copyright-text">
					<p>© Copyright reserved by <a href="index.php">kodesolution.com</a></p>
				</div>
			</div>
		</div>
	</div>
</footer>
    </>
  );
}
