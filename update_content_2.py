with open('app/page.js', 'r', encoding='utf-8') as f:
    text = f.read()

start = text.find('<section className="top-banners">')
end = text.find('</section>', start) + len('</section>')

new_section = '''<section className="top-banners">
    <div className="container-fluid pb-0">
        <div className="row">
            {/*  Banner Box One  */}
            <div className="banner-box-one col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                    <div className="image"><img src="images/top-banner-1.webp" alt="" /></div>
                    <div className="content">
                        <span className="title">Domestic Indian Brand</span>
                        <h3>Dev Bhog</h3>
                        <a href="#products" className="theme-btn btn-style-two"><span className="btn-title">Explore</span></a>
                    </div>
                </div>
            </div>

            {/*  Banner Box One  */}
            <div className="banner-box-one style-two col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                    <div className="image"><img src="images/top-banner-2.webp" alt="" /></div>
                    <div className="content">
                        <span className="title">Growing Food Brand</span>
                        <h3>Folome</h3>
                        <a href="#products" className="theme-btn btn-style-two"><span className="btn-title">Explore</span></a>
                    </div>
                </div>
            </div>

            {/*  Banner Box One  */}
            <div className="banner-box-one style-three col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                    <div className="image"><img src="images/top-banner-3.png" alt="" /></div>
                    <div className="content">
                        <span className="title">International & Export Brand</span>
                        <h3>Punjabi Zaiqa</h3>
                        <a href="#products" className="theme-btn btn-style-two"><span className="btn-title">Explore</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>'''

text = text[:start] + new_section + text[end:]

with open('app/page.js', 'w', encoding='utf-8') as f:
    f.write(text)
