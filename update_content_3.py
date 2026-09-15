with open('app/page.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Slide 1
text = text.replace('Only Organic Products', 'From the heart of Punjab to global markets.')
text = text.replace('Healthy <br />Organic Food', 'Bringing Quality Indian <br />Food Products to the World')
text = text.replace('DISCOVER MORE', 'Explore Our Products')

# About Section (Fluid Section One)
text = text.replace('Welcome to Fesho', 'Built on Quality. Driven by Trust.')
text = text.replace('Be healthy &amp; eat only pure organic food', 'Established in 2008, Devi Chand &amp; Sons')
text = text.replace('Lorem ipsum is simply free text available dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt simply free ut labore et dolore magna aliqua.', 'has grown from a trusted Indian food business into an expanding manufacturer, packer, and exporter serving customers across multiple international markets. Based in Moga, Punjab, we operate close to one of India’s key rice-producing regions, giving us strong access to quality agricultural products and established supply networks.')

with open('app/page.js', 'w', encoding='utf-8') as f:
    f.write(text)
