import re

with open('app/page.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Remove the price
text = re.sub(r'<span className="price">.*?</span>', '', text)

# Remove the add to cart button
text = re.sub(r'<a href="shop-cart\.php".*?</a>', '', text)

# Change 'shop-products.php' to '#products' everywhere
text = text.replace('shop-products.php', '#products')

# Also, change the header buttons if they exist
# In layout.js or page.js? I think I removed the header icons from page.js in the first session.
# Let's check for any other 'cart' or 'shop' or 'login' in page.js
text = re.sub(r'<a href="shop-checkout\.php".*?</a>', '', text)
text = re.sub(r'<a href="login\.php".*?</a>', '', text)

with open('app/page.js', 'w', encoding='utf-8') as f:
    f.write(text)
