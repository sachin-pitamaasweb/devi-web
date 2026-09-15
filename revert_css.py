import re

with open('app/globals.css', 'r', encoding='utf-8') as f:
    text = f.read()

# I will completely wipe out the changes to .banner-box-one and .theme-btn if necessary,
# but the user said "current design but i want design". They probably just want the colors back.
# The user's screenshot had "SHOP NOW" instead of "REACH NOW".
# Let's just remove ALL banner-box-one rules from globals.css.

# Let's rewrite globals.css starting from custom overrides.
idx = text.find('/* Custom User Overrides */')
if idx != -1:
    base = text[:idx]
    
    # We want to keep the logo sizes and nav font size from earlier.
    # And maybe we should keep the theme-colors? Wait, the user wants the YELLOW background for the first box, 
    # GREEN for the second, DARK GREEN for the third. 
    # In my previous changes, I changed :root --theme-color1 and --theme-color2!
    # Because of that, the first banner became red and the second blue!
    # So I must remove the :root color overrides to get the original colors back!
    
    kept_overrides = '''/* Custom User Overrides */

.main-header .logo img {
  width: 170px !important;
  max-width: none !important;
  max-height: 120px;
}

.sticky-header .logo img {
  height: 40px !important;
  width: auto !important;
  max-height: none !important;
}

.main-menu .navigation > li > a {
  font-size: 17px !important;
  font-weight: 600 !important;
}
'''
    
    with open('app/globals.css', 'w', encoding='utf-8') as f:
        f.write(base + kept_overrides)
