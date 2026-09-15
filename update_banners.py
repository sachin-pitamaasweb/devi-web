with open('app/page.js', 'r', encoding='utf-8') as f:
    text = f.read()

start = text.find('<section className="top-banners">')
end = text.find('</section>', start) + len('</section>')

new_section = '''<section className="top-banners">
    <div className="container-fluid pb-0">
        <div className="row">
            {/*  Banner Box One - Dev Bhog  */}
            <div className="banner-box-one col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                    <div className="image"><img src="images/top-banner-1.webp" alt="Dev Bhog" /></div>
                    <div className="content">
                        <span className="title">Premium Quality</span>
                        <h3>Dev Bhog</h3>
                        <a href="shop-products.php" className="theme-btn btn-style-two"><span className="btn-title">Reach Now</span></a>
                    </div>
                </div>
            </div>

            {/*  Banner Box One - Folome  */}
            <div className="banner-box-one style-two col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                    <div className="image"><img src="images/top-banner-2.webp" alt="Folome" /></div>
                    <div className="content">
                        <span className="title">Exclusive Range</span>
                        <h3>Folome</h3>
                        <a href="shop-products.php" className="theme-btn btn-style-two"><span className="btn-title">Reach Now</span></a>
                    </div>
                </div>
            </div>

            {/*  Banner Box One - Punjabi Zaiqa  */}
            <div className="banner-box-one style-three col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                    <div className="image"><img src="images/punjabi-zaiqa.jpg" alt="Punjabi Zaiqa" /></div>
                    <div className="content">
                        <span className="title">Authentic Taste</span>
                        <h3>Punjabi Zaiqa</h3>
                        <a href="shop-products.php" className="theme-btn btn-style-two"><span className="btn-title">Reach Now</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>'''

text = text[:start] + new_section + text[end:]

with open('app/page.js', 'w', encoding='utf-8') as f:
    f.write(text)
