with open('app/page.js', 'r', encoding='utf-8') as f:
    text = f.read()

start = text.find('<section className="top-banners">')
end = text.find('</section>', start)

section = text[start:end]
section = section.replace('Reach Now', 'Shop Now')
text = text[:start] + section + text[end:]

with open('app/page.js', 'w', encoding='utf-8') as f:
    f.write(text)
