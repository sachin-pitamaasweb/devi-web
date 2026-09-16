"use client";
import { useEffect } from "react";

// Page component for Devi Chand & Sons homepage
export default function Home() {
  console.log("Rendering Home");
  useEffect(() => {
    let intervalId;
    let attempts = 0;
    const runSlider = () => {
      attempts++;
      if (typeof window !== "undefined" && typeof window.initMainSlider === "function") {
        window.initMainSlider();
        if (window.jQuery && window.jQuery("#rev_slider_one").hasClass("revslider-initialised")) {
          clearInterval(intervalId);
        }
      }
      if (attempts > 30) {
        clearInterval(intervalId);
      }
    };
    intervalId = setInterval(runSlider, 300);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>

      {/* Original Content */}
      

{/*  Preloader  */}
{/*  Preloader  */}
{/*  Preloader removed  */} 

	

















{/* Main Slider */}
<section id="home" className="main-slider">
    <div className="rev_slider_wrapper fullwidthbanner-container" id="rev_slider_one_wrapper" data-source="gallery">
        <div className="rev_slider fullwidthabanner" id="rev_slider_one" data-version="5.4.1">
            <ul>
                {/*  Slide 1  */}
                <li data-index="rs-1" data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="300" data-thumb="" data-rotate="0" data-saveperformance="off" data-title="Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">

                    {/*  MAIN IMAGE  */}
                    <img alt="" className="rev-slidebg" data-bgfit="cover" data-bgparallax="20" data-bgposition="center center" data-bgrepeat="no-repeat" data-no-retina="" src="/images/bg-1.jpg" />


                    <div className="tp-caption tp-shape tp-shapewrapper tp-resizeme big-ipad-hidden rs-parallaxlevel-1" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingtop="[0,0,0,0]" data-responsive_offset="on" data-type="shape" data-height="auto" data-whitespace="nowrap" data-width="none" data-hoffset="['-190','-100','-100','-100']" data-voffset="['-190','-190','-190','-190']" data-x="['left','left','left','left']" data-y="['middle','middle','middle','middle']" data-frames='[{"from":"x:[100%];z:0;rx:0deg;ry:0;rz:0;sx:1;sy:1;skx:0;sky:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"power3.easeinout"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"power3.easeinout"}]'>
                        <figure><img src="/images/rice-object.webp" alt="" /></figure>
                    </div>

                    <div className="tp-caption tp-resizeme rs-parallaxlevel-2 ipad-hidden" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingtop="[0,0,0,0]" data-responsive_offset="on" data-type="shape" data-height="none" data-whitespace="nowrap" data-width="none" data-hoffset="['-120','-120','-120','-120']" data-voffset="['100','100','100','100']" data-x="['right','right','right','right']" data-y="['middle','middle','middle','middle']" data-frames='[{"from":"y:[100%];z:0;rx:0deg;ry:0;rz:0;sx:1;sy:1;skx:0;sky:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1500,"ease":"power3.easeinout"},{"delay":"wait","speed":3000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"power3.easeinout"}]'>
                        <figure><img src="/images/paddy-object.webp" alt="" /></figure>
                    </div>


                    <div className="tp-caption tp-resizeme rs-parallaxlevel-3 ipad-hidden" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingtop="[0,0,0,0]" data-responsive_offset="on" data-type="shape" data-height="none" data-whitespace="nowrap" data-width="none" data-hoffset="['120','120','120','120']" data-voffset="['180','180','180','180']" data-x="['center','center','center','center']" data-y="['middle','middle','middle','middle']" data-frames='[{"from":"y:[100%];z:0;rx:0deg;ry:0;rz:0;sx:1;sy:1;skx:0;sky:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":2000,"ease":"power3.easeinout"},{"delay":"wait","speed":3000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"power3.easeinout"}]'>
                        <figure><img src="/images/single-paddy.png" alt="" /></figure>
                    </div>

                    <div className="tp-caption tp-resizeme rs-parallaxlevel-1 ipad-hidden" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingtop="[0,0,0,0]" data-responsive_offset="on" data-type="shape" data-height="none" data-whitespace="nowrap" data-width="none" data-hoffset="['120','120','120','120']" data-voffset="['100','100','100','100']" data-x="['center','center','center','center']" data-y="['top','top','top','top']" data-frames='[{"from":"y:[100%];z:0;rx:0deg;ry:0;rz:0;sx:1;sy:1;skx:0;sky:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":2000,"ease":"power3.easeinout"},{"delay":"wait","speed":3000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"power3.easeinout"}]'>
                        <figure><img src="/images/object-4.png" alt="" /></figure>
                    </div>

                    <div className="tp-caption tp-resizeme rs-parallaxlevel-2 ipad-hidden" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingtop="[0,0,0,0]" data-responsive_offset="on" data-type="shape" data-height="none" data-whitespace="nowrap" data-width="none" data-hoffset="['-30','-30','-30','-30']" data-voffset="['-180','-180','-180','-180']" data-x="['right','right','right','right']" data-y="['center','bottom','bottom','bottom']" data-frames='[{"from":"y:[100%];z:0;rx:0deg;ry:0;rz:0;sx:1;sy:1;skx:0;sky:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":2000,"ease":"power3.easeinout"},{"delay":"wait","speed":3000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"power3.easeinout"}]'>
                        <figure><img src="/images/object-5.png" alt="" /></figure>
                    </div>

                    <div className="tp-caption tp-resizeme rs-parallaxlevel-3 ipad-hidden" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingtop="[0,0,0,0]" data-responsive_offset="on" data-type="shape" data-height="none" data-whitespace="nowrap" data-width="none" data-hoffset="['-50','-50','0','150']" data-voffset="['120','120','120','120']" data-x="['center','center','center','center']" data-y="['middle','middle','middle','middle']" data-frames='[{"from":"y:[100%];z:0;rx:0deg;ry:0;rz:0;sx:1;sy:1;skx:0;sky:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":2000,"ease":"power3.easeinout"},{"delay":"wait","speed":3000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"power3.easeinout"}]'>
                        <figure><img src="/images/object-6.png" alt="" /></figure>
                    </div>

                    <div className="tp-caption tp-resizeme rs-parallaxlevel-3 ipad-hidden" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingtop="[0,0,0,0]" data-responsive_offset="on" data-type="shape" data-height="none" data-whitespace="nowrap" data-width="none" data-hoffset="['-30','-30','-30','-30']" data-voffset="['-30','-30','-30','-30']" data-x="['right','right','right','right']" data-y="['middle','middle','middle','middle']" data-frames='[{"from":"y:[100%];z:0;rx:0deg;ry:0;rz:0;sx:1;sy:1;skx:0;sky:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"power3.easeinout"},{"delay":"wait","speed":3000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"power3.easeinout"}]'>
                        <figure className="main-image"><img src="/images/dev-rice.webp" alt="" /></figure>
                    </div>

                    <div className="tp-caption" data-paddingbottom="[0,0,0,0]" data-paddingleft="[15,15,15,15]" data-paddingright="[0,0,0,0]" data-paddingtop="[0,0,0,0]" data-responsive_offset="on" data-type="text" data-height="none" data-width="['900','800','750','650']" data-whitespace="normal" data-hoffset="['0','0','0','0']" data-voffset="['-210','-210','-180','-170']" data-x="['left','left','left','left']" data-y="['middle','middle','middle','middle']" data-textalign="['top','top','top','top']" data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rx:0deg;ry:0;rz:0;sx:1;sy:1;skx:0;sky:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"power3.easeinout"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"power3.easeinout"}]'>
                        <span className="title">From the heart of Punjab to global markets.</span>
                    </div>

                    <div className="tp-caption" data-paddingbottom="[0,0,0,0]" data-paddingleft="[15,15,15,15]" data-paddingright="[15,15,15,15]" data-paddingtop="[0,0,0,0]" data-responsive_offset="on" data-type="text" data-height="none" data-width="['900','800','750','650']" data-whitespace="normal" data-hoffset="['0','0','0','0']" data-voffset="['-40','-40','-40','-30']" data-x="['left','left','left','left']" data-y="['middle','middle','middle','middle']" data-textalign="['top','top','top','top']" data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rx:0deg;ry:0;rz:0;sx:1;sy:1;skx:0;sky:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"power3.easeinout"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"power3.easeinout"}]'>
                        <h2 style={{ fontSize: "55px", lineHeight: "1.2" }}>Bringing Quality Indian <br />Food Products to the World</h2>
                    </div>

                    <div className="tp-caption" data-paddingbottom="[0,0,0,0]" data-paddingleft="[15,15,15,15]" data-paddingright="[15,15,15,15]" data-paddingtop="[0,0,0,0]" data-responsive_offset="on" data-type="text" data-height="none" data-width="['700','750','700','450']" data-whitespace="normal" data-hoffset="['0','0','0','0']" data-voffset="['180','180','150','140']" data-x="['left','left','left','left']" data-y="['middle','middle','middle','middle']" data-textalign="['top','top','top','top']" data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rx:0deg;ry:0;rz:0;sx:1;sy:1;skx:0;sky:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"power3.easeinout"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"power3.easeinout"}]'>
                        <a href="page-about.php" className="theme-btn btn-style-one"><span className="btn-title">Explore Our Products</span></a>
                    </div>
                </li>


                {/*  Slide 2  */}
                <li data-index="rs-2" data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="300" data-thumb="" data-rotate="0" data-saveperformance="off" data-title="Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">

                    {/*  MAIN IMAGE  */}
                    <img alt="" className="rev-slidebg" data-bgfit="cover" data-bgparallax="20" data-bgposition="center center" data-bgrepeat="no-repeat" data-no-retina="" src="/images/bg-1.jpg" />


                    <div className="tp-caption tp-shape tp-shapewrapper tp-resizeme big-ipad-hidden rs-parallaxlevel-1" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingtop="[0,0,0,0]" data-responsive_offset="on" data-type="shape" data-height="auto" data-whitespace="nowrap" data-width="none" data-hoffset="['-190','-100','-100','-100']" data-voffset="['-190','-190','-190','-190']" data-x="['left','left','left','left']" data-y="['middle','middle','middle','middle']" data-frames='[{"from":"x:[100%];z:0;rx:0deg;ry:0;rz:0;sx:1;sy:1;skx:0;sky:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"power3.easeinout"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"power3.easeinout"}]'>
                        <figure><img src="/images/rice-object.webp" alt="" /></figure>
                    </div>

                    <div className="tp-caption tp-resizeme rs-parallaxlevel-2 ipad-hidden" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingtop="[0,0,0,0]" data-responsive_offset="on" data-type="shape" data-height="none" data-whitespace="nowrap" data-width="none" data-hoffset="['-120','-120','-120','-120']" data-voffset="['100','100','100','100']" data-x="['right','right','right','right']" data-y="['middle','middle','middle','middle']" data-frames='[{"from":"y:[100%];z:0;rx:0deg;ry:0;rz:0;sx:1;sy:1;skx:0;sky:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1500,"ease":"power3.easeinout"},{"delay":"wait","speed":3000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"power3.easeinout"}]'>
                        <figure><img src="/images/paddy-object.webp" alt="" /></figure>
                    </div>


                    <div className="tp-caption tp-resizeme rs-parallaxlevel-3 ipad-hidden" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingtop="[0,0,0,0]" data-responsive_offset="on" data-type="shape" data-height="none" data-whitespace="nowrap" data-width="none" data-hoffset="['120','120','120','120']" data-voffset="['180','180','180','180']" data-x="['center','center','center','center']" data-y="['middle','middle','middle','middle']" data-frames='[{"from":"y:[100%];z:0;rx:0deg;ry:0;rz:0;sx:1;sy:1;skx:0;sky:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":2000,"ease":"power3.easeinout"},{"delay":"wait","speed":3000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"power3.easeinout"}]'>
                        <figure><img src="/images/single-paddy.png" alt="" /></figure>
                    </div>

                    <div className="tp-caption tp-resizeme rs-parallaxlevel-1 ipad-hidden" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingtop="[0,0,0,0]" data-responsive_offset="on" data-type="shape" data-height="none" data-whitespace="nowrap" data-width="none" data-hoffset="['120','120','120','120']" data-voffset="['100','100','100','100']" data-x="['center','center','center','center']" data-y="['top','top','top','top']" data-frames='[{"from":"y:[100%];z:0;rx:0deg;ry:0;rz:0;sx:1;sy:1;skx:0;sky:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":2000,"ease":"power3.easeinout"},{"delay":"wait","speed":3000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"power3.easeinout"}]'>
                        <figure><img src="/images/object-4.png" alt="" /></figure>
                    </div>

                    <div className="tp-caption tp-resizeme rs-parallaxlevel-2 ipad-hidden" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingtop="[0,0,0,0]" data-responsive_offset="on" data-type="shape" data-height="none" data-whitespace="nowrap" data-width="none" data-hoffset="['-30','-30','-30','-30']" data-voffset="['-180','-180','-180','-180']" data-x="['right','right','right','right']" data-y="['center','bottom','bottom','bottom']" data-frames='[{"from":"y:[100%];z:0;rx:0deg;ry:0;rz:0;sx:1;sy:1;skx:0;sky:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":2000,"ease":"power3.easeinout"},{"delay":"wait","speed":3000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"power3.easeinout"}]'>
                        <figure><img src="/images/object-5.png" alt="" /></figure>
                    </div>

                    <div className="tp-caption tp-resizeme rs-parallaxlevel-3 ipad-hidden" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingtop="[0,0,0,0]" data-responsive_offset="on" data-type="shape" data-height="none" data-whitespace="nowrap" data-width="none" data-hoffset="['-50','-50','0','150']" data-voffset="['120','120','120','120']" data-x="['center','center','center','center']" data-y="['middle','middle','middle','middle']" data-frames='[{"from":"y:[100%];z:0;rx:0deg;ry:0;rz:0;sx:1;sy:1;skx:0;sky:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":2000,"ease":"power3.easeinout"},{"delay":"wait","speed":3000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"power3.easeinout"}]'>
                        <figure><img src="/images/object-6.png" alt="" /></figure>
                    </div>

                    <div className="tp-caption tp-resizeme rs-parallaxlevel-3 ipad-hidden" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingtop="[0,0,0,0]" data-responsive_offset="on" data-type="shape" data-height="none" data-whitespace="nowrap" data-width="none" data-hoffset="['-30','-30','-30','-30']" data-voffset="['-30','-30','-30','-30']" data-x="['right','right','right','right']" data-y="['middle','middle','middle','middle']" data-frames='[{"from":"y:[100%];z:0;rx:0deg;ry:0;rz:0;sx:1;sy:1;skx:0;sky:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"power3.easeinout"},{"delay":"wait","speed":3000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"power3.easeinout"}]'>
                        <figure className="main-image"><img src="/images/common-product.webp" alt="" /></figure>
                    </div>

                    <div className="tp-caption" data-paddingbottom="[0,0,0,0]" data-paddingleft="[15,15,15,15]" data-paddingright="[0,0,0,0]" data-paddingtop="[0,0,0,0]" data-responsive_offset="on" data-type="text" data-height="none" data-width="['900','800','750','650']" data-whitespace="normal" data-hoffset="['0','0','0','0']" data-voffset="['-210','-210','-180','-170']" data-x="['left','left','left','left']" data-y="['middle','middle','middle','middle']" data-textalign="['top','top','top','top']" data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rx:0deg;ry:0;rz:0;sx:1;sy:1;skx:0;sky:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"power3.easeinout"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"power3.easeinout"}]'>
                        <span className="title">From the heart of Punjab to global markets.</span>
                    </div>

                    <div className="tp-caption" data-paddingbottom="[0,0,0,0]" data-paddingleft="[15,15,15,15]" data-paddingright="[15,15,15,15]" data-paddingtop="[0,0,0,0]" data-responsive_offset="on" data-type="text" data-height="none" data-width="['900','800','750','650']" data-whitespace="normal" data-hoffset="['0','0','0','0']" data-voffset="['-40','-40','-40','-30']" data-x="['left','left','left','left']" data-y="['middle','middle','middle','middle']" data-textalign="['top','top','top','top']" data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rx:0deg;ry:0;rz:0;sx:1;sy:1;skx:0;sky:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"power3.easeinout"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"power3.easeinout"}]'>
                        <h2 style={{ fontSize: "55px", lineHeight: "1.2" }}>Bringing Quality Indian <br />Food Products to the World</h2>
                    </div>

                    <div className="tp-caption" data-paddingbottom="[0,0,0,0]" data-paddingleft="[15,15,15,15]" data-paddingright="[15,15,15,15]" data-paddingtop="[0,0,0,0]" data-responsive_offset="on" data-type="text" data-height="none" data-width="['700','750','700','450']" data-whitespace="normal" data-hoffset="['0','0','0','0']" data-voffset="['180','180','150','140']" data-x="['left','left','left','left']" data-y="['middle','middle','middle','middle']" data-textalign="['top','top','top','top']" data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rx:0deg;ry:0;rz:0;sx:1;sy:1;skx:0;sky:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"power3.easeinout"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"power3.easeinout"}]'>
                        <a href="page-about.php" className="theme-btn btn-style-one"><span className="btn-title">Explore Our Products</span></a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</section>
{/*  End Main Slider */}{/*  Top Banners  */}
<section className="top-banners">
    <div className="container-fluid pb-0">
        <div className="row">
            {/*  Banner Box One  */}
            <div className="banner-box-one col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                    <div className="image"><img src="/images/top-banner-1.webp" alt="" /></div>
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
                    <div className="image"><img src="/images/top-banner-2.webp" alt="" /></div>
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
                    <div className="image"><img src="/images/top-banner-3.webp" alt="" /></div>
                    <div className="content">
                        <span className="title">International & Export Brand</span>
                        <h3>Punjabi Zaiqa</h3>
                        <a href="#products" className="theme-btn btn-style-two"><span className="btn-title">Explore</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/*  End Top Banners  */}{/*  About Section  */}
