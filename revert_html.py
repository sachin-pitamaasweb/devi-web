with open('app/page.js', 'r', encoding='utf-8') as f:
    text = f.read()

start = text.find('<section className="top-banners">')
end = text.find('</section>', start) + len('</section>')

original_section = '''<section className="top-banners">
    <div className="container-fluid pb-0">
        <div className="row">
            {/*  Banner Box One  */}
            <div className="banner-box-one col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                    <div className="image"><img src="images/top-banner-1.webp" alt="" /></div>
                    <div className="content">
                        <span className="title">100% Organic</span>
                        <h3>Quality Organic <br />Food Store</h3>
                        <a href="shop-products.php" className="theme-btn btn-style-two"><span className="btn-title">Reach Now</span></a>
                    </div>
                </div>
            </div>

            {/*  Banner Box One  */}
            <div className="banner-box-one style-two col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                    <div className="image"><img src="images/top-banner-2.webp" alt="" /></div>
                    <div className="content">
                        <span className="title">100% Organic</span>
                        <h3>Healthy Products <br />Everyday</h3>
                        <a href="shop-products.php" className="theme-btn btn-style-two"><span className="btn-title">Reach Now</span></a>
                    </div>
                </div>
            </div>

            {/*  Banner Box One  */}
            <div className="banner-box-one style-three col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                    <div className="image"><img src="images/top-banner-3.png" alt="" /></div>
                    <div className="content">
                        <span className="title">100% Organic</span>
                        <h3>Pure Natural <br />Products</h3>
                        <a href="shop-products.php" className="theme-btn btn-style-two"><span className="btn-title">Reach Now</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>'''

text = text[:start] + original_section + text[end:]
with open('app/page.js', 'w', encoding='utf-8') as f:
    f.write(text)
