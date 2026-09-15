with open('app/page.js', 'r', encoding='utf-8') as f:
    text = f.read()

nav_start = text.find('<nav className="nav main-menu">')
nav_end = text.find('</nav>', nav_start)

if nav_start != -1 and nav_end != -1:
    new_nav = '''<nav className="nav main-menu">
    <ul className="navigation">
      <li className="current"><a href="/">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#product">Product</a></li>
      <li><a href="#export">Export</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>'''
    text = text[:nav_start] + new_nav + text[nav_end:]
    
    with open('app/page.js', 'w', encoding='utf-8') as f:
        f.write(text)
    print('Fixed main nav')
else:
    print('Main nav not found')
