import re

with open('app/layout.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace the block of scripts I added before with all the correct ones.
new_scripts = """        <Script src="/js/jquery.js" strategy="beforeInteractive" />
        <Script src="/js/popper.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.themepunch.tools.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.themepunch.revolution.min.js" strategy="lazyOnload" />
        <Script src="/js/revolution.extension.actions.min.js" strategy="lazyOnload" />
        <Script src="/js/revolution.extension.carousel.min.js" strategy="lazyOnload" />
        <Script src="/js/revolution.extension.kenburn.min.js" strategy="lazyOnload" />
        <Script src="/js/revolution.extension.layeranimation.min.js" strategy="lazyOnload" />
        <Script src="/js/revolution.extension.migration.min.js" strategy="lazyOnload" />
        <Script src="/js/revolution.extension.navigation.min.js" strategy="lazyOnload" />
        <Script src="/js/revolution.extension.parallax.min.js" strategy="lazyOnload" />
        <Script src="/js/revolution.extension.slideanims.min.js" strategy="lazyOnload" />
        <Script src="/js/revolution.extension.video.min.js" strategy="lazyOnload" />
        <Script src="/js/main-slider-script.js" strategy="lazyOnload" />
        <Script src="/js/jquery.fancybox.js" strategy="lazyOnload" />
        <Script src="/js/jquery.countdown.js" strategy="lazyOnload" />
        <Script src="/js/wow.js" strategy="lazyOnload" />
        <Script src="/js/appear.js" strategy="lazyOnload" />
        <Script src="/js/mixitup.js" strategy="lazyOnload" />
        <Script src="/js/bxslider.js" strategy="lazyOnload" />
        <Script src="/js/swiper.min.js" strategy="lazyOnload" />
        <Script src="/js/owl.js" strategy="lazyOnload" />
        <Script src="/js/jquery-ui.js" strategy="lazyOnload" />
        <Script src="/js/script.js" strategy="lazyOnload" />"""

text = re.sub(r'<Script src="/js/jquery\.js".*?<Script src="/js/jquery\.themepunch\.revolution\.min\.js" strategy="lazyOnload" />', new_scripts, text, flags=re.DOTALL)

with open('app/layout.js', 'w', encoding='utf-8') as f:
    f.write(text)
