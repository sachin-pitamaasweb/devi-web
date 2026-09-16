export default function Header() {
  return (
    <>
<header className="main-header header-style-one" id="home">
	{/*  Header Upper  */}
	<div className="header-upper">
		<div className="auto-container">
			{/*  Main box  */}
			<div className="main-box">
				<div className="logo">
										<a href="index.php" title=""><img src="images/logo.png" alt="" title="Fesho" /></a>
				</div>

				{/* Nav Box */}
				<div className="nav-outer">

					<nav className="nav main-menu">
    <ul className="navigation">
      <li className="current"><a href="/">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#product">Product</a></li>
      <li><a href="#export">Export</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul></nav>
					{/*  Main Menu End */}

					<div className="outer-box">
						<a href="#contact" className="theme-btn btn-style-one shop-now"><span className="btn-title">Contact Us</span></a>

						{/* Mobile Navigation Toggler */}
						<div className="mobile-nav-toggler"><span className="icon lnr-icon-bars"></span></div>
					</div>
				</div>
			</div>
		</div>

	</div>

	{/*  Mobile Menu   */}
	<div className="mobile-menu">
		<div className="menu-backdrop"></div>

		{/* Here Menu Will Come Automatically Via Javascript / Same Menu as in Header */}
		<nav className="menu-box">
			<div className="upper-box">
				<div className="nav-logo"><a href="index.php"><img src="images/logo.png" alt="" title="Fesho" /></a></div>
				<div className="close-btn"><i className="icon flaticon-close"></i></div>
			</div>

			<ul className="navigation clearfix">
				<li className="current"><a href="/">Home</a></li>
				<li><a href="#about">About</a></li>
				<li><a href="#product">Product</a></li>
				<li><a href="#export">Export</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
			<ul className="contact-list-one">
				<li>
					<i className="fa fa-phone-square"></i>
					<strong>Phone</strong>
					<a href="tel:+926668880000">+92 666 888 0000</a>
				</li>
				<li>
					<strong>Email</strong>
					<i className="fa fa-envelope"></i>
					<a href="/cdn-cgi/l/email-protection#0d636868696568617d4d6e62607d6c6374236e6260"><span className="__cf_email__" data-cfemail="f9979c9c9d919c9589b99a969489989780d79a9694">[email&nbsp;protected]</span></a>
				</li>
				<li>
					<strong>Address</strong>
					<i className="fa fa-map-marker"></i>
					66 road, broklyn street new york
					</li>
			</ul>


			<ul className="social-links">
				<li><a href="#"><span className="fab fa-twitter"></span></a></li>
				<li><a href="#"><span className="fab fa-facebook"></span></a></li>
				<li><a href="#"><span className="fab fa-pinterest"></span></a></li>
				<li><a href="#"><span className="fab fa-instagram"></span></a></li>
			</ul>
		</nav>
	</div>{/*  End Mobile Menu  */}


	{/*  Header Search  */}
	<div className="search-popup">
		<span className="search-back-drop"></span>
		<button className="close-search"><span className="fa fa-times"></span></button>

		<div className="search-inner">
			<form method="post" action="index.php">
				<div className="form-group">
					<input type="search" name="search-field" defaultValue="" placeholder="Search..." required />
					<button type="submit"><i className="lnr-icon-search"></i></button>
				</div>
			</form>
		</div>
	</div>
	{/*  End Header Search  */}

	{/*  Sticky Header   */}
	<div className="sticky-header">
		<div className="auto-container">
			<div className="inner-container">
				{/* Logo */}
				<div className="logo">
								<a href="index.php" title=""><img src="images/logo.png" alt="" title="" /></a> 
				</div>

				{/* Right Col */}
				<div className="nav-outer">
					{/*  Main Menu  */}
					<nav className="main-menu">
						<div className="navbar-collapse show collapse clearfix">
								<ul className="navigation clearfix">
									<li className="current"><a href="/">Home</a></li>
									<li><a href="#about">About</a></li>
									<li><a href="#product">Product</a></li>
									<li><a href="#export">Export</a></li>
									<li><a href="#contact">Contact</a></li>
								</ul>
						</div>
					</nav>{/*  Main Menu End */}

					{/* Mobile Navigation Toggler */}
					<div className="mobile-nav-toggler"><span className="icon lnr-icon-bars"></span></div>
				</div>
			</div>
		</div>
	</div>{/*  End Sticky Menu  */}
</header>
    </>
  );
}