<section id="about" className="about-section pb-40 pb-lg-60">
    <div className="auto-container">
        <div className="row">
            {/*  Image Column  */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="about-image-wrapper">
                    <figure className="bg-shape"><img src="images/shape-1.png" alt="" /></figure>
                    <figure className="image-1"><img src="images/about-img.webp" alt="" /></figure>
                    <figure className="image-2"><img src="images/about-img-1.webp" alt="" /></figure>
                    <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="lightbox-image play-btn"><span className="icon fa fa-play"></span></a>
                </div>
            </div>

            {/*  Content Column  */}
            <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column wow fadeInRight">
                    <div className="sec-title">
                        <span className="sub-title">Built on Quality. Driven by Trust.</span>
                        <h2>Established in 2008, Devi Chand &amp; Sons</h2>
                        <div className="text">has grown from a trusted Indian food business into an expanding manufacturer, packer, and exporter serving customers across multiple international markets. Based in Moga, Punjab, we operate close to one of India’s key rice-producing regions, giving us strong access to quality agricultural products and established supply networks.</div>
                    </div>
                    <div className="row">
                        <div className="about-block col-lg-6 col-md-6">
                            <h5><i className="fa fa-check-circle"></i>The Best Farmers</h5>
                            <p>Lorem ipsum dolor sited amet consectetur notted.</p>
                        </div>
                        <div className="about-block col-lg-6 col-md-6">
                            <h5><i className="fa fa-check-circle"></i>The Best Farmers</h5>
                            <p>Lorem ipsum dolor sited amet consectetur notted.</p>
                        </div>
                    </div>
                    <a href="page-about.php" className="theme-btn btn-style-one"><span className="btn-title">Explore Our Products</span></a>
                </div>
            </div>
        </div>
    </div>
</section>
{/*  End About Section  */}{/*  Categories Section  */}
<section id="services" className="categories-section pt-0">
    <span className="bg-pattern"></span>

    <div className="auto-container">
        <div className="sec-title text-center">
            <span className="sub-title">Our Categories</span>
            <h2>What we’re offering</h2>
        </div>


        <div className="row">
            {/*  Category Block */}
            <div className="category-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box cat-bg-1">
                    <figure className="image"><a href="#products"><img src="images/cate-pro/oil.webp" alt="" /></a></figure>
                    <h4><a href="#products">Folome Rice Bran Oil</a></h4>
                    <p>When nothing prevents our to we like best be.</p>
                </div>
            </div>

            {/* Category Block */}
            <div className="category-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box cat-bg-2">
                    <figure className="image"><a href="#products"><img src="images/cate-pro/dev-blog.webp" alt="" /></a></figure>
                    <h4><a href="#products">Dev Bhog Basmati Mogra</a></h4>
                    <p>When nothing prevents our to we like best be.</p>
                </div>
            </div>

            {/* Category Block */}
            <div className="category-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box cat-bg-3">
                    <figure className="image"><a href="#products"><img src="images/cate-pro/punjabi-zaiqa.webp" alt="" /></a></figure>
                    <h4><a href="#products">Punjabi Zaiqa Long Grain Rice</a></h4>
                    <p>When nothing prevents our to we like best be.</p>
                </div>
            </div>

            {/* Category Block */}
            <div className="category-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box cat-bg-4">
                    <figure className="image"><a href="#products"><img src="images/cate-pro/pasta.webp" alt="" /></a></figure>
                    <h4><a href="#products">Folome Macaroni</a></h4>
                    <p>When nothing prevents our to we like best be.</p>
                </div>
            </div>
        </div>
    </div>
</section>
{/*  End Our Categories  */}{/*  Deal Section  */}
<section className="deal-section" style={{ backgroundImage: 'url(/images/1.webp)' }}>
    <div className="auto-container">
        <div className="content-box">
            <div className="sec-title">
                <span className="sub-title">Weekly Offers</span>
                <h2>Check deal of the day</h2>
                <div className="text">Lorem ipsum dolor sit amet nsectetur cing elit. Suspe ndisse suscipit sagittis leo sit met entum estibu dignissim.</div>
            </div>
            <span className="badge">100% Organic</span>
            <div className="time-counter"><div className="time-countdown" data-countdown="2/2/2026"></div></div>
        </div>
    </div>
</section>
{/*  End Deal Section  */}{/*  Call To Action  */}
<section className="call-to-action">
    <div className="auto-container">
        <div className="outer-box">
            <div className="sec-title light mb-0">
                <span className="sub-title">Need Our Help?</span>
                <h3>We’re leader in organic market</h3>
            </div>
            <a href="#products" className="theme-btn btn-style-one"><span className="btn-title">Explore Our Products</span></a>
        </div>
    </div>
</section>
{/* End Call To Action  */}{/*  Featured Products  */}
<section id="product" className="featured-products">
    <div className="auto-container">
        <div className="sec-title text-center">
            <span className="sub-title">Special Offers</span>
            <h2>Check today’s hot deal <br />products</h2>
        </div>

        <div className="row">
            {/* Product Block */}
            <div className="product-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                    <div className="image"><a href="#product-details"><img src="images/cate-pro/oil.webp" alt="" /></a></div>
                    <div className="content">
                        <h4><a href="#product-details">Folome Rice Bran Oil</a></h4>
                        <span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
                    </div>
                </div>
            </div>

            {/* Product Block */}
            <div className="product-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                    <div className="image"><a href="#product-details"><img src="images/cate-pro/dev-blog.webp" alt="" /></a></div>
                    <div className="content">
                        <h4><a href="#product-details">Dev Bhog Basmati Mogra</a></h4>
                        <span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
                    </div>
                </div>
            </div>

            {/* Product Block */}
            <div className="product-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                    <div className="image"><a href="#product-details"><img src="images/cate-pro/punjabi-zaiqa.webp" alt="" /></a></div>
                    <div className="content">
                        <h4><a href="#product-details">Punjabi Zaiqa Long Grain Rice</a></h4>
                        <span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
                    </div>
                </div>
            </div>

            {/* Product Block */}
            <div className="product-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                    <div className="image"><a href="#product-details"><img src="images/cate-pro/pasta.webp" alt="" /></a></div>
                    <div className="content">
                        <h4><a href="#product-details">Folome Macaroni</a></h4>
                        <span className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/*  End Featured Products  */}{/*  Features Section  */}
