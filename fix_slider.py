import re

with open('app/page.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Adjust the subtitle voffset from -160 to -190
text = text.replace("data-voffset=\"['-160','-160','-130','-120']\"", "data-voffset=\"['-210','-210','-180','-170']\"")

# Adjust the button voffset from 120 to 180
text = text.replace("data-voffset=\"['120','120','90','100']\"", "data-voffset=\"['180','180','150','140']\"")

# Increase the width of the main text layer so it doesn't wrap as much
text = text.replace("data-width=\"['750','750','750','650']\"", "data-width=\"['900','800','750','650']\"")

# Maybe reduce the font size of the h2 inside the slider via a span or inline style
text = text.replace('<h2>Bringing Quality Indian <br />Food Products to the World</h2>',
                    '<h2 style={{ fontSize: "55px", lineHeight: "1.2" }}>Bringing Quality Indian <br />Food Products to the World</h2>')

with open('app/page.js', 'w', encoding='utf-8') as f:
    f.write(text)
