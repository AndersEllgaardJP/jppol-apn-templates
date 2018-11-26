(function () {
  'use strict';

  // <div class="epaper_banner_container"  style="position: relative; display: inline-block;">
  //   <div id="handle_epaper_btn_holder_inframe" class="epaper_overlay_btn" style="display:none; position:absolute;">
  //     <div id="toggle_epaper_inframe" class="handle_epaper_btn"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 120 120" width="120" height="120"><path class="epaper_layer_expand" d="M0,0v39.39l14.04-14.04L40.2,51.51L51.51,40.2L25.35,14.04L39.39,0 H0z M0,80.61V120h39.39l-14.04-14.04L51.51,79.8L40.2,68.49L14.04,94.65L0,80.61z M80.61,120H120V80.61l-14.04,14.04L79.8,68.49 L68.49,79.8l26.16,26.16L80.61,120z M120,39.39V0H80.61l14.04,14.04L68.49,40.2L79.8,51.51l26.16-26.16L120,39.39z"/></svg></div>
  //   </div>
  //     <div id="epaperframe_wrapper" style="width:930px; height:600px; overflow:hidden; ">
  //       <iframe name="epaperframe" id="epaperframe" src="banner.html" allowfullscreen frameborder="0" width="100%" height="100%" marginheight="0" marginwidth="0" scrolling="auto" style="overflow:visible;"></iframe>
  //     </div>
  // </div>
  var bannerOnSite = {
      epaper_iframe: null,
      parentBody: null,
      receiver: null
  };
  function initOverlay() {
      var parentDoc = window.parent.document;
      bannerOnSite.parentBody = parentDoc.body;
      bannerOnSite.receiver = parentDoc.getElementById(document.body.id);
      if (bannerOnSite.receiver === null) {
          return;
      }
      bannerOnSite.epaper_iframe = bannerOnSite.receiver.querySelector('iframe');
  }
  function openOverlay() {
      var containerStyling = "\n  background: rgba( 0, 0, 0, .8);\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 20px;\n  z-index: " + 9999 * 9999 + ";\n  ";
      bannerOnSite.receiver.setAttribute('style', containerStyling);
      var iframeStyling = "\n  height: 100%;\n  width: 100%;\n  ";
      bannerOnSite.epaper_iframe.setAttribute('style', iframeStyling);
      bannerOnSite.parentBody.style.overflow = 'hidden';
  }
  function closeOverlay() {
      var containerStyling = '';
      bannerOnSite.receiver.setAttribute('style', containerStyling);
      var iframeStyling = '';
      bannerOnSite.epaper_iframe.setAttribute('style', iframeStyling);
      bannerOnSite.parentBody.style.overflow = '';
      // fullScreenContainer
  }

  var dimCloserButton = 55;
  var styles = "html, body {\n\twidth: 100%;\n\theight: 100%;\n}\nbody, td, th {\n\tfont-family: Tahoma, Geneva, sans-serif;\n\tfont-size: 14px;\n\tcolor: #333;\n\tline-height: 21px;\n\n\tbackground-color:#fff;\n}\n#epaper_eb_banner,\n#epaper_eb_banner_container,\n#epaper_eb_banner_logo,\n#epaper_eb_banner_txt,\n#epaper_eb_banner_pointer {\n\tposition:absolute;\n\theight: 100%;\n\twidth: 100%;\n\tcursor: pointer;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center center;\n\tbackground-size:contain;\n}\n#epaper_eb_banner {\n\t/*background-color:#fff;*/\n\n\tbackground: -webkit-linear-gradient(rgba(0,0,0,0.52), rgba(0,0,0,0.0));\n\tbackground: -ms-linear-gradient(rgba(0,0,0,0.52), rgba(0,0,0,0.0));\n\tbackground: linear-gradient(rgba(0,0,0,0.52), rgba(0,0,0,0.0));\n\toverflow: hidden;\n}\n#epaper_eb_banner_container {}\n\n#epaper_eb_banner_logo {\n\t-webkit-box-sizing: border-box;\n\t-moz-box-sizing: border-box;\n\tbox-sizing: border-box;\n\theight:51px;\n\twidth:100%;\n\tpadding:10px;\n}\n#epaper_eb_banner_logo > div {\n\theight:100%;\n\twidth:100%;\n\tdisplay:block;\n}\n#epaper_eb_banner_content {\n\tposition: absolute;\n\tmargin-top:51px;\n\tdisplay: flex;\n\tjustify-content: center;\n\twidth: 100%;\n\theight: calc(100% - 51px);\n}\n\n.epaper_eb_banner_content_left, .epaper_eb_banner_content_right {\n\twidth: 40px;\n}\n.epaper_eb_banner_content_center {\n\theight: 100%;\n}\n.epaper_eb_banner_content_right {}\n.epaper_eb_banner_content_right .lastpage_arrow {\n\tfont-size:40px;\n\tfont-weight:bold;\n\tmargin-top:20px;\n\tcolor:#fff;\n}\n.epaper_eb_banner_content_right .nextpage_arrow {\n\tfont-size:57px;\n\tfont-weight:bold;\n\tmargin-top: calc(50vh - 122px);\n\tmargin-left:-10px;\n\tcolor:#fff;\n}\n.epaper_eb_banner_content_center img {\n\tposition: relative;\n\theight: 515px;\n\twidth: auto;\n\ttop:50%;\n\ttransform:translateY(-50%);\n\n\t-moz-box-shadow: \t3px 3px 5px 1px rgba(0,0,0,0.3);\n\t-webkit-box-shadow: 3px 3px 5px 1px rgba(0,0,0,0.3);\n\tbox-shadow: \t\t3px 3px 5px 1px rgba(0,0,0,0.3);\n}\n.epaper_eb_banner_content_center img:nth-child(2) {\n\t-moz-box-shadow: \t4px 3px 5px 1px rgba(0,0,0,0.3);\n\t-webkit-box-shadow: 4px 3px 5px 1px rgba(0,0,0,0.3);\n\tbox-shadow: \t\t4px 3px 5px 1px rgba(0,0,0,0.3);\n}\n\n#epaper_eb_banner_txt {}\n#epaper_eb_banner_pointer {\n\twidth:30px;\n\theight:30px;\n\toverflow:visible;\n\tleft:50%;\n\ttop:50%;\n\t-webkit-transform: translate(203px,34px) scale(1.1) rotate(-27deg);\n\ttransform: translate(203px,34px) scale(1.1) rotate(-27deg);\n\t-webkit-transition: all 0.3s ease;\n\ttransition: all 0.3s ease;\n}\n#epaper_eb_banner_pointer svg {\n\twidth:100%;\n\tfilter: drop-shadow(0px 3px 3px rgba(0,0,0,0.35));\n}\n.pointer_stroke {\n\tfill: #000;\n}\n.pointer_fill {\n\tfill: url(#grad1);\n}\n#epaper_eb_banner_container:hover #epaper_eb_banner_pointer {\n\t-webkit-transform: translate(200px,30px) scale(1) rotate(-32deg);\n\ttransform: translate(200px,30px) scale(1) rotate(-32deg);\n\n}\n.moveL {\n\t-webkit-animation: moveLeft 3s ease-out 1;\n\tanimation: moveLeft 3s ease-out 1;\n}\n.moveR {\n\t-webkit-animation: moveRight 3s ease-out 1;\n\tanimation: moveRight 3s ease-out 1;\n}\n@-webkit-keyframes moveRight {\n\t0% {-webkit-transform: translateX(0%);}\n\t10% {-webkit-transform: translateX(100%);}\n\t100% {-webkit-transform: translateX(100%);}\n}\n@keyframes moveRight {\n\t0% {transform: translateX(0%);}\n\t10% {transform: translateX(100%);}\n\t100% {transform: translateX(100%);}\n}\n@-webkit-keyframes moveLeft {\n\t0% {-webkit-transform: translateX(0%);}\n\t10% {-webkit-transform: translateX(-100%);}\n\t100% {-webkit-transform: translateX(-100%);}\n}\n@keyframes moveLeft {\n\t0% {transform: translateX(0%);}\n\t10% {transform: translateX(-100%);}\n\t100% {transform: translateX(-100%);}\n}\n.reopenerSvg {\n  height: 44px;\n  width: 44px;\n}\n.reopenerSvg:hover {\n  height: 50px;\n  width: 50px;\n}\n.closerButton {\n  background: rgb(0, 0, 0);\n  border-radius: 50%;\n  color: #fff;\n  height: " + dimCloserButton + "px;\n  fill: #fff;\n  font-family: Arial;\n  font-size: 27px;\n  font-weight: bold;\n  line-height: " + dimCloserButton + "px;\n  padding: 20px;\n  text-transform: uppercase;\n  width: " + dimCloserButton + "px;\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n}\n.fullScreenIframe {\n  border: 0;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}";

  // <div id="epaper_eb_banner"><div id="epaper_eb_banner_container"><div id="epaper_eb_banner_logo"><div></div></div><div id="epaper_eb_banner_content"><div class="epaper_eb_banner_content_left"></div>
  //                             <div id="epaper_eb_cover" class="epaper_eb_banner_content_center">
  //                             <img src="https://viewer.ipaper.io/ekstra-bladet/scandinavian-park/scansonderprospekt//Image.ashx?PageNumber=1&amp;ImageType=Normal"><img src="https://viewer.ipaper.io/ekstra-bladet/scandinavian-park/scansonderprospekt//Image.ashx?PageNumber=2&amp;ImageType=Normal">
  //                             </div>
  //                             <div class="epaper_eb_banner_content_right">
  //                               <i class="material-icons lastpage_arrow">last_page</i>
  //                               <i class="material-icons nextpage_arrow">chevron_right</i>
  //                             </div></div><div id="epaper_eb_banner_txt"></div><div id="epaper_eb_banner_pointer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 23">
  //                 <path class="pointer_stroke" d="M6 0h2v1H6V0zM0 8v3h1V9h2V8H0zM1 11h1v1H1V11zM3 9h1v1H3V9zM16 8h1v1h-1V8zM2 12h1v2H2V12zM3 14h1v2H3V14zM4 16h1v3H4V16zM16 17h1v3h-1V17zM12 7h2V6h-3v4h1V7zM14 7v4h1V8h1V7H14zM16 23v-3h-1v2H6v-3H5v4H16zM4 10v1h1v4h1V1H5v9H4zM9 6h2V5H9V1H8v9h1V6zM17 9h1v8h-1V9z"></path>
  //                 <polygon class="pointer_fill" points="6 1 6 15 5 15 5 11 4 11 4 10 3 10 3 9 1 9 1 11 2 11 2 12 3 12 3 14 4 14 4 16 5 16 5 19 6 19 6 22 15 22 15 20 16 20 16 17 17 17 17 9 16 9 16 8 15 8 15 11 14 11 14 7 12 7 12 10 11 10 11 6 9 6 9 10 8 10 8 1 "></polygon>
  //                 <defs><linearGradient id="grad1" x1="65%" y1="20%" x2="45%" y2="90%"><stop offset="0%" style="stop-color:rgb(255,255,255); stop-opacity:1"></stop><stop offset="100%" style="stop-color:rgb(215,215,215); stop-opacity:1"></stop></linearGradient></defs>
  //                 </svg></div></div></div>
  function bannerInFrame() {
      var swipeBannerUrl = '#{SWIPEBANNERURL}';
      var swipeBannerUrl_frontpage = swipeBannerUrl + "/Image.ashx?PageNumber=1&ImageType=Normal";
      var hasSecondFrontpage = '#{SECONDFRONTPAGE}';
      var swipeBannerUrl_frontpage_2 = hasSecondFrontpage.indexOf('SECONDFRONTPAGE') === -1 &&
          hasSecondFrontpage === 'true'
          ? swipeBannerUrl + "/Image.ashx?PageNumber=2&ImageType=Normal"
          : '';
      var backgroundColorTop = '#{BACKGROUNDCOLORTOP}';
      var backgroundColor = '#{BACKGROUNDCOLOR}';
      var mediaUrl = '${MEDIA_URL}';
      // const domainString: string = '#{DOMAIN}';
      var trackingPixel1 = '#{TRACKINGURL1}';
      var trackingPixel2 = '#{TRACKINGURL2}';
      var trackingPixel3 = '#{TRACKINGURL3}';
      var urlqueorand = swipeBannerUrl.indexOf('?') !== -1 ? '&' : '?';
      var theTarget = swipeBannerUrl +
          urlqueorand +
          't=' +
          encodeURIComponent(new Date().toString());
      var body = document.body;
      var container = document.createElement('div');
      container.id = 'epaper_eb_banner';
      var epaper_eb_banner_container = document.createElement('div');
      epaper_eb_banner_container.id = 'epaper_eb_banner_container';
      var htmlString = "<div id=\"epaper_eb_banner_logo\"><div></div></div>";
      epaper_eb_banner_container.innerHTML = htmlString;
      var epaper_eb_banner_content = document.createElement('div');
      epaper_eb_banner_content.id = 'epaper_eb_banner_content';
      var frontPage = "<img src='" + swipeBannerUrl_frontpage + "' />";
      var frontPage2 = swipeBannerUrl_frontpage_2 !== ''
          ? "<img src='" + swipeBannerUrl_frontpage_2 + "' />"
          : '';
      var content = "\n                  <div class=\"epaper_eb_banner_content_left\"></div>\n                    <div id=\"epaper_eb_cover\" class=\"epaper_eb_banner_content_center\">\n                    " + frontPage + frontPage2 + "\n                    </div>\n                    <div class=\"epaper_eb_banner_content_right\">\n                      <i class=\"material-icons lastpage_arrow\">last_page</i>\n                      <i class=\"material-icons nextpage_arrow\">chevron_right</i>\n                    </div>";
      epaper_eb_banner_content.innerHTML = content;
      epaper_eb_banner_container.appendChild(epaper_eb_banner_content);
      var epaper_eb_banner_txt = document.createElement('div');
      epaper_eb_banner_txt.id = 'epaper_eb_banner_txt';
      epaper_eb_banner_container.appendChild(epaper_eb_banner_txt);
      var epaper_eb_banner_pointer = document.createElement('div');
      epaper_eb_banner_pointer.id = 'epaper_eb_banner_pointer';
      var svg = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 18 23\">\n                <path class=\"pointer_stroke\" d=\"M6 0h2v1H6V0zM0 8v3h1V9h2V8H0zM1 11h1v1H1V11zM3 9h1v1H3V9zM16 8h1v1h-1V8zM2 12h1v2H2V12zM3 14h1v2H3V14zM4 16h1v3H4V16zM16 17h1v3h-1V17zM12 7h2V6h-3v4h1V7zM14 7v4h1V8h1V7H14zM16 23v-3h-1v2H6v-3H5v4H16zM4 10v1h1v4h1V1H5v9H4zM9 6h2V5H9V1H8v9h1V6zM17 9h1v8h-1V9z\"/>\n                <polygon class=\"pointer_fill\" points=\"6 1 6 15 5 15 5 11 4 11 4 10 3 10 3 9 1 9 1 11 2 11 2 12 3 12 3 14 4 14 4 16 5 16 5 19 6 19 6 22 15 22 15 20 16 20 16 17 17 17 17 9 16 9 16 8 15 8 15 11 14 11 14 7 12 7 12 10 11 10 11 6 9 6 9 10 8 10 8 1 \" />\n                <defs><linearGradient id=\"grad1\" x1=\"65%\" y1=\"20%\" x2=\"45%\" y2=\"90%\"><stop offset=\"0%\" style=\"stop-color:rgb(255,255,255); stop-opacity:1\" /><stop offset=\"100%\" style=\"stop-color:rgb(215,215,215); stop-opacity:1\" /></linearGradient></defs>\n                </svg>";
      epaper_eb_banner_pointer.innerHTML = svg;
      epaper_eb_banner_container.appendChild(epaper_eb_banner_pointer);
      /**
       * Assemble banner element
       */
      container.appendChild(epaper_eb_banner_container);
      var fullScreenContainer = document.createElement('div');
      fullScreenContainer.setAttribute('style', "display:none;");
      var fullScreenIframe = document.createElement('iframe');
      fullScreenIframe.className = 'fullScreenIframe';
      var fullScreenCloser = document.createElement('div');
      fullScreenCloser.innerHTML = 'luk&nbsp;&times;';
      var reOpener = document.createElement('div');
      reOpener.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 120 120" width="120" height="120" class="reopenerSvg"><path class="epaper_layer_expand" d="M0,0v39.39l14.04-14.04L40.2,51.51L51.51,40.2L25.35,14.04L39.39,0 H0z M0,80.61V120h39.39l-14.04-14.04L51.51,79.8L40.2,68.49L14.04,94.65L0,80.61z M80.61,120H120V80.61l-14.04,14.04L79.8,68.49 L68.49,79.8l26.16,26.16L80.61,120z M120,39.39V0H80.61l14.04,14.04L68.49,40.2L79.8,51.51l26.16-26.16L120,39.39z"/></svg>';
      fullScreenCloser.className = 'closerButton';
      fullScreenCloser.addEventListener('click', function () {
          closeOverlay();
          fullScreenCloser.style.display = 'none;';
          reOpener.style.display = 'flex';
      });
      reOpener.addEventListener('click', function () {
          openOverlay();
          fullScreenCloser.style.display = 'flex;';
          reOpener.style.display = 'none';
      });
      reOpener.className = 'closerButton';
      fullScreenContainer.appendChild(fullScreenIframe);
      fullScreenContainer.appendChild(fullScreenCloser);
      fullScreenContainer.appendChild(reOpener);
      container.appendChild(fullScreenContainer);
      /**
       * Set up Event listeners
       */
      // $("#epaper_eb_banner_container").on("swipeleft", function() {
      //   openAdLayer("moveL");
      // });
      // $("#epaper_eb_banner_container").on("swiperight", function() {
      //   openAdLayer("moveR");
      // });
      epaper_eb_banner_container.addEventListener('click', function () {
          openAdLayer('moveL');
      });
      function openAdLayer(classArg) {
          if (!epaper_eb_banner_content.classList.contains(classArg)) {
              epaper_eb_banner_content.classList.add(classArg);
              epaper_eb_banner_txt.classList.add('fade');
              epaper_eb_banner_pointer.classList.add('fade');
              if (trackingPixel1.indexOf('TRACKINGURL1') === -1 &&
                  trackingPixel1.indexOf('ebimg.dk') === -1) {
                  var trackingImg1 = document.createElement('img');
                  trackingImg1.src = trackingPixel1;
                  body.appendChild(trackingImg1);
              }
              if (trackingPixel2.indexOf('TRACKINGURL2') === -1 &&
                  trackingPixel2.indexOf('ebimg.dk') === -1) {
                  var trackingImg2 = document.createElement('img');
                  trackingImg2.src = trackingPixel2;
                  body.appendChild(trackingImg2);
              }
              if (trackingPixel3.indexOf('TRACKINGURL3') === -1 &&
                  trackingPixel3.indexOf('ebimg.dk') === -1) {
                  var trackingImg3 = document.createElement('img');
                  trackingImg3.src = trackingPixel3;
                  body.appendChild(trackingImg3);
              }
              openOverlay();
              // window.parent.postMessage(
              //   JSON.stringify(pass_epaperframe_data),
              //   epaper_originurl
              // );
              setTimeout(function () {
                  fullScreenIframe.src = theTarget;
                  fullScreenContainer.style.display = 'block';
                  epaper_eb_banner_container.style.display = 'none';
                  // location.replace(theTarget);
              }, 800);
          }
      }
      /**
       * Add all styling options to head
       */
      var headFrag = document.createDocumentFragment();
      var linkTag = document.createElement('link');
      linkTag.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
      linkTag.rel = 'stylesheet';
      headFrag.appendChild(linkTag);
      var styleTag = document.createElement('style');
      var bgStyling = backgroundColor.indexOf('BACKGROUNDCOLOR') === -1
          ? "#epaper_eb_banner_container { background-color: " + backgroundColor + "; }"
          : '';
      var moreStyling = bgStyling + "\n  #epaper_eb_banner_logo { background-color: " + backgroundColorTop + "; }\n  #epaper_eb_banner_logo > div { background: url(" + mediaUrl + ") left center no-repeat; background-size:contain; }";
      styleTag.innerHTML = styles + moreStyling;
      headFrag.appendChild(styleTag);
      document.head.appendChild(headFrag);
      /**
       * Add banner to body
       */
      body.appendChild(container);
  }

  window.addEventListener('load', function () {
      bannerInFrame();
      initOverlay();
      console.log('oooh ${CLICK_URL}');
  });

}());