<section className="features-section">
    <div className="auto-container">
        <div className="row">
            {/*  Feature Block  */}
            <div className="feature-block col-lg-3 col-md-6 col-sm-12 mb-sm-50">
                <div className="inner">
                    <span className="icon flaticon-money-bag"></span>
                    <h5><a href="#">Best Value</a></h5>
                    <div className="text">Premium products at fair prices</div>
                </div>
            </div>

            {/*  Feature Block  */}
            <div className="feature-block col-lg-3 col-md-6 col-sm-12 mb-sm-50">
                <div className="inner">
                    <span className="icon flaticon-ship"></span>
                    <h5><a href="#">Wide Distribution</a></h5>
                    <div className="text">Supplied across the globe</div>
                </div>
            </div>

            {/*  Feature Block  */}
            <div className="feature-block col-lg-3 col-md-6 col-sm-12 mb-sm-50">
                <div className="inner">
                    <span className="icon flaticon-organic"></span>
                    <h5><a href="#">100% Organic</a></h5>
                    <div className="text">Natural and healthy ingredients</div>
                </div>
            </div>

            {/*  Feature Block  */}
            <div className="feature-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner">
                    <span className="icon flaticon-shield"></span>
                    <h5><a href="#">Premium Quality</a></h5>
                    <div className="text">Certified and trusted brand</div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* End Features Section  */}{/*  Clients Section  */}
