import re
with open('app/page.js', 'r', encoding='utf-8') as f:
    text = f.read()

new_nav = """<ul className="navigation">
  <li className="current"><a href="/">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#product">Product</a></li>
  <li><a href="#export">Export</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>"""

text = re.sub(r'<ul className="navigation">.*?</ul>', new_nav, text, flags=re.DOTALL)

with open('app/page.js', 'w', encoding='utf-8') as f:
    f.write(text)
