import re

with open('app/page.js', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Main Slider (Hero)
text = text.replace('Only Organic Products', 'From the heart of Punjab to global markets.')
text = text.replace('Healthy <br /> Organic Food', 'Bringing Quality Indian <br />Food Products to the World')
text = text.replace('Healthy Organic Food', 'Bringing Quality Indian Food Products to the World')
text = text.replace('DISCOVER MORE', 'Explore Our Products')

# 2. Top Banners
# Dev Bhog (Banner 1)
text = re.sub(r'<div className="banner-box-one col-lg-4.*?</div>\s*</div>\s*</div>',
              r'''<div className="banner-box-one col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                    <div className="image"><img src="images/top-banner-1.webp" alt="" /></div>
                    <div className="content">
                        <span className="title">Domestic Indian Brand</span>
                        <h3>Dev Bhog</h3>
                        <a href="#products" className="theme-btn btn-style-two"><span className="btn-title">Explore</span></a>
                    </div>
                </div>
            </div>''', text, flags=re.DOTALL | re.IGNORECASE)

# Folome (Banner 2)
text = re.sub(r'<div className="banner-box-one style-two col-lg-4.*?</div>\s*</div>\s*</div>',
              r'''<div className="banner-box-one style-two col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                    <div className="image"><img src="images/top-banner-2.webp" alt="" /></div>
                    <div className="content">
                        <span className="title">Growing Food Brand</span>
                        <h3>Folome</h3>
                        <a href="#products" className="theme-btn btn-style-two"><span className="btn-title">Explore</span></a>
                    </div>
                </div>
            </div>''', text, flags=re.DOTALL | re.IGNORECASE)

# Punjabi Zaiqa (Banner 3)
text = re.sub(r'<div className="banner-box-one style-three col-lg-4.*?</div>\s*</div>\s*</div>',
              r'''<div className="banner-box-one style-three col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                    <div className="image"><img src="images/top-banner-3.png" alt="" /></div>
                    <div className="content">
                        <span className="title">International & Export Brand</span>
                        <h3>Punjabi Zaiqa</h3>
                        <a href="#products" className="theme-btn btn-style-two"><span className="btn-title">Explore</span></a>
                    </div>
                </div>
            </div>''', text, flags=re.DOTALL | re.IGNORECASE)

with open('app/page.js', 'w', encoding='utf-8') as f:
    f.write(text)