<section className="clients-section">
    <div className="auto-container">
        {/*  Sponsors Outer  */}
        <div className="sponsors-outer">
            {/* clients carousel */}
            <ul className="clients-carousel owl-carousel owl-theme">
                <li className="slide-item"> <a href="#"><img src="images/brand01.png" alt="" /></a> </li>
                <li className="slide-item"> <a href="#"><img src="images/brand02.png" alt="" /></a> </li>
                <li className="slide-item"> <a href="#"><img src="images/brand03.png" alt="" /></a> </li>
                <li className="slide-item"> <a href="#"><img src="images/brand01.png" alt="" /></a> </li>
                <li className="slide-item"> <a href="#"><img src="images/brand02.png" alt="" /></a> </li>
                <li className="slide-item"> <a href="#"><img src="images/brand03.png" alt="" /></a> </li>
            </ul>
        </div>
    </div>
</section>
{/* End Clients Section  */}{/*  Testimonial Section  */}
<section id="testimonial" className="testimonial-section pb-0">
    <div className="auto-container">
        <div className="sec-title">
            <span className="sub-title">What They’re Saying</span>
            <h2>What they’re talking about our store</h2>
            <div className="text">Hear directly from our happy customers who trust our premium rice, oils, and pasta for their families and businesses every single day.</div>
        </div>

        {/*  Testimonial Carousel  */}
        <div className="testimonial-carousel owl-carousel owl-theme">
            {/*  Testimonial Block  */}
            <div className="testimonial-block">
                <div className="inner-box">
                    <div className="info-box">
                        <div className="thumb"><img src="images/testi-thumb-1.jpg" alt="" /></div>
                        <div className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
                        <h4 className="name">Priya Sharma</h4>
                        <span className="designation">Home Chef</span>
                    </div>
                    <div className="text">Devi&apos;s Basmati Rice has transformed our daily meals. The long grains and authentic aroma remind me of the true Punjabi flavors we grew up with. Simply exceptional!</div>
                    <span className="icon flaticon-left-quote"></span>
                </div>
            </div>

            {/*  Testimonial Block  */}
            <div className="testimonial-block">
                <div className="inner-box">
                    <div className="info-box">
                        <div className="thumb"><img src="images/testi-thumb-2.jpg" alt="" /></div>
                        <div className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
                        <h4 className="name">Rajesh Kumar</h4>
                        <span className="designation">Restaurant Owner</span>
                    </div>
                    <div className="text">The Folome Rice Bran Oil is incredibly light and perfect for all kinds of Indian cooking. I&apos;ve noticed a real difference in the taste and healthiness of my dishes.</div>
                    <span className="icon flaticon-left-quote"></span>
                </div>
            </div>

            {/*  Testimonial Block  */}
            <div className="testimonial-block">
                <div className="inner-box">
                    <div className="info-box">
                        <div className="thumb"><img src="images/testi-thumb-1.jpg" alt="" /></div>
                        <div className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
                        <h4 className="name">Anjali Gupta</h4>
                        <span className="designation">Homemaker</span>
                    </div>
                    <div className="text">Outstanding quality! The packaging and the premium feel of the Dev Bhog Mogra rice are unmatched. Our whole family absolutely loves it and we won&apos;t buy anything else.</div>
                    <span className="icon flaticon-left-quote"></span>
                </div>
            </div>

            {/*  Testimonial Block  */}
            <div className="testimonial-block">
                <div className="inner-box">
                    <div className="info-box">
                        <div className="thumb"><img src="images/testi-thumb-2.jpg" alt="" /></div>
                        <div className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
                        <h4 className="name">Sanjay Patel</h4>
                        <span className="designation">Father of Two</span>
                    </div>
                    <div className="text">Folome Macaroni is now a staple in our household. It cooks perfectly every time, never gets sticky, and the kids just can&apos;t get enough of it. Highly recommend it!</div>
                    <span className="icon flaticon-left-quote"></span>
                </div>
            </div>
        </div>

        <div className="other-info">
            <div className="inner">
                <figure className="image"><img src="images/fruit-basket.png" alt="" /></figure>
                <h2>785,000</h2>
                <div className="text">Healthy &amp; Pure Organic Products</div>
            </div>
        </div>
    </div>
</section>
{/*  End Testimonial Section  */}{/*  News Section  */}
<section id="news" className="news-section pt-90 pt-lg-120">
    <div className="auto-container">
        <div className="sec-title text-center">
            <span className="sub-title">What We’re Offering</span>
            <h2>Latest news updates <br />&amp; articles</h2>
        </div>

        <div className="row">
            {/*  News Block  */}
            <div className="news-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                    <div className="image-box">
                        <span className="date">20 Aug</span>
                        <figure className="image"><a href="news-details.php"><img src="images/news01.webp" alt="" /></a></figure>
                    </div>
                    <div className="lower-content">
                        <ul className="post-info">
                            <li><i className="far fa-user"></i> by Admin</li>
                            <li><i className="far fa-comments"></i> 2 Comments</li>
                        </ul>
                        <h4><a href="news-details.php">Which healthy food growth strategies required</a></h4>
                        <div className="text">Duis aute irure dolor lipsum simply free text the local markets.</div>
                        <a href="news-details.php" className="theme-btn btn-style-three"><span className="btn-title">Read more</span></a>
                    </div>
                </div>
            </div>

            {/*  News Block  */}
            <div className="news-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                    <div className="image-box">
                        <span className="date">20 Aug</span>
                        <figure className="image"><a href="news-details.php"><img src="images/news01.webp" alt="" /></a></figure>
                    </div>
                    <div className="lower-content">
                        <ul className="post-info">
                            <li><i className="far fa-user"></i> by Admin</li>
                            <li><i className="far fa-comments"></i> 2 Comments</li>
                        </ul>
                        <h4><a href="news-details.php">Which healthy food growth strategies required</a></h4>
                        <div className="text">Duis aute irure dolor lipsum simply free text the local markets.</div>
                        <a href="news-details.php" className="theme-btn btn-style-three"><span className="btn-title">Read more</span></a>
                    </div>
                </div>
            </div>

            {/*  News Block  */}
            <div className="news-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                    <div className="image-box">
                        <span className="date">20 Aug</span>
                        <figure className="image"><a href="news-details.php"><img src="images/news01.webp" alt="" /></a></figure>
                    </div>
                    <div className="lower-content">
                        <ul className="post-info">
                            <li><i className="far fa-user"></i> by Admin</li>
                            <li><i className="far fa-comments"></i> 2 Comments</li>
                        </ul>
                        <h4><a href="news-details.php">Which healthy food growth strategies required</a></h4>
                        <div className="text">Duis aute irure dolor lipsum simply free text the local markets.</div>
                        <a href="news-details.php" className="theme-btn btn-style-three"><span className="btn-title">Read more</span></a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>
{/* End News Section  */}{/*  Gallery Section  */}
<section className="gallery-section pt-0">
    <div className="auto-container">
        {/* clients carousel */}
        <ul className="gallery-carousel owl-carousel owl-theme wow fadeInUp">
            <li className="gallery-item"> <a href="#"><img src="images/gallery01.webp" alt="" /></a> </li>
            <li className="gallery-item"> <a href="#"><img src="images/gallery02.webp" alt="" /></a> </li>
        </ul>
    </div>
</section>
{/* End Gallery Section  */}






{/*  Scroll To Top  */}
<div className="scroll-to-top scroll-to-target" data-target="html"><span className="fa fa-angle-up"></span></div>


{/* Revolution Slider */}












{/* Revolution Slider */}













      
      

      
    </>
  );
}
