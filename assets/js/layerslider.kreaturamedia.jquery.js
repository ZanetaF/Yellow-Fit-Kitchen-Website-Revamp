((window._layerSlider = {
  globals: { youTubeIsReady: !1, vimeoIsReady: !1 },
  GSAP: "undefined" != typeof LS_GSAP && LS_GSAP,
  pluginsLoaded: [],
  pluginsNotLoaded: [],
  pluginsBeingLoaded: [],
  plugins: {},
  slidersList: {},
  currentScript: document.currentScript,
  lsScript: jQuery('script[src*="layerslider.kreaturamedia.jquery.js"]')[0],
  scriptPath: "",
  pluginsPath: !1,
  showNotice: function (e, t, i, a) {
    var s,
      r,
      o = "string" == typeof e ? jQuery("#" + e).first() : e;
    switch (t) {
      case "jquery":
        ((r = "Multiple jQuery issue"),
          (s =
            'It looks like that another plugin or your theme loads an extra copy of the jQuery library causing problems for LayerSlider to show your sliders. Please navigate from your WordPress admin sidebar to LayerSlider -> Options -> Advanced and enable the "Include scripts in the footer" option.'));
        break;
      case "oldjquery":
        ((r = "Old jQuery issue"),
          (s =
            "It looks like you are using an old version (" +
            i +
            ") of the jQuery library. LayerSlider requires at least version " +
            a +
            " or newer. Please update jQuery to 1.10.x or higher. Important: Please do not use the jQuery Updater plugin on WordPress as it can cause issues in certain cases."));
    }
    jQuery(
      '<div class="ls-notification"><i class="ls-notification-logo">!</i><strong>LayerSlider: ' +
        r +
        "</strong><span>" +
        s +
        "</span></div>",
    ).insertBefore(o);
  },
  removeSlider: function (e) {
    ((this.slidersList[e] = null), delete this.slidersList[e]);
  },
  checkVersions: function (e, t) {
    for (var i = e.split("."), a = t.split("."), s = 0; s < i.length; ++s) {
      if (a.length == s) return !1;
      if (parseInt(i[s]) != parseInt(a[s])) return !(parseInt(i[s]) > parseInt(a[s]));
    }
    return (i.length, a.length, !0);
  },
}),
  (Number.prototype.indexOf = function (e) {
    return ("" + this).indexOf(e);
  }),
  (function (se) {
    "use strict";
    ((window._layerSliders = {}),
      (se.fn.layerSlider = function (i, a, s, r) {
        i = i || {};
        var t,
          e = "1.8.0",
          o = se.fn.jquery;
        if (window._layerSlider.checkVersions(e, o, e))
          return (typeof i).match("object|undefined")
            ? this.each(function (e) {
                ((t = "LS" + Math.random().toString(36).substr(2, 9)),
                  se(this).data("lsSliderUID") ||
                    (window._layerSliders[t] = new n(this, se(this), i, t)));
              })
            : "data" === i
              ? window._layerSliders[this.data("lsSliderUID")]
              : "eventData" === i
                ? window._layerSliders[this.data("lsSliderUID")].api.eventData()
                : "defaultInitOptions" === i
                  ? window._layerSliders[this.data("lsSliderUID")].defaults.init.options || !1
                  : "userInitOptions" === i
                    ? window._layerSliders[this.data("lsSliderUID")].userInitOptions || !1
                    : "sliderInitOptions" === i
                      ? window._layerSliders[this.data("lsSliderUID")].o || !1
                      : "originalMarkup" === i
                        ? window._layerSliders[this.data("lsSliderUID")].originalMarkup || !1
                        : this.each(function (e) {
                            var t = window._layerSliders[se(this).data("lsSliderUID")];
                            (t && t.api.methods(i, a, s, r), (t = null));
                          });
        window._layerSlider.showNotice(se(this), "oldjquery", o, e);
      }));
    var n = function (M, _, a, z) {
      _.data("lsSliderUID", z).attr("data-layerslider-uid", z);
      var ie = this,
        ae = (ie.gsap = window._layerSlider.GSAP ? window._layerSlider.GSAP : window);
      ((ie.defaults = {
        init: {
          lsDataArraySplitChar: "|",
          dataKey: "_LS",
          controls: [
            "#playmedia",
            "#pausemedia",
            "#unmute",
            "#unmutemedia",
            "#start",
            "#stop",
            "#prev",
            "#next",
            "#replay",
            "#reverse",
            "#reverse-replay",
            "#reversereplay",
          ],
          options: {
            type: "responsive",
            fullSizeMode: "normal",
            fitScreenWidth: !0,
            preventSliderClip: !0,
            allowFullscreen: !0,
            responsiveUnder: -1,
            layersContainerWidth: -1,
            layersContainerHeight: -1,
            maxRatio: -1,
            insertMethod: "prependTo",
            insertSelector: null,
            clipSlideTransition: !1,
            slideBGSize: "cover",
            slideBGPosition: "50% 50%",
            preferBlendMode: !1,
            autoStart: !0,
            startInViewport: !0,
            playByScroll: !1,
            playByScrollSpeed: 1,
            playByScrollStart: !1,
            playByScrollSkipSlideBreaks: !1,
            pauseOnHover: "slideshowOnly",
            pauseLayers: !1,
            firstSlide: 1,
            sliderFadeInDuration: 350,
            cycles: -1,
            forceCycles: !0,
            twoWaySlideshow: !1,
            shuffleSlideshow: !1,
            forceLayersOutDuration: 750,
            skin: "v6",
            skinsPath: "/layerslider/skins/",
            globalBGColor: "transparent",
            globalBGImage: !1,
            globalBGRepeat: "no-repeat",
            globalBGAttachment: "scroll",
            globalBGSize: "auto",
            globalBGPosition: "50% 50%",
            navPrevNext: !0,
            navStartStop: !0,
            navButtons: !0,
            keybNav: !0,
            touchNav: !0,
            hoverPrevNext: !0,
            hoverBottomNav: !1,
            showBarTimer: !1,
            showCircleTimer: !0,
            showSlideBarTimer: !1,
            thumbnailNavigation: "hover",
            tnContainerWidth: "60%",
            tnWidth: 100,
            tnHeight: 60,
            tnActiveOpacity: 35,
            tnInactiveOpacity: 100,
            scrollModifier: 0,
            autoPlayVideos: !0,
            autoPauseSlideshow: "auto",
            youtubePreview: "maxresdefault.jpg",
            rememberUnmuteState: !0,
            parallaxCenterDegree: 40,
            parallaxSensitivity: 10,
            parallaxCenterLayers: "center",
            parallaxScrollReverse: !1,
            yourLogo: !1,
            yourLogoStyle: "left: -10px; top: -10px;",
            yourLogoLink: !1,
            yourLogoTarget: "_self",
            optimizeForMobile: !0,
            hideOnMobile: !1,
            hideUnder: -1,
            hideOver: -1,
            slideOnSwipe: !0,
            allowRestartOnResize: !1,
            useSrcset: !0,
            hashChange: !1,
            staticImage: "",
          },
        },
        slider: { errorText: "LayerSlider (UID: " + z + ") error:" },
        slide: {
          keys: {
            slidedelay: ["data", "duration"],
            duration: ["data", "duration"],
            timeshift: ["data", "timeShift"],
            transition2d: ["data", "transition2d"],
            transition3d: ["data", "transition3d"],
            transitionorigami: ["data", "transitionorigami"],
            customtransition2d: ["data", "customtransition2d"],
            customtransition3d: ["data", "customtransition3d"],
            transitionduration: ["data", "transitionDuration"],
            backgroundsize: ["data", "backgroundSize"],
            bgsize: ["data", "backgroundSize"],
            backgroundposition: ["data", "backgroundPosition"],
            bgposition: ["data", "backgroundPosition"],
            backgroundcolor: ["data", "backgroundColor"],
            bgcolor: ["data", "backgroundColor"],
            thumbnail: ["data", "thumbnail"],
            deeplink: ["data", "deeplink"],
            overflow: ["data", "overflow"],
            kenburnspan: ["kenBurns", "pan"],
            kenburnszoom: ["kenBurns", "zoom"],
            kenburnsrotation: ["kenBurns", "rotation"],
            kenburnsrotate: ["kenBurns", "rotation"],
            kenburnsscale: ["kenBurns", "scale"],
            filterfrom: ["filter", "from"],
            filterto: ["filter", "to"],
            parallaxtype: ["parallax", "type"],
            parallaxevent: ["parallax", "event"],
            parallaxaxis: ["parallax", "axis"],
            parallaxtransformorigin: ["parallax", "transformOrigin"],
            parallaxdurationmove: ["parallax", "durationMove"],
            parallaxdurationleave: ["parallax", "durationLeave"],
            parallaxrotate: ["parallax", "rotation"],
            parallaxrotation: ["parallax", "rotation"],
            parallaxdistance: ["parallax", "distance"],
            parallaxtransformperspective: ["parallax", "transformPerspective"],
            globalhover: ["data", "globalhover"],
          },
          options: {
            $link: !1,
            index: -1,
            data: { duration: -1, timeShift: 0, calculatedTimeShift: 0 },
            parallax: {},
            kenBurns: { scale: 1.2 },
            filter: {},
          },
          registerPluginDefaults: function (e, t, i) {
            (ie.defaults.slide.options.plugins || (ie.defaults.slide.options.plugins = {}),
              (ie.defaults.slide.options.plugins[e] = t));
          },
        },
        layer: {
          keys: {
            keyframe: ["is"],
            responsive: ["is"],
            position: ["settings"],
            static: ["settings"],
            mirrortransitions: ["settings"],
            minfontsize: ["styleSettings"],
            minmobilefontsize: ["styleSettings"],
            overlay: ["styleSettings"],
            pointerevents: ["styleSettings"],
            autoplay: ["mediaSettings"],
            controls: ["mediaSettings"],
            showinfo: ["mediaSettings"],
            fillmode: ["mediaSettings"],
            thumbnail: ["poster", "mediaSettings"],
            poster: ["mediaSettings"],
            volume: ["mediaSettings"],
            muted: ["mediaSettings"],
            loopmedia: ["loop", "mediaSettings"],
            backgroundvideo: ["backgroundVideo", "mediaSettings"],
            fadein: ["opacity", "inLayerFromCSS"],
            opacityin: ["opacity", "inLayerFromCSS"],
            rotatein: ["rotation", "inLayerFromCSS"],
            rotatexin: ["rotationX", "inLayerFromCSS"],
            rotateyin: ["rotationY", "inLayerFromCSS"],
            rotationin: ["rotation", "inLayerFromCSS"],
            rotationxin: ["rotationX", "inLayerFromCSS"],
            rotationyin: ["rotationY", "inLayerFromCSS"],
            scalein: ["scale", "inLayerFromCSS"],
            scalexin: ["scaleX", "inLayerFromCSS"],
            scaleyin: ["scaleY", "inLayerFromCSS"],
            skewxin: ["skewX", "inLayerFromCSS"],
            skewyin: ["skewY", "inLayerFromCSS"],
            bgcolorin: ["backgroundColor", "inLayerStyleFromCSS"],
            colorin: ["color", "inLayerStyleFromCSS"],
            radiusin: ["borderRadius", "inLayerStyleShouldBeConvertedFrom"],
            widthin: ["width", "inLayerStyleShouldBeConvertedFrom"],
            heightin: ["height", "inLayerStyleShouldBeConvertedFrom"],
            filterin: ["filter", "inLayerStyleShouldBeConvertedFrom"],
            rotate: ["rotation", "inLayerToCSS"],
            rotatex: ["rotationX", "inLayerToCSS"],
            rotatey: ["rotationY", "inLayerToCSS"],
            rotation: ["rotation", "inLayerToCSS"],
            rotationx: ["rotationX", "inLayerToCSS"],
            rotationy: ["rotationY", "inLayerToCSS"],
            scale: ["scale", "inLayerToCSS"],
            scalex: ["scaleX", "inLayerToCSS"],
            scaley: ["scaleY", "inLayerToCSS"],
            skewx: ["skewX", "inLayerToCSS"],
            skewy: ["skewY", "inLayerToCSS"],
            transformoriginin: ["transformOrigin", "inLayerShouldBeConverted"],
            offsetxin: ["x", "inLayerShouldBeConverted"],
            offsetyin: ["y", "inLayerShouldBeConverted"],
            clipin: ["clip", "inClipShouldBeConverted"],
            delayin: ["startAt", "in"],
            startatin: ["startAt", "in"],
            instartat: ["startAt", "in"],
            durationin: ["duration", "in"],
            easein: ["ease", "in"],
            easingin: ["ease", "in"],
            transitionin: ["enabled", "in"],
            textfadein: ["opacity", "textInNodesFrom"],
            textopacityin: ["opacity", "textInNodesFrom"],
            textrotatein: ["rotation", "textInNodesFrom"],
            textrotatexin: ["rotationX", "textInNodesFrom"],
            textrotateyin: ["rotationY", "textInNodesFrom"],
            textrotationin: ["rotation", "textInNodesFrom"],
            textrotationxin: ["rotationX", "textInNodesFrom"],
            textrotationyin: ["rotationY", "textInNodesFrom"],
            textscalein: ["scale", "textInNodesFrom"],
            textscalexin: ["scaleX", "textInNodesFrom"],
            textscaleyin: ["scaleY", "textInNodesFrom"],
            textskewxin: ["skewX", "textInNodesFrom"],
            textskewyin: ["skewY", "textInNodesFrom"],
            texteasein: ["ease", "textInNodesTo"],
            texteasingin: ["ease", "textInNodesTo"],
            texttransformoriginin: ["transformOrigin", "textInShouldBeConverted"],
            textoffsetxin: ["x", "textInShouldBeConverted"],
            textoffsetyin: ["y", "textInShouldBeConverted"],
            texttypein: ["type", "textIn"],
            textshiftin: ["shiftNodes", "textIn"],
            textdelayin: ["startAt", "textIn"],
            textstartatin: ["startAt", "textIn"],
            textinstartat: ["startAt", "textIn"],
            textdurationin: ["duration", "textIn"],
            texttransitionin: ["enabled", "textIn"],
            fadeout: ["opacity", "outLayerToCSS"],
            opacityout: ["opacity", "outLayerToCSS"],
            rotateout: ["rotation", "outLayerToCSS"],
            rotatexout: ["rotationX", "outLayerToCSS"],
            rotateyout: ["rotationY", "outLayerToCSS"],
            rotationout: ["rotation", "outLayerToCSS"],
            rotationxout: ["rotationX", "outLayerToCSS"],
            rotationyout: ["rotationY", "outLayerToCSS"],
            scaleout: ["scale", "outLayerToCSS"],
            scalexout: ["scaleX", "outLayerToCSS"],
            scaleyout: ["scaleY", "outLayerToCSS"],
            skewxout: ["skewX", "outLayerToCSS"],
            skewyout: ["skewY", "outLayerToCSS"],
            bgcolorout: ["backgroundColor", "outLayerStyleToCSS"],
            colorout: ["color", "outLayerStyleToCSS"],
            radiusout: ["borderRadius", "outLayerStyleShouldBeConvertedTo"],
            widthout: ["width", "outLayerStyleShouldBeConvertedTo"],
            heightout: ["height", "outLayerStyleShouldBeConvertedTo"],
            filterout: ["filter", "outLayerStyleShouldBeConvertedTo"],
            transformoriginout: ["transformOrigin", "outLayerShouldBeConverted"],
            offsetxout: ["x", "outLayerShouldBeConverted"],
            offsetyout: ["y", "outLayerShouldBeConverted"],
            clipout: ["clip", "outClipShouldBeConverted"],
            showuntil: ["showUntil", "out"],
            startatout: ["startAt", "out"],
            outstartat: ["startAt", "out"],
            durationout: ["duration", "out"],
            easeout: ["ease", "out"],
            easingout: ["ease", "out"],
            transitionout: ["enabled", "out"],
            textfadeout: ["opacity", "textOutNodesTo"],
            textopacityout: ["opacity", "textOutNodesTo"],
            textrotateout: ["rotation", "textOutNodesTo"],
            textrotatexout: ["rotationX", "textOutNodesTo"],
            textrotateyout: ["rotationY", "textOutNodesTo"],
            textrotationout: ["rotation", "textOutNodesTo"],
            textrotationxout: ["rotationX", "textOutNodesTo"],
            textrotationyout: ["rotationY", "textOutNodesTo"],
            textscaleout: ["scale", "textOutNodesTo"],
            textscalexout: ["scaleX", "textOutNodesTo"],
            textscaleyout: ["scaleY", "textOutNodesTo"],
            textskewxout: ["skewX", "textOutNodesTo"],
            textskewyout: ["skewY", "textOutNodesTo"],
            texteaseout: ["ease", "textOutNodesTo"],
            texteasingout: ["ease", "textOutNodesTo"],
            texttransformoriginout: ["transformOrigin", "textOutShouldBeConverted"],
            textoffsetxout: ["x", "textOutShouldBeConverted"],
            textoffsetyout: ["y", "textOutShouldBeConverted"],
            texttypeout: ["type", "textOut"],
            textshiftout: ["shiftNodes", "textOut"],
            textdelayout: ["startAt", "textOut"],
            textstartatout: ["startAt", "textOut"],
            textoutstartat: ["startAt", "textOut"],
            textdurationout: ["duration", "textOut"],
            texttransitionout: ["enabled", "textOut"],
            loopopacity: ["opacity", "loopToCSS"],
            looprotate: ["rotation", "loopToCSS"],
            looprotatex: ["rotationX", "loopToCSS"],
            looprotatey: ["rotationY", "loopToCSS"],
            looprotation: ["rotation", "loopToCSS"],
            looprotationx: ["rotationX", "loopToCSS"],
            looprotationy: ["rotationY", "loopToCSS"],
            loopscale: ["scale", "loopToCSS"],
            loopscalex: ["scaleX", "loopToCSS"],
            loopscaley: ["scaleY", "loopToCSS"],
            loopskewx: ["skewX", "loopToCSS"],
            loopskewy: ["skewY", "loopToCSS"],
            looptransformorigin: ["transformOrigin", "loopLayerShouldBeConverted"],
            loopoffsetx: ["x", "loopLayerShouldBeConverted"],
            loopoffsety: ["y", "loopLayerShouldBeConverted"],
            loopfilter: ["filter", "loopLayerShouldBeConverted"],
            loopclip: ["clip", "loopClipShouldBeConverted"],
            loopdelay: ["startAt", "loop"],
            loopstartat: ["startAt", "loop"],
            loopduration: ["duration", "loop"],
            loopcount: ["count", "loop"],
            looprepeatdelay: ["repeatDelay", "loop"],
            loopyoyo: ["yoyo", "loop"],
            loopease: ["ease", "loop"],
            loopeasing: ["ease", "loop"],
            loop: ["enabled", "loop"],
            hoveropacity: ["opacity", "hoverToCSS"],
            hoverrotate: ["rotation", "hoverToCSS"],
            hoverrotatex: ["rotationX", "hoverToCSS"],
            hoverrotatey: ["rotationY", "hoverToCSS"],
            hoverrotation: ["rotation", "hoverToCSS"],
            hoverrotationx: ["rotationX", "hoverToCSS"],
            hoverrotationy: ["rotationY", "hoverToCSS"],
            hoverscale: ["scale", "hoverToCSS"],
            hoverscalex: ["scaleX", "hoverToCSS"],
            hoverscaley: ["scaleY", "hoverToCSS"],
            hoverskewx: ["skewX", "hoverToCSS"],
            hoverskewy: ["skewY", "hoverToCSS"],
            hoverbgcolor: ["backgroundColor", "hoverToCSS"],
            hovercolor: ["color", "hoverToCSS"],
            hoverease: ["easeIn", "hover"],
            hovereasing: ["easeIn", "hover"],
            hovereasein: ["easeIn", "hover"],
            hovereasingin: ["easeIn", "hover"],
            hovereaseout: ["easeOut", "hover"],
            hovereasingout: ["easeOut", "hover"],
            hoverduration: ["durationIn", "hover"],
            hoverdurationin: ["durationIn", "hover"],
            hoverdurationout: ["durationOut", "hover"],
            hoveralwaysontop: ["alwaysOnTop", "hover"],
            hoveroffsetx: ["x", "hoverShouldBeConverted"],
            hoveroffsety: ["y", "hoverShouldBeConverted"],
            hoverfilter: ["filter", "hoverShouldBeConverted"],
            hoverborderradius: ["borderRadius", "hoverShouldBeConverted"],
            hoverradius: ["borderRadius", "hoverShouldBeConverted"],
            hovertransformorigin: ["transformOrigin", "hoverShouldBeConverted"],
            hover: ["enabled", "hover"],
            kenburnspan: ["pan", "kenBurns"],
            kenburnszoom: ["zoom", "kenBurns"],
            kenburnsrotation: ["rotation", "kenBurns"],
            kenburnsrotate: ["rotation", "kenBurns"],
            kenburnsscale: ["scale", "kenBurns"],
            parallaxlevel: ["level", "parallax"],
            parallaxtype: ["type", "parallax"],
            parallaxevent: ["event", "parallax"],
            parallaxaxis: ["axis", "parallax"],
            parallaxtransformorigin: ["transformOrigin", "parallax"],
            parallaxdurationmove: ["durationMove", "parallax"],
            parallaxdurationleave: ["durationLeave", "parallax"],
            parallaxrotate: ["rotation", "parallax"],
            parallaxrotation: ["rotation", "parallax"],
            parallaxdistance: ["distance", "parallax"],
            parallax: ["enabled", "parallax"],
            transformperspective: ["layer", "transformPerspective"],
            transformperspectivein: ["layer", "transformPerspective"],
            transformperspectiveout: ["layer", "transformPerspective"],
            texttransformperspective: ["text", "transformPerspective"],
            texttransformperspectivein: ["text", "transformPerspective"],
            texttransformperspectiveout: ["text", "transformPerspective"],
            looptransformperspective: ["loop", "transformPerspective"],
            hovertransformperspective: ["hover", "transformPerspective"],
            parallaxtransformperspective: ["parallax", "transformPerspective"],
          },
          splitTypeKeys: [
            "chars_asc",
            "chars_desc",
            "chars_rand",
            "chars_center",
            "chars_edge",
            "words_asc",
            "words_desc",
            "words_rand",
            "words_center",
            "words_edge",
            "lines_asc",
            "lines_desc",
            "lines_rand",
            "lines_center",
            "lines_edge",
          ],
          timelineHierarchy: {
            transitioninstart: [1],
            transitioninend: [2],
            textinstart: [3, [1, 2, 6, 7, 8]],
            textinend: [4],
            allinend: [5],
            loopstart: [6, [1, 2, 3, 4, 5]],
            loopend: [7],
            transitioninandloopend: [8],
            textinandloopend: [9],
            allinandloopend: [10],
            textoutstart: [11, [2, 3, 4, 5, 6, 7, 8, 9, 10]],
            textoutend: [12],
            textoutandloopend: [13],
            transitionoutstart: [14, [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]],
            transitionoutend: [15],
            alloutend: [16],
            alloutandloopend: [17],
          },
          properties: {
            filter: function () {
              return {
                blur: 0,
                brightness: 100,
                contrast: 100,
                grayscale: 0,
                "hue-rotate": 0,
                invert: 0,
                saturate: 100,
                sepia: 0,
              };
            },
          },
          options: function (e, t) {
            var i = {
              is: {
                slideBackground: !!e.is("img.ls-bg"),
                backgroundVideo: !!e.is(".ls-bg-video"),
                imageLayer: !!e.is("img.ls-layer"),
                mediaLayer: !1,
                textLayer: !1,
                responsive: !0,
                onSlide: t,
              },
              should: {},
              elements: {},
              settings: { position: "relative", slideIn: t, slideOut: t },
              styleSettings: { minfontsize: 0, minmobilefontsize: 0 },
              mediaSettings: { fillmode: "cover", backgroundVideo: !1 },
              timeline: {
                transitioninstart: 0,
                transitioninend: 0,
                textinstart: 0,
                textinend: 0,
                allinend: function (e) {
                  return Math.max(this.transitioninend, this.textinend);
                },
                loopstart: 0,
                loopend: 0,
                transitioninandloopend: function (e) {
                  return (
                    0 === this.loopend &&
                    e.loop.enabled &&
                    ("number" == typeof e.loop.startAt ||
                      (-1 !== e.loop.startAt.indexOf("textinstart") &&
                        -1 !== e.loop.startAt.indexOf("textinend") &&
                        -1 !== e.loop.startAt.indexOf("allinend")))
                      ? ((this.loopstart = ie.transitions.layers.timeline.getTiming(
                          e,
                          e.loop.startAt,
                          "loopstart",
                        )),
                        (this.loopend =
                          -1 !== e.loop.count &&
                          e.timeline.loopstart +
                            (e.loop.repeat + 1) * e.loop.duration +
                            e.loop.repeat * e.loop.repeatDelay))
                      : ie.debugMode &&
                        ie.debug.add(
                          "warn",
                          "layerTransition.infinite",
                          e.self[0].tagName +
                            "." +
                            e.self.attr("class") +
                            " [ " +
                            e.self.html().substr(0, 30) +
                            "... ]",
                        ),
                    Math.max(this.transitioninend, this.loopend)
                  );
                },
                textinandloopend: function (e) {
                  return Math.max(this.textinend, this.loopend);
                },
                allinandloopend: function (e) {
                  return Math.max(this.allinend(), this.loopend);
                },
                textoutstart: 0,
                textoutend: 0,
                textoutandloopend: function (e) {
                  return Math.max(this.textoutend, this.loopend);
                },
                transitionoutstart: function (e) {
                  return Math.max(this.allinandloopend(), this.textoutend);
                },
                transitionoutend: 0,
                alloutend: function (e) {
                  return Math.max(this.transitionoutend, this.textoutend, this.allinend());
                },
                alloutandloopend: function (e) {
                  return Math.max(this.transitionoutend, this.textoutandloopend(), this.allinend());
                },
                staticfrom: !1,
                staticto: !1,
              },
              transitionProperties: {
                in: {
                  enabled: !0,
                  layerFrom: { autoCSS: !1, immediateRender: !1, css: { opacity: 0 } },
                  layerTo: {
                    autoCSS: !1,
                    onStart: function () {
                      ie.transitions.layers.in.onStart(e);
                    },
                    onComplete: function () {
                      ie.transitions.layers.in.onComplete(e);
                    },
                    css: {
                      display: "block",
                      opacity: 1,
                      rotation: 0,
                      rotationX: 0,
                      rotationY: 0,
                      scaleX: 1,
                      scaleY: 1,
                      skewX: 0,
                      skewY: 0,
                      x: 0,
                      y: 0,
                    },
                  },
                  layerStyleFrom: { autoCSS: !1, immediateRender: !1, css: {} },
                  layerStyleTo: { autoCSS: !1, css: {} },
                  clipFrom: { autoCSS: !1, immediateRender: !1, css: {} },
                  clipTo: { autoCSS: !1, css: {} },
                  layerShouldBeConverted: { transformOrigin: "50% 50% 0", x: 0, y: 0 },
                  layerStyleShouldBeConvertedFrom: {},
                  layerStyleShouldBeConvertedTo: {},
                  clipShouldBeConverted: {},
                  startAt: 0,
                  duration: 1,
                  ease: "easeInOutQuint",
                },
                textIn: {
                  enabled: null,
                  nodesFrom: { cycle: {}, random: {}, opacity: 0 },
                  nodesTo: {
                    ease: "easeInOutQuint",
                    css: {
                      opacity: 1,
                      rotation: 0,
                      rotationX: 0,
                      rotationY: 0,
                      scaleX: 1,
                      scaleY: 1,
                      skewX: 0,
                      skewY: 0,
                      x: 0,
                      y: 0,
                    },
                  },
                  shouldBeConverted: {
                    cycle: {},
                    random: {},
                    transformOrigin: "50% 50% 0",
                    x: 0,
                    y: 0,
                  },
                  split: "",
                  shiftNodes: 0.05,
                  startAt: "transitioninend",
                  duration: 1,
                },
                out: {
                  enabled: !0,
                  layerFrom: { autoCSS: !1, immediateRender: !1, css: {} },
                  layerTo: {
                    autoCSS: !1,
                    onStart: function () {
                      ie.transitions.layers.out.onStart(e);
                    },
                    onComplete: function () {
                      ie.transitions.layers.out.onComplete(e);
                    },
                    css: {
                      opacity: 0,
                      rotation: 0,
                      rotationX: 0,
                      rotationY: 0,
                      scaleX: 1,
                      scaleY: 1,
                      skewX: 0,
                      skewY: 0,
                    },
                  },
                  layerStyleFrom: { autoCSS: !1, immediateRender: !1, css: {} },
                  layerStyleTo: { autoCSS: !1, css: {} },
                  clipFrom: { autoCSS: !1, immediateRender: !1, css: {} },
                  clipTo: { autoCSS: !1, css: {} },
                  layerShouldBeConverted: { x: 0, y: 0 },
                  layerStyleShouldBeConvertedFrom: {},
                  layerStyleShouldBeConvertedTo: {},
                  clipShouldBeConverted: {},
                  startAt: "slidechangeonly",
                  duration: 1,
                  ease: "easeInOutQuint",
                },
                textOut: {
                  enabled: null,
                  nodesFrom: { immediateRender: !1, cycle: {}, opacity: 1 },
                  nodesTo: {
                    ease: "easeInOutQuint",
                    immediateRender: !1,
                    cycle: {},
                    random: {},
                    opacity: 0,
                  },
                  shouldBeConverted: { cycle: {}, random: {}, x: 0, y: 0 },
                  split: "",
                  startAt: "allinandloopend",
                  shiftNodes: 0.05,
                  duration: 1,
                },
                loop: {
                  enabled: null,
                  from: { autoCSS: !1, immediateRender: !1, css: {} },
                  to: { autoCSS: !1, css: {} },
                  clipTo: { autoCSS: !1, immediateRender: !1, css: {} },
                  layerShouldBeConverted: { transformOrigin: "50% 50% 0", x: 0, y: 0 },
                  clipShouldBeConverted: {},
                  ease: "linear",
                  startAt: "allinend",
                  repeatDelay: 0,
                  duration: 1,
                  count: 0,
                  yoyo: !1,
                },
                hover: {
                  enabled: null,
                  from: { autoCSS: !1, immediateRender: !1, css: {} },
                  to: { autoCSS: !1, css: {} },
                  shouldBeConverted: { transformOrigin: "50% 50% 0" },
                  alwaysOnTop: !0,
                  easeIn: "easeInOutQuint",
                  durationIn: 0.5,
                },
                parallax: { enabled: null },
                kenBurns: { scale: 1.2 },
                clip: { enabled: !1, min: "0 0 0 0", max: "-9999 9999 9999 -9999" },
                filter: {
                  values: {
                    style: {},
                    in: {},
                    out: {},
                    loop: {},
                    hover: {},
                    afterIn: {},
                    afterLoop: {},
                    bgFrom: {},
                    bgTo: {},
                  },
                  transitions: { bg: null, in: null, out: null, loop: null, hover: null },
                },
                init: { wrapper: { autoCSS: !1, immediateRender: !1, css: { display: "block" } } },
                transformPerspective: { layer: 500, text: 500, loop: 500, hover: 500 },
                reset: {
                  wrapperOnTimelineEnd: { autoCSS: !1, css: { opacity: 1, display: "none" } },
                  wrapperOnSlideChange: {
                    autoCSS: !1,
                    css: {
                      x: 0,
                      y: 0,
                      rotation: 0,
                      rotationX: 0,
                      rotationY: 0,
                      scaleX: 1,
                      scaleY: 1,
                      skewX: 0,
                      skewY: 0,
                      opacity: 1,
                      display: "none",
                    },
                  },
                  loopWrapperOnSlideChange: {
                    autoCSS: !1,
                    css: {
                      x: 0,
                      y: 0,
                      rotation: 0,
                      rotationX: 0,
                      rotationY: 0,
                      scaleX: 1,
                      scaleY: 1,
                      skewX: 0,
                      skewY: 0,
                      opacity: 1,
                    },
                  },
                },
              },
            };
            return {
              is: i.is,
              should: i.should,
              elements: i.elements,
              settings: i.settings,
              styleSettings: i.styleSettings,
              mediaSettings: i.mediaSettings,
              mediaProperties: i.mediaProperties,
              timeline: i.timeline,
              in: i.transitionProperties.in,
              inLayerFrom: i.transitionProperties.in.layerFrom,
              inLayerFromCSS: i.transitionProperties.in.layerFrom.css,
              inLayerStyleFrom: i.transitionProperties.in.layerStyleFrom,
              inLayerStyleFromCSS: i.transitionProperties.in.layerStyleFrom.css,
              inClipFrom: i.transitionProperties.in.clipFrom,
              inClipFromCSS: i.transitionProperties.in.clipFrom.css,
              inLayerTo: i.transitionProperties.in.layerTo,
              inLayerToCSS: i.transitionProperties.in.layerTo.css,
              inLayerStyleTo: i.transitionProperties.in.layerStyleTo,
              inLayerStyleToCSS: i.transitionProperties.in.layerStyleTo.css,
              inClipTo: i.transitionProperties.in.clipTo,
              inClipToCSS: i.transitionProperties.in.clipTo.css,
              inClipShouldBeConverted: i.transitionProperties.in.clipShouldBeConverted,
              inLayerShouldBeConverted: i.transitionProperties.in.layerShouldBeConverted,
              inLayerStyleShouldBeConvertedFrom:
                i.transitionProperties.in.layerStyleShouldBeConvertedFrom,
              inLayerStyleShouldBeConvertedTo:
                i.transitionProperties.in.layerStyleShouldBeConvertedTo,
              textIn: i.transitionProperties.textIn,
              textInNodesFrom: i.transitionProperties.textIn.nodesFrom,
              textInNodesTo: i.transitionProperties.textIn.nodesTo,
              textInNodesToCSS: i.transitionProperties.textIn.nodesTo.css,
              textInShouldBeConverted: i.transitionProperties.textIn.shouldBeConverted,
              out: i.transitionProperties.out,
              outLayerFrom: i.transitionProperties.out.layerFrom,
              outLayerFromCSS: i.transitionProperties.out.layerFrom.css,
              outLayerStyleFrom: i.transitionProperties.out.layerStyleFrom,
              outLayerStyleFromCSS: i.transitionProperties.out.layerStyleFrom.css,
              outLayerTo: i.transitionProperties.out.layerTo,
              outLayerToCSS: i.transitionProperties.out.layerTo.css,
              outLayerStyleTo: i.transitionProperties.out.layerStyleTo,
              outLayerStyleToCSS: i.transitionProperties.out.layerStyleTo.css,
              outClipTo: i.transitionProperties.out.clipTo,
              outClipToCSS: i.transitionProperties.out.clipTo.css,
              outClipShouldBeConverted: i.transitionProperties.out.clipShouldBeConverted,
              outLayerShouldBeConverted: i.transitionProperties.out.layerShouldBeConverted,
              outLayerStyleShouldBeConvertedFrom:
                i.transitionProperties.out.layerStyleShouldBeConvertedFrom,
              outLayerStyleShouldBeConvertedTo:
                i.transitionProperties.out.layerStyleShouldBeConvertedTo,
              textOut: i.transitionProperties.textOut,
              textOutNodesFrom: i.transitionProperties.textOut.nodesFrom,
              textOutNodesTo: i.transitionProperties.textOut.nodesTo,
              textOutShouldBeConverted: i.transitionProperties.textOut.shouldBeConverted,
              loop: i.transitionProperties.loop,
              loopFrom: i.transitionProperties.loop.from,
              loopFromCSS: i.transitionProperties.loop.from.css,
              loopTo: i.transitionProperties.loop.to,
              loopToCSS: i.transitionProperties.loop.to.css,
              loopClipTo: i.transitionProperties.loop.clipTo,
              loopClipToCSS: i.transitionProperties.loop.clipTo.css,
              loopClipShouldBeConverted: i.transitionProperties.loop.clipShouldBeConverted,
              loopLayerShouldBeConverted: i.transitionProperties.loop.layerShouldBeConverted,
              hover: i.transitionProperties.hover,
              hoverFrom: i.transitionProperties.hover.from,
              hoverFromCSS: i.transitionProperties.hover.from.css,
              hoverTo: i.transitionProperties.hover.to,
              hoverToCSS: i.transitionProperties.hover.to.css,
              hoverShouldBeConverted: i.transitionProperties.hover.shouldBeConverted,
              parallax: i.transitionProperties.parallax,
              kenBurns: i.transitionProperties.kenBurns,
              clip: i.transitionProperties.clip,
              filter: i.transitionProperties.filter,
              transformPerspective: i.transitionProperties.transformPerspective,
              init: i.transitionProperties.init,
              reset: i.transitionProperties.reset,
            };
          },
        },
      }),
        (ie.slides = {
          count: 0,
          first: {},
          prev: {},
          current: {},
          next: {},
          init: function () {
            if (!document.body.contains(M)) return !1;
            for (
              var e = _.find("> .ls-layer, > .ls-slide"),
                t = 0,
                i = ie.defaults.slide.keys,
                a = 0,
                s = e.length;
              a < s;
              a++
            ) {
              var r,
                o = se(e[a]),
                n = o[0].style,
                l = se.extend(!0, {}, ie.defaults.slide.options);
              if (
                (ie.slides.count++,
                o
                  .removeClass("ls-layer")
                  .addClass("ls-slide")
                  .css({
                    width: ie.slider.initial.originalWidth,
                    height: ie.slider.initial.originalHeight,
                  })
                  .appendTo(ie.slider.$hiddenWrapper),
                o.data("ls"))
              )
                for (var d = o.data("ls").toLowerCase().split(";"), u = 0; u < d.length; u++) {
                  var p,
                    c,
                    h = d[u].split(":");
                  ((h[0] = se.trim(h[0])),
                    (h[1] = se.trim(h[1])),
                    "" !== h[0] &&
                      (void 0 !== i[h[0]]
                        ? ((p = void 0 === i[h[0]][1] ? h[0] : i[h[0]][1]),
                          (c = ie.functions.convert.properties(h[1])),
                          (-1 === p.toLowerCase().indexOf("duration") &&
                            -1 === p.toLowerCase().indexOf("delay") &&
                            "timeShift" != p) ||
                            (c /= 1e3),
                          l[i[h[0]][0]] || (l[i[h[0]][0]] = {}),
                          (l[i[h[0]][0]][p] = c))
                        : (l.data[h[0]] = h[1])));
                }
              if (l.plugins && !se.isEmptyObject(l.plugins))
                for (var m in l.plugins)
                  if (o.data("ls-plugin-" + m)) {
                    var f = o
                        .data("ls-plugin-" + m)
                        .toLowerCase()
                        .split(";"),
                      g = {};
                    for (var v in l.plugins[m]) g[v.toLowerCase()] = v;
                    for (var y = 0; y < f.length; y++) {
                      var b,
                        S = f[y].split(":");
                      ((S[0] = se.trim(S[0])),
                        "" !== S[0] &&
                          ((b = ie.functions.convert.properties(se.trim(S[1]))),
                          (-1 === S[0].indexOf("duration") && -1 === S[0].indexOf("delay")) ||
                            (b /= 1e3),
                          g[S[0]] ? (l.plugins[m][g[S[0]]] = b) : (l.plugins[m][S[0]] = b)));
                    }
                  } else delete l.plugins[m];
              if (
                (o.children("a.ls-link").length &&
                  ((l.data.$link = o
                    .children("a.ls-link")
                    .first()
                    .css({ zIndex: 5 })
                    .attr("data-ls-slide-link", t + 1)
                    .appendTo(ie.slider.$layersWrapper)),
                  ie.layers.set.smartLinks(l.data.$link)),
                (l.data.$backgroundVideo = o.children('[data-ls*="backgroundvideo"]').first()),
                l.data.$backgroundVideo.length &&
                  (null !==
                  l.data.$backgroundVideo
                    .attr("data-ls")
                    .split("backgroundvideo")[1]
                    .split(";")[0]
                    .match(/(true|enabled|on|1)/i)
                    ? (l.data.$backgroundVideo
                        .addClass("ls-bg-video")
                        .css({ width: "auto", height: "auto" })
                        .children("video, audio, iframe")
                        .css({ width: "100%", height: "100%" }),
                      l.data.$backgroundVideo.append(se('<div class="ls-bg-video-overlay"></div>')))
                    : (l.data.$backgroundVideo = !1)),
                o.find("> .ls-bg").length && (l.data.$background = o.find("> .ls-bg").first()),
                !l.data.thumbnail)
              )
                (o.find("> .ls-tn").length
                  ? (r = o.find("> .ls-tn").first())
                  : o.find("> .ls-bg").length && (r = o.find("> .ls-bg").first()),
                  r
                    ? ((l.data.thumbnail = ie.functions.getURL(r)),
                      (l.data.tnAlt = ie.functions.getALT(r)))
                    : (l.data.thumbnail = ie.o.skinsPath + ie.o.skin + "/nothumb.png"));
              ((l.data.customtransition2d || l.data.customtransition3d) &&
                "undefined" == typeof layerSliderCustomTransitions &&
                (delete l.data.customtransition2d,
                delete l.data.customtransition3d,
                ie.debugMode && ie.debug.add("warn", "sliderInit.customTransitions", t + 1)),
                "visible" === n.overflow && (l.data.overflow = "visible"),
                l.data.backgroundColor ||
                  (l.data.backgroundColor =
                    "" === o[0].style.backgroundColor ? "transparent" : o[0].style.backgroundColor),
                (ie.slides[++t] = {}),
                (ie.slides[t].data = se.extend(!0, {}, ie.defaults.slide.options.data, l.data)),
                (ie.slides[t].parallax = l.parallax),
                (ie.slides[t].kenBurns = l.kenBurns),
                (ie.slides[t].filter = l.filter),
                (ie.slides[t].index = t),
                (ie.slides[t].$layers = se()),
                (ie.slides[t].plugins = l.plugins),
                ie.slider.thumbnails.push(l.data.thumbnail),
                ie.layers.init(o, t));
            }
            ie.debugMode && ie.debug.groupEnd("sliderInit.style");
          },
          set: {
            slideIndexes: function () {
              var e = ie.slides;
              ((e.prev.index = e.current.index),
                (e.current.index = e.next.index),
                (e.next.index = ie.slideshow.get.slideInSequence(ie.slideshow.direction)),
                e.set.slidesData(),
                ie.slider.set.attributes());
            },
            nextSlideIndex: function (e) {
              var t = ie.slides;
              ((t.next.index = e), t.set.slidesData());
            },
            slidesData: function () {
              var e = ie.slides;
              ((e.prev = -1 !== e.prev.index ? se.extend(!0, {}, e[e.prev.index]) : {}),
                (e.current = -1 !== e.current.index ? se.extend(!0, {}, e[e.current.index]) : {}),
                (e.next = -1 !== e.next.index ? se.extend(!0, {}, e[e.next.index]) : {}));
            },
            firstSlide: function () {
              var e = ie.slides;
              if (
                ((e.first.index =
                  "random" === ie.o.firstSlide
                    ? ie.o.firstSlide
                    : Math.max(ie.functions.convert.properties(ie.o.firstSlide, !0), 1)),
                ie.o.shuffleSlideshow && 2 < ie.slides.count
                  ? (ie.o.twoWaySlideshow = !1)
                  : (ie.o.shuffleSlideshow = !1),
                (e.first.index =
                  "random" == e.first.index
                    ? Math.floor(Math.random() * ie.slides.count + 1)
                    : e.first.index),
                document.location.hash)
              ) {
                var t = ie.slides.deeplink(document.location.hash, !0);
                t && (ie.slides.first.index = t);
              }
              ((e.first.index =
                e.first.index < 1 || e.first.index > ie.slides.count ? 1 : e.first.index),
                ie.o.shuffleSlideshow &&
                  "random" != ie.o.firstSlide &&
                  (e.first.index = ie.o.firstSlide),
                e[e.first.index] &&
                  e[e.first.index].data &&
                  (e.first.data = se.extend(!0, {}, e[e.first.index].data)),
                ie.o.playByScroll && ie.slideshow.set.normalizedSequence(),
                ie.debugMode &&
                  ie.debug.options.firstSlide &&
                  (e.first.index = ie.debug.options.firstSlide));
            },
          },
          get: {
            deeplink: function (e) {
              return e && ie.slides[e] && ie.slides[e].data && ie.slides[e].data.deeplink
                ? ie.slides[e].data.deeplink
                : null;
            },
          },
          deeplink: function (e, t) {
            for (var i = !1, a = 1; a < ie.slides.count + 1; a++)
              if (ie.slides[a].data.deeplink == e.substring(1)) {
                if (((i = a), t)) return i;
                ie.slideshow.changeTo(i, !0, !0);
              }
            if (!i && t) return !1;
          },
          slide: [],
        }),
        (ie.layers = {
          $all: se(),
          getStyle: function (e, t) {
            return -1 != e.indexOf("%") ? parseFloat(e) * t : parseFloat(e);
          },
          init: function (e, t) {
            if (!document.body.contains(M)) return !1;
            for (
              var i, a = e.find('.ls-bg, .ls-l, .ls-layer, *[class^="ls-s"]'), s = 0, r = a.length;
              s < r;
              s++
            ) {
              var o = se(a[s]),
                n = o[0],
                l = o.children();
              if (-1 != o.attr("class").indexOf("ls-s")) {
                var d = o.attr("class").split("ls-s")[1].split(" ")[0];
                o.removeClass("ls-s" + d).addClass("ls-layer");
              } else if (o.hasClass("ls-l")) o.removeClass("ls-l").addClass("ls-layer");
              else if (!o.is(".ls-bg, .ls-layer")) {
                o.remove();
                continue;
              }
              (o.is("a") &&
                1 === l.length &&
                ((n = (o = o.children().first())[0]).setAttribute(
                  "data-ls",
                  n.parentNode.getAttribute("data-ls"),
                ),
                n.parentNode.removeAttribute("data-ls"),
                o.parent().removeClass("ls-layer"),
                o.addClass("ls-layer")),
                o.data(ie.defaults.init.dataKey, new ie.defaults.layer.options(o, t)),
                -1 !== o.attr("class").indexOf("ls-linkto-") && this.set.linkTo(o),
                o.parent().is("a") ? ((i = o.parent()), this.set.smartLinks(i)) : (i = o),
                (ie.slides[t].$layers = ie.slides[t].$layers.add(i)));
            }
          },
          set: {
            smartLinks: function (e) {
              var a = e.attr("href"),
                t = e.attr("target"),
                i = "";
              if (t && -1 !== t.indexOf("ls-scroll")) {
                switch (a) {
                  case "pagetop":
                    i = "Scroll to page top";
                    break;
                  case "pagebottom":
                    i = "Scroll to page bottom";
                    break;
                  case "slidertop":
                    i = "Scroll to the top of the slider";
                    break;
                  case "":
                  case "sliderbottom":
                    i = "Scroll to the bottom of the slider";
                    break;
                  default:
                    i = "Scroll to a specified location on the page";
                }
                (ie.layers.set.ariaLabel(e, i),
                  e.on("click." + z, function (e) {
                    e.preventDefault();
                    var t,
                      i = document.body.scrollHeight - ie.device.viewportHeight;
                    if (a)
                      switch (a) {
                        case "pagetop":
                          t = 0;
                          break;
                        case "pagebottom":
                          t = ie.device.docHeight - ie.device.viewportHeight;
                          break;
                        case "slidertop":
                          t = ie.slider.offsetTop;
                          break;
                        case "":
                        case "sliderbottom":
                          t = ie.slider.offsetTop + ie.slider.height;
                          break;
                        default:
                          t = se(a).first().length
                            ? se(a).last().offset().top
                            : ie.slider.offsetTop + ie.slider.height;
                      }
                    ((t += ie.o.scrollModifier),
                      (t = Math.min(t, i)),
                      (t = Math.max(0, t)),
                      ae.TweenMax.to("html, body", 1, { scrollTop: t, ease: ae.Quint.easeInOut }));
                  }));
              }
              if (
                -1 !== ie.defaults.init.controls.indexOf(a.toLowerCase()) ||
                a.match(/^\#[0-9]/)
              ) {
                var s = se.trim(a.toLowerCase().split("#")[1]),
                  r = parseInt(s);
                switch (s) {
                  case "playmedia":
                    i = "play active media elements on current slide";
                    break;
                  case "pausemedia":
                    i = "pause active media elements on current slide";
                    break;
                  case "prev":
                    i = "jump to the previous slide";
                    break;
                  case "next":
                    i = "jump to the next slide";
                    break;
                  case "start":
                    i = "start slideshow";
                    break;
                  case "stop":
                    i = "stop slideshow";
                    break;
                  case "replay":
                    i = "replay slide";
                    break;
                  case "reverse":
                    i = "reverse slide";
                    break;
                  case "reverse-replay":
                  case "reversereplay":
                    i = "reverse, than replay slide";
                    break;
                  default:
                    "number" == typeof r && r == r && (i = "jump to slide " + r);
                }
                (ie.layers.set.ariaLabel(e, i),
                  e.on("click." + z, function (e) {
                    if ((e.preventDefault(), -1 !== ["prev", "next", "start", "stop"].indexOf(s)))
                      ie.navigation[s]("clicked");
                    else if ("number" == typeof r && r == r) ie.slideshow.changeTo(r, !0, !0);
                    else if (!ie.slider.state.changingSlides)
                      switch (s) {
                        case "replay":
                          ie.api.methods("replay");
                          break;
                        case "reverse":
                          ie.api.methods("reverse");
                          break;
                        case "reverse-replay":
                        case "reversereplay":
                          ie.api.methods("reverse", !0);
                          break;
                        case "playmedia":
                          ie.media.functions.playActiveMedia();
                          break;
                        case "pausemedia":
                          ie.media.functions.pauseActiveMedia();
                          break;
                        case "unmute":
                        case "unmutemedia":
                          ie.media.unmute.multipleMediaElements();
                      }
                  }));
              }
            },
            ariaLabel: function (e, t) {
              e.attr("aria-label") || e.attr("aria-label", t);
            },
            linkTo: function (e) {
              for (var t = e.attr("class").split(" "), i = 1, a = 0; a < t.length; a++)
                -1 != t[a].indexOf("ls-linkto-") && (i = parseInt(t[a].split("ls-linkto-")[1]));
              ((e.data(ie.defaults.init.dataKey).settings.linkedToSlide = i),
                e.css({ cursor: "pointer" }).on("click." + z, function (e) {
                  (e.preventDefault(),
                    _.layerSlider(se(this).data(ie.defaults.init.dataKey).settings.linkedToSlide));
                }));
            },
            wrappers: function (e, t, i) {
              (t.is.slideBackground || t.is.backgroundVideo
                ? ((t.elements.$bgWrapper = e.closest(".ls-bg-wrap")),
                  (t.elements.$bgOuterWrapper = e.closest(".ls-bg-outer")))
                : ((t.elements.$wrapper = e.closest(".ls-in-out")),
                  t.elements.$wrapper.data(ie.defaults.init.dataKey, {}),
                  (t.settings.wrapperData = t.elements.$wrapper.data(ie.defaults.init.dataKey)),
                  (t.elements.$clipWrapper = e.closest(".ls-clip")),
                  t.elements.$clipWrapper.data(ie.defaults.init.dataKey, {}),
                  (t.settings.clipWrapperData = t.elements.$clipWrapper.data(
                    ie.defaults.init.dataKey,
                  )),
                  (t.elements.$loopWrapper = e.closest(".ls-loop")),
                  t.elements.$loopWrapper.data(ie.defaults.init.dataKey, {}),
                  (t.settings.loopWrapperData = t.elements.$loopWrapper.data(
                    ie.defaults.init.dataKey,
                  ))),
                t.parallax.enabled &&
                  ((t.elements.$parallaxWrapper = e.closest(".ls-parallax")),
                  t.elements.$parallaxWrapper.data(ie.defaults.init.dataKey, { parallax: {} }),
                  (t.settings.parallaxWrapperData = t.elements.$parallaxWrapper.data(
                    ie.defaults.init.dataKey,
                  )),
                  ie.transitions.layers.parallax.addLayer(
                    t.elements.$parallaxWrapper,
                    t.settings.parallaxWrapperData.parallax,
                    t,
                    i,
                  )),
                t.hover.enabled &&
                  !ie.slides[i].data.globalhover &&
                  ie.transitions.layers.hover.set(e, t),
                ie.browser.isSafari
                  ? (t.elements.$outerWrapper = e.closest(".ls-z"))
                  : (t.elements.$outerWrapper = t.parallax.enabled
                      ? t.elements.$parallaxWrapper
                      : t.elements.$bgWrapper
                        ? t.elements.$bgOuterWrapper
                        : t.elements.$wrapper),
                t.elements.$outerWrapper.attr("data-slide-index", i));
            },
            style: function (e) {
              var t,
                i,
                a,
                s,
                r,
                o,
                n,
                l,
                d,
                u,
                p,
                c,
                h,
                m,
                f,
                g,
                v,
                y,
                b,
                S,
                w,
                x,
                T = e[0],
                C = e.data(ie.defaults.init.dataKey),
                k = T.style,
                I = ie.layers,
                L = 0,
                P = 0,
                O = !1,
                $ = T.getBoundingClientRect();
              if (
                ((l =
                  "" !== k.paddingLeft
                    ? I.getStyle(k.paddingLeft, ie.slider.initial.percW)
                    : parseFloat(e.css("padding-left"))),
                (u =
                  "" !== k.paddingRight
                    ? I.getStyle(k.paddingRight, ie.slider.initial.percW)
                    : parseFloat(e.css("padding-right"))),
                (d =
                  "" !== k.paddingTop
                    ? I.getStyle(k.paddingTop, ie.slider.initial.percH)
                    : parseFloat(e.css("padding-top"))),
                (p =
                  "" !== k.paddingBottom
                    ? I.getStyle(k.paddingBottom, ie.slider.initial.percH)
                    : parseFloat(e.css("padding-bottom"))),
                (c =
                  "" !== k.marginLeft
                    ? I.getStyle(k.marginLeft, ie.slider.initial.percW)
                    : parseFloat(e.css("margin-left"))),
                (h =
                  "" !== k.marginTop
                    ? I.getStyle(k.marginTop, ie.slider.initial.percH)
                    : parseFloat(e.css("margin-top"))),
                (T.style.margin = "0"),
                (f =
                  "" !== k.borderLeftWidth
                    ? parseFloat(k.borderLeftWidth)
                    : parseFloat(e.css("border-left-width"))),
                (v =
                  "" !== k.borderRightWidth
                    ? parseFloat(k.borderRightWidth)
                    : parseFloat(e.css("border-right-width"))),
                (g =
                  "" !== k.borderTopWidth
                    ? parseFloat(k.borderTopWidth)
                    : parseFloat(e.css("border-top-width"))),
                (y =
                  "" !== k.borderBottomWidth
                    ? parseFloat(k.borderBottomWidth)
                    : parseFloat(e.css("border-bottom-width"))),
                1 === ie.media.properties.$allMediaLayers.filter(e).length ||
                  e.children("iframe").length)
              ) {
                var B = e.children(),
                  W = B.attr("width") ? B.attr("width") : B.width(),
                  M = B.attr("height") ? B.attr("height") : B.height();
                (300 === parseInt(W) && 150 === parseInt(M) && ((W = 640), (M = 360)),
                  ("" !== T.style.width && "auto" !== T.style.width) || e.css("width", W),
                  ("" !== T.style.height && "auto" !== T.style.height) || e.css("height", M),
                  "100%" === k.width &&
                    "100%" === k.height &&
                    ((k.left = "50%"), (k.top = "50%"), (C.mediaSettings.fullsize = !0)),
                  (O = W / M),
                  B.css({ width: "100%", height: "100%" }));
              }
              var _ = C.attributes;
              (e.is("img") &&
                ((b = (s = e.data("preloadedWidth")) / (r = e.data("preloadedHeight"))),
                ((!k.width && !k.height) || ("auto" === k.width && "auto" === k.height)) &&
                  _ &&
                  (_.width && _.height
                    ? ((i =
                        -1 === _.width.indexOf("%")
                          ? parseInt(_.width)
                          : ((L = parseInt(_.width)),
                            I.getStyle(_.width, ie.slider.initial.percW))),
                      (a =
                        -1 === _.height.indexOf("%")
                          ? parseInt(_.height)
                          : ((P = parseInt(_.height)),
                            I.getStyle(_.height, ie.slider.initial.percH))))
                    : _.maxWidth &&
                      ((e[0].style.width = _.maxWidth + "px"),
                      (i = _.maxWidth),
                      (a = e.height())))),
                (w = $.width ? $.width : $.right - $.left),
                (x = $.height ? $.height : $.bottom - $.top),
                i ||
                  ((i = k.width),
                  -1 !== k.width.indexOf("%") && (L = parseInt(k.width)),
                  (i =
                    (i =
                      "" !== i && "auto" !== i
                        ? I.getStyle(i, ie.slider.initial.percW)
                        : w - l - u - f - v) || "auto")),
                a ||
                  ((a = k.height),
                  -1 !== k.height.indexOf("%") && (P = parseInt(k.height)),
                  (a =
                    (a =
                      "" !== a && "auto" !== a
                        ? I.getStyle(a, ie.slider.initial.percH)
                        : x - d - p - g - y) || "auto")),
                (S = O || i / a),
                !e.is("img") ||
                  k.width ||
                  k.height ||
                  (_ && (!_ || _.width || _.height)) ||
                  (s === i && r === a) ||
                  (s !== i
                    ? (a = (i = 5 < s ? s : i) / (S = 5 < s ? b : S))
                    : r !== a && (i = (a = 5 < r ? r : a) * (S = 5 < r ? b : S))),
                parseFloat(e.css("opacity")),
                (o = f + l + i + u + v),
                (n = g + d + a + p + y),
                (t = "" !== k.clip && k.clip),
                (k.clip = ""),
                (m = k.webkitFilter || k.filter));
              function z(e) {
                var t = e;
                return (
                  e &&
                    -1 !== e.indexOf("px ") &&
                    ((e = e.replace("px", "").split(" ")),
                    (t = Math.round((parseInt(e[0]) / i) * 100) + "%")),
                  t
                );
              }
              ((C.original = {
                clip: t,
                clipShouldBeConverted: !1,
                left: k.left ? k.left : "0",
                top: k.top ? k.top : "0",
                width: Math.ceil(i),
                height: Math.ceil(a),
                percentWidth: L,
                percentHeight: P,
                outerWidth: o,
                outerHeight: n,
                styleWidth: k.width,
                styleHeight: k.height,
                ratio: S,
                paddingLeft: l,
                paddingTop: d,
                paddingRight: u,
                paddingBottom: p,
                marginLeft: c,
                marginTop: h,
                borderLeftWidth: f,
                borderTopWidth: g,
                borderRightWidth: v,
                borderBottomWidth: y,
                borderRadius:
                  z(e.css("borderTopLeftRadius")) +
                  " " +
                  z(e.css("borderTopRightRadius")) +
                  " " +
                  z(e.css("borderBottomRightRadius")) +
                  " " +
                  z(e.css("borderBottomLeftRadius")),
                fontSize: parseFloat(e.css("font-size")),
                lineHeight: e.css("line-height"),
                letterSpacing: e.css("letter-spacing"),
                color: e.css("color"),
                zIndex: parseInt(e.css("z-index")) || "auto",
                filter: m,
                backgroundColor: e.css("background-color"),
                dataLS: e.attr("data-ls") || "",
                styles: e.attr("style") || "",
              }),
                (k.zIndex = "auto"),
                (C.responsive = {
                  left: k.left ? k.left : "0",
                  top: k.top ? k.top : "0",
                  width: i,
                  height: a,
                }));
            },
            properties: function (e, t, i) {
              var a = e.data(ie.defaults.init.dataKey);
              e.data("ls");
              if (((a.is.textLayer = !e.is("img") && !a.is.mediaLayer), (a.self = e).data("ls")))
                for (
                  var s = ie.defaults.layer.keys,
                    r = e.data("ls").split(";"),
                    o = e.data("ls").toLowerCase().split(";"),
                    n = 0;
                  n < o.length;
                  n++
                )
                  if (se.trim(o[n])) {
                    var l = o[n].indexOf(":"),
                      d = [o[n].substring(0, l), o[n].substring(l + 1)],
                      u = null,
                      p = null,
                      c = null,
                      h = null,
                      m = null;
                    if ("" !== (u = se.trim(d[0])))
                      if (void 0 !== s[(u = u.replace("split", "text"))]) {
                        if (
                          ((p = s[u][0]),
                          (m =
                            "overlay" === u
                              ? se.trim(r[n].substring(l + 1))
                              : ie.functions.convert.properties(se.trim(d[1]))),
                          d[1] &&
                            -1 !== d[1].indexOf("random") &&
                            (u.match(/(text)/) || (m = ie.functions.convert.randomProperties(m, p)),
                            a.should.update || (a.should.update = !0)),
                          "number" == typeof m &&
                            p.match(/(duration|startat|shift|delay)/i) &&
                            (m /= 1e3),
                          u.match(/(fade)(.+)/))
                        )
                          switch (m) {
                            case !0:
                              m = 0;
                              break;
                            case !1:
                              m = 1;
                          }
                        void 0 !== (h = s[u][1])
                          ? "" !== m
                            ? "object" == typeof m
                              ? u.match(/(text)/)
                                ? h.match(/(converted)/i)
                                  ? (a[h][p] = m)
                                  : (a[h].cycle[p] = m)
                                : ((c = ie.functions.convert.properties(se.trim(m[0]))),
                                  ie.debugMode &&
                                    ie.debug.add("warn", "layerInit.prop1", [u, m, c]),
                                  "number" == typeof c &&
                                    p.match(/(duration|startat|shift|delay)/i) &&
                                    (c /= 1e3),
                                  (a[h][p] = c))
                              : u.match(/(text)/) && -1 !== m.toString().indexOf("random")
                                ? (a[h].random[p] = m)
                                : (a[h][p] = m)
                            : ie.debugMode && ie.debug.add("warn", "layerInit.prop2", u)
                          : (a[p][u] = m);
                      } else
                        "clip" === u
                          ? ((a.original.clip = d[1]), (a.original.clipShouldBeConverted = !0))
                          : ie.debugMode && ie.debug.add("warn", "layerInit.prop4", u);
                  }
              if (
                (ie.browser.isOld &&
                  ((a.in.enabled = !0),
                  (a.textIn.enabled = !1),
                  (a.textOut.enabled = !1),
                  (a.textIn.type = null),
                  (a.textOut.type = null)),
                a.in.enabled &&
                  (a.inLayerTo.ease =
                    a.inLayerStyleTo.ease =
                    a.inClipTo.ease =
                      ie.functions.convert.easing(a.in.ease)),
                void 0 !== a.inLayerStyleShouldBeConvertedFrom.borderRadius &&
                  (a.inLayerStyleShouldBeConvertedTo.borderRadius = a.original.borderRadius),
                void 0 !== a.outLayerStyleShouldBeConvertedTo.borderRadius &&
                  (a.outLayerStyleShouldBeConvertedFrom.borderRadius = a.original.borderRadius),
                a.inLayerStyleFromCSS.backgroundColor &&
                  (a.inLayerStyleToCSS.backgroundColor = a.original.backgroundColor),
                a.outLayerStyleToCSS.backgroundColor &&
                  (a.outLayerStyleFromCSS.backgroundColor = a.original.backgroundColor),
                a.inLayerStyleFromCSS.color && (a.inLayerStyleToCSS.color = a.original.color),
                a.outLayerStyleToCSS.color && (a.outLayerStyleFromCSS.color = a.original.color),
                void 0 !== a.inLayerStyleShouldBeConvertedFrom.width &&
                  (a.inLayerStyleShouldBeConvertedTo.width = a.original.width),
                void 0 !== a.outLayerStyleShouldBeConvertedTo.width &&
                  (a.outLayerStyleShouldBeConvertedFrom.width = a.original.width),
                void 0 !== a.inLayerStyleShouldBeConvertedFrom.height &&
                  (a.inLayerStyleShouldBeConvertedTo.height = a.original.height),
                void 0 !== a.outLayerStyleShouldBeConvertedTo.height &&
                  (a.outLayerStyleShouldBeConvertedFrom.height = a.original.height),
                void 0 !== a.out.showUntil &&
                  0 !== a.out.showUntil &&
                  (a.out.startAt = "transitioninend + " + a.out.showUntil),
                -1 !== a.out.startAt.indexOf("slidechangeonly") &&
                  "slidechangeonly" !== a.out.startAt &&
                  (a.out.startAt = "slidechangeonly"),
                a.out.enabled &&
                  (a.outLayerTo.ease =
                    a.outLayerStyleTo.ease =
                    a.outClipTo.ease =
                      ie.functions.convert.easing(a.out.ease)),
                se.isNumeric(a.loop.count) &&
                (0 < a.loop.count || -1 === a.loop.count) &&
                !1 !== a.loop.enabled
                  ? ((a.loop.enabled = !0),
                    (a.loopTo.ease = a.loopClipTo.ease = ie.functions.convert.easing(a.loop.ease)),
                    -1 !== a.loop.count
                      ? a.loop.yoyo
                        ? (a.loop.repeat = 2 * a.loop.count - 1)
                        : (a.loop.repeat = a.loop.count - 1)
                      : (a.loop.repeat = -1))
                  : (a.loop.enabled = !1),
                (!se.isEmptyObject(a.hoverToCSS) ||
                  a.hoverShouldBeConverted.x ||
                  a.hoverShouldBeConverted.y ||
                  a.hoverShouldBeConverted.borderRadius ||
                  a.hoverShouldBeConverted.filter) &&
                !1 !== a.hover.enabled
                  ? ((a.hover.enabled = !0),
                    a.hover.easeOut || (a.hover.easeOut = a.hover.easeIn),
                    (a.hover.easeIn = ie.functions.convert.easing(a.hover.easeIn)),
                    (a.hover.easeOut = ie.functions.convert.easing(a.hover.easeOut, !0)),
                    a.hover.durationOut || (a.hover.durationOut = a.hover.durationIn),
                    ae.TweenMax.set(e[0], {
                      autoCSS: !1,
                      css: { transformPerspective: a.hoverShouldBeConverted.transformPerspective },
                    }))
                  : (a.hover.enabled = !1),
                a.parallax.level &&
                se.isNumeric(a.parallax.level) &&
                0 !== a.parallax.level &&
                !1 !== a.parallax.enabled
                  ? (a.parallax.enabled = !0)
                  : (a.parallax.enabled = !1),
                a.is.slideBackground)
              ) {
                var f = { scale: 1, rotation: 0 };
                if (
                  (ie.slides[t].kenBurns.zoom && (a.kenBurns = ie.slides[t].kenBurns),
                  a.kenBurns.zoom)
                ) {
                  switch (((a.kenBurns.from = {}), (a.kenBurns.to = {}), a.kenBurns.zoom)) {
                    case "out":
                      ((a.kenBurns.from.scale = a.kenBurns.scale || 1),
                        (a.kenBurns.from.rotation = a.kenBurns.rotation || 0),
                        (a.kenBurns.to = f));
                      break;
                    case "in":
                      ((a.kenBurns.from = f),
                        (a.kenBurns.to.scale = a.kenBurns.scale || 1),
                        (a.kenBurns.to.rotation = a.kenBurns.rotation || 0));
                  }
                  (delete a.kenBurns.scale, delete a.kenBurns.rotation);
                } else ((a.kenBurns.from = f), (a.kenBurns.to = f));
                se.isEmptyObject(ie.slides[t].filter) ||
                  (ie.slides[t].filter.from &&
                    (a.filter.values.bgFrom = ie.transitions.layers.filters.convert(
                      ie.slides[t].filter.from,
                    )),
                  ie.slides[t].filter.to &&
                    (a.filter.values.bgTo = ie.transitions.layers.filters.convert(
                      ie.slides[t].filter.to,
                    )));
              }
              if (
                (a.textIn.type &&
                  -1 === ie.defaults.layer.splitTypeKeys.indexOf(a.textIn.type) &&
                  (ie.debugMode &&
                    ie.debug.add("warn", "layerInit.splitType3a", [e[0].tagName, a.textIn.type]),
                  delete a.textIn.type,
                  delete a.textIn.ns,
                  (a.textIn.enabled = !1)),
                a.textOut.type &&
                  -1 === ie.defaults.layer.splitTypeKeys.indexOf(a.textOut.type) &&
                  (ie.debugMode &&
                    ie.debug.add("warn", "layerInit.splitType3b", [e[0].tagName, a.textOut.type]),
                  delete a.textOut.type,
                  delete a.textOut.ns,
                  (a.textOut.enabled = !1)),
                a.textIn.type || a.textOut.type)
              ) {
                var g = 0;
                if (
                  (a.is.textLayer
                    ? (a.textIn.type &&
                        ((a.textIn.enabled = !0),
                        (a.textInNodesTo.ease = ie.functions.convert.easing(a.textInNodesTo.ease)),
                        (a.textIn.split = a.textIn.type.split("_")[0]),
                        e.children().length && ie.debugMode && (g = 1)),
                      a.textOut.type &&
                        ((a.textOut.enabled = !0),
                        (a.textOutNodesTo.ease = ie.functions.convert.easing(
                          a.textOutNodesTo.ease,
                        ))),
                      a.textOut.enabled &&
                        a.textOut.type.split("_")[0] !== a.textIn.split &&
                        ((a.textIn.split += ", " + a.textOut.type.split("_")[0]),
                        e.children().length && ie.debugMode && (g = 1)),
                      -1 !== a.textIn.split.indexOf("chars") &&
                        -1 === a.textIn.split.indexOf("words") &&
                        (a.textIn.split += ", words"),
                      -1 !== a.textIn.split.indexOf("words") &&
                        -1 === a.textIn.split.indexOf("lines") &&
                        (a.textIn.split += ", lines"))
                    : (delete a.textIn.type,
                      delete a.textOut.type,
                      delete a.textIn.ns,
                      delete a.textOut.ns,
                      ie.debugMode && (g = 2)),
                  ie.debugMode && 0 !== g && t && !i)
                )
                  switch (g) {
                    case 1:
                      ie.debug.add("warn", "layerInit.splitType1", [e.prop("nodeName"), t]);
                      break;
                    case 2:
                      ie.debug.add("warn", "layerInit.splitType2", [t, e.prop("nodeName")]);
                  }
              }
              if (
                ((a.original.clip ||
                  a.inClipShouldBeConverted.clip ||
                  a.outClipShouldBeConverted.clip ||
                  a.loopClipShouldBeConverted.clip) &&
                  (a.clip.enabled = !0),
                a.in.enabled &&
                  a.inLayerToCSS.scale &&
                  (delete a.inLayerToCSS.scaleX, delete a.inLayerToCSS.scaleY),
                a.out.enabled &&
                  a.outLayerToCSS.scale &&
                  (delete a.outLayerToCSS.scaleX, delete a.outLayerToCSS.scaleY),
                a.inLayerStyleShouldBeConvertedFrom.filter &&
                  (a.filter.values.in = ie.transitions.layers.filters.convert(
                    a.inLayerStyleShouldBeConvertedFrom.filter,
                  )),
                (a.filter.values.style = ie.transitions.layers.filters.convert(a.original.filter)),
                a.outLayerStyleShouldBeConvertedTo.filter &&
                  (a.filter.values.out = ie.transitions.layers.filters.convert(
                    a.outLayerStyleShouldBeConvertedTo.filter,
                  )),
                a.loopLayerShouldBeConverted.filter &&
                  (a.filter.values.loop = ie.transitions.layers.filters.convert(
                    a.loopLayerShouldBeConverted.filter,
                  )),
                a.hoverShouldBeConverted.filter &&
                  (a.filter.values.hover = ie.transitions.layers.filters.convert(
                    a.hoverShouldBeConverted.filter,
                  )),
                a.in.enabled || (a.in.duration = 0),
                a.textIn.enabled || (a.textIn.duration = 0),
                a.loop.enabled || (a.loop.duration = 0),
                a.textOut.enabled || (a.textOut.duration = 0),
                a.out.enabled || (a.out.duration = 0),
                e.attr("data-ls-slidein", t),
                void 0 !== a.settings.static && "none" !== a.settings.static)
              ) {
                var v = parseInt(a.settings.static);
                (0 !== v && "forever" !== a.settings.static
                  ? (e.attr("data-ls-slideout", v), (a.settings.slideOut = v))
                  : (a.settings.slideOut = 0),
                  (a.is.static = !0),
                  e.attr("data-ls-static", "1"));
              } else e.attr("data-ls-slideout", t);
              (a.is.mediaLayer &&
                e.children("video, audio").length &&
                ie.media.html5.singleInit(e.children("video, audio").eq(0)),
                a.is.backgroundVideo &&
                  a.styleSettings.overlay &&
                  e
                    .find(".ls-bg-video-overlay")
                    .css({ backgroundImage: "url(" + a.styleSettings.overlay + ")" }),
                a.styleSettings.minfontsize &&
                  (a.styleSettings.minfontsize = parseFloat(a.styleSettings.minfontsize)),
                a.styleSettings.minmobilefontsize &&
                  (a.styleSettings.minmobilefontsize = parseFloat(
                    a.styleSettings.minmobilefontsize,
                  )));
            },
            dataAttribute: function (e, t) {
              (e.removeAttr(
                "data-ls-animating-in data-ls-active data-ls-animating-out data-ls-hidden",
              ),
                e.attr("data-ls-" + t, ""));
            },
          },
          get: function (e) {
            var t = this.$all;
            if (e) {
              var i = "in",
                a = "",
                s = "",
                r = ':not(".ls-bg")',
                o = ':not(".ls-bg-video")';
              ((-1 == (e = e.toLowerCase()).indexOf("bgvideo") &&
                -1 == e.indexOf("backgroundvideo")) ||
                ((o = ""), (e = e.replace("bgvideo", "").replace("backgroundvideo", ""))),
                -1 != e.indexOf("video") && ((s += ", > video"), (e = e.replace("video", ""))),
                -1 != e.indexOf("audio") && ((s += ", > audio"), (e = e.replace("audio", ""))),
                -1 != e.indexOf("html5") &&
                  ((s += ", > video, > audio"), (e = e.replace("html5", ""))),
                -1 != e.indexOf("youtube") &&
                  ((s +=
                    ', > iframe[src*="youtube-nocookie.com"], > iframe[src*="youtube.com"], > iframe[src*="youtu.be"], > iframe[data-src*="youtube-nocookie.com"], > iframe[data-src*="youtube.com"], > iframe[data-src*="youtu.be"]'),
                  (e = e.replace("youtube", ""))),
                -1 != e.indexOf("vimeo") &&
                  ((s += ', > iframe[src*="player.vimeo"], > iframe[data-src*="player.vimeo"]'),
                  (e = e.replace("vimeo", ""))),
                "," == s.charAt(0) && (s = s.substring(2, s.length)),
                -1 != e.indexOf("out") && (i = "out"),
                (-1 == e.indexOf("img") && -1 == e.indexOf("image")) || (a = "img"),
                (-1 == e.indexOf("bg") &&
                  -1 == e.indexOf("background") &&
                  -1 == e.indexOf("bgonly")) ||
                  (r = ""),
                (t =
                  -1 != e.indexOf("current")
                    ? t.filter(
                        a + "[data-ls-slide" + i + '="' + ie.slides.current.index + '"]' + r + o,
                      )
                    : -1 != e.indexOf("next")
                      ? t.filter(
                          a + "[data-ls-slide" + i + '="' + ie.slides.next.index + '"]' + r + o,
                        )
                      : t.filter(a + r + o)),
                -1 != e.indexOf("notactive") &&
                  ((t = t.filter(".ls-bg, .ls-bg-video, :hidden")),
                  (e = e.replace("notactive", ""))),
                -1 != e.indexOf("active") &&
                  ((t = t.filter(":visible:not(.ls-bg, .ls-bg-video)")),
                  (e = e.replace("active", ""))),
                -1 != e.indexOf("notstatic") &&
                  ((t = t.filter(':not([data-ls-static="1"])')), (e = e.replace("notstatic", ""))),
                -1 != e.indexOf("static") &&
                  ((t = t.filter('[data-ls-static="1"]')), (e = e.replace("static", ""))),
                -1 != e.indexOf("bgonly") &&
                  ((t = t.filter(".ls-bg")), (e = e.replace("bgonly", ""))),
                "" !== s && (t = t.find(s)));
            }
            return t;
          },
          update: {
            data: function (e, t, i) {
              var a, s, r;
              switch (
                (e instanceof jQuery || (e = se(e)),
                i && e.attr("data-ls", i).data("ls", i),
                (a = (s = e.data(ie.defaults.init.dataKey)).is.onSlide),
                (r = s.original),
                t)
              ) {
                default:
                case "transitions":
                  ((s.settings.timelineIsCalculated = !1), ie.layers.set.properties(e, a, !0));
                  break;
                case "all":
                  (e.data(ie.defaults.init.dataKey, new ie.defaults.layer.options(e, a)),
                    ((s = e.data(ie.defaults.init.dataKey)).original = r),
                    ie.layers.set.properties(e, a, !0),
                    ie.layers.set.wrappers(e, s, a));
              }
            },
          },
          wrap: function (h, e) {
            if (!ie.slides[h].wrapped && "wrapping" !== ie.slides[h].wrapped) {
              ie.slides[h].wrapped = "wrapping";
              var t = e ? 25 : 0,
                i = ie.slides[h].$layers,
                m = i.length;
              i.each(function (p, c) {
                ie.timeouts["slide-" + h + "-layer-" + p] = setTimeout(
                  function () {
                    delete ie.timeouts["slide-" + h + "-layer-" + p];
                    var e,
                      t = se(c),
                      i = t,
                      a = "",
                      s = !1,
                      r = "";
                    (t.hasClass("ls-hide-phone") && (r += " ls-hide-on-phone"),
                      t.hasClass("ls-hide-tablet") && (r += " ls-hide-on-tablet"),
                      t.hasClass("ls-hide-desktop") && (r += " ls-hide-on-desktop"),
                      t.removeClass("ls-hide-phone ls-hide-tablet ls-hide-desktop"),
                      i.is("a") &&
                        1 === i.children().length &&
                        ((s = !0), (t = i.find(".ls-layer"))));
                    var o = t.data(ie.defaults.init.dataKey);
                    if (!o) return !0;
                    if (
                      ((e = ie.slider.$layersWrapper),
                      o.is.backgroundVideo
                        ? (e = ie.slider.$bgVideosWrapper)
                        : o.is.slideBackground && (e = ie.slider.$slideBGWrapper),
                      ie.layers.set.style(t),
                      ie.layers.set.properties(t, h),
                      ie.layers.set.dataAttribute(t, "hidden"),
                      o.textIn.split)
                    ) {
                      var n = new SplitType(t[0], { split: o.textIn.split });
                      (o.textIn.type && (o.textIn.ns = n[o.textIn.type.split("_")[0]]),
                        o.textOut.type && (o.textOut.ns = n[o.textOut.type.split("_")[0]]));
                    }
                    ((a =
                      o.is.slideBackground || o.is.backgroundVideo
                        ? '<div class="ls-wrapper ls-bg-outer"><div class="ls-wrapper ls-bg-wrap"></div></div>'
                        : (o.clip.enabled && (a = '<div class="ls-wrapper ls-clip"></div>'),
                          o.loop.enabled && (a = '<div class="ls-wrapper ls-loop">' + a + "</div>"),
                          '<div class="ls-wrapper ls-in-out">' + a + "</div>")),
                      o.parallax.enabled &&
                        (a = '<div class="ls-wrapper ls-parallax">' + a + "</div>"),
                      ie.browser.isSafari && (a = '<div class="ls-wrapper ls-z">' + a + "</div>"),
                      "" !== a ? t.appendTo(e).wrap(a) : t.appendTo(e),
                      !0 === s && i.addClass("ls-layer-link").appendTo(t.parent()));
                    var l = {},
                      d = t.css("mix-blend-mode");
                    (d &&
                      "normal" !== d &&
                      ((l["mix-blend-mode"] = d), t.css("mix-blend-mode", "normal")),
                      (o.original.customZIndex = 1));
                    var u = parseInt(o.original.zIndex);
                    (o.is.backgroundVideo
                      ? (l = { zIndex: o.original.customZIndex })
                      : o.is.slideBackground
                        ? (l = { zIndex: o.original.customZIndex })
                        : ((u = u || p + 101), (l.zIndex = u), (o.original.customZIndex = u)),
                      o.styleSettings.pointerevents && (l.pointerEvents = "none"),
                      ie.browser.isSafari && (l.transform = "translateZ(" + 3e3 * u + "px )"),
                      ie.layers.set.wrappers(t, o, h),
                      o.elements.$outerWrapper.css(l).addClass(r),
                      o.is.slideBackground &&
                        o.elements.$bgWrapper.css({
                          backgroundColor: ie.slides[h].data.backgroundColor,
                        }),
                      (ie.layers.$all = ie.layers.$all.add(t)),
                      (ie.slides[h].$layers = ie.slides[h].$layers.not(i)),
                      p === m - 1 &&
                        (_.children(".ls-slide")
                          .eq(h - 1)
                          .empty(),
                        (ie.slides[h].wrapped = !0)));
                  },
                  t * (p + 1),
                );
              });
            }
          },
        }),
        (ie.slideshow = {
          direction: "next",
          nextLoop: 0,
          firstStart: !0,
          sequence: { normal: [], randomized: [] },
          state: {
            running: !0,
            paused: !1,
            pausedByVideo: !1,
            pausedByHover: !1,
            pausedByLastCycle: !1,
          },
          should: { change: !1, start: !1, stop: !1 },
          isPaused: function () {
            return this.state.paused || this.state.pausedByVideo || this.state.pausedByHover;
          },
          init: function () {
            (1 == ie.slides.count &&
              ((ie.o.autoStart = !1),
              (ie.o.navPrevNext = !1),
              (ie.o.navStartStop = !1),
              (ie.o.navButtons = !1),
              (ie.o.cycles = -1),
              (ie.o.forceLoopNum = !1),
              (ie.o.autoPauseSlideshow = !0),
              (ie.o.firstSlide = 1),
              (ie.o.thumbnailNavigation = "disabled")),
              (ie.o.autoStart && 1 != ie.slides.count) ||
                ie.functions.setStates(this, { running: !1, paused: !0 }),
              this.set.pauseOnHover(),
              this.set.sequences());
          },
          set: {
            pauseOnHover: function () {
              ((ie.o.pauseOnHover =
                !0 === ie.o.pauseOnHover
                  ? ie.defaults.init.options.pauseOnHover
                  : ie.o.pauseOnHover),
                !1 !== ie.o.pauseOnHover &&
                  _.on("mouseenter." + z, function () {
                    ie.slider.state.inFullscreen ||
                      (ie.functions.setStates(ie.slideshow, { pausedByHover: !0 }),
                      "slideshowOnly" !== ie.o.pauseOnHover &&
                        ie.transitions.layers.timeline.pause());
                  }).on("mouseleave." + z, function () {
                    var e = 1;
                    (ie.transitions._slideTimeline &&
                      ie.transitions._slideTimeline.duration() >
                        ie.transitions.layers.timeline.totalDuration &&
                      (e =
                        ie.transitions.layers.timeline.totalDuration /
                        ie.transitions._slideTimeline.duration()),
                      ie.functions.setStates(ie.slideshow, { pausedByHover: !1 }),
                      se("body").hasClass("ls-unselectable") ||
                        "slideshowOnly" === ie.o.pauseOnHover ||
                        (ie.o.pauseLayers && ie.slideshow.isPaused()) ||
                        ie.transitions.layers.timeline.resume(),
                      ie.transitions._slideTimeline &&
                        ie.transitions.layers.timeline.state.finished &&
                        ie.transitions._slideTimeline.progress() < e &&
                        ie.functions.setStates(ie.transitions.layers.timeline, { finished: !1 }),
                      ie.slideshow.start());
                  }));
            },
            sequences: function () {
              for (var e = 0; e < ie.slides.count; e++) ie.slideshow.sequence.normal[e] = e + 1;
              ie.slideshow.sequence.randomized = ie.functions.shuffleArray(
                se.merge([], ie.slideshow.sequence.normal),
              );
            },
            normalizedSequence: function () {
              var e = ie.o.shuffleSlideshow ? "randomized" : "normal",
                t = ie.slideshow.sequence[e],
                i = ie.slideshow.sequence[e].length,
                a = t.indexOf(ie.slides.first.index);
              ie.slideshow.sequence.normalized = [];
              for (var s = a; s < i; s++) ie.slideshow.sequence.normalized.push(t[s]);
              for (var r = 0; r < a; r++) ie.slideshow.sequence.normalized.push(t[r]);
            },
            prevNext: function (e) {
              switch (e) {
                case "prev":
                  (ie.o.twoWaySlideshow && (ie.slideshow.direction = "prev"),
                    ie.slideshow.changeTo(ie.slideshow.get.slideInSequence("prev"), !0));
                  break;
                case "next":
                  ((ie.slideshow.direction = "next"),
                    ie.slideshow.changeTo(ie.slideshow.get.slideInSequence("next"), !0));
              }
            },
          },
          get: {
            sequence: function () {
              var e = "normal";
              return (
                ie.o.playByScroll
                  ? (e = "normalized")
                  : ie.o.shuffleSlideshow && (e = "randomized"),
                e
              );
            },
            slideInSequence: function (e) {
              var t = ie.slideshow.sequence[this.sequence()],
                i = t.indexOf(ie.slides.current.index);
              switch (e) {
                case "prev":
                  return 0 === i ? t[t.length - 1] : t[i - 1];
                case "next":
                  return i === t.length - 1 ? t[0] : t[i + 1];
                default:
                  return t[e];
              }
            },
            indexOfSlideInSequence: function (e) {
              return ie.slideshow.sequence[this.sequence()].indexOf(e);
            },
          },
          cycles: {
            set: function () {
              0 < ie.o.cycles &&
                ((ie.slideshow.curCycle = 1),
                (ie.slideshow.cycleSlideIndex = ie.slideshow.get.indexOfSlideInSequence(
                  ie.slides.first.index,
                )));
            },
            check: function (e) {
              if (ie.slideshow.get.indexOfSlideInSequence(e) === ie.slideshow.cycleSlideIndex)
                return ++ie.slideshow.curCycle === ie.o.cycles + 1;
            },
          },
          start: function (e) {
            !this.isPaused() &&
              ie.transitions._slideTimeline &&
              ie.transitions.layers.timeline.state.finished &&
              this.changeTo(ie.slides.next.index);
          },
          stop: function () {
            ie.functions.setStates(this, { running: !1, paused: !0 });
          },
          changeTo: function (e, t, i) {
            if (!document.body.contains(M)) return !1;
            if (ie.slides.current.index === e) return !1;
            if (!this.firstStart && ie.api.hasEvent("slideChangeWillStart")) {
              var a = _.triggerHandler("slideChangeWillStart", ie.api.eventData());
              if (!1 === a) return;
              se.isNumeric(a) && (e = parseInt(a));
            }
            e > ie.slides.count || e < 1
              ? ie.debugMode &&
                (ie.debug.add("group", "slideshow"),
                ie.debug.add("warn", "slideshow.invalidSlideIndex", [e, ie.slides.count]),
                ie.debug.groupEnd())
              : ie.slider.isBusy() || (ie.slideshow.state.pausedByVideo && !t)
                ? !ie.slider.state.preloadingImages &&
                  ie.slider.state.animatingSlides &&
                  ie.transitions._slideTransition &&
                  ((ie.slideshow.should.change = !0),
                  ie.transitions._slideTransition.progress(1),
                  ie.transitions._forceLayersOut && ie.transitions._forceLayersOut.progress(1))
                : (ie.functions.setStates(ie.transitions.layers.timeline, { finished: !1 }),
                  (ie.slideshow.should.change = !1),
                  ie.debugMode && ie.debug.add("group", "slideshow"),
                  t
                    ? ("prev" === ie.navigation.direction &&
                        ie.o.twoWaySlideshow &&
                        (ie.slideshow.direction = "prev"),
                      ie.debugMode &&
                        (ie.debug.add("log", "slideshow.changedByUser", !1),
                        ie.o.twoWaySlideshow &&
                          ie.debug.add("log", "slideshow.setdir", ie.slideshow.direction)))
                    : (ie.navigation.direction = ie.slideshow.direction),
                  ie.transitions.timers.reverse(),
                  ie.gui.media.hideUnmute(),
                  ie.slides.set.nextSlideIndex(e),
                  ie.debugMode &&
                    (ie.debug.add("log", "slideshow.change", [
                      ie.slides.current.index,
                      ie.slides.next.index,
                      ie.slideshow.direction,
                      ie.navigation.direction,
                    ]),
                    ie.debug.groupEnd()),
                  ie.functions.setStates(this, { pausedByVideo: !1 }),
                  ie.functions.setStates(ie.slider, { changingSlides: !0 }),
                  ie.preload.imagesOfSlide(ie.slides.next.index, function () {
                    ie.transitions.start();
                  }));
          },
          forceStop: function () {
            (ie.navigation.stop(),
              se.each(ie.timeouts, function (e, t) {
                clearTimeout(ie.timeouts[e]);
              }),
              ie.transitions.timers.stop(),
              ie.transitions._slideTimeline.stop(),
              ie.functions.setStates(ie.transitions.layers.timeline, { stopped: !0, running: !1 }),
              _.find("*").stop(!0, !1).dequeue());
          },
          restart: function () {
            (_.find("*").stop(),
              ie.navigation.change(ie.slides.current.index, ie.slideshow.direction));
          },
        }),
        (ie.media = {
          properties: {
            $allMediaLayers: se(),
            playingInCurSlide: 0,
            endedInCurSlide: 0,
            userDidUnmute: !1,
          },
          init: function () {
            (ie.functions.setStates(ie.slider, { waitingForYouTube: !1, waitingForVimeo: !1 }),
              (ie.media.properties.allowToUnmute = !0),
              ie.media.youtube.init(),
              ie.media.vimeo.init(),
              ie.media.html5.init());
          },
          get: function (e) {
            var t,
              i = ie.media.properties.$allMediaLayers;
            return (
              e &&
                (-1 !== (e = e.toLowerCase()).indexOf("notbg") && (i = i.not(".ls-bg-video")),
                -1 !== e.indexOf("active") &&
                  (i = i.filter("[data-ls-active], [data-ls-animating-in]")),
                -1 !== e.indexOf("notstatic") && (i = i.not("[data-ls-static]")),
                (t = i.find("video, audio, iframe")),
                -1 !== e.indexOf("notplaying")
                  ? (t = t.filter("[data-ls-not-playing]"))
                  : -1 !== e.indexOf("playing") && (t = t.filter("[data-ls-playing]")),
                -1 !== e.indexOf("allowtounmute") && (t = t.filter("[data-ls-allow-to-unmute]")),
                -1 !== e.indexOf("mutedbybrowser") && (t = t.filter("[data-ls-muted-by-browser]"))),
              t
            );
          },
          set: {
            backgroundVideo: function (e, t) {
              if (0 === e.children(".ls-vpcontainer").length) {
                var i = se("<div>").addClass("ls-vpcontainer").appendTo(e);
                t.mediaSettings.poster &&
                  se("<div>")
                    .appendTo(i)
                    .addClass("ls-videopreview")
                    .attr({ style: "background-image: url(" + t.mediaSettings.poster + ")" });
              }
            },
            customPoster: function (e, t) {
              var i;
              return (
                t.mediaSettings.poster
                  ? (i = t.mediaSettings.poster)
                  : e.data("ls") &&
                    -1 !== e.data("ls").indexOf("poster:") &&
                    ((i = e.data("ls").split("poster:")[1].split(";")[0].trim()),
                    (t.mediaSettings.poster = i)),
                i
              );
            },
            dataAttribute: function (e, t) {
              (e.removeAttr("data-ls-playing data-ls-not-playing"),
                e.attr("data-ls-" + t, ""),
                ie.media.functions.checkSlideshowWaiting());
            },
            mediaElements: function (e, t, i) {
              var a = se("<div>").addClass("ls-vpcontainer").appendTo(e);
              ((!("autoplay" in i.mediaSettings) && ie.o.autoPlayVideos) || i.mediaSettings.autoplay
                ? e.addClass("ls-autoplay")
                : se("<div>").appendTo(a).addClass("ls-playvideo"),
                t.is("iframe") &&
                  i.mediaProperties.poster &&
                  se("<div>")
                    .appendTo(a)
                    .addClass("ls-videopreview")
                    .attr({ style: "background-image: url(" + i.mediaProperties.poster + ")" }),
                t.is("video, audio") &&
                  i.mediaProperties.poster &&
                  se("<div>")
                    .appendTo(a)
                    .addClass("ls-videopreview")
                    .attr({ style: "background-image: url(" + i.mediaProperties.poster + ")" }));
            },
            properties: function (e, t, i) {
              switch (((i.is.mediaLayer = !0), i.mediaProperties.type)) {
                case "youtube":
                  i.is.backgroundVideo
                    ? ((i.mediaProperties.options = se.extend(
                        !0,
                        {
                          loop: 1,
                          playlist: i.mediaProperties.embedID,
                          controls: 0,
                          autoplay: 0,
                          showinfo: !1,
                          modestbranding: 1,
                          thumbnail: !1,
                        },
                        ie.media[i.mediaProperties.type].defaults,
                        i.mediaProperties.embedOptions,
                      )),
                      ie.media.set.backgroundVideo(e, i))
                    : ((i.mediaProperties.options = se.extend(
                        !0,
                        {},
                        ie.media[i.mediaProperties.type].defaults,
                        i.mediaProperties.embedOptions,
                        { autoplay: 0 },
                      )),
                      ie.media.set.mediaElements(e, t, i));
                  break;
                case "vimeo":
                  i.is.backgroundVideo
                    ? ((i.mediaProperties.options = se.extend(
                        !0,
                        { loop: 1, byline: 0, portrait: 0, title: 0, fun: 0 },
                        ie.media[i.mediaProperties.type].defaults,
                        i.mediaProperties.embedOptions,
                      )),
                      ie.media.set.backgroundVideo(e, i))
                    : ((i.mediaProperties.options = se.extend(
                        !0,
                        {},
                        ie.media[i.mediaProperties.type].defaults,
                        i.mediaProperties.embedOptions,
                        { autoplay: 0 },
                      )),
                      ie.media.set.mediaElements(e, t, i));
                  break;
                case "html5":
                  (t.attr("autoplay") &&
                    (t.removeAttr("autoplay"),
                    e.attr("data-ls", e.attr("data-ls") + " autoplay: true;")),
                    i.is.backgroundVideo &&
                      (t.removeAttr("controls"), (t[0].muted = !0), t.attr("loop", "")),
                    "controls" in i.mediaSettings &&
                      (i.mediaSettings.controls
                        ? (t.attr("controls", ""), t.removeAttr("nocontrols"))
                        : t.removeAttr("controls")),
                    "volume" in i.mediaSettings &&
                      (i.mediaSettings.volume < 0
                        ? (i.mediaSettings.volume = 0)
                        : 100 < i.mediaSettings.volume && (i.mediaSettings.volume = 100),
                      (t[0].volume = i.mediaSettings.volume / 100)),
                    "muted" in i.mediaSettings &&
                      (i.mediaSettings.muted ? (t[0].muted = !0) : (t[0].muted = !1)),
                    "loop" in i.mediaSettings &&
                      (i.mediaSettings.loop ? t.attr("loop", "") : t.removeAttr("loop")),
                    i.is.backgroundVideo
                      ? ie.media.set.backgroundVideo(e, i)
                      : ie.media.set.mediaElements(e, t, i));
              }
            },
            thumbnail: function (e, t) {
              switch (t) {
                case "show":
                  e.fadeIn(ie.transitions.media.defaults.fadeIn);
                  break;
                case "hide":
                  e.delay(ie.transitions.media.defaults.delay).fadeOut(
                    ie.transitions.media.defaults.fadeOut,
                  );
              }
            },
          },
          events: {
            start: function (e, t, i) {
              if (
                ie.api.hasEvent("mediaDidStart") &&
                !i.mediaProperties.alreadyStarted &&
                ie.media.functions.allowedToPlay(e, i)
              ) {
                var a = ie.api.eventData();
                ((a.event.target = e[0]),
                  _.triggerHandler("mediaDidStart", a),
                  (i.mediaProperties.alreadyStarted = !0));
              }
            },
            stop: function (e, t, i) {
              if (ie.api.hasEvent("mediaDidStop") && i.mediaProperties.alreadyStarted) {
                var a = ie.api.eventData();
                ((a.event.target = e[0]),
                  _.triggerHandler("mediaDidStop", a),
                  (i.mediaProperties.alreadyStarted = !1));
              }
            },
          },
          unmute: {
            set: function (e, t, i) {
              ((("youtube" !== t && "vimeo" !== t) || ie.media.properties.allowToUnmute) &&
                ie.gui.media.showUnmute(),
                e.attr("data-ls-allow-to-unmute", ""),
                i && e.attr("data-ls-muted-by-browser", ""));
            },
            multipleMediaElements: function () {
              var e = _.find("[data-ls-allow-to-unmute]");
              ((ie.o.rememberUnmuteState
                ? e
                : e.filter("[data-ls-playing], [data-ls-muted-by-browser]")
              ).each(function () {
                ie.media.unmute.singleMediaElement(se(this));
              }),
                ie.gui.media.hideUnmute(),
                (ie.media.properties.userDidUnmute = !0));
            },
            singleMediaElement: function (e) {
              var t,
                i = e.closest(".ls-layer").data(ie.defaults.init.dataKey),
                a = !1;
              switch (i.mediaProperties.type) {
                case "youtube":
                  ie.media.properties.allowToUnmute &&
                    ((a = !0), i.mediaProperties.player.unMute());
                  break;
                case "vimeo":
                  ie.media.properties.allowToUnmute &&
                    ((a = !0),
                    (t = i.mediaSettings.volume ? i.mediaSettings.volume / 100 : 1),
                    i.mediaProperties.player.setVolume(t));
                  break;
                case "html5":
                  ((a = !0), (e[0].muted = !1));
              }
              a && e.removeAttr("data-ls-muted-by-browser data-ls-allow-to-unmute");
            },
          },
          functions: {
            allowedToPlay: function (e, t) {
              var i = e.closest(".ls-layer");
              return !!(
                ie.slides.current.index === parseInt(i.attr("data-ls-slidein")) ||
                (t.is.backgroundVideo &&
                  ie.slides.next.index === parseInt(i.attr("data-ls-slidein"))) ||
                (i.attr("data-ls-static") && void 0 !== i.attr("data-ls-active"))
              );
            },
            playActiveMedia: function () {
              var e;
              ie.media.get("notbg,active").each(function () {
                if (
                  (e = se(this).closest(".ls-layer").data(ie.defaults.init.dataKey)).mediaProperties
                    .alreadyStarted
                )
                  switch (e.mediaProperties.type) {
                    case "youtube":
                      e.mediaProperties.player.playVideo();
                      break;
                    case "vimeo":
                      e.mediaProperties.player.play();
                      break;
                    case "html5":
                      e.mediaProperties.$media[0].play();
                  }
                else se(this).parent().find(".ls-vpcontainer").trigger("playMedia");
              });
            },
            pauseActiveMedia: function () {
              var e;
              ie.media.get("notbg,active,playing").each(function () {
                switch (
                  (e = se(this).closest(".ls-layer").data(ie.defaults.init.dataKey)).mediaProperties
                    .type
                ) {
                  case "youtube":
                    e.mediaProperties.player.pauseVideo();
                    break;
                  case "vimeo":
                    e.mediaProperties.player.pause();
                    break;
                  case "html5":
                    this.pause();
                }
              });
            },
            urlToObject: function (e) {
              var a = {},
                t = e.split("?")[1];
              return (
                t &&
                  t.split("#")[0].replace(/([^=&]+)=([^&]*)/g, function (e, t, i) {
                    a[decodeURIComponent(t)] = se.isNumeric(decodeURIComponent(i))
                      ? parseInt(decodeURIComponent(i))
                      : decodeURIComponent(i);
                  }),
                a
              );
            },
            checkSlideshowState: function (e, t) {
              !t.is.static &&
                ie.o.autoPauseSlideshow &&
                (ie.functions.setStates(ie.slideshow, { pausedByVideo: !0 }),
                "auto" == ie.o.autoPauseSlideshow && ie.media.properties.playingInCurSlide++);
            },
            checkSlideshowWaiting: function () {
              var e = ie.media.properties.playingInCurSlide,
                t = ie.media.get("notbg,active,notstatic,notplaying"),
                i = ie.media.get("notbg,active,notstatic,notplaying").length;
              i === e &&
              0 < i &&
              ie.slideshow.state.pausedByVideo &&
              ie.o.autoPauseSlideshow &&
              !ie.timeouts.pausedVideos &&
              ie.slideshow.state.running
                ? (ie.timeouts.pausedVideos = setTimeout(function () {
                    ie.slideshow.state.running
                      ? t.each(function () {
                          ie.media.functions.mediaEnded(
                            se(this),
                            se(this).closest(".ls-layer"),
                            se(this).closest(".ls-layer").data(ie.defaults.init.dataKey),
                          );
                        })
                      : (ie.slideshow.state.pausedByVideo = !1);
                  }, 5e3))
                : ie.timeouts.pausedVideos &&
                  (clearTimeout(ie.timeouts.pausedVideos), delete ie.timeouts.pausedVideos);
            },
            playIfAllowed: function (e) {
              var t = e.data(ie.defaults.init.dataKey);
              t.is.mediaLayer &&
                ((ie.device.isMobile &&
                  ((_.hasClass("ls-device-is-phone") &&
                    t.elements.$outerWrapper.hasClass("ls-hide-on-phone")) ||
                    (_.hasClass("ls-device-is-tablet") &&
                      t.elements.$outerWrapper.hasClass("ls-hide-on-tablet")))) ||
                  (("autoplay" in t.mediaSettings || !ie.o.autoPlayVideos) &&
                    !t.mediaSettings.autoplay) ||
                  e.find(".ls-vpcontainer").trigger("playMedia"));
            },
            stop: function (a) {
              a = void 0 === a || a;
              (ie.layers.get("current,out,youtube").each(function () {
                var e = se(this),
                  t = e.closest(".ls-layer"),
                  i = t.data(ie.defaults.init.dataKey);
                ie.media.youtube.stop(t, e, i, a);
              }),
                ie.layers.get("current,out,vimeo").each(function () {
                  var e = se(this),
                    t = e.closest(".ls-layer"),
                    i = t.data(ie.defaults.init.dataKey);
                  ie.media.vimeo.stop(t, e, i, a);
                }),
                ie.layers.get("current,out,html5").each(function () {
                  var e = se(this),
                    t = e.closest(".ls-layer"),
                    i = t.data(ie.defaults.init.dataKey);
                  ie.media.html5.stop(t, e, i, a);
                }),
                (ie.media.properties.playingInCurSlide = 0),
                (ie.media.properties.endedInCurSlide = 0));
            },
            mediaEnded: function (e, t, i) {
              ("auto" != ie.o.autoPauseSlideshow ||
                i.is.backgroundVideo ||
                (i.is.static || ie.media.properties.endedInCurSlide++,
                ie.media.properties.endedInCurSlide == ie.media.properties.playingInCurSlide &&
                  0 !== ie.media.properties.playingInCurSlide &&
                  (ie.functions.setStates(ie.slideshow, { pausedByVideo: !1 }),
                  (ie.slideshow.remainingSlideDuration = 1),
                  ie.slideshow.start())),
                ie.media.set.dataAttribute(e, "not-playing"),
                ie.media.events.stop(e, t, i));
            },
            removeFromTimeline: function (e) {
              ie.transitions._slideTimeline.kill(null, e.closest(".ls-in-out")[0]);
            },
          },
          youtube: {
            defaults: {
              autoplay: 0,
              playsinline: 1,
              wmode: "opaque",
              html5: 1,
              enablejsapi: 1,
              version: 3,
              rel: 0,
            },
            init: function () {
              var l = 0;
              ((this.$medias = ie.slider.$hiddenWrapper
                .find(
                  'iframe[src*="youtube-nocookie.com"], iframe[src*="youtube.com"], iframe[src*="youtu.be"], iframe[data-src*="youtube-nocookie.com"], iframe[data-src*="youtube.com"], iframe[data-src*="youtu.be"]',
                )
                .each(function () {
                  var e = se(this).attr({
                      id: "ls-youtube-" + ++l,
                      allow:
                        "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen",
                      allowfullscreen: "",
                    }),
                    t = e.closest(".ls-layer"),
                    i = t.data(ie.defaults.init.dataKey),
                    a = e.attr("src") || e.attr("data-src"),
                    s = ie.media.functions.urlToObject(a),
                    r = (a = a.split("?")[0].split("//")[1]).split("/"),
                    o = r[r.length - 1],
                    n = ie.media.set.customPoster(t, i);
                  ((i.mediaProperties = {
                    type: "youtube",
                    $media: e,
                    embedURL: a,
                    embedID: o,
                    embedOptions: s,
                    poster:
                      n ||
                      "https://img.youtube.com/vi/" +
                        a.split("embed/")[1].split("?")[0] +
                        "/" +
                        ie.o.youtubePreview,
                  }),
                    ie.media.set.properties(t, e, i));
                })),
                this.$medias.length &&
                  ((ie.media.properties.$allMediaLayers = ie.media.properties.$allMediaLayers.add(
                    this.$medias.closest(".ls-layer"),
                  )),
                  (ie.timeouts.loadYouTube = Math.floor(Date.now() / 1e3)),
                  window.YT ||
                    se("<script>")
                      .attr({ src: "https://www.youtube.com/iframe_api", type: "text/javascript" })
                      .appendTo("head"),
                  (window.onYouTubeIframeAPIReady = function () {
                    window._layerSlider.globals.youTubeIsReady = !0;
                  }),
                  (ie.intervals.isYouTubeReady = setInterval(function () {
                    (window.YT && 1 === window.YT.loaded) ||
                    window._layerSlider.globals.youTubeIsReady ||
                    3 < Math.floor(Date.now() / 1e3) - ie.timeouts.loadYouTube
                      ? (clearInterval(ie.intervals.isYouTubeReady),
                        delete ie.intervals.isYouTubeReady,
                        delete ie.timeouts.loadYouTube,
                        ie.media.youtube.$medias.closest(".ls-layer").each(function () {
                          var e = se(this),
                            t = e.data(ie.defaults.init.dataKey);
                          e.on("playMedia." + z + " click." + z, ".ls-vpcontainer", function () {
                            (ie.media.set.thumbnail(se(this), "hide"),
                              ie.media.functions.checkSlideshowState(e, t),
                              ie.media.functions.removeFromTimeline(e),
                              ie.media.youtube.play(
                                e,
                                t.mediaProperties.$media,
                                t,
                                t.mediaProperties.embedURL,
                              ));
                          })
                            .on("playBackgroundVideo." + z, function () {
                              (ie.media.youtube.play(
                                e,
                                t.mediaProperties.$media,
                                t,
                                t.mediaProperties.embedURL,
                              ),
                                ie.layers.set.dataAttribute(e, "active"));
                            })
                            .on("stopBackgroundVideo." + z, function () {
                              (ie.media.youtube.stop(e, t.mediaProperties.$media, t, !0),
                                ie.layers.set.dataAttribute(e, "hidden"));
                            })
                            .on("preloadBackgroundVideo." + z, function () {
                              ie.media.youtube.createPlayer(
                                e,
                                t.mediaProperties.$media,
                                t,
                                t.mediaProperties.embedURL,
                                !0,
                              );
                            });
                        }),
                        ie.functions.setStates(ie.slider, { waitingForYouTube: !1 }))
                      : ie.functions.setStates(ie.slider, { waitingForYouTube: !0 });
                  }, 25))));
            },
            createPlayer: function (t, i, a, s, r) {
              ((a.mediaProperties.playerState = "initializing"),
                "controls" in a.mediaSettings &&
                  (a.mediaProperties.options.controls = a.mediaSettings.controls ? 1 : 0),
                "loop" in a.mediaSettings &&
                  (a.mediaProperties.options.loop = a.mediaSettings.loop ? 1 : 0),
                "showinfo" in a.mediaSettings &&
                  (a.mediaProperties.options.showinfo = a.mediaSettings.showinfo ? 1 : 0),
                a.mediaProperties.options.loop
                  ? (a.mediaProperties.options.playlist = a.mediaProperties.embedID)
                  : delete a.mediaProperties.options.playlist,
                0 === a.mediaProperties.options.showinfo &&
                  (a.mediaProperties.options.modestbranding = 1),
                i
                  .attr("src", "https://" + s + "?" + jQuery.param(a.mediaProperties.options))
                  .on("load", function () {
                    a.mediaProperties.player = new YT.Player(i[0], {
                      events: {
                        onReady: function (e) {
                          ((a.mediaProperties.playerState = "ready"),
                            a.mediaSettings.volume &&
                              a.mediaProperties.player.setVolume(a.mediaSettings.volume),
                            (r && !a.mediaProperties.shouldPlay) ||
                              (ie.media.youtube.play(t, i, a, s),
                              (a.mediaProperties.shouldPlay = !1)));
                        },
                        onStateChange: function (e) {
                          switch (e.data) {
                            case 0:
                              (a.mediaProperties.options.loop &&
                                1 === a.mediaProperties.options.loop) ||
                                ie.media.functions.mediaEnded(i, t, a);
                              break;
                            case 1:
                              (ie.media.events.start(i, t, a),
                                (a.mediaProperties.lastStarted = Date.now()));
                              break;
                            case 2:
                            case -1:
                              (a.mediaProperties.firstState &&
                                0 !== a.mediaProperties.lastState &&
                                1 !== a.mediaProperties.lastState) ||
                                (a.mediaProperties.lastStarted &&
                                  (Date.now(), a.mediaProperties.lastStarted));
                          }
                          switch (e.data) {
                            case 1:
                              ie.media.set.dataAttribute(i, "playing");
                              break;
                            default:
                              ie.media.set.dataAttribute(i, "not-playing");
                          }
                          ie.media.youtube.savePlayerState(a, e.data);
                        },
                      },
                    });
                  }));
            },
            savePlayerState: function (e, t) {
              (e.mediaProperties.firstState || (e.mediaProperties.firstState = t),
                (e.mediaProperties.lastState = t));
            },
            play: function (e, t, i, a, s) {
              (void 0 !== t.attr("data-ls-muted-by-browser") &&
                ie.media.unmute.singleMediaElement(t),
                i.mediaProperties.player
                  ? i.mediaProperties.player.playVideo
                    ? (!i.is.backgroundVideo ||
                        "muted" in i.mediaSettings ||
                        i.mediaProperties.player.mute(),
                      i.mediaSettings.muted
                        ? (ie.o.rememberUnmuteState && ie.media.properties.userDidUnmute) ||
                          (i.mediaProperties.player.mute(),
                          "offertounmute" == i.mediaSettings.muted &&
                            ie.media.unmute.set(t, i.mediaProperties.type))
                        : s &&
                          (i.mediaProperties.player.mute(),
                          ie.media.unmute.set(t, i.mediaProperties.type, !0)),
                      ie.media.functions.allowedToPlay(t, i)
                        ? i.mediaProperties.player.playVideo()
                        : ie.media.youtube.stop(e, t, i, !0))
                    : (i.mediaProperties.shouldPlay = !0)
                  : i.mediaProperties.playerState
                    ? (i.mediaProperties.shouldPlay = !0)
                    : this.createPlayer(e, t, i, a));
            },
            stop: function (e, t, i, a) {
              i.mediaProperties.player &&
                (i.mediaProperties.player.pauseVideo(),
                a && i.mediaProperties.player.seekTo(0),
                i.is.backgroundVideo || ie.media.set.thumbnail(e.find(".ls-vpcontainer"), "show"),
                ie.media.events.stop(t, e, i));
            },
          },
          vimeo: {
            defaults: { autoplay: 0, autopause: 0, wmode: "opaque", playsinline: 1 },
            init: function () {
              var e = (this.$medias = ie.slider.$hiddenWrapper.find(
                  'iframe[src*="player.vimeo"], iframe[data-src*="player.vimeo"]',
                )),
                d = ie.slider.$hiddenWrapper.find(
                  '.ls-slide:eq(0) iframe[src*="player.vimeo"], .ls-slide:eq(0) iframe[data-src*="player.vimeo"]',
                ).length;
              if (e.length) {
                ((ie.timeouts.loadVimeo = Math.floor(Date.now() / 1e3)),
                  (ie.media.properties.$allMediaLayers = ie.media.properties.$allMediaLayers.add(
                    e.closest(".ls-layer"),
                  )));
                var u = 0;
                (se("<script>")
                  .attr({ src: "https://player.vimeo.com/api/player.js", type: "text/javascript" })
                  .appendTo("head"),
                  (ie.intervals.isVimeoReady = setInterval(function () {
                    (ie.functions.setStates(ie.slider, { waitingForVimeo: !0 }),
                      (window.Vimeo || 3 < Math.floor(Date.now() / 1e3) - ie.timeouts.loadVimeo) &&
                        (clearInterval(ie.intervals.isVimeoReady),
                        delete ie.intervals.isVimeoReady,
                        delete ie.timeouts.loadVimeo,
                        t()));
                  }, 25)));
                var t = function () {
                  var l = 0;
                  (ie.media.vimeo.$medias.each(function () {
                    var t = se(this).attr({
                        id: "ls-vimeo-" + ++u,
                        allow:
                          "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen",
                        allowfullscreen: "",
                      }),
                      i = t.closest(".ls-layer"),
                      a = i.data(ie.defaults.init.dataKey),
                      e = t.attr("src") || t.attr("data-src"),
                      s = ie.media.functions.urlToObject(e),
                      r =
                        "https://vimeo.com/api/oembed.json?url=http://vimeo.com/" +
                        e.split("video/")[1].split("?")[0];
                    ((e = e.split("?")[0].split("//")[1]),
                      (ie.media.vimeo.defaults.player_id = "ls-vimeo-" + u));
                    var o = ie.media.set.customPoster(i, a);
                    a.mediaProperties = { type: "vimeo", $media: t, embedURL: e, embedOptions: s };
                    function n(e) {
                      ((a.mediaProperties.poster = e),
                        (0 === d || (0 < d && ++l == d)) &&
                          (window._layerSlider.globals.vimeoIsReady = !0),
                        ie.media.set.properties(i, t, a));
                    }
                    (o
                      ? n(o)
                      : se.getJSON(r, function (e) {
                          n(e.thumbnail_url);
                        }),
                      i
                        .on("playMedia." + z + " click." + z, ".ls-vpcontainer", function () {
                          (ie.media.set.thumbnail(se(this), "hide"),
                            ie.media.functions.checkSlideshowState(i, a),
                            ie.media.functions.removeFromTimeline(i),
                            ie.media.vimeo.play(i, t, a, e));
                        })
                        .on("playBackgroundVideo." + z, function () {
                          (ie.media.vimeo.play(i, t, a, e),
                            ie.layers.set.dataAttribute(i, "active"));
                        })
                        .on("stopBackgroundVideo." + z, function () {
                          (ie.media.vimeo.stop(i, t, a, !0),
                            ie.layers.set.dataAttribute(i, "hidden"));
                        })
                        .on("preloadBackgroundVideo." + z, function () {
                          ie.media.vimeo.createPlayer(i, t, a, e, !0);
                        }));
                  }),
                    ie.functions.setStates(ie.slider, { waitingForVimeo: !1 }));
                };
              }
            },
            createPlayer: function (e, t, i, a, s) {
              i.mediaProperties.playerState = "initializing";
              ("controls" in i.mediaSettings && delete i.mediaSettings.controls,
                "loop" in i.mediaSettings &&
                  (i.mediaProperties.options.loop = i.mediaSettings.loop ? 1 : 0),
                "showinfo" in i.mediaSettings &&
                  (i.mediaSettings.showinfo
                    ? ((i.mediaProperties.options.byline = 1),
                      (i.mediaProperties.options.portrait = 1),
                      (i.mediaProperties.options.title = 1))
                    : ((i.mediaProperties.options.byline = 0),
                      (i.mediaProperties.options.portrait = 0),
                      (i.mediaProperties.options.title = 0)),
                  delete i.mediaProperties.options.showinfo),
                "volume" in i.mediaSettings &&
                  (0 === i.mediaSettings.volume
                    ? ((i.mediaSettings.volume = 100), (i.mediaSettings.muted = 1))
                    : (i.mediaSettings.volume < 0 || 100 < i.mediaSettings.volume) &&
                      (i.mediaSettings.volume = 100)),
                t.attr("src", "https://" + a + "?" + jQuery.param(i.mediaProperties.options)),
                (i.mediaProperties.player = new Vimeo.Player(t[0])),
                i.mediaProperties.player.on("play", function () {
                  (ie.media.set.dataAttribute(t, "playing"), ie.media.events.start(t, e, i));
                }),
                i.mediaProperties.player.on("pause", function () {
                  ie.media.set.dataAttribute(t, "not-playing");
                }),
                i.mediaProperties.player.on("ended", function () {
                  ie.media.functions.mediaEnded(t, e, i);
                }),
                i.mediaProperties.player.ready().then(function () {
                  ((i.mediaProperties.playerState = "ready"),
                    i.mediaSettings.volume &&
                      !i.mediaSettings.muted &&
                      se.isNumeric(i.mediaSettings.volume) &&
                      0 <= i.mediaSettings.volume &&
                      i.mediaSettings.volume <= 100 &&
                      i.mediaProperties.player.setVolume(i.mediaSettings.volume / 100),
                    s || ie.media.vimeo.play(e, t, i, a));
                }));
            },
            play: function (t, i, a, s, e) {
              (void 0 !== i.attr("data-ls-muted-by-browser") &&
                ie.media.unmute.singleMediaElement(i),
                a.mediaProperties.player
                  ? (!a.is.backgroundVideo ||
                      "muted" in a.mediaSettings ||
                      a.mediaProperties.player.setVolume(0),
                    a.mediaSettings.muted &&
                      (ie.o.rememberUnmuteState && ie.media.properties.userDidUnmute
                        ? ie.o.rememberUnmuteState &&
                          ie.media.properties.userDidUnmute &&
                          (a.mediaProperties.player.setVolume(a.mediaSettings.volume / 100 || 1),
                          delete a.mediaSettings.muted)
                        : (a.mediaProperties.player.setVolume(0),
                          "offertounmute" == a.mediaSettings.muted &&
                            ie.media.unmute.set(i, a.mediaProperties.type))),
                    e
                      ? (a.mediaProperties.player.setVolume(0),
                        ie.media.unmute.set(i, a.mediaProperties.type, !0))
                      : a.mediaProperties.player.getVolume().then(function (e) {
                          0 == e &&
                            "offertounmute" == a.mediaSettings.muted &&
                            ie.media.unmute.set(i, a.mediaProperties.type);
                        }),
                    ie.media.functions.allowedToPlay(i, a)
                      ? a.mediaProperties.player
                          .play()
                          .then(function () {})
                          .catch(function (e) {
                            switch (e.name) {
                              case "PasswordError":
                                window.console &&
                                  (console.error(ie.defaults.slider.errorText),
                                  console.error(
                                    "Vimeo video is password protected and may cause playback issues.",
                                  ));
                                break;
                              case "PrivacyError":
                                window.console &&
                                  (console.error(ie.defaults.slider.errorText),
                                  console.error(
                                    "Vimeo video is private and may cause playback issues.",
                                  ));
                                break;
                              default:
                                ie.media.vimeo.play(t, i, a, s, !0);
                            }
                          })
                      : ie.media.vimeo.stop(t, i, a, !0))
                  : this.createPlayer(t, i, a, s));
            },
            stop: function (e, t, i, a) {
              i.mediaProperties.player &&
                (i.mediaProperties.player.pause(),
                a && i.mediaProperties.player.setCurrentTime(0),
                i.is.backgroundVideo || ie.media.set.thumbnail(e.find(".ls-vpcontainer"), "show"),
                ie.media.events.stop(t, e, i));
            },
          },
          html5: {
            singleInit: function (t) {
              var e,
                i,
                a,
                s,
                r = t.closest(".ls-layer"),
                o = r.data(ie.defaults.init.dataKey),
                n = t.find("source"),
                l = ie.media.set.customPoster(r, o);
              ((o.mediaProperties = { type: "html5", $media: t, poster: l || t.attr("poster") }),
                t.removeAttr("poster"),
                0 < n.length
                  ? n.each(function () {
                      ((void 0 !== (e = se(this).attr("type")) && !1 !== e) ||
                        ((i = se(this).attr("src")),
                        (a = i.split(".")),
                        (s = a[a.length - 1].toLowerCase()),
                        se(this).attr(
                          "type",
                          se(this).parent()[0].tagName.toLowerCase() + "/" + s,
                        )),
                        "" !== t[0].canPlayType(se(this).attr("type")) &&
                          (o.mediaProperties.canBePlayed = !0));
                    })
                  : void 0 !== t.attr("src") &&
                    !1 !== t.attr("src") &&
                    ((i = t.attr("src")),
                    (a = i.split(".")),
                    (s = a[a.length - 1].toLowerCase()),
                    "" !== t[0].canPlayType(t[0].tagName.toLowerCase() + "/" + s) &&
                      (o.mediaProperties.canBePlayed = !0)),
                o.mediaProperties.canBePlayed &&
                  (ie.media.set.properties(r, t, o),
                  t
                    .on("ended." + z, function () {
                      ie.media.functions.mediaEnded(t, r, o);
                    })
                    .on("play." + z, function () {})
                    .on("playing." + z, function () {
                      (ie.media.events.start(t, r, o), ie.media.set.dataAttribute(t, "playing"));
                    })
                    .on("pause." + z, function () {
                      ie.media.set.dataAttribute(t, "not-playing");
                    }),
                  r
                    .on("playMedia." + z + " click." + z, ".ls-vpcontainer", function (e) {
                      (ie.media.set.thumbnail(se(this), "hide"),
                        ie.media.functions.checkSlideshowState(r, o),
                        ie.media.functions.removeFromTimeline(r),
                        ie.media.html5.play(r, t, o));
                    })
                    .on("playBackgroundVideo." + z, function () {
                      (ie.media.html5.play(r, t, o), ie.layers.set.dataAttribute(r, "active"));
                    })
                    .on("stopBackgroundVideo." + z, function () {
                      (ie.media.html5.stop(r, t, o, !0), ie.layers.set.dataAttribute(r, "hidden"));
                    })));
            },
            init: function () {
              var e = ie.slider.$hiddenWrapper.find("video, audio");
              if (
                ((ie.media.properties.$allMediaLayers = ie.media.properties.$allMediaLayers.add(
                  e.closest(".ls-layer"),
                )),
                e.length)
              ) {
                var t = 0;
                e.each(function () {
                  ((se(this).closest(".ls-layer").data(ie.defaults.init.dataKey).is.mediaLayer =
                    !0),
                    se(this)
                      .attr("id", "ls-html5-" + ++t)
                      .attr("playsinline", ""),
                    se(this)[0].pause());
                });
              }
            },
            play: function (e, t, i) {
              if (i.mediaProperties.canBePlayed) {
                (void 0 !== t.attr("data-ls-muted-by-browser") &&
                  ie.media.unmute.singleMediaElement(t),
                  i.mediaSettings.muted &&
                    (ie.o.rememberUnmuteState && ie.media.properties.userDidUnmute
                      ? ie.o.rememberUnmuteState &&
                        ie.media.properties.userDidUnmute &&
                        (t[0].muted = !1)
                      : ((t[0].muted = !0),
                        "offertounmute" == i.mediaSettings.muted &&
                          ie.media.unmute.set(t, i.mediaProperties.type))));
                var a = t[0].play();
                void 0 !== a &&
                  a
                    .then(function (e) {})
                    .catch(function (e) {
                      ((t[0].muted = !0),
                        t[0].play(),
                        ie.media.unmute.set(t, i.mediaProperties.type, !0));
                    });
              }
            },
            stop: function (e, t, i, a) {
              i.mediaProperties.canBePlayed &&
                (t[0].pause(),
                a && (t[0].currentTime = 0),
                i.is.backgroundVideo || ie.media.set.thumbnail(se(this), "show"),
                ie.media.events.stop(t, e, i));
            },
          },
        }),
        (ie.yourLogo = {
          init: function () {
            ie.o.yourLogo &&
              (this.$element = se("<img>")
                .addClass("ls-yourlogo")
                .appendTo(_)
                .attr("style", ie.o.yourLogoStyle)
                .css({ visibility: "hidden", display: "bock" })
                .on("load." + z, function () {
                  var e = ie.yourLogo.$element ? 500 : 0;
                  ie.timeouts.yourLogo = setTimeout(function () {
                    (delete ie.timeouts.yourLogo,
                      ie.yourLogo.$element.data("originalWidth", ie.yourLogo.$element.width()),
                      ie.yourLogo.$element.data("originalHeight", ie.yourLogo.$element.height()),
                      "auto" != ie.yourLogo.$element.css("left") &&
                        ie.yourLogo.$element.data(
                          "originalLeft",
                          ie.yourLogo.$element[0].style.left,
                        ),
                      "auto" != ie.yourLogo.$element.css("right") &&
                        ie.yourLogo.$element.data(
                          "originalRight",
                          ie.yourLogo.$element[0].style.right,
                        ),
                      "auto" != ie.yourLogo.$element.css("top") &&
                        ie.yourLogo.$element.data("originalTop", ie.yourLogo.$element[0].style.top),
                      "auto" != ie.yourLogo.$element.css("bottom") &&
                        ie.yourLogo.$element.data(
                          "originalBottom",
                          ie.yourLogo.$element[0].style.bottom,
                        ),
                      !1 !== ie.o.yourLogoLink &&
                        se("<a>")
                          .appendTo(_)
                          .attr("href", ie.o.yourLogoLink)
                          .attr("target", ie.o.yourLogoTarget)
                          .css({ textDecoration: "none", outline: "none" })
                          .append(ie.yourLogo.$element),
                      ie.yourLogo.$element.css({ display: "none", visibility: "visible" }),
                      ie.yourLogo.resize());
                  }, e);
                })
                .attr("src", ie.o.yourLogo));
          },
          resize: function () {
            (this.$element.css({
              width: this.$element.data("originalWidth") * ie.resize.ratio,
              height: this.$element.data("originalHeight") * ie.resize.ratio,
            }),
              this.$element.fadeIn(300));
            var e = "auto",
              t = "auto",
              i = "auto",
              a = "auto";
            ((e =
              this.$element.data("originalLeft") &&
              -1 != this.$element.data("originalLeft").indexOf("%")
                ? (_.width() / 100) * parseFloat(this.$element.data("originalLeft")) -
                  this.$element.width() / 2 +
                  parseInt(_.css("padding-left"))
                : parseInt(this.$element.data("originalLeft")) * ie.resize.ratio),
              (t =
                this.$element.data("originalRight") &&
                -1 != this.$element.data("originalRight").indexOf("%")
                  ? (_.width() / 100) * parseFloat(this.$element.data("originalRight")) -
                    this.$element.width() / 2 +
                    parseInt(_.css("padding-right"))
                  : parseInt(this.$element.data("originalRight")) * ie.resize.ratio),
              (i =
                this.$element.data("originalTop") &&
                -1 != this.$element.data("originalTop").indexOf("%")
                  ? (_.height() / 100) * parseFloat(this.$element.data("originalTop")) -
                    this.$element.height() / 2 +
                    parseInt(_.css("padding-top"))
                  : parseInt(this.$element.data("originalTop")) * ie.resize.ratio),
              (a =
                this.$element.data("originalBottom") &&
                -1 != this.$element.data("originalBottom").indexOf("%")
                  ? (_.height() / 100) * parseFloat(this.$element.data("originalBottom")) -
                    this.$element.height() / 2 +
                    parseInt(_.css("padding-bottom"))
                  : parseInt(this.$element.data("originalBottom")) * ie.resize.ratio),
              this.$element.css({ left: e, right: t, top: i, bottom: a }));
          },
        }),
        (ie.gui = {
          navigation: {
            init: function () {
              (ie.o.navPrevNext && this.prevNext.init(),
                (ie.o.navStartStop || ie.o.navButtons) && this.bottom.init());
            },
            prevNext: {
              init: function () {
                (se(
                  '<a class="ls-gui-element ls-nav-prev" aria-label="jump to the previous slide" href="#" />',
                )
                  .on("click." + z, function (e) {
                    (e.preventDefault(), _.layerSlider("prev"));
                  })
                  .appendTo(_),
                  se(
                    '<a class="ls-gui-element ls-nav-next" aria-label="jump to the next slide" href="#" />',
                  )
                    .on("click." + z, function (e) {
                      (e.preventDefault(), _.layerSlider("next"));
                    })
                    .appendTo(_),
                  ie.o.hoverPrevNext && this.setHover());
              },
              setHover: function () {
                (_.find(".ls-nav-prev, .ls-nav-next").css({ display: "none" }),
                  _.on("mouseenter." + z, function () {
                    ie.gui.navigation.forceHide ||
                      _.find(".ls-nav-prev, .ls-nav-next").stop(!0, !0).fadeIn(300);
                  }).on("mouseleave." + z, function () {
                    _.find(".ls-nav-prev, .ls-nav-next").stop(!0, !0).fadeOut(300);
                  }));
              },
            },
            bottom: {
              init: function () {
                ((this.wrapper = se(
                  '<div class="ls-gui-element ls-bottom-nav-wrapper" />',
                ).appendTo(_)),
                  ie.o.navButtons && "always" != ie.o.thumbnailNavigation && this.bullets.init(),
                  ie.o.navStartStop
                    ? this.createStartStop()
                    : "always" != ie.o.thumbnailNavigation && this.createSides(),
                  ie.o.hoverBottomNav && "always" != ie.o.thumbnailNavigation && this.setHover(),
                  "always" == ie.o.thumbnailNavigation &&
                    (this.wrapper.addClass("ls-above-thumbnails"), this.thumbnails.init()));
              },
              bullets: {
                init: function () {
                  var t = this;
                  se('<span class="ls-bottom-slidebuttons" />').appendTo(
                    _.find(".ls-bottom-nav-wrapper"),
                  );
                  for (var e = 0; e < ie.slides.count; e++) {
                    var i = se('<a href="#" aria-label="jump to slide ' + (e + 1) + '" />')
                      .appendTo(_.find(".ls-bottom-slidebuttons"))
                      .data("index", e + 1)
                      .on("click." + z, function (e) {
                        (e.preventDefault(), _.layerSlider(se(this).data("index")));
                      });
                    "hover" == ie.o.thumbnailNavigation &&
                      i
                        .on("mouseenter." + z, function () {
                          var e = se(this);
                          (_.find(".ls-thumbnail-hover-img").css({
                            left: parseInt(t.hoverWrapper.css("padding-left")),
                            top: parseInt(t.hoverWrapper.css("padding-top")),
                          }),
                            t.hoverImage
                              .on("load." + z, function () {
                                (0 === se(this).width()
                                  ? t.hoverImage.css({
                                      position: "relative",
                                      margin: "0 auto",
                                      left: "auto",
                                    })
                                  : t.hoverImage.css({
                                      position: "absolute",
                                      marginLeft: -se(this).width() / 2,
                                      left: "50%",
                                    }),
                                  t.hoverImage.css("display", "none").stop(!0, !0).fadeIn(250));
                              })
                              .attr("src", ie.slides[e.data("index")].data.thumbnail),
                            t.hoverWrapper
                              .css({ display: "block" })
                              .stop()
                              .animate(
                                {
                                  left:
                                    se(this).position().left +
                                    (se(this).width() - t.hoverWrapper.outerWidth()) / 2,
                                },
                                250,
                              ),
                            t.hoverWrapperInner
                              .css({ display: "none", visibility: "visible" })
                              .stop()
                              .fadeIn(250));
                        })
                        .on("mouseleave." + z, function () {
                          t.hoverWrapperInner.stop().fadeOut(250, function () {
                            t.hoverWrapper.css({ visibility: "hidden", display: "block" });
                          });
                        });
                  }
                  (t.set.active(ie.slides.first.index),
                    "hover" == ie.o.thumbnailNavigation && t.set.hover());
                },
                set: {
                  active: function (e) {
                    (void 0 === e && (e = ie.slides.current.index),
                      e--,
                      _.find(".ls-bottom-slidebuttons a").removeClass("ls-nav-active"),
                      _.find(".ls-bottom-slidebuttons a:eq( " + e + " )").addClass(
                        "ls-nav-active",
                      ));
                  },
                  hover: function () {
                    var e = ie.gui.navigation.bottom.bullets,
                      t = se(
                        '<div class="ls-thumbnail-hover"><div class="ls-thumbnail-hover-inner"><div class="ls-thumbnail-hover-bg"></div><div class="ls-thumbnail-hover-img"><img></div><span></span></div></div>',
                      ).appendTo(_.find(".ls-bottom-slidebuttons"));
                    (_.find(".ls-thumbnail-hover, .ls-thumbnail-hover-img").css({
                      width: ie.o.tnWidth,
                      height: ie.o.tnHeight,
                    }),
                      (e.hoverWrapper = _.find(".ls-thumbnail-hover")),
                      (e.hoverImage = e.hoverWrapper.find("img").css({ height: ie.o.tnHeight })),
                      (e.hoverWrapperInner = _.find(".ls-thumbnail-hover-inner").css({
                        visibility: "hidden",
                        display: "block",
                      })),
                      t.appendTo(_.find(".ls-bottom-slidebuttons")));
                  },
                },
              },
              createStartStop: function () {
                ((this.buttonStart = se(
                  '<a class="ls-nav-start" aria-label="start slideshow" href="#" />',
                )
                  .on("click." + z, function (e) {
                    (e.preventDefault(), _.layerSlider("start"));
                  })
                  .prependTo(_.find(".ls-bottom-nav-wrapper"))),
                  (this.buttonStop = se(
                    '<a class="ls-nav-stop" aria-label="stop slideshow" href="#" />',
                  )
                    .on("click." + z, function (e) {
                      (e.preventDefault(), _.layerSlider("stop"));
                    })
                    .appendTo(_.find(".ls-bottom-nav-wrapper"))),
                  ie.o.autoStart ? this.setStartStop("start") : this.setStartStop("stop"));
              },
              setStartStop: function (e) {
                if (ie.o.navStartStop)
                  switch (e) {
                    case "start":
                      (this.buttonStart.addClass("ls-nav-start-active"),
                        this.buttonStop.removeClass("ls-nav-stop-active"));
                      break;
                    case "stop":
                      (this.buttonStart.removeClass("ls-nav-start-active"),
                        this.buttonStop.addClass("ls-nav-stop-active"));
                  }
              },
              createSides: function () {
                (se('<span class="ls-nav-sides ls-nav-sideleft" />').prependTo(
                  _.find(".ls-bottom-nav-wrapper"),
                ),
                  se('<span class="ls-nav-sides ls-nav-sideright" />').appendTo(
                    _.find(".ls-bottom-nav-wrapper"),
                  ));
              },
              setHover: function () {
                var e = this;
                (e.wrapper.css({ display: "none" }),
                  _.on("mouseenter." + z, function () {
                    ie.gui.navigation.forceHide || e.wrapper.stop(!0, !0).fadeIn(300);
                  }).on("mouseleave." + z, function () {
                    e.wrapper.stop(!0, !0).fadeOut(300);
                  }));
              },
              switchHelper: function (e) {
                if (ie.o.hoverBottomNav && !_.hasClass("ls-hover"))
                  switch (e) {
                    case "on":
                      ie.gui.navigation.bottom.thumbnails.wrapper.css({
                        visibility: "hidden",
                        display: "block",
                      });
                      break;
                    case "off":
                      ie.gui.navigation.bottom.thumbnails.wrapper.css({
                        visibility: "visible",
                        display: "none",
                      });
                  }
              },
              thumbnails: {
                init: function () {
                  ((this.wrapper = se(
                    '<div class="ls-gui-element ls-thumbnail-wrapper"></div>',
                  ).appendTo(_)),
                    se(
                      '<div class="ls-thumbnail"><div class="ls-thumbnail-inner"><div class="ls-thumbnail-slide-container"><div class="ls-thumbnail-slide"></div></div></div></div>',
                    ).appendTo(this.wrapper),
                    (this.$element = _.find(".ls-thumbnail-slide-container")),
                    "ontouchstart" in window
                      ? this.$element.addClass("ls-touchscroll")
                      : this.$element
                          .on("mouseenter." + z, function () {
                            se(this).addClass("ls-thumbnail-slide-hover");
                          })
                          .on("mouseleave." + z, function () {
                            (se(this).removeClass("ls-thumbnail-slide-hover"),
                              ie.gui.navigation.bottom.thumbnails.scroll());
                          })
                          .on("mousemove." + z, function (e) {
                            var t =
                              (parseInt(e.pageX - se(this).offset().left) / se(this).width()) *
                              (se(this).width() - se(this).find(".ls-thumbnail-slide").width());
                            se(this).find(".ls-thumbnail-slide").stop().css({ marginLeft: t });
                          }));
                  for (var e = 0; e < ie.slides.count; e++) {
                    var t = e + 1,
                      i = se(
                        '<a href="#" class="ls-thumb-' +
                          (e + 1) +
                          '"  aria-label="jump to slide ' +
                          (e + 1) +
                          '"><img src="' +
                          ie.slides[t].data.thumbnail +
                          '"></a>',
                      );
                    (ie.slides[t].data.tnAlt && i.find("img").attr("alt", ie.slides[t].data.tnAlt),
                      i
                        .data("index", t)
                        .on("click." + z, function (e) {
                          (e.preventDefault(), _.layerSlider(se(this).data("index")));
                        })
                        .appendTo(_.find(".ls-thumbnail-slide")),
                      "ontouchstart" in window ||
                        i
                          .on("mouseenter." + z, function () {
                            se(this)
                              .children()
                              .stop()
                              .fadeTo(300, ie.o.tnActiveOpacity / 100);
                          })
                          .on("mouseleave." + z, function () {
                            se(this).children().hasClass("ls-thumb-active") ||
                              se(this)
                                .children()
                                .stop()
                                .fadeTo(300, ie.o.tnInactiveOpacity / 100);
                          }));
                  }
                  (ie.gui.navigation.bottom.buttonStart &&
                    ie.gui.navigation.bottom.buttonStop &&
                    ((ie.gui.navigation.bottom.wrapper = se(
                      '<div class="ls-bottom-nav-wrapper ls-below-thumbnails"></div>',
                    ).appendTo(_)),
                    ie.gui.navigation.bottom.buttonStart
                      .clone()
                      .on("click." + z, function (e) {
                        (e.preventDefault(), _.layerSlider("start"));
                      })
                      .appendTo(ie.gui.navigation.bottom.wrapper),
                    ie.gui.navigation.bottom.buttonStop
                      .clone()
                      .on("click." + z, function (e) {
                        (e.preventDefault(), _.layerSlider("stop"));
                      })
                      .appendTo(ie.gui.navigation.bottom.wrapper)),
                    ie.o.hoverBottomNav && this.setHover());
                },
                setHover: function () {
                  var e = this;
                  (e.wrapper.css("display", "none"),
                    ie.gui.navigation.bottom.wrapper &&
                      ((ie.gui.navigation.bottom.wrapper =
                        "block" == ie.gui.navigation.bottom.wrapper.css("display")
                          ? ie.gui.navigation.bottom.wrapper
                          : _.find(".ls-above-thumbnails")),
                      ie.gui.navigation.bottom.wrapper.css("display", "none")),
                    _.on("mouseenter." + z, function () {
                      (_.addClass("ls-hover"),
                        ie.gui.navigation.forceHide ||
                          (e.wrapper.stop(!0, !0).fadeIn(300),
                          ie.gui.navigation.bottom.wrapper &&
                            ie.gui.navigation.bottom.wrapper.stop(!0, !0).fadeIn(300)));
                    }).on("mouseleave." + z, function () {
                      (_.removeClass("ls-hover"),
                        e.wrapper.stop(!0, !0).fadeOut(300),
                        ie.gui.navigation.bottom.wrapper &&
                          ie.gui.navigation.bottom.wrapper.stop(!0, !0).fadeOut(300));
                    }));
                },
                change: function (e) {
                  var t = e || ie.slides.next.index;
                  (_.find(".ls-thumbnail-slide a:not(.ls-thumb-" + t + " )")
                    .children()
                    .each(function () {
                      se(this)
                        .removeClass("ls-thumb-active")
                        .stop()
                        .fadeTo(750, ie.o.tnInactiveOpacity / 100);
                    }),
                    _.find(".ls-thumbnail-slide a.ls-thumb-" + t)
                      .children()
                      .addClass("ls-thumb-active")
                      .stop()
                      .fadeTo(750, ie.o.tnActiveOpacity / 100));
                },
                scroll: function () {
                  if (
                    !_.find(".ls-thumbnail-slide-container").hasClass("ls-thumbnail-slide-hover")
                  ) {
                    var e =
                      !!_.find(".ls-thumb-active").length && _.find(".ls-thumb-active").parent();
                    if (e) {
                      var t = e.position().left + e.width() / 2,
                        i = _.find(".ls-thumbnail-slide-container").width() / 2 - t;
                      ((i =
                        0 <
                        (i =
                          i <
                          _.find(".ls-thumbnail-slide-container").width() -
                            _.find(".ls-thumbnail-slide").width()
                            ? _.find(".ls-thumbnail-slide-container").width() -
                              _.find(".ls-thumbnail-slide").width()
                            : i)
                          ? 0
                          : i),
                        _.find(".ls-thumbnail-slide").animate({ marginLeft: i }, 600));
                    }
                  }
                },
                resize: function () {
                  ie.gui.navigation.bottom.switchHelper("on");
                  var e =
                      -1 == ie.slider.initial.width.indexOf("%")
                        ? parseInt(ie.slider.initial.originalWidth)
                        : _.width(),
                    t = _.find(".ls-thumbnail"),
                    i =
                      -1 == ie.o.tnContainerWidth.indexOf("%")
                        ? parseInt(ie.o.tnContainerWidth)
                        : parseInt((e / 100) * parseInt(ie.o.tnContainerWidth));
                  (_.find(".ls-thumbnail-slide a").css({
                    width: parseInt(ie.o.tnWidth * ie.resize.ratio),
                    height: parseInt(ie.o.tnHeight * ie.resize.ratio),
                  }),
                    _.find(".ls-thumbnail-slide a:last").css({ margin: 0 }),
                    _.find(".ls-thumbnail-slide").css({
                      height: parseInt(ie.o.tnHeight * ie.resize.ratio),
                    }),
                    t.css({ width: (i * Math.floor(100 * ie.resize.ratio)) / 100 }),
                    t.width() > _.find(".ls-thumbnail-slide").width() &&
                      t.css({ width: _.find(".ls-thumbnail-slide").width() }),
                    ie.gui.navigation.bottom.switchHelper("off"));
                },
              },
            },
          },
          media: {
            init: function () {
              se(
                '<div class="ls-gui-element ls-media-unmute" aria-label="Unmute"><div class="ls-media-unmute-bg"></div><div class="ls-icon-muted"></div><div class="ls-icon-unmuted"></div></div>',
              )
                .on("click." + z, function (e) {
                  (e.preventDefault(), _.layerSlider("unmute"));
                })
                .appendTo(_);
            },
            showUnmute: function () {
              _.find(".ls-media-unmute").addClass("ls-media-unmute-active");
            },
            hideUnmute: function () {
              _.find(".ls-media-unmute").removeClass("ls-media-unmute-active");
            },
          },
          skin: {
            load: function () {
              _.addClass("ls-" + ie.o.skin);
              var e,
                t = ie.o.skinsPath + ie.o.skin + "/skin.css",
                i = se("head").length ? se("head") : se("body");
              (se('link[href="' + t + '"]').length
                ? ((e = se('link[href="' + t + '"]')),
                  ie.gui.skin.isLoaded ||
                    ((ie.gui.skin.isLoaded = !0),
                    (ie.timeouts.skinLoad1 = setTimeout(function () {
                      (delete ie.timeouts.skinLoad1, ie.slider.init());
                    }, 150))))
                : (e = document.createStyleSheet
                    ? (document.createStyleSheet(t), se('link[href="' + t + '"]'))
                    : se('<link rel="stylesheet" href="' + t + '" type="text/css" />').appendTo(i)),
                e.on("load." + z, function () {
                  ie.gui.skin.isLoaded ||
                    ((ie.gui.skin.isLoaded = !0),
                    (ie.timeouts.skinLoad2 = setTimeout(function () {
                      (delete ie.timeouts.skinLoad2, ie.slider.init());
                    }, 150)));
                }),
                se(window).on("load." + z, function () {
                  ie.gui.skin.isLoaded ||
                    ((ie.gui.skin.isLoaded = !0),
                    (ie.timeouts.skinLoad3 = setTimeout(function () {
                      (delete ie.timeouts.skinLoad3, ie.slider.init());
                    }, 150)));
                }),
                (ie.timeouts.skinLoad4 = setTimeout(function () {
                  ie.gui.skin.isLoaded ||
                    ((ie.gui.skin.isLoaded = !0), delete ie.timeouts.skinLoad4, ie.slider.init());
                }, 1e3)));
            },
          },
          shadow: {
            init: function () {
              (this.set(), this.resize());
            },
            set: function () {
              ((this.$element = se('<div class="ls-gui-element ls-shadow"></div>').appendTo(_)),
                "block" != this.$element.css("display") ||
                  this.$element.find("img").length ||
                  ((this.show = function () {
                    ie.gui.shadow.$element
                      .css({ display: "none", visibility: "visible" })
                      .fadeIn(500, function () {
                        ie.gui.shadow.show = !1;
                      });
                  }),
                  (this.image = se("<img>")
                    .attr("src", ie.o.skinsPath + ie.o.skin + "/shadow.png")
                    .appendTo(this.$element)),
                  (this.btmMod =
                    "number" == typeof parseInt(_.css("padding-bottom"))
                      ? parseInt(_.css("padding-bottom"))
                      : 0)));
            },
            resize: function () {
              this.image &&
                (0 < this.image.height()
                  ? 0 < this.btmMod
                    ? this.$element.css({ height: this.image.height() / 2 })
                    : this.$element.css({
                        height: this.image.height(),
                        marginTop: -this.image.height() / 2,
                      })
                  : (ie.timeouts.resizeShadow = setTimeout(function () {
                      (delete ie.timeouts.resizeShadow, ie.gui.shadow.resize());
                    }, 50)));
            },
          },
          timers: {
            init: function () {
              (ie.o.showBarTimer && this.bar.create(),
                ie.o.showCircleTimer && this.circle.create());
              var e = !1;
              (e = ie.o.showSlideBarTimer
                ? se("<div>").insertAfter(_)
                : se('[data-slidebar-for="' + _.attr("id") + '"], [data-slidebar-for="' + z + '"]'))
                .length && (e.addClass("ls-gui-element"), this.slidebar.create(e));
            },
            bar: {
              create: function () {
                this.$element = se("<div>").addClass("ls-gui-element ls-bar-timer").appendTo(_);
              },
            },
            circle: {
              create: function () {
                ((this.$element = se("<div>")
                  .addClass("ls-gui-element ls-circle-timer")
                  .appendTo(_)),
                  this.$element.append(
                    se(
                      '<div class="ls-ct-center"></div><div class="ls-ct-left"><div class="ls-ct-rotate"><div class="ls-ct-hider"><div class="ls-ct-half"></div></div></div></div><div class="ls-ct-right"><div class="ls-ct-rotate"><div class="ls-ct-hider"><div class="ls-ct-half"></div></div></div></div>',
                    ),
                  ),
                  this.$element.data("original", { opacity: this.$element.css("opacity") }));
              },
            },
            slidebar: {
              $containerElement: [],
              $element: [],
              $progressBarElement: [],
              $sliderContainerElement: [],
              $sliderElement: [],
              elementWidth: [],
              containerElementWidth: [],
              sliderContainerElementWidth: [],
              create: function (e) {
                function i(e, t) {
                  ((a =
                    (e.pageX ? e.pageX : ie.device.touchX) -
                    r.$element[t].offset().left -
                    r.sliderContainerElementWidth[t] / 2) < 0 && (a = 0),
                    a > r.containerElementWidth[t] - r.sliderContainerElementWidth[t] &&
                      (a =
                        "calc( 100% - " +
                        ie.gui.timers.slidebar.sliderContainerElementWidth[t] +
                        "px )"),
                    r.$sliderContainerElement[t].css({ left: a }),
                    ie.transitions._slideTimeline &&
                      ie.transitions._slideTimeline.progress(
                        "string" == typeof a
                          ? ie.transitions.layers.timeline.progress
                          : (a / (r.containerElementWidth[t] - r.sliderContainerElementWidth[t])) *
                              ie.transitions.layers.timeline.progress,
                      ));
                }
                var a,
                  s = se(document),
                  r = this;
                (se.each(e, function (t, e) {
                  ((r.$containerElement[t] = se(e).addClass("ls-slidebar-container " + z)),
                    (r.$element[t] = se("<div>")
                      .addClass("ls-slidebar")
                      .appendTo(r.$containerElement[t])),
                    (r.$progressBarElement[t] = se("<div>")
                      .addClass("ls-progressbar")
                      .appendTo(r.$element[t])),
                    (r.$sliderContainerElement[t] = se("<div>")
                      .addClass("ls-slidebar-slider-container")
                      .appendTo(r.$containerElement[t])),
                    (r.$sliderElement[t] = se("<div>")
                      .addClass("ls-slidebar-slider")
                      .appendTo(r.$sliderContainerElement[t])),
                    (r.sliderContainerElementWidth[t] = r.$sliderContainerElement[t].width()),
                    r.$sliderContainerElement[t].css({
                      marginTop: -r.$sliderElement[t].outerHeight() / 2,
                    }),
                    r.$containerElement[t].on("touchmove." + z, function (e) {
                      i(e, t);
                    }),
                    r.$containerElement[t].on("mousedown." + z + " touchstart." + z, function (e) {
                      (ie.transitions.layers.timeline.pause(0),
                        se("body").prop("unselectable", !0).addClass("ls-unselectable"),
                        se(document).on("mousemove." + z, function (e) {
                          i(e, t);
                        }),
                        i(e, t));
                    }),
                    (s = s.add(r.$sliderElement[t])));
                }),
                  s.on("mouseup." + z + "touchend." + z, function (e) {
                    se(e.target).closest(_).length ||
                      (ie.transitions._slideTimeline &&
                        ie.transitions.layers.timeline.state.finished &&
                        ie.transitions._slideTimeline.progress() !==
                          ie.transitions.layers.timeline.progress &&
                        ie.functions.setStates(ie.transitions.layers.timeline, { finished: !1 }),
                      se(document).off("mousemove." + z),
                      se("body").prop("unselectable", !1).removeClass("ls-unselectable"),
                      (ie.o.pauseLayers && !ie.slideshow.state.running) ||
                        ie.slider.isPaused ||
                        !ie.transitions._slideTimeline ||
                        ie.o.playByScroll ||
                        (!0 === ie.transitions.layers.timeline.state.started
                          ? ie.transitions.layers.timeline.resume()
                          : ie.transitions.layers.timeline.play()));
                  }));
              },
            },
          },
          loadingIndicator: {
            init: function () {
              ((this.$element = se("<div>")
                .css({ display: "none" })
                .addClass("ls-gui-element ls-loading-container")
                .appendTo(_)),
                se("<div>").addClass("ls-loading-indicator").appendTo(this.$element));
            },
            show: function () {
              this.$element.delay(400).fadeIn(300);
            },
            hide: function () {
              this.$element.stop(!0, !0).fadeOut(300);
            },
          },
        }),
        (ie.navigation = {
          direction: "next",
          init: function () {
            1 < ie.slides.count && (this.set.keyboard(), this.set.touch());
          },
          set: {
            keyboard: function () {
              ie.o.keybNav &&
                se("body").on("keydown." + z, function (e) {
                  ie.slider.isAnimating ||
                    ie.slider.isPreloading ||
                    (37 == e.which ? ie.navigation.prev() : 39 == e.which && ie.navigation.next());
                });
            },
            touch: function () {
              "ontouchstart" in window &&
                ie.o.touchNav &&
                (ie.slider.$innerWrapper.on("touchstart." + z, function (e) {
                  var t = e.touches ? e.touches : e.originalEvent.touches;
                  1 == t.length && (ie.device.touchStartX = ie.device.touchEndX = t[0].clientX);
                }),
                ie.slider.$innerWrapper.on("touchmove." + z, function (e) {
                  var t = e.touches ? e.touches : e.originalEvent.touches;
                  (1 == t.length && (ie.device.touchEndX = t[0].clientX),
                    45 < Math.abs(ie.device.touchStartX - ie.device.touchEndX) &&
                      e.preventDefault());
                }),
                ie.slider.$innerWrapper.on("touchend." + z, function (e) {
                  45 < Math.abs(ie.device.touchStartX - ie.device.touchEndX) &&
                    (0 < ie.device.touchStartX - ie.device.touchEndX
                      ? _.layerSlider("touchNext")
                      : _.layerSlider("touchPrev"));
                }));
            },
          },
          prev: function () {
            (!ie.slider.isPopup || (ie.slider.isPopup && ie.slider.state.popupIsVisible)) &&
              ((this.direction = "prev"),
              (this.forceDirection = "prev"),
              ie.slideshow.set.prevNext("prev"));
          },
          next: function () {
            (!ie.slider.isPopup || (ie.slider.isPopup && ie.slider.state.popupIsVisible)) &&
              ((this.direction = "next"),
              (this.forceDirection = "next"),
              ie.slideshow.set.prevNext("next"));
          },
          start: function () {
            (ie.functions.setStates(ie.slideshow, { running: !0, paused: !1 }),
              !0 === ie.slideshow.state.pausedByLastCycle &&
                ie.functions.setStates(ie.slideshow, { pausedByLastCycle: !1 }),
              ie.gui.navigation.bottom.setStartStop("start"),
              ie.slideshow.state.pausedByHover ||
                (1 !== ie.transitions._slideTimeline.timeScale() &&
                  ie.transitions.layers.timeline.resume()),
              ie.slideshow.start());
          },
          stop: function () {
            (ie.gui.navigation.bottom.setStartStop("stop"),
              ie.o.pauseLayers && ie.transitions.layers.timeline.pause(),
              ie.slideshow.stop());
          },
        }),
        (ie.preload = {
          init: function () {
            ie.slider.$hiddenWrapper.find(".ls-slide img").each(function () {
              var e = se(this),
                t = e[0],
                i = {};
              if (e.is(".ls-layer, .ls-bg")) {
                if (
                  (t.getAttribute("width") && (i.width = t.getAttribute("width")),
                  t.getAttribute("height") && (i.height = t.getAttribute("height")),
                  t.sizes && (i.sizes = t.sizes),
                  ie.o.useSrcset && (e.data("srcset") || t.srcset))
                ) {
                  ((i.srcSet = e.data("srcset") || t.srcset), (i.curSrc = t.currentSrc));
                  var a = i.srcSet.split(",").map(function (e) {
                    return parseInt(se.trim(e).split(" ")[1]);
                  });
                  i.maxWidth = Math.max.apply(null, a);
                }
                (e.removeAttr("width height sizes srcset"),
                  se.isEmptyObject(i) || (e.data(ie.defaults.init.dataKey).attributes = i));
              }
              (e.data("lazy-src") && e.data("src", e.data("lazy-src")),
                e.data("src")
                  ? i.curSrc && e.data("src", i.curSrc)
                  : e.data("src", i.curSrc ? i.curSrc : t.src),
                e.attr(
                  "src",
                  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                ));
            });
          },
          imagesOfSlide: function (e, t) {
            if (!0 !== ie.slides[e].wrapped) {
              ((this.slideIndex = e),
                t
                  ? ((this.onCompleteCallback = t),
                    ie.functions.setStates(ie.slider, { preloadingImages: !0 }),
                    ie.gui.loadingIndicator.show())
                  : (this.onCompleteCallback = !1),
                ie.slider.canShow && _.css({ visibility: "visible" }),
                (this.preImages = []));
              var a,
                s,
                r = this;
              (ie.slider.$hiddenWrapper
                .find(".ls-slide:eq(" + (r.slideIndex - 1) + ") *")
                .each(function () {
                  ((a = se(this)), (s = this));
                  var e = a.data(ie.defaults.init.dataKey);
                  if (a.is("img")) {
                    (a.data("src") && a.attr("src", a.data("src")),
                      e &&
                        e.attributes &&
                        e.attributes.srcSet &&
                        ie.o.useSrcset &&
                        (s.srcset = e.attributes.srcSet));
                    var t = s.src,
                      i = !!(e && e.attributes && e.attributes.curSrc) && e.attributes.curSrc;
                    (i &&
                      t !== i &&
                      a.is(".ls-bg") &&
                      ((t = i), ie.slides[r.slideIndex].data.$background.attr("src", t)),
                      ie.preload.preImages.push([t, a]));
                  } else
                    "none" !== a.css("background-image") &&
                      -1 !== a.css("background-image").indexOf("url") &&
                      ie.preload.preImages.push([
                        a
                          .css("background-image")
                          .match(/url\((.*)\)/)[1]
                          .replace(/"/gi, ""),
                        a,
                      ]);
                }),
                ie.transitions.firstSlide &&
                  ie.o.globalBGImage &&
                  ie.preload.preImages.push([ie.o.globalBGImage, se()]),
                this.thumbnailsAreLoaded || this.thumbnails(),
                0 === this.preImages.length ? this.onComplete() : this.start());
            } else
              ie.slider.shouldResize &&
                t &&
                (ie.resize.setLayers(ie.layers.get("next, bg")), ie.resize.layers(t));
          },
          thumbnails: function () {
            for (
              var e = ie.slider.thumbnails.filter(function (e, t, i) {
                  return i.indexOf(e) == t;
                }),
                t = e.length,
                i = 0;
              i < t;
              i++
            ) {
              new Image().src = e[i];
            }
            this.thumbnailsAreLoaded = !0;
          },
          start: function () {
            (ie.debugMode &&
              (ie.debug.add("group", "preload"),
              ie.debug.add("log", "preload.info", this.slideIndex)),
              (this.preloadedImagesCount = 0));
            for (
              var e,
                t = this,
                i = function () {
                  ++t.preloadedImagesCount == t.preImages.length &&
                    (ie.debugMode && ie.debug.groupEnd(), t.onComplete());
                },
                a = function () {
                  (ie.debugMode &&
                    ((e = this.src.substring(this.src.lastIndexOf("/") + 1, this.src.length)),
                    ie.debug.add("log", "preload.success", e)),
                    this.originalLayer.data("preloadedWidth", this.width),
                    this.originalLayer.data("preloadedHeight", this.height),
                    i());
                },
                s = function () {
                  (ie.debugMode &&
                    ((e = this.src.substring(this.src.lastIndexOf("/") + 1, this.src.length)),
                    ie.debug.add("warn", "preload.fail", e)),
                    i());
                },
                r = 0;
              r < this.preImages.length;
              r++
            ) {
              var o = new Image();
              (o.addEventListener("error", s, !1),
                o.addEventListener("load", a, !1),
                (o.src = this.preImages[r][0]),
                (o.originalLayer = this.preImages[r][1]));
            }
          },
          onComplete: function () {
            var s = this;
            (this.onCompleteCallback
              ? (ie.layers.wrap(this.slideIndex),
                (function e() {
                  if (0 !== ie.slides[s.slideIndex].$layers.length)
                    ie.timeouts.waitForWrap = setTimeout(e, 100);
                  else {
                    (delete ie.timeouts.waitForWrap,
                      ie.functions.setStates(ie.transitions.layers.parallax, { ready: !0 }),
                      se(
                        ".ls-thumbnail-wrapper, .ls-nav-next, .ls-nav-prev, .ls-bottom-nav-wrapper",
                      ).css({ visibility: "visible" }),
                      (ie.slides[s.slideIndex].wrapped = !0));
                    var t = !(
                        !window._layerSlider.globals.youTubeIsReady &&
                        ie.layers.get("next,in,youtube,bgvideo").length
                      ),
                      i = !(
                        !window._layerSlider.globals.vimeoIsReady &&
                        ie.layers.get("next,in,vimeo,bgvideo").length
                      ),
                      a = function () {
                        (ie.gui.loadingIndicator.hide(),
                          ie.slider.shouldResize
                            ? (ie.resize.setLayers(ie.layers.get("next, bg")),
                              ie.resize.layers(s.onCompleteCallback))
                            : s.onCompleteCallback());
                      };
                    t && i
                      ? a()
                      : (ie.intervals.waitForJSApisLoaded = setInterval(function () {
                          (t || window._layerSlider.globals.youTubeIsReady) &&
                            (i || window._layerSlider.globals.vimeoIsReady) &&
                            (clearInterval(ie.intervals.waitForJSApisLoaded),
                            delete ie.intervals.waitForJSApisLoaded,
                            a());
                        }, 50));
                  }
                })())
              : ie.layers.wrap(this.slideIndex, !0),
              ie.functions.setStates(ie.slider, { preloadingImages: !1 }));
          },
        }),
        (ie.resize = {
          setLayers: function (e) {
            ((this.$responsiveLayers = e.add(ie.layers.get("active"))),
              ie.slides.next.data.$backgroundVideo.length &&
                (this.$responsiveLayers = this.$responsiveLayers.add(
                  ie.slides.next.data.$backgroundVideo,
                )));
          },
          all: function () {
            if (!document.body.contains(M)) return !1;
            (ie.api.hasEvent("sliderWillResize") &&
              _.triggerHandler("sliderWillResize", ie.api.eventData()),
              this.slider(),
              this.navigation(),
              this.layers(),
              this.yourLogo(),
              this.shadow(),
              this.timers(),
              ie.transitions.layers.timeline.shouldRestart &&
                ie.o.allowRestartOnResize &&
                (ie.functions.resetSlideTimelines(), ie.transitions.layers.timeline.create(!0)),
              ie.api.hasEvent("sliderDidResize") &&
                _.triggerHandler("sliderDidResize", ie.api.eventData()));
          },
          viewport: function () {
            se(window).scrollTop(
              Math.round(ie.slider.offsetTop) - (ie.device.viewportHeight - ie.slider.height) / 2,
            );
          },
          slider: function () {
            if (!document.body.contains(M)) return !1;
            var e,
              t =
                ie.slider.$parentWithNumericWidthValue &&
                0 < ie.slider.$parentWithNumericWidthValue.width()
                  ? ie.slider.$parentWithNumericWidthValue
                  : ie.functions.getSliderClosestParentElementWidthNumericValueOfProperty("width"),
              i = ie.slider.initial,
              a = ie.slider.$parentWithNumericWidthValuePercent
                ? (t.width() / 100) * ie.slider.$parentWithNumericWidthValuePercent
                : t.width(),
              s = i.type,
              r = 0 !== i.maxWidth ? i.maxWidth : a,
              o = "auto" === i.marginLeft ? 0 : i.marginLeft,
              n = "auto" === i.marginRight ? 0 : i.marginRight;
            if (
              (ie.slider.state.inFullscreen
                ? (_[0].style.maxWidth = "")
                : 0 !== i.maxWidth && (_[0].style.maxWidth = i.maxWidth + "px"),
              -1 !== r.indexOf("%") && (r = (a / 100) * parseInt(r)),
              r < (a -= o + n) && 0 <= r && (a = r),
              ie.o.fitScreenWidth &&
                ("fullwidth" === s ||
                  ("fullsize" === s &&
                    "fitheight" !== ie.o.fullSizeMode &&
                    "fitwidth" !== ie.o.fullSizeMode)))
            ) {
              _.parent();
              var l = t.offset().left,
                d = parseInt(t.css("padding-left")) || 0,
                u = parseInt(t.css("border-left-width")) || 0;
              ((_[0].style.maxWidth = "none"),
                (_[0].style.marginLeft = -(l + d + u) + "px"),
                (a = ie.device.viewportWidth || se(window).width()));
            }
            switch (
              ((a -= i.skinWidth), ie.slider.state.inFullscreen && (a = ie.device.width), s)
            ) {
              case "responsive":
                e =
                  (ie.slider.state.inFullscreen
                    ? (ie.device.ratio > i.ratio
                        ? (this.ratio = ie.device.height / i.height)
                        : (this.ratio = ie.device.width / i.width),
                      (a = Math.round(i.width * this.ratio)))
                    : (this.ratio = a / i.width),
                  Math.round(i.height * this.ratio));
                break;
              case "fullwidth":
                e =
                  a < ie.o.responsiveUnder
                    ? ((this.ratio = a / ie.o.responsiveUnder), Math.round(i.height * this.ratio))
                    : ie.slider.state.inFullscreen
                      ? ie.device.ratio > i.layersWidth / i.height
                        ? ((this.ratio = ie.device.height / i.height), ie.device.height)
                        : ((this.ratio = ie.device.width / i.layersWidth), i.height * this.ratio)
                      : ((this.ratio = 1), i.height);
                break;
              case "fullsize":
                switch (ie.o.fullSizeMode.toLowerCase()) {
                  case "normal":
                    e = ie.device.viewportHeight - i.skinHeight;
                    break;
                  case "hero":
                    ((e = ie.device.viewportHeight - i.skinHeight),
                      ie.slider.state.inFullscreen ||
                        (e -= ie.slider.heroTop ? ie.slider.heroTop : ie.slider.offsetTop));
                    break;
                  case "fitheight":
                    ((a = _.parent().width() - i.skinWidth),
                      (e = _.parent().height() - i.skinHeight));
                    break;
                  case "fitwidth":
                    ((a = _.parent().width() - i.skinWidth),
                      (e = ie.device.viewportHeight - i.skinHeight));
                }
                a / e < i.ratio
                  ? (this.ratio = a / i.layersWidth)
                  : (this.ratio = e / i.layersHeight);
                break;
              case "fixed":
              case "fixedsize":
                ((this.ratio = 1),
                  (a = i.width),
                  (e = i.height),
                  (ie.o.maxRatio = 1),
                  (M.style.maxWidth = "none"));
            }
            ((this.ratio =
              ie.o.maxRatio && 0 < ie.o.maxRatio && this.ratio > ie.o.maxRatio
                ? ie.o.maxRatio
                : this.ratio),
              (M.style.width = a + "px"),
              (M.style.height = e + "px"),
              (ie.slider.width = a),
              (ie.slider.height = e));
            var p = _.offset();
            ((ie.slider.offsetX = p.left),
              (ie.slider.offsetY = p.top),
              ie.device.isMobile
                ? ie.device.viewportWidth < 1025 && 767 < ie.device.viewportWidth
                  ? _.removeClass("ls-device-is-phone").addClass("ls-device-is-tablet")
                  : ie.device.viewportWidth < 768 &&
                    _.removeClass("ls-device-is-tablet").addClass("ls-device-is-phone")
                : _.removeClass("ls-device-is-phone ls-device-is-tablet").addClass(
                    "ls-device-is-desktop",
                  ));
          },
          borderRadius: function (e) {
            for (
              var t = ("" + e).split(" "),
                i = "",
                a =
                  ie.o.maxRatio && 0 < ie.o.maxRatio && this.ratio > ie.o.maxRatio
                    ? ie.o.maxRatio
                    : this.ratio,
                s = 0,
                r = t.length;
              s < r;
              s++
            )
              -1 === t[s].indexOf("%")
                ? (i += Math.ceil(parseInt(t[s]) * a) + "px ")
                : (i += t[s] + " ");
            return se.trim(i);
          },
          layers: function (e) {
            if (this.$responsiveLayers) {
              ie.debugMode && ie.debug.add("group", "resize");
              var t = this.ratio,
                i = this.$responsiveLayers,
                a = ie.slider.initial,
                s = ie.slider.width,
                r = ie.slider.height,
                o = s / r,
                n = [],
                l = [],
                d = [],
                u = [],
                p = 0,
                c = 0,
                h = "responsive" === a.type && -1 !== ie.o.maxRatio ? a.width : a.layersWidth,
                m = "responsive" === a.type && -1 !== ie.o.maxRatio ? a.height : a.layersHeight;
              c =
                "fullsize" === a.type || "fullwidth" === a.type || "responsive" === a.type
                  ? ((p = 0 < h ? (s - h * t) / 2 : 0), 0 < m ? (r - m * t) / 2 : 0)
                  : ((p = p < 0 ? 0 : p), c < 0 ? 0 : c);
              for (var f = 0, g = i.length; f < g; f++) {
                var v,
                  y,
                  b = se(i[f]),
                  S = (i[f], b.data(ie.defaults.init.dataKey)),
                  w = S.original,
                  x = "fixed" === S.settings.position,
                  T = x ? 0 : p,
                  C = x ? 0 : c,
                  k = {
                    width: x && 0 !== w.percentWidth ? (s / 100) * w.percentWidth : w.width * t,
                    height: x && 0 !== w.percentHeight ? (r / 100) * w.percentHeight : w.height * t,
                    paddingLeft: w.paddingLeft * t,
                    paddingTop: w.paddingTop * t,
                    paddingRight: w.paddingRight * t,
                    paddingBottom: w.paddingBottom * t,
                    borderLeftWidth: Math.ceil(w.borderLeftWidth * t),
                    borderTopWidth: Math.ceil(w.borderTopWidth * t),
                    borderRightWidth: Math.ceil(w.borderRightWidth * t),
                    borderBottomWidth: Math.ceil(w.borderBottomWidth * t),
                    borderRadius: this.borderRadius(w.borderRadius),
                  },
                  I = { marginLeft: w.marginLeft * t, marginTop: w.marginTop * t },
                  L = {},
                  P = { borderRadius: k.borderRadius };
                if (
                  (x &&
                    (w.percentHeight || w.percentWidth) &&
                    S.is.imageLayer &&
                    (w.percentHeight &&
                      !w.percentWidth &&
                      (k.width = w.width * (k.height / w.height)),
                    w.percentWidth &&
                      !w.percentHeight &&
                      (k.height = w.height * (k.width / w.width))),
                  (("number" == typeof w.width && w.width < 0) || "auto" == w.width) &&
                    ie.debugMode &&
                    ie.debug.add("warn", "resize.width", [f + 1, w.width]),
                  (("number" == typeof w.height && w.height < 0) || "auto" == w.height) &&
                    ie.debugMode &&
                    ie.debug.add("warn", "resize.height", [f + 1, w.height]),
                  S.is.textLayer &&
                    ((k.fontSize = w.fontSize * t),
                    ie.device.isMobile && k.fontSize < S.styleSettings.minmobilefontsize
                      ? (k.fontSize = S.styleSettings.minmobilefontsize)
                      : k.fontSize < S.styleSettings.minfontsize &&
                        (k.fontSize = S.styleSettings.minfontsize),
                    (y = k.fontSize / w.fontSize),
                    (k.fontSize += "px"),
                    "normal" !== w.lineHeight &&
                      (k.lineHeight = parseFloat(w.lineHeight) * y + "px"),
                    "normal" !== w.letterSpacing &&
                      (k.letterSpacing = parseFloat(w.letterSpacing) * y + "px")),
                  S.is.slideBackground || S.is.backgroundVideo)
                )
                  if (S.is.slideBackground) {
                    var O = ie.slides[S.is.onSlide].data.backgroundSize;
                    switch (
                      (void 0 !== O && "inherit" !== O ? O : ie.o.slideBGSize).replace(
                        "100% 100%",
                        "stretch",
                      )
                    ) {
                      case "auto":
                        break;
                      case "cover":
                        w.ratio < o
                          ? ((k.width = s), (k.height = k.width / w.ratio))
                          : ((k.height = r), (k.width = k.height * w.ratio));
                        break;
                      case "contain":
                        w.ratio < o
                          ? ((k.height = r), (k.width = k.height * w.ratio))
                          : ((k.width = s), (k.height = k.width / w.ratio));
                        break;
                      case "stretch":
                        ((k.width = s), (k.height = r));
                    }
                    ((k.width = Math.round(k.width)), (k.height = Math.round(k.height)));
                    var $ = ie.slides[S.is.onSlide].data.backgroundPosition;
                    switch (
                      (v = void 0 !== $ ? $.split(" ") : ie.o.slideBGPosition.split(" "))[0]
                    ) {
                      case "left":
                        k.x = 0;
                        break;
                      case "center":
                        k.x = (ie.slider.width - k.width) / 2;
                        break;
                      case "right":
                        k.x = ie.slider.width - k.width;
                        break;
                      default:
                        -1 !== v[0].indexOf("%")
                          ? (k.x = ((ie.slider.width - k.width) / 100) * parseInt(v[0]))
                          : (k.x = parseInt(v[0]));
                    }
                    if (void 0 !== v[1])
                      switch (v[1]) {
                        case "top":
                          k.y = 0;
                          break;
                        case "center":
                          k.y = (ie.slider.height - k.height) / 2;
                          break;
                        case "bottom":
                          k.y = ie.slider.height - k.height;
                          break;
                        default:
                          -1 !== v[1].indexOf("%")
                            ? (k.y = ((ie.slider.height - k.height) / 100) * parseInt(v[1]))
                            : (k.y = parseInt(v[1]));
                      }
                    ((k.transform = "translateX(" + k.x + "px) translateY(" + k.y + "px)"),
                      (k["-ms-transform"] = "translateX(" + k.x + "px) translateY(" + k.y + "px)"),
                      (k["-webkit-transform"] =
                        "translateX(" + k.x + "px) translateY(" + k.y + "px)"));
                  } else
                    S.is.backgroundVideo &&
                      (w.ratio < o
                        ? ((k.width = s), (k.height = k.width / w.ratio))
                        : ((k.height = r), (k.width = k.height * w.ratio)),
                      (k.x = (ie.slider.width - k.width) / 2),
                      (k.y = (ie.slider.height - k.height) / 2),
                      (k.width = Math.round(k.width)),
                      (k.height = Math.round(k.height)),
                      (k.transform = "translateX(" + k.x + "px) translateY(" + k.y + "px)"),
                      (k["-ms-transform"] = "translateX(" + k.x + "px) translateY(" + k.y + "px)"),
                      (k["-webkit-transform"] =
                        "translateX(" + k.x + "px) translateY(" + k.y + "px)"));
                else {
                  if (S.mediaSettings.fullsize)
                    switch (S.mediaSettings.fillmode) {
                      default:
                      case "cover":
                        w.ratio < o
                          ? ((k.width = s), (k.height = k.width / w.ratio))
                          : ((k.height = r), (k.width = k.height * w.ratio));
                        break;
                      case "contain":
                        w.ratio > o
                          ? ((k.width = s), (k.height = k.width / w.ratio))
                          : ((k.height = r), (k.width = k.height * w.ratio));
                    }
                  ((k.outerWidth =
                    k.width +
                    k.paddingLeft +
                    k.paddingRight +
                    k.borderLeftWidth +
                    k.borderRightWidth),
                    (k.outerHeight =
                      k.height +
                      k.paddingTop +
                      k.paddingBottom +
                      k.borderTopWidth +
                      k.borderBottomWidth),
                    (I.width = L.width = k.outerWidth),
                    (I.height = L.height = k.outerHeight),
                    -1 != w.left.indexOf("%")
                      ? "100%" === w.left
                        ? (k.left =
                            0 === T
                              ? (ie.slider.width / 100) * parseFloat(w.left) - k.outerWidth
                              : T + ((h * t) / 100) * parseFloat(w.left) - k.outerWidth)
                        : "0%" === w.left
                          ? (k.left = 0 === T ? 0 : T)
                          : (k.left =
                              0 === T
                                ? (ie.slider.width / 100) * parseFloat(w.left) - k.outerWidth / 2
                                : T + ((h * t) / 100) * parseFloat(w.left) - k.outerWidth / 2)
                      : (k.left = T + parseFloat(w.left) * t),
                    (I.left = k.left),
                    -1 != w.top.indexOf("%")
                      ? "100%" === w.top
                        ? (k.top =
                            0 === C
                              ? (ie.slider.height / 100) * parseFloat(w.top) - k.outerHeight
                              : C + ((m * t) / 100) * parseFloat(w.top) - k.outerHeight)
                        : "0%" === w.top
                          ? (k.top = 0 === C ? 0 : C + 0)
                          : (k.top =
                              0 === C
                                ? (ie.slider.height / 100) * parseFloat(w.top) - k.outerHeight / 2
                                : C + ((m * t) / 100) * parseFloat(w.top) - k.outerHeight / 2)
                      : (k.top = C + parseFloat(w.top) * t),
                    (I.top = k.top));
                }
                ((S.responsive = k),
                  (n[f] = k),
                  S.is.slideBackground ||
                    S.is.backgroundVideo ||
                    ((S.settings.wrapperData.responsive = I), (l[f] = I), (d[f] = L), (u[f] = P)));
              }
              for (var B = 0, W = n.length; B < W; B++) {
                var M = se(i[B]),
                  _ = M.data(ie.defaults.init.dataKey);
                (M.css(n[B]),
                  _.is.slideBackground || _.is.backgroundVideo
                    ? (_.is.slideBackground || _.is.backgroundVideo) &&
                      (_.elements.$bgOuterWrapper.css({
                        width: ie.slider.width,
                        height: ie.slider.height,
                      }),
                      _.elements.$outerWrapper.css({
                        width: ie.slider.width,
                        height: ie.slider.height,
                      }))
                    : (M.find(".split-item").css(u[B]), this.wrappers(M, _, l[B], d[B])));
              }
              (void 0 !== e && e(), ie.debugMode && ie.debug.groupEnd("resize"));
            }
          },
          wrappers: function (e, t, i, a) {
            (i && t.elements.$wrapper.css(i),
              a && t.loop.enabled && t.elements.$loopWrapper.css(a),
              ae.TweenMax.set(t.elements.$wrapper[0], {
                autoCSS: !1,
                css: { transformPerspective: t.transformPerspective.layer * ie.resize.ratio },
              }),
              t.loop.enabled &&
                ae.TweenMax.set(t.elements.$loopWrapper[0], {
                  autoCSS: !1,
                  css: { transformPerspective: t.transformPerspective.loop * ie.resize.ratio },
                }),
              t.hover.enabled &&
                ae.TweenMax.set(e[0], {
                  autoCSS: !1,
                  css: { transformPerspective: t.transformPerspective.hover * ie.resize.ratio },
                }),
              t.textIn.nodes &&
                ae.TweenMax.set(t.textIn.nodes, {
                  autoCSS: !1,
                  css: { transformPerspective: t.transformPerspective.text * ie.resize.ratio },
                }),
              t.textOut.nodes &&
                ae.TweenMax.set(t.textOut.nodes, {
                  autoCSS: !1,
                  css: { transformPerspective: t.transformPerspective.text * ie.resize.ratio },
                }),
              t.parallax.enabled &&
                ae.TweenMax.set(t.elements.$parallaxWrapper[0], {
                  autoCSS: !1,
                  css: { transformPerspective: t.transformPerspective.parallax * ie.resize.ratio },
                }));
          },
          transformProperties: function (e, t, i, a) {
            if ("object" == typeof i.x) {
              for (var s = [], r = 0; r < i.x.length; r++)
                "string" == typeof i.x[r]
                  ? (s[r] = this.getXY(e, i.x[r], "Width"))
                  : (s[r] = i.x[r] * ie.resize.ratio);
              t.cycle.x = s;
            } else
              "string" == typeof i.x
                ? (t.x = this.getXY(e, i.x, "Width"))
                : void 0 !== i.x && (t.x = i.x * ie.resize.ratio);
            if ("object" == typeof i.y) {
              for (var o = [], n = 0; n < i.y.length; n++)
                "string" == typeof i.y[n]
                  ? (o[n] = this.getXY(e, i.y[n], "Height"))
                  : (o[n] = i.y[n] * ie.resize.ratio);
              t.cycle.y = o;
            } else
              "string" == typeof i.y
                ? (t.y = this.getXY(e, i.y, "Height"))
                : void 0 !== i.y && (t.y = i.y * ie.resize.ratio);
            if ((a && (t = a), "object" == typeof i.transformOrigin)) {
              for (var l = [], d = 0; d < i.transformOrigin.length; d++)
                l[d] = ie.functions.convert.transformOrigin(i.transformOrigin[d], e);
              t.cycle.transformOrigin = l;
            } else
              "string" == typeof i.transformOrigin &&
                (t.transformOrigin = ie.functions.convert.transformOrigin(i.transformOrigin, e));
          },
          styleProperties: function (e, t) {
            (void 0 !== t.width &&
              (se.isNumeric(t.width)
                ? (e.width = parseInt(t.width) * ie.resize.ratio)
                : "string" == typeof t.width &&
                  -1 !== t.width.indexOf("%") &&
                  (e.width = (ie.slider.width / 100) * parseInt(t.width))),
              void 0 !== t.height &&
                (se.isNumeric(t.height)
                  ? (e.height = parseInt(t.height) * ie.resize.ratio)
                  : "string" == typeof t.height &&
                    -1 !== t.height.indexOf("%") &&
                    (e.height = (ie.slider.height / 100) * parseInt(t.height))),
              t.borderRadius && (e.borderRadius = ie.resize.borderRadius(t.borderRadius)));
          },
          clip: function (e, t, i) {
            t = se.trim(t.replace("rect(", "").replace(")", ""));
            for (
              var a,
                s = e.data(ie.defaults.init.dataKey).responsive,
                r = Math.ceil(s.outerWidth),
                o = Math.ceil(s.outerHeight),
                n = -1 === t.indexOf(",") ? t.split(" ") : t.split(","),
                l = "",
                d = 0;
              d < n.length;
              d++
            )
              if (-1 !== n[d].indexOf("%"))
                switch (d) {
                  case 0:
                    l += parseInt((o / 100) * parseInt(n[d]) * 100) / 100 + "px ";
                    break;
                  case 1:
                    l += i
                      ? parseInt(100 * (r - (r / 100) * parseInt(n[d]))) / 100 + "px "
                      : parseInt((r / 100) * parseInt(n[d]) * 100) / 100 + "px ";
                    break;
                  case 2:
                    l += i
                      ? parseInt(100 * (o - (o / 100) * parseInt(n[d]))) / 100 + "px "
                      : parseInt((o / 100) * parseInt(n[d]) * 100) / 100 + "px ";
                    break;
                  case 3:
                    l += parseInt((r / 100) * parseInt(n[d]) * 100) / 100 + "px";
                }
              else
                switch (((a = parseInt(n[d]) * ie.resize.ratio), d)) {
                  case 0:
                    l += a + "px ";
                    break;
                  case 1:
                    l += i ? r - a + "px " : a + "px ";
                    break;
                  case 2:
                    l += i ? o - a + "px " : a + "px ";
                    break;
                  case 3:
                    l += a + "px";
                }
            return "rect(" + l + ")";
          },
          getXY: function (e, t, i) {
            var a = 0,
              s = e.data(ie.defaults.init.dataKey),
              r = s.original,
              o = s.responsive,
              n = s.settings.wrapperData.responsive;
            if (r && o && n)
              switch (t) {
                case "left":
                  a =
                    -1 != r.left.indexOf("%")
                      ? "100%" === r.left
                        ? -o.left - o.outerWidth - n.marginLeft
                        : (-parseInt(r.left) / 100) * ie.slider.width -
                          o.outerWidth / 2 -
                          n.marginLeft
                      : -o.left - o.outerWidth - n.marginLeft;
                  break;
                case "right":
                  a =
                    -1 != r.left.indexOf("%")
                      ? "100%" === r.left
                        ? ie.slider.width - o.left - n.marginLeft
                        : (1 - parseInt(r.left) / 100) * ie.slider.width +
                          o.outerWidth / 2 -
                          n.marginLeft
                      : ie.slider.width - o.left - n.marginLeft;
                  break;
                case "top":
                  a =
                    -1 != r.top.indexOf("%")
                      ? "100%" === r.top
                        ? -o.top - o.outerHeight - n.marginTop
                        : (-parseInt(r.top) / 100) * ie.slider.height -
                          o.outerHeight / 2 -
                          n.marginTop
                      : -o.top - o.outerHeight - n.marginTop;
                  break;
                case "bottom":
                  a =
                    -1 != r.top.indexOf("%")
                      ? "100%" === r.top
                        ? ie.slider.height - o.top - n.marginTop
                        : (1 - parseInt(r.top) / 100) * ie.slider.height +
                          o.outerHeight / 2 -
                          n.marginTop
                      : ie.slider.height - o.top - n.marginTop;
                  break;
                case "width":
                  a = o.outerWidth;
                  break;
                case "-width":
                  a = -o.outerWidth;
                  break;
                case "height":
                  a = o.outerHeight;
                  break;
                case "-height":
                  a = -o.outerHeight;
                  break;
                default:
                  a =
                    -1 !== t.indexOf("%")
                      ? (o["outer" + i] / 100) * parseInt(t)
                      : -1 !== t.indexOf("sw")
                        ? (parseInt(t.split("sw")[0]) / 100) * ie.slider.width
                        : -1 !== t.indexOf("sh")
                          ? (parseInt(t.split("lw")[0]) / 100) * ie.slider.height
                          : -1 !== t.indexOf("lw")
                            ? (o.outerWidth / 100) * parseInt(t.split("lw")[0])
                            : -1 !== t.indexOf("lh")
                              ? (o.outerHeight / 100) * parseInt(t.split("lj")[0])
                              : parseInt(t) * ie.resize.ratio;
              }
            return a;
          },
          navigation: function () {
            "always" == ie.o.thumbnailNavigation && ie.gui.navigation.bottom.thumbnails.resize();
          },
          shadow: function () {
            (ie.gui.shadow.show && ie.gui.shadow.show(),
              ie.gui.shadow.$element && ie.gui.shadow.resize());
          },
          yourLogo: function () {
            ie.yourLogo.$element && ie.yourLogo.resize();
          },
          timers: function () {
            if (0 < ie.gui.timers.slidebar.$containerElement.length)
              for (var e = 0, t = ie.gui.timers.slidebar.$containerElement.length; e < t; e++)
                ((ie.gui.timers.slidebar.containerElementWidth[e] =
                  ie.gui.timers.slidebar.$containerElement[e].width()),
                  (ie.gui.timers.slidebar.elementWidth[e] =
                    ie.gui.timers.slidebar.$element[e].width()));
          },
        }),
        (ie.transitions = {
          firstSlide: !0,
          start: function () {
            if (!document.body.contains(M)) return !1;
            ((ie.device.scroll.directionAtSlideTransitionStart = ie.device.scroll.direction),
              "always" == ie.o.thumbnailNavigation &&
                (ie.gui.navigation.bottom.thumbnails.change(),
                "ontouchstart" in window || ie.gui.navigation.bottom.thumbnails.scroll()),
              this.layers.out.forced(),
              this.slide.init());
          },
          slide: {
            $wrapper: se(),
            init: function () {
              var e, t;
              if (
                (ie.functions.setStates(ie.slider, { animatingSlides: !0 }),
                ie.transitions.layers.parallax.reset(),
                ie.slider.$layersWrapper
                  .children('.ls-parallax[data-ls-parallax="active"]')
                  .each(function () {
                    se(this).find(".ls-layer").data(ie.defaults.init.dataKey).settings.slideOut ===
                      ie.slides.current.index && se(this).attr("data-ls-parallax", "disbaled");
                  }),
                (ie.transitions.curSlide = ie.slides.current),
                (ie.transitions.nextSlide = ie.slides.next),
                (ie.transitions._slideTransition = new ae.TimelineMax({
                  paused: !0,
                  onComplete: function () {
                    ie.transitions.slide.onComplete();
                  },
                })),
                ie.transitions.firstSlide)
              ) {
                if (void 0 !== ie.transitions.nextSlide.data.$background) {
                  var i = ie.transitions.nextSlide.data.$background.data(ie.defaults.init.dataKey),
                    a = i.kenBurns.zoom ? i.kenBurns.from.scale : 1,
                    s = i.kenBurns.zoom ? i.kenBurns.from.rotation : 0,
                    r = ie.transitions.nextSlide.filter.from || "none";
                  (ie.transitions._slideTransition.set(
                    ie.transitions.nextSlide.data.$background[0],
                    { "-webkit-filter": r, filter: r },
                    0,
                  ),
                    ie.transitions._slideTransition.fromTo(
                      ie.transitions.nextSlide.data.$background.closest(".ls-bg-wrap")[0],
                      ie.o.sliderFadeInDuration,
                      { autoCSS: !1, css: { scale: a, rotation: s, opacity: 0, display: "block" } },
                      { autoCSS: !1, css: { opacity: 1 } },
                      0,
                    ));
                }
                this.start(!0);
              } else
                "undefined" == typeof layerSliderTransitions &&
                "undefined" == typeof layerSliderCustomTransitions
                  ? (this.start(!0),
                    ie.debugMode &&
                      ie.debug.add(
                        "warn",
                        "slideTransition.noSlideTransition",
                        ie.transitions.nextSlide.index,
                      ))
                  : void 0 === ie.transitions.curSlide.data.$background &&
                      void 0 === ie.transitions.nextSlide.data.$background &&
                      "transparent" == ie.transitions.curSlide.data.backgroundColor &&
                      "transparent" == ie.transitions.nextSlide.data.backgroundColor
                    ? this.start(!0)
                    : ("x" === ie.o.clipSlideTransition
                        ? ie.device.$overflowWrapper.addClass("ls-overflowx-hidden")
                        : "y" === ie.o.clipSlideTransition
                          ? ie.device.$overflowWrapper.addClass("ls-overflowy-hidden")
                          : !0 === ie.o.clipSlideTransition &&
                            ie.device.$overflowWrapper.addClass("ls-overflow-hidden"),
                      void 0 !== ie.transitions.curSlide.data.$background &&
                        ((e =
                          ie.transitions.curSlide.data.$background.closest(".ls-bg-wrap")[0]
                            ._gsTransform),
                        ((t = ie.transitions.curSlide.data.$background.data(
                          ie.defaults.init.dataKey,
                        )).responsive.filter =
                          ie.transitions.curSlide.data.$background[0].style.filter),
                        (t.responsive.kbRotation =
                          void 0 !== e ? " rotate(" + e.rotation + "deg)" : " rotate(0deg)"),
                        (t.responsive.kbScale =
                          void 0 !== e ? " scale(" + e.scaleX + ")" : " scale(1)")),
                      (ie.transitions.slide.$wrapper = se("<div>")
                        .addClass("ls-slide-transition-wrapper")
                        .css({ width: ie.slider.width, height: ie.slider.height })),
                      this.select.slideTransitionType());
            },
            select: {
              slideTransitionType: function () {
                ie.transitions.slide.normal.select.transitionType();
              },
            },
            start: function (e) {
              var t,
                i = !(!ie.slides.current.index || !ie.slides.current.data.$backgroundVideo.length),
                a = !(!ie.slides.next.index || !ie.slides.next.data.$backgroundVideo.length);
              if (
                (!ie.slideshow.firstStart &&
                  ie.api.hasEvent("slideChangeDidStart") &&
                  _.triggerHandler("slideChangeDidStart", ie.api.eventData()),
                !e &&
                  (void 0 !== ie.transitions.nextSlide.data.transitionDuration &&
                    ie.transitions._slideTransition.duration(
                      ie.transitions.nextSlide.data.transitionDuration,
                    ),
                  ie.debugMode &&
                    ie.debug.options.transitionDuration &&
                    ie.transitions._slideTransition.duration(ie.debug.options.transitionDuration),
                  0.25 < ie.transitions.layers.timeline.timeScaleModifier))
              ) {
                var s =
                  ie.transitions._slideTransition.duration() /
                  (0.75 + ie.transitions.layers.timeline.timeScaleModifier);
                ((s = s < 0.5 ? 0.5 : s), ie.transitions._slideTransition.duration(s));
              }
              var r,
                o =
                  ie.transitions._slideTransition.duration() /
                  ie.transitions._slideTransition.timeScale(),
                n = o,
                l = ie.transitions.nextSlide.data.timeShift;
              (0 < l ? (l = 0) : l < 0 && Math.abs(l) > o && (l = -o),
                (ie.transitions.nextSlide.data.calculatedTimeShift = l),
                (r = ie.transitions.firstSlide
                  ? ie.o.sliderFadeInDuration + 0.01
                  : (n + l) * ie.transitions._slideTransition.timeScale()),
                (i || a) &&
                  ie.transitions.media.changeBackgroundVideo(ie.transitions.firstSlide, i && a),
                ie.transitions._slideTransition.call(
                  function () {
                    (!ie.slideshow.firstStart &&
                      ie.api.hasEvent("slideChangeWillComplete") &&
                      _.triggerHandler("slideChangeWillComplete", ie.api.eventData()),
                      ie.slideshow.should.change || ie.transitions.layers.timeline.prepare(),
                      ie.media.functions.stop(!0),
                      ie.slides.set.slideIndexes(),
                      ie.o.hashChange &&
                        (document.location.hash =
                          ie.slides[ie.slides.current.index].data.deeplink ||
                          "_no-deeplink-found_"),
                      ie.slideshow.start(),
                      !ie.transitions.firstSlide &&
                        ie.slides.prev.index &&
                        ie.slides.prev.data.$backgroundVideo.length &&
                        !ie.slides.prev.data.$backgroundVideo.data(ie.defaults.init.dataKey)
                          .mediaProperties.willBePaused &&
                        (ie.slides.prev.data.$backgroundVideo.trigger("stopBackgroundVideo"),
                        ie.slides.prev.data.$backgroundVideo
                          .data(ie.defaults.init.dataKey)
                          .elements.$bgWrapper.css({ display: "none" })),
                      ie.slideshow.should.change ||
                        (ie.slides.next.data.$backgroundVideo.length &&
                          ie.slides.next.data.$backgroundVideo.data(ie.defaults.init.dataKey)
                            .mediaProperties &&
                          !ie.slides.next.data.$backgroundVideo.data(ie.defaults.init.dataKey)
                            .mediaProperties.isPreloaded &&
                          (ie.slides.next.data.$backgroundVideo.trigger("preloadBackgroundVideo"),
                          (ie.slides.next.data.$backgroundVideo.data(
                            ie.defaults.init.dataKey,
                          ).mediaProperties.isPreloaded = !0))),
                      (ie.transitions.firstSlide = !1));
                  },
                  [],
                  this,
                  r,
                ),
                ie.transitions._slideTransition.play(),
                void 0 !== ie.transitions.curSlide.data &&
                  void 0 !== ie.transitions.curSlide.data.$background &&
                  ((t = ie.transitions.curSlide.data.$background.data(ie.defaults.init.dataKey)),
                  (ie.timeouts.applyBG = setTimeout(function () {
                    (delete ie.timeouts.applyBG,
                      ie.transitions.curSlide.data.$background.closest(".ls-bg-wrap").hide(),
                      t.kenBurns.zoom &&
                        ae.TweenMax.set(ie.transitions.curSlide.data.$background[0], {
                          autoCSS: !1,
                          css: t.kenBurns.from,
                        }));
                  }, 5))));
            },
            onComplete: function () {
              var e;
              (void 0 !== ie.transitions.nextSlide.data.$background &&
                ie.transitions.nextSlide.data.$background.closest(".ls-bg-wrap").show(),
                "transparent" !== ie.transitions.nextSlide.data.backgroundColor
                  ? ie.slider.$innerWrapper.css(
                      "background-color",
                      ie.transitions.nextSlide.data.backgroundColor,
                    )
                  : ie.slider.$innerWrapper.css("background-color", ie.o.globalBGColor),
                ie.o.leaveOverflow ||
                  ie.device.$overflowWrapper.removeClass(
                    "ls-overflowx-hidden ls-overflowy-hidden ls-overflow-hidden",
                  ),
                this.$wrapper && (this.$wrapper.html("").remove(), (this.$wrapper = !1)),
                ie.gui.navigation.bottom.bullets.set.active(),
                0 < ie.o.cycles &&
                  (ie.slideshow.hasOwnProperty("cycleSlideIndex")
                    ? ie.slideshow.cycles.check(ie.transitions.nextSlide.index) &&
                      (ie.navigation.stop(),
                      ie.functions.setStates(ie.slideshow, { pausedByLastCycle: !0 }),
                      ie.o.forceCycles && (ie.slideshow.curCycle = 1))
                    : ie.slideshow.cycles.set()),
                ie.functions.setStates(ie.slider, { animatingSlides: !1, changingSlides: !1 }),
                !ie.slideshow.firstStart &&
                  ie.api.hasEvent("slideChangeDidComplete") &&
                  _.triggerHandler("slideChangeDidComplete", ie.api.eventData()),
                (ie.slideshow.firstStart = !1) !== ie.slideshow.should.change &&
                ie.navigation.forceDirection
                  ? (void 0 !== ie.transitions.curSlide.data &&
                      void 0 !== ie.transitions.curSlide.data.$background &&
                      ((e = ie.transitions.curSlide.data.$background.data(
                        ie.defaults.init.dataKey,
                      )),
                      ie.transitions.curSlide.data.$background.closest(".ls-bg-wrap").hide(),
                      e.kenBurns.zoom &&
                        ae.TweenMax.set(ie.transitions.curSlide.data.$background[0], {
                          autoCSS: !1,
                          css: e.kenBurns.from,
                        })),
                    ie.slideshow.changeTo(
                      ie.slideshow.get.slideInSequence(ie.navigation.forceDirection),
                      !0,
                    ))
                  : ie.preload.imagesOfSlide(ie.slides.next.index));
            },
            normal: {
              select: {
                transitionType: function () {
                  if (ie.o.slideTransition)
                    ie.transitions.slide.normal.setTransition(
                      ie.o.slideTransition.type,
                      ie.o.slideTransition.obj,
                    );
                  else {
                    var e,
                      t,
                      i =
                        !!ie.transitions.nextSlide.data.transition2d &&
                        ie.transitions.nextSlide.data.transition2d.toString().split(",");
                    ie.device.touchPrev && ie.o.slideOnSwipe
                      ? ((ie.device.touchPrev = !1), this.transition("2d", "1"))
                      : ie.device.touchNext && ie.o.slideOnSwipe
                        ? ((ie.device.touchNext = !1), this.transition("2d", "1"))
                        : ie.slides.next.data.$background ||
                            (i &&
                              (!i ||
                                -1 != i.indexOf("1") ||
                                -1 != i.indexOf("2") ||
                                -1 != i.indexOf("3") ||
                                -1 != i.indexOf("4")))
                          ? ie.browser.supports3D() &&
                            (ie.transitions.nextSlide.data.transition3d ||
                              ie.transitions.nextSlide.data.customtransition3d)
                            ? ie.transitions.nextSlide.data.transition3d &&
                              ie.transitions.nextSlide.data.customtransition3d
                              ? ((e = Math.floor(2 * Math.random())),
                                (t = [
                                  ["3d", ie.transitions.nextSlide.data.transition3d],
                                  ["custom3d", ie.transitions.nextSlide.data.customtransition3d],
                                ]),
                                this.transition(t[e][0], t[e][1]))
                              : ie.transitions.nextSlide.data.transition3d
                                ? this.transition("3d", ie.transitions.nextSlide.data.transition3d)
                                : this.transition(
                                    "custom3d",
                                    ie.transitions.nextSlide.data.customtransition3d,
                                  )
                            : ie.transitions.nextSlide.data.transition2d &&
                                ie.transitions.nextSlide.data.customtransition2d
                              ? ((e = Math.floor(2 * Math.random())),
                                (t = [
                                  ["2d", ie.transitions.nextSlide.data.transition2d],
                                  ["custom2d", ie.transitions.nextSlide.data.customtransition2d],
                                ]),
                                this.transition(t[e][0], t[e][1]))
                              : ie.transitions.nextSlide.data.transition2d
                                ? this.transition("2d", ie.transitions.nextSlide.data.transition2d)
                                : ie.transitions.nextSlide.data.customtransition2d
                                  ? this.transition(
                                      "custom2d",
                                      ie.transitions.nextSlide.data.customtransition2d,
                                    )
                                  : this.transition("2d", "1")
                          : this.transition("2d", "5");
                  }
                },
                transition: function (e, t) {
                  (ie.debugMode && ie.debug.add("group", "slideTransition.info"), (t += ""));
                  var i,
                    a = -1 == e.indexOf("custom") ? ie.t : ie.ct,
                    s = "3d";
                  if ((-1 != e.indexOf("2d") && (s = "2d"), -1 != t.indexOf("last")))
                    ((i = a["t" + s].length - 1), "last");
                  else if (-1 != t.indexOf("all"))
                    ((i = Math.floor(Math.random() * ie.functions.countProp(a["t" + s]))),
                      "random from all");
                  else {
                    var r = t.split(","),
                      o = r.length;
                    ((i = parseInt(r[Math.floor(Math.random() * o)]) - 1), "random from specified");
                  }
                  (void 0 === a["t" + s][i] &&
                    (ie.debugMode &&
                      ie.debug.add("warn", "slideTransition.customTransition", [
                        s.toUpperCase() + (-1 === e.indexOf("custom") ? "" : " (CUSTOM)"),
                        i + 1,
                      ]),
                    (a = ie.t),
                    (e = s = "2d"),
                    (i = 0)),
                    ie.debugMode &&
                      ie.debug.add("log", "slideTransition.info", [
                        s.toUpperCase() + (-1 === e.indexOf("custom") ? "" : " (CUSTOM)"),
                        i + 1,
                        a["t" + s][i].name,
                      ]),
                    ie.transitions.slide.normal.setTransition(s, a["t" + s][i]));
                },
              },
              setTransition: function (e, t) {
                var i,
                  a,
                  s,
                  r,
                  o = se.extend(!0, { cols: 1, rows: 1 }, t),
                  n = typeof o.cols,
                  l = typeof o.rows,
                  d = [],
                  u = ie.navigation.direction,
                  p = 0,
                  c = 0,
                  h =
                    !!ie.transitions.curSlide.data.$background &&
                    ie.functions.getURL(ie.transitions.curSlide.data.$background),
                  m =
                    !!ie.transitions.nextSlide.data.$background &&
                    ie.functions.getURL(ie.transitions.nextSlide.data.$background),
                  f = ie.o.playByScroll && "up" === ie.device.scroll.direction ? "to" : "from";
                switch (n) {
                  case "number":
                    n = o.cols;
                    break;
                  case "string":
                    n =
                      Math.floor(
                        Math.random() *
                          (parseInt(o.cols.split(",")[1]) - parseInt(o.cols.split(",")[0]) + 1),
                      ) + parseInt(o.cols.split(",")[0]);
                    break;
                  default:
                    n = Math.floor(Math.random() * (o.cols[1] - o.cols[0] + 1)) + o.cols[0];
                }
                switch (l) {
                  case "number":
                    l = o.rows;
                    break;
                  case "string":
                    l =
                      Math.floor(
                        Math.random() *
                          (parseInt(o.rows.split(",")[1]) - parseInt(o.rows.split(",")[0]) + 1),
                      ) + parseInt(o.rows.split(",")[0]);
                    break;
                  default:
                    l = Math.floor(Math.random() * (o.rows[1] - o.rows[0] + 1)) + o.rows[0];
                }
                if (
                  (ie.device.isMobile && ie.o.optimizeForMobile
                    ? (15 <= n ? (n = 7) : 5 <= n ? (n = 4) : 4 <= n ? (n = 3) : 2 < n && (n = 2),
                      15 <= l ? (l = 7) : 5 <= l ? (l = 4) : 4 <= l ? (l = 3) : 2 < l && (l = 2),
                      2 < l && 2 < n && ((l = 2), 4 < n && (n = 4)))
                    : ((n = 35 < n ? 35 : n), (l = 35 < l ? 35 : l)),
                  ie.debugMode &&
                    !ie.o.slideTransition &&
                    (ie.debug.add("log", "slideTransition.properties", [[n, l], n * l]),
                    ie.debug.groupEnd()),
                  (i = Math.floor(ie.slider.width / n)),
                  (a = Math.floor(ie.slider.height / l)),
                  (s = ie.slider.width - i * n),
                  (r = ie.slider.height - a * l),
                  "prev" == u)
                ) {
                  (o.tile &&
                    o.tile.sequence &&
                    (o.tile.sequence = {
                      random: "random",
                      forward: "reverse",
                      reverse: "forward",
                      "col-forward": "col-reverse",
                      "col-reverse": "col-forward",
                    }[o.tile.sequence]),
                    se.each(["animation", "before", "after"], function (e, t) {
                      if (o[t] && o[t].transition) {
                        var i = o[t].transition;
                        (i.rotateX && 44 < Math.abs(i.rotateX) && (i.rotateX *= -1),
                          i.rotateY && 44 < Math.abs(i.rotateY) && (i.rotateY *= -1),
                          i.rotate && (i.rotate *= -1));
                      }
                    }));
                }
                for (var g = 0; g < n * l; g++) d.push(g);
                switch (o.tile.sequence) {
                  case "reverse":
                    d.reverse();
                    break;
                  case "col-forward":
                    d = ie.functions.sortArray(l, n, "forward");
                    break;
                  case "col-reverse":
                    d = ie.functions.sortArray(l, n, "reverse");
                    break;
                  case "random":
                    d = ie.functions.shuffleArray(d);
                }
                if (
                  ("transparent" === ie.transitions.curSlide.data.backgroundColor &&
                    (ie.transitions.curSlide.data.backgroundColor = ie.o.globalBGColor),
                  "transparent" === ie.transitions.nextSlide.data.backgroundColor &&
                    (ie.transitions.nextSlide.data.backgroundColor = ie.o.globalBGColor),
                  "2d" == e)
                ) {
                  var v = -1 != o.name.toLowerCase().indexOf("carousel"),
                    y = -1 != o.name.toLowerCase().indexOf("crossfad");
                  ((this.$curTiles = se("<div>")
                    .addClass("ls-curtiles")
                    .appendTo(ie.transitions.slide.$wrapper)),
                    (this.$nextTiles = se("<div>")
                      .addClass("ls-nexttiles")
                      .appendTo(ie.transitions.slide.$wrapper)));
                }
                for (var b = 0; b < n * l; b++) {
                  var S,
                    w,
                    x,
                    T,
                    C,
                    k,
                    I,
                    L = (b + 1) % n == 0 ? s : 0,
                    P = (l - 1) * n - 1 < b ? r : 0,
                    O = se("<div>")
                      .addClass("ls-slide-transition-tile")
                      .css({ width: i + L, height: a + P })
                      .data("style", { width: i + L, height: a + P })
                      .appendTo(ie.transitions.slide.$wrapper);
                  d[b];
                  if (((p = b % n == 0 ? p + 1 : p), (c = b % n == 0 ? 1 : c + 1), "3d" == e)) {
                    O.addClass("ls-3d-container");
                    var $,
                      B,
                      W,
                      M,
                      _,
                      z,
                      F,
                      D = i + L,
                      R = a + P,
                      V = new ae.TimelineMax();
                    ((F =
                      Math.abs(Math.abs(c - n / 2 - 0.5) - n / 2 - 0.5) *
                      Math.abs(Math.abs(p - l / 2 - 0.5) - l / 2 - 0.5)),
                      O.css({ zIndex: F }),
                      (B = D / 2),
                      (W = R / 2),
                      (M =
                        ($ =
                          "horizontal" == o.animation.direction
                            ? 90 < Math.abs(o.animation.transition.rotateY) &&
                              "large" != o.tile.depth
                              ? Math.floor(D / 7) + L
                              : D
                            : 90 < Math.abs(o.animation.transition.rotateX) &&
                                "large" != o.tile.depth
                              ? Math.floor(R / 7) + P
                              : R) / 2),
                      this.createCuboids(
                        "ls-3d-box",
                        O,
                        0,
                        0,
                        0,
                        0,
                        -M,
                        0,
                        0,
                        B + "px " + W + "px 0px",
                      ),
                      this.createCuboids("ls-3d-front", O.find(".ls-3d-box"), D, R, 0, 0, M, 0, 0),
                      "vertical" == o.animation.direction &&
                      90 < Math.abs(o.animation.transition.rotateX)
                        ? this.createCuboids(
                            "ls-3d-back",
                            O.find(".ls-3d-box"),
                            D,
                            R,
                            0,
                            0,
                            -M,
                            180,
                            0,
                          )
                        : this.createCuboids(
                            "ls-3d-back",
                            O.find(".ls-3d-box"),
                            D,
                            R,
                            0,
                            0,
                            -M,
                            0,
                            180,
                          ),
                      this.createCuboids(
                        "ls-3d-left",
                        O.find(".ls-3d-box"),
                        $,
                        R,
                        -M,
                        0,
                        0,
                        0,
                        -90,
                      ),
                      this.createCuboids(
                        "ls-3d-right",
                        O.find(".ls-3d-box"),
                        $,
                        R,
                        D - M,
                        0,
                        0,
                        0,
                        90,
                      ),
                      this.createCuboids("ls-3d-top", O.find(".ls-3d-box"), D, $, 0, -M, 0, 90, 0),
                      this.createCuboids(
                        "ls-3d-bottom",
                        O.find(".ls-3d-box"),
                        D,
                        $,
                        0,
                        R - M,
                        0,
                        -90,
                        0,
                      ),
                      (S = O.find(".ls-3d-front")),
                      (w =
                        "horizontal" == o.animation.direction
                          ? 90 < Math.abs(o.animation.transition.rotateY)
                            ? O.find(".ls-3d-back")
                            : 0 < o.animation.transition.rotateY
                              ? O.find(".ls-3d-left")
                              : O.find(".ls-3d-right")
                          : 90 < Math.abs(o.animation.transition.rotateX)
                            ? O.find(".ls-3d-back")
                            : 0 < o.animation.transition.rotateX
                              ? O.find(".ls-3d-bottom")
                              : O.find(".ls-3d-top")),
                      (_ = d[b] * o.tile.delay),
                      (z = ie.transitions.slide.$wrapper.find(
                        ".ls-3d-container:eq( " + b + " ) .ls-3d-box",
                      )),
                      o.before && o.before.transition
                        ? ((o.before.transition.delay = o.before.transition.delay
                            ? (o.before.transition.delay + _) / 1e3
                            : _ / 1e3),
                          V.to(
                            z[0],
                            o.before.duration / 1e3,
                            ie.functions.convert.transition(o.before.transition, o.before.easing),
                          ))
                        : (o.animation.transition.delay = o.animation.transition.delay
                            ? (o.animation.transition.delay + _) / 1e3
                            : _ / 1e3),
                      V.to(
                        z[0],
                        o.animation.duration / 1e3,
                        ie.functions.convert.transition(o.animation.transition, o.animation.easing),
                      ),
                      o.after &&
                        (o.after.transition || (o.after.transition = {}),
                        V.to(
                          z[0],
                          o.after.duration / 1e3,
                          ie.functions.convert.transition(
                            o.after.transition,
                            o.after.easing,
                            "after",
                          ),
                        )),
                      ie.transitions._slideTransition.add(V, 0));
                  } else {
                    var A,
                      N,
                      E,
                      H,
                      X,
                      Y,
                      U,
                      K,
                      j = "auto",
                      q = "auto",
                      G = "auto",
                      Q = "auto",
                      Z = 1,
                      J = 1,
                      ee = {};
                    switch (
                      ((N =
                        "random" == o.transition.direction
                          ? (A = ["top", "bottom", "right", "left"])[
                              Math.floor(Math.random() * A.length)
                            ]
                          : o.transition.direction),
                      -1 != o.name.toLowerCase().indexOf("mirror") &&
                        b % 2 == 0 &&
                        (u = "prev" == u ? "next" : "prev"),
                      "prev" == u &&
                        (N = {
                          top: "bottom",
                          bottom: "top",
                          left: "right",
                          right: "left",
                          topleft: "bottomright",
                          topright: "bottomleft",
                          bottomleft: "topright",
                          bottomright: "topleft",
                        }[N]),
                      N)
                    ) {
                      case "top":
                        ((j = G = -O.data("style").height), (q = Q = 0));
                        break;
                      case "bottom":
                        ((j = G = O.data("style").height), (q = Q = 0));
                        break;
                      case "left":
                        ((j = G = 0), (q = Q = -O.data("style").width));
                        break;
                      case "right":
                        ((j = G = 0), (q = Q = O.data("style").width));
                        break;
                      case "topleft":
                        ((j = O.data("style").height),
                          (G = 0),
                          (q = O.data("style").width),
                          (Q = 0));
                        break;
                      case "topright":
                        ((j = O.data("style").height),
                          (G = 0),
                          (q = -O.data("style").width),
                          (Q = 0));
                        break;
                      case "bottomleft":
                        ((j = -O.data("style").height),
                          (G = 0),
                          (q = O.data("style").width),
                          (Q = 0));
                        break;
                      case "bottomright":
                        ((j = -O.data("style").height),
                          (G = 0),
                          (q = -O.data("style").width),
                          (Q = 0));
                    }
                    switch (
                      ((this.scale2D = o.transition.scale ? o.transition.scale : 1),
                      1 == v && 1 != this.scale2D && ((j /= 2), (G /= 2), (q /= 2), (Q /= 2)),
                      o.transition.type)
                    ) {
                      case "fade":
                        ((j = G = q = Q = 0), (Z = 0), (J = 1));
                        break;
                      case "mixed":
                        ((Z = 0), (J = 1) == this.scale2D && (G = Q = 0));
                    }
                    if (
                      ((o.transition.rotate ||
                        o.transition.rotateX ||
                        o.transition.rotateY ||
                        1 != this.scale2D) &&
                      "slide" != o.transition.type
                        ? O.css({ overflow: "visible" })
                        : O.css({ overflow: "hidden" }),
                      1 == v
                        ? this.$curTiles.css({ overflow: "visible" })
                        : this.$curTiles.css({ overflow: "hidden" }),
                      !0 === y || "slide" == o.transition.type || !0 === v
                        ? ((E = O.appendTo(this.$curTiles)),
                          (H = O.clone().appendTo(this.$nextTiles)),
                          (S = se("<div>").addClass("ls-curtile").appendTo(E)))
                        : (H = O.appendTo(this.$nextTiles)),
                      (w = se("<div>").addClass("ls-nexttile").appendTo(H)),
                      (X = (d[b] * o.tile.delay) / 1e3),
                      (Y = o.transition.rotate ? o.transition.rotate : 0),
                      (U = o.transition.rotateX ? o.transition.rotateX : 0),
                      (K = o.transition.rotateY ? o.transition.rotateY : 0),
                      "prev" == u && ((Y = -Y), (U = -U), (K = -K)),
                      ie.transitions._slideTransition.fromTo(
                        w[0],
                        o.transition.duration / 1e3,
                        {
                          immediateRender: !1,
                          autoCSS: !1,
                          css: {
                            x: -q,
                            y: -j,
                            display: "block",
                            opacity: Z,
                            rotation: Y,
                            rotationX: U,
                            rotationY: K,
                            scale: this.scale2D,
                          },
                        },
                        {
                          autoCSS: !1,
                          css: {
                            x: 0,
                            y: 0,
                            opacity: J,
                            rotation: 0,
                            rotationX: 0,
                            rotationY: 0,
                            scale: 1,
                          },
                          ease: ie.functions.convert.easing(o.transition.easing),
                        },
                        X,
                      ),
                      1 == y &&
                        (void 0 === ie.transitions.nextSlide.data.$background ||
                          (void 0 !== ie.transitions.nextSlide.data.$background &&
                            (-1 !=
                              ie.transitions.nextSlide.data.$background
                                .attr("src")
                                .toLowerCase()
                                .indexOf("png") ||
                              ie.transitions.nextSlide.data.$background.width() < ie.slider.width ||
                              ie.transitions.nextSlide.data.$background.height() <
                                ie.slider.height))) &&
                        (ee.opacity = 0),
                      ("slide" == o.transition.type || 1 == v) &&
                        -1 == o.name.toLowerCase().indexOf("mirror"))
                    ) {
                      var te = 0;
                      (0 !== Y && (te = -Y),
                        (ee.x = Q),
                        (ee.y = G),
                        (ee.rotation = te),
                        (ee.scale = this.scale2D),
                        (ee.opacity = Z));
                    }
                    void 0 !== S &&
                      ie.transitions._slideTransition.to(
                        S[0],
                        o.transition.duration / 1e3,
                        {
                          autoCSS: !1,
                          css: ee,
                          ease: ie.functions.convert.easing(o.transition.easing),
                        },
                        X,
                      );
                  }
                  ((x = (b % n) * i),
                    (T = Math.floor(b / n) * a),
                    void 0 !== ie.transitions.curSlide.data.$background &&
                      ((C = ie.transitions.curSlide.data.$background.data(
                        ie.defaults.init.dataKey,
                      )),
                      "3d" === e ||
                      ("2d" === e && (!0 === y || "slide" === o.transition.type || !0 === v))
                        ? S.append(
                            se("<img>")
                              .attr("src", h)
                              .css({
                                width: C.responsive.width,
                                height: C.responsive.height,
                                "-webkit-filter": C.responsive.filter,
                                filter: C.responsive.filter,
                                "-ms-transform":
                                  "translateX(" +
                                  (C.responsive.x - x) +
                                  "px) translateY(" +
                                  (C.responsive.y - T) +
                                  "px)" +
                                  C.responsive.kbRotation +
                                  C.responsive.kbScale,
                                "-webkit-transform":
                                  "translateX(" +
                                  (C.responsive.x - x) +
                                  "px) translateY(" +
                                  (C.responsive.y - T) +
                                  "px)" +
                                  C.responsive.kbRotation +
                                  C.responsive.kbScale,
                                transform:
                                  "translateX(" +
                                  (C.responsive.x - x) +
                                  "px) translateY(" +
                                  (C.responsive.y - T) +
                                  "px)" +
                                  C.responsive.kbRotation +
                                  C.responsive.kbScale,
                              }),
                          )
                        : 0 === this.$curTiles.children().length &&
                          this.$curTiles
                            .css("background-color", ie.transitions.curSlide.data.backgroundColor)
                            .append(
                              se("<img>")
                                .attr("src", h)
                                .css({
                                  width: C.responsive.width,
                                  height: C.responsive.height,
                                  "-webkit-filter": C.responsive.filter,
                                  filter: C.responsive.filter,
                                  "-ms-transform":
                                    "translateX(" +
                                    C.responsive.x +
                                    "px) translateY(" +
                                    C.responsive.y +
                                    "px)" +
                                    C.responsive.kbRotation +
                                    C.responsive.kbScale,
                                  "-webkit-transform":
                                    "translateX(" +
                                    C.responsive.x +
                                    "px) translateY(" +
                                    C.responsive.y +
                                    "px)" +
                                    C.responsive.kbRotation +
                                    C.responsive.kbScale,
                                  transform:
                                    "translateX(" +
                                    C.responsive.x +
                                    "px) translateY(" +
                                    C.responsive.y +
                                    "px)" +
                                    C.responsive.kbRotation +
                                    C.responsive.kbScale,
                                }),
                            )),
                    "transparent" === ie.transitions.curSlide.data.backgroundColor ||
                      ie.transitions.curSlide.data.$backgroundVideo.length ||
                      ("3d" === e ||
                      ("2d" === e && (!0 === y || "slide" === o.transition.type || !0 === v))
                        ? S.css("background-color", ie.transitions.curSlide.data.backgroundColor)
                        : 0 === this.$curTiles.children().length &&
                          this.$curTiles.css(
                            "background-color",
                            ie.transitions.curSlide.data.backgroundColor,
                          )),
                    void 0 !== ie.transitions.nextSlide.data.$background &&
                      ((I = (k = ie.transitions.nextSlide.data.$background.data(
                        ie.defaults.init.dataKey,
                      )).kenBurns[f]),
                      w.append(
                        se("<img>")
                          .attr("src", m)
                          .css({
                            width: k.responsive.width,
                            height: k.responsive.height,
                            "-webkit-filter": ie.transitions.nextSlide.filter.from || "none",
                            filter: ie.transitions.nextSlide.filter.from || "none",
                            "-ms-transform":
                              "translateX(" +
                              (k.responsive.x - x) +
                              "px) translateY(" +
                              (k.responsive.y - T) +
                              "px) rotate(" +
                              I.rotation +
                              "deg) scale(" +
                              I.scale +
                              ")",
                            "-webkit-transform":
                              "translateX(" +
                              (k.responsive.x - x) +
                              "px) translateY(" +
                              (k.responsive.y - T) +
                              "px) rotate(" +
                              I.rotation +
                              "deg) scale(" +
                              I.scale +
                              ")",
                            transform:
                              "translateX(" +
                              (k.responsive.x - x) +
                              "px) translateY(" +
                              (k.responsive.y - T) +
                              "px) rotate(" +
                              I.rotation +
                              "deg) scale(" +
                              I.scale +
                              ")",
                          }),
                      )),
                    "transparent" === ie.transitions.nextSlide.data.backgroundColor ||
                      ie.transitions.nextSlide.data.$backgroundVideo.length ||
                      w.css("background-color", ie.transitions.nextSlide.data.backgroundColor));
                }
                (ie.transitions.slide.$wrapper.prependTo(
                  ie.o.preferBlendMode ? ie.slider.$layersWrapper : ie.slider.$innerWrapper,
                ),
                  ie.transitions.slide.start());
              },
              createCuboids: function (e, t, i, a, s, r, o, n, l, d) {
                var u = "translate3d( " + s + "px, " + r + "px, " + o + "px)";
                (0 !== n && (u += "rotateX( " + n + "deg)"),
                  0 !== l && (u += "rotateY( " + l + "deg)"));
                var p = {
                  width: i,
                  height: a,
                  transform: u,
                  "-ms-transform": u,
                  "-webkit-transform": u,
                };
                (d &&
                  ((p["transform-origin"] = d),
                  (p["-ms-transform-origin"] = d),
                  (p["-webkit-transform-origin"] = d)),
                  se("<div>").addClass(e).css(p).appendTo(t));
              },
            },
          },
          layers: {
            in: {
              onStart: function (e) {
                (e.data(ie.defaults.init.dataKey).hover.enabled &&
                  ie.transitions.layers.hover.enable(e),
                  ie.layers.set.dataAttribute(e, "animating-in"));
              },
              onComplete: function (e) {
                (ie.media.functions.playIfAllowed(e), ie.layers.set.dataAttribute(e, "active"));
              },
            },
            out: {
              forced: function () {
                if (ie.transitions._forceLayersOut) {
                  if (ie.transitions._slideTimeline) {
                    var s,
                      r,
                      o = new ae.TimelineMax({ paused: !0, autoRemoveChildren: !0 }),
                      n = [],
                      e = ie.layers
                        .get("current, in, static, active")
                        .add(ie.layers.get("current, out, static, active")),
                      t = ie.layers.get("current, out, notstatic, active"),
                      i = ie.layers.get("current, out, active"),
                      a = se().add(e).add(t);
                    (a.each(function () {
                      var e,
                        t = se(this).data(ie.defaults.init.dataKey);
                      if (
                        (t.loop._timeline &&
                          (ie.transitions._slideTimeline.remove(t.loop._timeline),
                          t.loop._timeline.play()),
                        t.is.static)
                      ) {
                        ((s = [t.elements.$wrapper[0]]),
                          t.elements.$clipWrapper && (s = s.concat(t.elements.$clipWrapper[0])),
                          t.textIn.nodes && (s = s.concat(t.textIn.nodes)));
                        for (var i = 0; i < s.length; i++)
                          n = n.concat(ie.transitions._slideTimeline.getTweensOf(s[i], !0));
                        for (var a = 0; a < n.length; a++)
                          n[a].duration &&
                            0 !== n[a].duration() &&
                            ((r = n[a]), (e = r), o.add(e, 100 - e.duration() * e.progress()));
                      }
                    }),
                      i.each(function () {
                        se(this).data(ie.defaults.init.dataKey).should.reset = !0;
                      }),
                      o.play().seek(100),
                      ie.transitions._slideTimeline.eventCallback("onStart", null),
                      ie.transitions._slideTimeline.eventCallback("onComplete", null),
                      ie.transitions._slideTimeline.eventCallback("onReverseComplete", null),
                      ie.transitions._slideTimeline.eventCallback("onUpdate", null),
                      ie.transitions._slideTimeline.stop().clear());
                  }
                  ie.transitions._forceLayersOut.play();
                }
                ie.slider.$layersWrapper.find(".ls-link").css({ display: "none" });
              },
              onStart: function (e) {
                ie.layers.set.dataAttribute(e, "animating-out");
              },
              onComplete: function (e) {
                var t = e.data(ie.defaults.init.dataKey);
                ((!ie.slider.state.changingSlides &&
                  t.settings.slideOut === ie.slides.current.index) ||
                  ie.transitions.layers.reset(e, t),
                  t.hover.enabled && ie.transitions.layers.hover.disable(e),
                  ie.layers.set.dataAttribute(e, "hidden"));
              },
            },
            reset: function (e, t) {
              (t.loop._timeline &&
                (t.loop._timeline.stop().clear(),
                delete t.loop._timeline,
                ae.TweenMax.set(t.elements.$loopWrapper[0], t.reset.loopWrapperOnSlideChange)),
                ae.TweenMax.set(t.elements.$wrapper[0], t.reset.wrapperOnSlideChange),
                ae.TweenMax.set(e[0], { "-webkit-filter": "none", filter: "none" }),
                t.should.update &&
                  ((t.textInNodesFrom.random = {}),
                  (t.textOutNodesTo.random = {}),
                  ie.layers.update.data(e)),
                (t.should.reset = !1));
            },
            timeline: {
              shouldRestart: !1,
              create: function (e) {
                var t,
                  i,
                  a,
                  s,
                  r = e ? "current" : "next";
                ((ie.transitions.curNext = r),
                  (ie.transitions.layers.timeline.shouldRestart = !1),
                  ie.transitions.layers.timeline.resetStates(),
                  ie.transitions._slideTimeline &&
                    (ie.transitions._slideTimeline.pause().progress(0).kill().clear(!0),
                    (ie.transitions._slideTimeline = null)),
                  (ie.transitions._slideTimeline = new ae.TimelineMax({
                    paused: !0,
                    onStart: function () {
                      ie.api.hasEvent("slideTimelineDidStart") &&
                        _.triggerHandler("slideTimelineDidStart", ie.api.eventData());
                    },
                    onComplete: function () {
                      ie.o.playByScroll &&
                        ie.o.playByScrollSkipSlideBreaks &&
                        ("next" === ie.slideshow.direction
                          ? ie.transitions.layers.timeline.scrollForward(!0)
                          : ie.transitions.layers.timeline.scrollBackwards(!0, !0));
                    },
                    onReverseComplete: function () {
                      (ie.api.hasEvent("slideTimelineDidReverseComplete") &&
                        _.triggerHandler("slideTimelineDidReverseComplete", ie.api.eventData()),
                        ie.transitions.layers.timeline.shouldReplay &&
                          ((ie.transitions.layers.timeline.shouldRestart = !1),
                          ie.transitions._slideTimeline.play()),
                        ie.o.playByScroll &&
                          ie.o.playByScrollSkipSlideBreaks &&
                          ie.transitions.layers.timeline.scrollBackwards(!0, !1));
                    },
                    onUpdate: function (e) {
                      ie.api.hasEvent("slideTimelineDidUpdate") &&
                        _.triggerHandler("slideTimelineDidUpdate", e);
                    },
                    onUpdateParams: ["{self}"],
                  })),
                  (this.totalDuration = 0),
                  (this.progress = 1),
                  (ie.transitions._forceLayersOut = new ae.TimelineMax({
                    paused: !0,
                    autoRemoveChildren: !0,
                  })),
                  (t = ie.layers.get(r + ", in, notactive")),
                  (i = ie.layers
                    .get(r + ", out, notstatic")
                    .add(ie.layers.get(r + ", out, active, static"))),
                  (a = ie.layers.get(r + ", in, bgonly, notactive")),
                  (s = se().add(t).add(i).add(a)),
                  this.addLayers(
                    t,
                    "in",
                    ie.transitions._slideTimeline,
                    ie.transitions._forceLayersOut,
                  ),
                  this.addLayers(
                    i,
                    "out",
                    ie.transitions._slideTimeline,
                    ie.transitions._forceLayersOut,
                  ),
                  -1 !== ie.slides[r].data.duration &&
                  ie.slides[r].data.duration < this.totalDuration
                    ? ((this.progress = ie.slides[r].data.duration / this.totalDuration),
                      ie.debugMode &&
                        ie.debug.add("warn", "slideTimeline.duration", [
                          ie.slides[r].data.duration,
                          this.totalDuration,
                        ]))
                    : ie.transitions._slideTimeline.duration() > this.totalDuration &&
                      (this.progress =
                        this.totalDuration / ie.transitions._slideTimeline.duration()),
                  -1 === ie.slides[r].data.duration
                    ? ((ie.slides[r].data.duration = this.totalDuration),
                      (ie.slides[ie.slides[r].index].data.duration = this.totalDuration))
                    : (this.totalDuration = ie.slides[r].data.duration),
                  this.addLayers(
                    a,
                    "in",
                    ie.transitions._slideTimeline,
                    ie.transitions._forceLayersOut,
                  ),
                  !0 === ie.transitions.layers.timeline.shouldRestart &&
                    ie.debugMode &&
                    ie.debug.add(
                      "warn",
                      "slideTimeline.restart",
                      ie.o.allowRestartOnResize ? "enabled" : "disabled",
                    ));
                for (var o = 0; o < s.length; o++)
                  se(s[o]).data(ie.defaults.init.dataKey).parallax.enabled &&
                    se(s[o])
                      .data(ie.defaults.init.dataKey)
                      .elements.$parallaxWrapper.attr("data-ls-parallax", "active");
                if (
                  (ie.transitions.layers.parallax.trigger(),
                  ie.api.hasEvent("slideTimelineDidCreate") &&
                    _.triggerHandler("slideTimelineDidCreate", {
                      slideTimeline: ie.transitions._slideTimeline,
                      layersOnSlideTimeline: s,
                      slideTimelineDuration: this.totalDuration,
                    }),
                  ie.transitions.timers.create(),
                  ie.transitions.timers.bar._transition &&
                    ie.transitions._slideTimeline.add(
                      ie.transitions.timers.bar._transition.play(),
                      0,
                    ),
                  ie.transitions.timers.circle._transition &&
                    ie.transitions._slideTimeline.add(
                      ie.transitions.timers.circle._transition.play(),
                      0,
                    ),
                  ie.transitions.timers.slidebar._transition &&
                    ie.transitions._slideTimeline.add(
                      ie.transitions.timers.slidebar._transition.play(),
                      0,
                    ),
                  ie.transitions._slideTimeline.call(
                    function () {
                      if (!ie.transitions._slideTimeline.reversed()) {
                        if (
                          ie.api.hasEvent("slideTimelineDidComplete") &&
                          !1 === _.triggerHandler("slideTimelineDidComplete", ie.api.eventData())
                        )
                          return;
                        (ie.functions.setStates(ie.transitions.layers.timeline, { finished: !0 }),
                          !ie.slideshow.isPaused() && ie.slideshow.state.running
                            ? ie.slideshow.changeTo(ie.slides.next.index)
                            : ie.slideshow.state.pausedByLastCycle &&
                              ie.transitions.timers.reverse());
                      }
                    },
                    [],
                    this,
                    ie.slides[r].data.duration,
                  ),
                  ie.slides.next.data.$link && ie.slides.next.data.$link.css({ display: "block" }),
                  ((!ie.o.startInViewport ||
                    ("inside" !== ie.slider.positionToViewport && !ie.o.playByScrollStart)) &&
                    ie.o.startInViewport) ||
                    (!(
                      ie.slider.isPopup &&
                      ie.slider.state.popupIsVisible &&
                      ie.slider.state.popupShouldStart
                    ) &&
                      ie.slider.isPopup) ||
                    (ie.o.pauseLayers &&
                      ie.slideshow.isPaused() &&
                      ie.transitions._slideTimeline.timeScale(0),
                    ie.transitions.layers.timeline.play(),
                    ie.o.playByScroll &&
                      "up" === ie.device.scroll.directionAtSlideTransitionStart &&
                      ie.transitions._slideTimeline.progress(1)),
                  _.trigger("mouseleave.globalhover" + z),
                  _.off(
                    "mouseenter.globalhover" +
                      z +
                      " mouseleave.globalhover" +
                      z +
                      " mousemove.globalhover" +
                      z,
                  ),
                  ie.slides[r].data.globalhover)
                ) {
                  var n = ie.layers.get(r + ",in,notactive").add(ie.layers.get("static,active"));
                  (_.on("mouseenter.globalhover" + z, function () {
                    n.each(function () {
                      ie.transitions.layers.hover.mouseEnter(
                        se(this),
                        se(this).data(ie.defaults.init.dataKey),
                      );
                    });
                  }),
                    _.on("mouseleave.globalhover" + z, function () {
                      n.each(function () {
                        ie.transitions.layers.hover.mouseLeave(
                          se(this),
                          se(this).data(ie.defaults.init.dataKey),
                        );
                      });
                    }),
                    _.on("mousemove.globalhover" + z, function () {
                      n.each(function () {
                        ie.transitions.layers.hover.mouseMove(
                          se(this),
                          se(this).data(ie.defaults.init.dataKey),
                        );
                      });
                    }));
                }
              },
              prepare: function () {
                (ie.slides.next.data.overflow && "hidden" !== ie.slides.next.data.overflow
                  ? (ie.slider.$layersWrapper.addClass("ls-visible"),
                    ie.slider.$slideBGWrapper.addClass("ls-visible"))
                  : (ie.slider.$layersWrapper.removeClass("ls-visible"),
                    ie.slider.$slideBGWrapper.removeClass("ls-visible")),
                  this.create());
              },
              getTiming: function (e, t, i, a) {
                if ("number" == typeof t) return t;
                t = t.toLowerCase();
                var s,
                  r,
                  o,
                  n,
                  l,
                  d = ie.defaults.layer.timelineHierarchy,
                  u = 0;
                if (
                  (-1 !== t.indexOf("*") && (l = "*"),
                  -1 !== t.indexOf("/") && (l = "/"),
                  -1 !== t.indexOf("+") && (l = "+"),
                  -1 !== t.indexOf("-") && (l = "-"),
                  l)
                )
                  if (
                    ((n = t.split(l)),
                    (s = se.trim(n[0])),
                    (o = parseInt(se.trim(n[1]))),
                    d[s] && -1 !== d[i][1].indexOf(d[s][0]))
                  )
                    if (
                      ((r = "number" == typeof e.timeline[s] ? e.timeline[s] : e.timeline[s](e)), a)
                    )
                      u = o / 1e3;
                    else
                      switch (l) {
                        case "*":
                          u = r * o;
                          break;
                        case "/":
                          u = r / o;
                          break;
                        case "+":
                          u = r + o / 1e3;
                          break;
                        case "-":
                          u = r - o / 1e3;
                      }
                  else
                    (ie.debugMode &&
                      (d[s] || ie.debug.add("warn", "layerTransition.timing1", s),
                      -1 === d[i][1].indexOf(d[s][0]) &&
                        ie.debug.add("warn", "layerTransition.timing3", [s, d[s], i, d[i]])),
                      ("+" !== l && !a) || (u = o / 1e3));
                else
                  d[(s = se.trim(t))] && -1 !== d[i][1].indexOf(d[s][0])
                    ? (u = a
                        ? 0
                        : "number" == typeof e.timeline[s]
                          ? e.timeline[s]
                          : e.timeline[s](e))
                    : ie.debugMode &&
                      (d[s]
                        ? -1 === d[i][1].indexOf(d[s][0]) &&
                          ie.debug.add("warn", "layerTransition.timing3", [s, d[s], i, d[i]])
                        : ie.debug.add("warn", "layerTransition.timing1", s));
                return (
                  (u != u || u < 0) &&
                    (ie.debugMode && ie.debug.add("warn", "layerTransition.timing2", [i, s, u]),
                    (u = 0)),
                  u
                );
              },
              addLayers: function (e, t, i, a) {
                for (var s = 0, r = e.length; s < r; s++) {
                  var o,
                    n = se(e[s]),
                    l = n.data(ie.defaults.init.dataKey),
                    d = l.elements.$wrapper,
                    u = l.elements.$clipWrapper,
                    p = l.elements.$loopWrapper;
                  if ((l.should.reset && ie.transitions.layers.reset(n, l), n.hasClass("ls-bg")))
                    (l.kenBurns.zoom &&
                      i.fromTo(
                        n.closest(".ls-bg-wrap"),
                        ie.transitions.nextSlide.data.duration +
                          ie.transitions.nextSlide.data.calculatedTimeShift,
                        { autoCSS: !1, css: l.kenBurns.from },
                        { autoCSS: !1, css: l.kenBurns.to, ease: ae.Quad.easeInOut },
                        -ie.transitions.nextSlide.data.calculatedTimeShift,
                      ),
                      (se.isEmptyObject(l.filter.values.bgFrom) &&
                        se.isEmptyObject(l.filter.values.bgTo)) ||
                        (l.filter.transitions.bg ||
                          (l.filter.transitions.bg = ie.transitions.layers.filters.createTransition(
                            l,
                            "bg",
                            l.filter.values.bgFrom,
                            l.filter.values.bgTo,
                          )),
                        i.to(
                          [{ p: 0 }, n[0]],
                          ie.transitions.nextSlide.data.duration,
                          {
                            p: 1,
                            autoCSS: !1,
                            ease: ae.Sine.easeInOut,
                            onUpdate: ie.transitions.layers.filters.animate,
                            onUpdateParams: ["{self}", l.filter.transitions.bg],
                          },
                          0,
                        )));
                  else
                    switch (t) {
                      case "in":
                        if (
                          (l.in.enabled &&
                            (l.settings.timelineIsCalculated ||
                              ("number" != typeof l.in.startAt && (l.in.startAt = 0),
                              (l.timeline.transitioninstart = l.in.startAt),
                              (l.timeline.transitioninend =
                                l.timeline.transitioninstart + l.in.duration)),
                            ie.resize.transformProperties(
                              n,
                              l.inLayerFromCSS,
                              l.inLayerShouldBeConverted,
                            ),
                            ie.resize.styleProperties(
                              l.inLayerStyleFromCSS,
                              l.inLayerStyleShouldBeConvertedFrom,
                            ),
                            ie.resize.styleProperties(
                              l.inLayerStyleToCSS,
                              l.inLayerStyleShouldBeConvertedTo,
                            ),
                            (l.inLayerFromCSS.transformPerspective =
                              l.transformPerspective.layer * ie.resize.ratio),
                            l.clip.enabled &&
                              (l.original.clip ||
                                ((l.original.clip = l.clip.min),
                                (l.original.clipShouldBeConverted = !0)),
                              l.inClipShouldBeConverted.clip
                                ? ((l.inClipFromCSS.clip = ie.resize.clip(
                                    n,
                                    l.inClipShouldBeConverted.clip,
                                    !0,
                                  )),
                                  (l.inClipToCSS.clip = ie.resize.clip(
                                    n,
                                    l.original.clip,
                                    l.original.clipShouldBeConverted,
                                  )),
                                  i.fromTo(
                                    u[0],
                                    l.in.duration,
                                    l.inClipFrom,
                                    l.inClipTo,
                                    l.timeline.transitioninstart,
                                  ))
                                : ae.TweenMax.set(u[0], {
                                    clip: ie.resize.clip(
                                      n,
                                      l.original.clip,
                                      l.original.clipShouldBeConverted,
                                    ),
                                  }),
                              (ie.transitions.layers.timeline.shouldRestart = !0)),
                            se.isEmptyObject(l.filter.values.in)
                              ? se.isEmptyObject(l.filter.values.out) ||
                                n.css("filter", l.original.filter)
                              : (l.filter.transitions.in ||
                                  (l.filter.transitions.in =
                                    ie.transitions.layers.filters.createTransition(
                                      l,
                                      "in",
                                      l.filter.values.in,
                                      l.filter.values.style,
                                    )),
                                i.to(
                                  [{ p: 0 }, n[0]],
                                  l.in.duration,
                                  {
                                    p: 1,
                                    autoCSS: !1,
                                    ease: l.inLayerTo.ease,
                                    onUpdate: ie.transitions.layers.filters.animate,
                                    onUpdateParams: ["{self}", l.filter.transitions.in],
                                  },
                                  l.timeline.transitioninstart,
                                )),
                            i.fromTo(
                              d[0],
                              l.in.duration,
                              l.inLayerFrom,
                              l.inLayerTo,
                              l.timeline.transitioninstart,
                            ),
                            i.fromTo(
                              n[0],
                              l.in.duration,
                              l.inLayerStyleFrom,
                              l.inLayerStyleTo,
                              l.timeline.transitioninstart,
                            )),
                          l.is.textLayer &&
                            ((l.textIn.type || l.textOut.type) &&
                              ie.transitions.layers.splitType.resetNodes(n, l),
                            l.textIn.enabled &&
                              (l.in.enabled ||
                                i.to(
                                  d[0],
                                  0,
                                  se.extend(!0, {}, l.inLayerTo, l.init.wrapper),
                                  l.timeline.textinstart,
                                ),
                              (l.textIn.nodes = ie.transitions.layers.splitType.setNodesSequence(
                                l.textIn.type.split("_"),
                                l.textIn.ns,
                              )),
                              ie.resize.transformProperties(
                                n,
                                l.textInNodesFrom,
                                l.textInShouldBeConverted,
                              ),
                              (l.textInNodesFrom.transformPerspective =
                                l.transformPerspective.text * ie.resize.ratio),
                              se.isEmptyObject(l.textInShouldBeConverted.random) ||
                                ie.transitions.layers.splitType.setRandomProperties(
                                  l,
                                  l.textInShouldBeConverted.random,
                                  l.textInNodesFrom,
                                ),
                              se.isEmptyObject(l.textInNodesFrom.random) ||
                                ie.transitions.layers.splitType.setRandomProperties(
                                  l,
                                  l.textInNodesFrom.random,
                                  l.textInNodesFrom,
                                ),
                              delete l.textInNodesFrom.random,
                              l.settings.timelineIsCalculated ||
                                ((l.timeline.textinstart = this.getTiming(
                                  l,
                                  l.textIn.startAt,
                                  "textinstart",
                                )),
                                (l.timeline.textinend =
                                  l.timeline.textinstart +
                                  (l.textIn.nodes.length - 1) * l.textIn.shiftNodes +
                                  l.textIn.duration)),
                              i.staggerFromTo(
                                l.textIn.nodes,
                                l.textIn.duration,
                                l.textInNodesFrom,
                                l.textInNodesTo,
                                l.textIn.shiftNodes,
                                l.timeline.textinstart,
                                function (e) {
                                  ie.transitions.layers.in.onComplete(e);
                                },
                                [n],
                              ))),
                          l.is.keyframe &&
                            ie.o.playByScroll &&
                            i.addPause(l.timeline.allinend(), function () {
                              setTimeout(function () {
                                (delete ie.timeouts.scroll,
                                  (ie.transitions.layers.timeline.timeScaleModifier = 0),
                                  (ie.device.scroll.timeout = 250));
                              }, 500);
                            }),
                          l.loop.enabled)
                        ) {
                          var c = new ae.TimelineMax({
                            repeat: l.loop.repeat,
                            repeatDelay: l.loop.repeatDelay,
                            yoyo: l.loop.yoyo,
                            paused: !0,
                          });
                          ((l.settings.timelineIsCalculated && !l.is.static) ||
                            ((l.timeline.loopstart = this.getTiming(
                              l,
                              l.loop.startAt,
                              "loopstart",
                            )),
                            (l.timeline.loopend =
                              -1 !== l.loop.count &&
                              l.timeline.loopstart +
                                (l.loop.repeat + 1) * l.loop.duration +
                                l.loop.repeat * l.loop.repeatDelay)),
                            (l.loop._timeline = c),
                            ie.resize.transformProperties(n, l.loopToCSS, {
                              x: l.loopLayerShouldBeConverted.x,
                              y: l.loopLayerShouldBeConverted.y,
                            }),
                            ((l.loopToCSS.x && 0 !== l.loopToCSS.x) ||
                              (l.loopToCSS.y && 0 !== l.loopToCSS.y)) &&
                              (ie.transitions.layers.timeline.shouldRestart = !0),
                            (l.loopFromCSS.transformOrigin = ie.functions.convert.transformOrigin(
                              l.loopLayerShouldBeConverted.transformOrigin,
                              n,
                            )),
                            (l.loopFromCSS.transformPerspective =
                              l.transformPerspective.loop * ie.resize.ratio),
                            se.isEmptyObject(l.filter.values.loop) ||
                              (l.filter.transitions.loop ||
                                (l.filter.transitions.loop =
                                  ie.transitions.layers.filters.createTransition(
                                    l,
                                    "loop",
                                    se.isEmptyObject(l.filter.values.afterIn)
                                      ? l.filter.values.style
                                      : l.filter.values.afterIn,
                                    l.filter.values.loop,
                                  )),
                              c.to(
                                [{ p: 0 }, n[0]],
                                l.loop.duration,
                                {
                                  p: 1,
                                  autoCSS: !1,
                                  ease: l.loopTo.ease,
                                  onUpdate: ie.transitions.layers.filters.animate,
                                  onUpdateParams: ["{self}", l.filter.transitions.loop],
                                },
                                0,
                              )),
                            c.fromTo(p[0], l.loop.duration, l.loopFrom, l.loopTo, 0),
                            l.loopClipShouldBeConverted.clip &&
                              ((l.loopClipToCSS.clip = ie.resize.clip(
                                n,
                                l.loopClipShouldBeConverted.clip,
                                !0,
                              )),
                              c.to(u[0], l.loop.duration, l.loopClipTo, 0),
                              (ie.transitions.layers.timeline.shouldRestart = !0)),
                            -1 !== l.loop.repeat &&
                            ("looplayers" === ie.o.pauseOnHover ||
                              ie.gui.timers.slidebar.$element ||
                              ie.o.playByScroll)
                              ? (i.add(c, l.timeline.loopstart), c.play())
                              : i.addCallback(
                                  function (e) {
                                    e.play();
                                  },
                                  l.timeline.loopstart,
                                  [c],
                                ));
                        }
                        l.is.static &&
                          ((l.timeline.staticfrom = l.timeline.transitioninend),
                          (l.timeline.staticto = "100%"),
                          l.settings.timelineIsCalculated ||
                            ((o = Math.max(l.timeline.allinandloopend(), 0)),
                            (this.totalDuration = Math.max(this.totalDuration, o))));
                        break;
                      case "out":
                        (l.is.textLayer &&
                          l.textOut.enabled &&
                          ((l.textOut.nodes = ie.transitions.layers.splitType.setNodesSequence(
                            l.textOut.type.split("_"),
                            l.textOut.ns,
                          )),
                          ie.resize.transformProperties(
                            n,
                            l.textOutNodesTo,
                            l.textOutShouldBeConverted,
                            l.textOutNodesFrom,
                          ),
                          (l.textOutNodesFrom.transformPerspective =
                            l.transformPerspective.text * ie.resize.ratio),
                          se.isEmptyObject(l.textOutShouldBeConverted.random) ||
                            ie.transitions.layers.splitType.setRandomProperties(
                              l,
                              l.textOutShouldBeConverted.random,
                              l.textOutNodesTo,
                            ),
                          se.isEmptyObject(l.textOutNodesTo.random) ||
                            ie.transitions.layers.splitType.setRandomProperties(
                              l,
                              l.textOutNodesTo.random,
                              l.textOutNodesTo,
                            ),
                          delete l.textOutNodesTo.random,
                          l.settings.timelineIsCalculated ||
                            ((l.timeline.textoutstart = this.getTiming(
                              l,
                              l.textOut.startAt,
                              "textoutstart",
                            )),
                            (l.timeline.textoutend =
                              l.timeline.textoutstart +
                              (l.textOut.nodes.length - 1) * l.textOut.shiftNodes +
                              l.textOut.duration)),
                          l.clip.enabled &&
                            (void 0 === l.outClipShouldBeConverted.clip &&
                              i.to(
                                u[0],
                                0,
                                {
                                  immediateRender: !1,
                                  css: { clip: ie.resize.clip(n, l.clip.max) },
                                },
                                l.timeline.textoutstart,
                              ),
                            (ie.transitions.layers.timeline.shouldRestart = !0)),
                          i.staggerFromTo(
                            l.textOut.nodes,
                            l.textOut.duration,
                            l.textOutNodesFrom,
                            l.textOutNodesTo,
                            l.textOut.shiftNodes,
                            l.timeline.textoutstart,
                          )),
                          ie.resize.transformProperties(
                            n,
                            l.outLayerToCSS,
                            l.outLayerShouldBeConverted,
                            l.outLayerFromCSS,
                          ),
                          ie.resize.styleProperties(
                            l.outLayerStyleFromCSS,
                            l.outLayerStyleShouldBeConvertedFrom,
                          ),
                          ie.resize.styleProperties(
                            l.outLayerStyleToCSS,
                            l.outLayerStyleShouldBeConvertedTo,
                          ),
                          (l.outLayerFromCSS.transformPerspective =
                            l.transformPerspective.layer * ie.resize.ratio),
                          "slidechangeonly" !== l.out.startAt
                            ? ((l.settings.timelineIsCalculated && !l.is.static) ||
                                (l.is.static
                                  ? ((l.timeline.staticfrom = 0),
                                    (l.timeline.transitionoutstart = this.getTiming(
                                      l,
                                      l.out.startAt,
                                      "transitionoutstart",
                                      !0,
                                    )),
                                    (l.timeline.staticto = l.timeline.transitionoutstart))
                                  : (l.timeline.transitionoutstart = Math.max(
                                      this.getTiming(l, l.out.startAt, "transitionoutstart"),
                                      l.timeline.transitioninend,
                                    )),
                                (l.timeline.transitionoutend =
                                  l.timeline.transitionoutstart + l.out.duration)),
                              l.clip.enabled &&
                                (void 0 === l.outClipShouldBeConverted.clip
                                  ? i.to(
                                      u[0],
                                      0,
                                      {
                                        immediateRender: !1,
                                        css: { clip: ie.resize.clip(n, l.clip.max) },
                                      },
                                      l.timeline.transitionoutstart,
                                    )
                                  : ((l.outClipToCSS.clip = ie.resize.clip(
                                      n,
                                      l.outClipShouldBeConverted.clip,
                                      !0,
                                    )),
                                    i.to(
                                      u[0],
                                      l.out.duration,
                                      l.outClipTo,
                                      l.timeline.transitionoutstart,
                                    )),
                                (ie.transitions.layers.timeline.shouldRestart = !0)),
                              se.isEmptyObject(l.filter.values.out) ||
                                (l.filter.transitions.out ||
                                  (l.filter.transitions.out =
                                    ie.transitions.layers.filters.createTransition(
                                      l,
                                      "out",
                                      se.isEmptyObject(l.filter.values.afterLoop)
                                        ? se.isEmptyObject(l.filter.values.afterIn)
                                          ? l.filter.values.style
                                          : l.filter.values.afterIn
                                        : l.filter.values.afterLoop,
                                      l.filter.values.out,
                                    )),
                                i.to(
                                  [{ p: 0 }, n[0]],
                                  l.out.duration,
                                  {
                                    p: 1,
                                    autoCSS: !1,
                                    ease: l.outLayerTo.ease,
                                    onUpdate: ie.transitions.layers.filters.animate,
                                    onUpdateParams: ["{self}", l.filter.transitions.out],
                                  },
                                  l.timeline.transitionoutstart,
                                )),
                              i.fromTo(
                                d[0],
                                l.out.duration,
                                l.outLayerFrom,
                                l.outLayerTo,
                                l.timeline.transitionoutstart,
                              ),
                              i.fromTo(
                                n[0],
                                l.out.duration,
                                l.outLayerStyleFrom,
                                l.outLayerStyleTo,
                                l.timeline.transitionoutstart,
                              ),
                              i.fromTo(
                                d[0],
                                0,
                                l.init.wrapper,
                                l.reset.wrapperOnTimelineEnd,
                                l.timeline.transitionoutend,
                              ))
                            : ((l.timeline.staticfrom = 0), (l.timeline.staticto = "100%")),
                          (!l.is.static ||
                            (l.is.static && l.settings.slideOut === ie.slides.next.index)) &&
                            (a.fromTo(
                              d[0],
                              ie.o.forceLayersOutDuration,
                              l.outLayerFrom,
                              l.outLayerTo,
                              0,
                            ),
                            a.fromTo(
                              n[0],
                              ie.o.forceLayersOutDuration,
                              l.outLayerStyleFrom,
                              l.outLayerStyleTo,
                              0,
                            ),
                            l.clip.enabled &&
                              void 0 !== l.outClipShouldBeConverted.clip &&
                              ((l.outClipToCSS.clip = ie.resize.clip(
                                n,
                                l.outClipShouldBeConverted.clip,
                                !0,
                              )),
                              a.to(u[0], ie.o.forceLayersOutDuration, l.outClipTo, 0))),
                          (o = Math.max(l.timeline.alloutandloopend(), 0)),
                          (this.totalDuration = Math.max(this.totalDuration, o)),
                          (l.settings.timelineIsCalculated = !0));
                    }
                }
              },
              play: function () {
                ie.transitions._slideTimeline &&
                  (ie.transitions._slideTimeline.play(),
                  ie.functions.setStates(this, {
                    started: !0,
                    running: !0,
                    stopped: !1,
                    paused: !1,
                  }));
              },
              pause: function (e) {
                e = se.isNumeric(e) ? e : 0.75;
                ie.transitions._slideTimeline &&
                  (ae.TweenMax.to(ie.transitions._slideTimeline, e, { timeScale: 0 }),
                  ie.functions.setStates(this, { paused: !0, stopped: !1 }));
              },
              resume: function () {
                ie.transitions._slideTimeline &&
                  (ae.TweenMax.to(ie.transitions._slideTimeline, 0.75, { timeScale: 1 }),
                  ie.functions.setStates(this, { paused: !1, stopped: !1 }));
              },
              reverse: function () {
                ie.transitions._slideTimeline && ie.transitions._slideTimeline.reverse();
              },
              scrollForward: function (e) {
                if (
                  (e || (this.play(), this.modifyTimeScale()),
                  ie.transitions._slideTimeline &&
                    !ie.slider.isBusy() &&
                    (0 === ie.transitions._slideTimeline.totalDuration() ||
                      1 === ie.transitions._slideTimeline.progress()) &&
                    "down" === ie.device.scroll.direction)
                ) {
                  ie.slideshow.direction = "next";
                  var t = ie.slideshow.sequence.normalized;
                  t.indexOf(ie.slides.current.index) === t.length - 1
                    ? ((ie.slider.positionToViewport = "under"),
                      ie.device.scroll.enable(),
                      (ie.slideshow.direction = "prev"))
                    : ie.navigation.next();
                }
              },
              scrollBackwards: function (e, t) {
                ((e && !t) || (this.reverse(), this.modifyTimeScale()),
                  ie.transitions._slideTimeline &&
                    (ie.slider.isBusy() ||
                      (0 !== ie.transitions._slideTimeline.totalDuration() &&
                        0 !== ie.transitions._slideTimeline.progress()) ||
                      "up" !== ie.device.scroll.direction ||
                      ((ie.slideshow.direction = "prev"),
                      0 === ie.slideshow.sequence.normalized.indexOf(ie.slides.current.index)
                        ? ((ie.slider.positionToViewport = "over"),
                          ie.device.scroll.enable(),
                          (ie.slideshow.direction = "next"))
                        : ie.navigation.prev())));
              },
              modifyTimeScale: function () {
                if (ie.transitions._slideTimeline) {
                  ae.TweenMax.to(ie.transitions._slideTimeline, 0.25, {
                    timeScale: 1 + this.timeScaleModifier,
                  });
                }
              },
              resetStates: function () {
                this.state = { started: !1, running: !1, paused: !1, stopped: !1, finished: !1 };
              },
            },
            hover: {
              enable: function (e) {
                e.attr("data-ls-canhover", "1");
              },
              disable: function (e) {
                e.attr("data-ls-canhover", "0");
              },
              set: function (e, t) {
                (t.elements.$wrapper.on("mouseenter." + z, function () {
                  ie.transitions.layers.hover.mouseEnter(e, t);
                }),
                  t.elements.$wrapper.on("mouseleave." + z, function () {
                    ie.transitions.layers.hover.mouseLeave(e, t);
                  }),
                  t.elements.$wrapper.on("mousemove." + z, function () {
                    ie.transitions.layers.hover.mouseMove(e, t);
                  }));
              },
              createTimeline: function (e, t) {
                if (
                  ((t.hover._timeline = new ae.TimelineMax({
                    paused: !0,
                    onReverseComplete: function (e, t) {
                      t.hover._timeline._reversed &&
                        (t.hover._timeline.stop().clear(), delete t.hover._timeline);
                    },
                    onReverseCompleteParams: [e, t],
                  })),
                  ie.resize.transformProperties(
                    e,
                    t.hoverToCSS,
                    t.hoverShouldBeConverted,
                    t.hoverFromCSS,
                  ),
                  ie.resize.styleProperties(t.hoverToCSS, t.hoverShouldBeConverted),
                  (t.hoverFromCSS.transformPerspective =
                    t.transformPerspective.hover * ie.resize.ratio),
                  (t.hover._tween = ae.TweenMax.fromTo(
                    e[0],
                    t.hover.durationIn,
                    t.hoverFrom,
                    t.hoverTo,
                  )),
                  t.hover._timeline.add(t.hover._tween, 0),
                  e.next().is(".ls-layer-link"))
                ) {
                  var i = e.next(),
                    a = se.extend(!0, {}, t.hoverFrom, {
                      css: { opacity: 1, color: "transparent", background: "transparent", z: 0 },
                    }),
                    s = se.extend(!0, {}, t.hoverTo, {
                      css: { opacity: 1, color: "transparent", background: "transparent", z: 0 },
                    });
                  ((t.hover._linkTween = ae.TweenMax.fromTo(i[0], t.hover.durationIn, a, s)),
                    t.hover._timeline.add(t.hover._linkTween, 0));
                } else t.hover._linkTween = null;
                if (t.hover.alwaysOnTop) {
                  var r = { zIndex: 9999 };
                  (ie.browser.isSafari && (r.transform = "translateZ(999999px)"),
                    t.hover._timeline.to(
                      t.elements.$outerWrapper[0],
                      t.hover.durationIn,
                      { autoCSS: !1, css: r },
                      0,
                    ));
                }
                ((t.hover.reverseTimeScale =
                  t.hover.durationIn / t.hover.durationOut == 1
                    ? 1
                    : t.hover.durationIn / t.hover.durationOut),
                  this.hoverIn(e, t));
              },
              mouseEnter: function (e, t) {
                "1" === e.attr("data-ls-canhover") &&
                  (e.attr("data-ls-hovered", 1),
                  t.elements.$wrapper.off("mousemove." + z),
                  t.hover._timeline
                    ? (t.hover._timeline.play().stop().progress(0), this.hoverIn(e, t))
                    : this.createTimeline(e, t));
              },
              mouseLeave: function (e, t) {
                (t.hover._timeline && (t.hover._timeline.stop().progress(1), this.hoverOut(e, t)),
                  e.removeAttr("data-ls-hovered"));
              },
              mouseMove: function (e, t) {
                e.attr("data-ls-hovered") || this.mouseEnter(e, t);
              },
              hoverIn: function (e, t) {
                (t.hover._tween.updateTo({ ease: t.hover.easeIn }),
                  t.hover._linkTween && t.hover._linkTween.updateTo({ ease: t.hover.easeIn }),
                  t.hover._timeline.play().timeScale(1));
              },
              hoverOut: function (e, t) {
                (t.hover._tween.updateTo({ ease: t.hover.easeOut }),
                  t.hover._linkTween && t.hover._linkTween.updateTo({ ease: t.hover.easeOut }),
                  t.hover._timeline.reverse().timeScale(t.hover.reverseTimeScale));
              },
            },
            parallax: {
              defaultProperties: {
                type: "2d",
                event: "cursor",
                x: !0,
                y: !0,
                rotation: 10,
                distance: 10,
                durationMove: 1.5,
                durationLeave: 1.2,
                transformOrigin: "50% 50% 0",
                transformPerspective: 500,
              },
              defaults: {
                scrollModifier: 5,
                centerLayers: "center",
                centerDegree: 40,
                sensitive: 10,
              },
              state: { enabled: !1, ready: !1 },
              wrappers: { cursor: { $2d: se(), $3d: se() }, scroll: { $2d: se(), $3d: se() } },
              init: function () {
                var t = this;
                (_.on("mouseenter." + z, function () {
                  (t.wrappers.cursor.$2d.length || t.wrappers.cursor.$3d.length) &&
                    t.calculateTransformProperties();
                }),
                  _.on("mousemove." + z, function (e) {
                    (t.wrappers.cursor.$2d.length || t.wrappers.cursor.$3d.length) &&
                      t.mouseMove(e);
                  }),
                  _.on("mouseleave." + z, function () {
                    (t.wrappers.cursor.$2d.length || t.wrappers.cursor.$3d.length) && t.reset();
                  }),
                  ie.device.isMobile &&
                    ie.device.supportOrientation &&
                    (se(window).on("deviceorientation." + z, function () {
                      t.state.ready && t.deviceTurn(event);
                    }),
                    se(window).on("orientationchange." + z, function () {
                      t.calculateTransformProperties();
                    })),
                  se(window).on("scroll.parallax" + z + " touchmove.parallax" + z, function () {
                    (t.wrappers.scroll.$2d.length || t.wrappers.scroll.$3d.length) && t.scroll();
                  }),
                  (t.defaults.scrollModifier *= ie.o.parallaxScrollReverse ? -1 : 1));
              },
              addLayer: function (e, t, i, a) {
                switch (
                  (this.state.enabled ||
                    (ie.functions.setStates(this, { enabled: !0 }), this.init()),
                  se.extend(!0, t, this.defaultProperties, ie.slides[a].parallax, i.parallax),
                  i.transformPerspective.parallax
                    ? (t.transformPerspective = i.transformPerspective.parallax)
                    : (i.transformPerspective.parallax = t.transformPerspective),
                  t.event.match(/(cursor|scroll)/) || (t.event = "cursor"),
                  t.type.match(/(2d,3d)/) && (t.type = "2d"),
                  t.axis)
                ) {
                  case "none":
                    ((t.x = !1), (t.y = !1));
                    break;
                  case "x":
                    t.y = !1;
                    break;
                  case "y":
                    t.x = !1;
                }
                this.wrappers[t.event]["$" + t.type] = this.wrappers[t.event]["$" + t.type].add(e);
              },
              addShadow: function () {
                var e = ie.gui.shadow.$element,
                  t =
                    ie.slides.current && ie.slides.current.parallax
                      ? ie.slides.current.index
                      : ie.slides.next.index;
                if (
                  ie.slides[t].data.$background &&
                  ie.slides[t].data.$background.data(ie.defaults.init.dataKey).parallax.enabled &&
                  ie.slides[t].data.overflow &&
                  "hidden" !== ie.slides[t].data.overflow
                ) {
                  var i,
                    a = "50% -" + 0.25 * ie.slider.height + "px 0",
                    s = ie.slides[t].data.$background.data(ie.defaults.init.dataKey).parallax;
                  ((i =
                    void 0 !== s.rotation
                      ? 2 * s.rotation
                      : void 0 !== ie.slides[t].parallax.rotation
                        ? 2 * ie.slides[t].parallax.rotation
                        : 2 * this.defaultProperties.rotation),
                    e.data(ie.defaults.init.dataKey, {
                      parallax: se.extend(!0, {}, this.defaultProperties, ie.slides[t].parallax, {
                        level: s.level,
                        transformOrigin: a,
                        rotation: i,
                      }),
                    }),
                    e.attr("data-ls-parallax", "active"),
                    ae.TweenMax.set(e[0], {
                      transformOrigin: a,
                      transformPerspective:
                        e.data(ie.defaults.init.dataKey).parallax.transformPerspective *
                        ie.resize.ratio,
                    }),
                    "3d" === ie.slides[t].parallax.type || "3d" === s.type
                      ? (this.wrappers.cursor.$3d = this.wrappers.cursor.$3d.add(e))
                      : (this.wrappers.cursor.$2d = this.wrappers.cursor.$2d.add(e)));
                }
                this.shadowIsChecked = !0;
              },
              removeShadow: function () {
                var e = ie.gui.shadow.$element;
                ((this.wrappers.cursor.$2d = this.wrappers.cursor.$2d.not(e)),
                  (this.wrappers.cursor.$3d = this.wrappers.cursor.$3d.not(e)),
                  e.attr("data-ls-parallax", "disabled"),
                  (this.shadowIsChecked = !1));
              },
              calculateTransformProperties: function () {
                (se()
                  .add(this.wrappers.cursor.$2d)
                  .add(this.wrappers.cursor.$3d)
                  .add(this.wrappers.scroll.$2d)
                  .add(this.wrappers.scroll.$3d)
                  .each(function () {
                    var e = se(this).data(ie.defaults.init.dataKey).parallax;
                    ae.TweenMax.set(se(this)[0], {
                      transformOrigin: ie.functions.convert.transformOrigin(
                        e.transformOrigin,
                        se(this),
                        ie.slider.$layersWrapper,
                      ),
                      transformPerspective: e.transformPerspective * ie.resize.ratio,
                    });
                  }),
                  (this.transformPropertiesCalculated = !0));
              },
              deviceTurn: function (e) {
                if (this.transformPropertiesCalculated) {
                  var t,
                    i,
                    a = window.orientation;
                  ((i =
                    0 === a
                      ? ((t = 5 * -parseInt(e.gamma) * this.defaults.sensitive * ie.resize.ratio),
                        5 *
                          (this.defaults.centerDegree - parseInt(e.beta)) *
                          this.defaults.sensitive *
                          ie.resize.ratio)
                      : 90 === a
                        ? ((t = 5 * -parseInt(e.beta) * this.defaults.sensitive * ie.resize.ratio),
                          5 *
                            (parseInt(e.gamma) + this.defaults.centerDegree) *
                            this.defaults.sensitive *
                            ie.resize.ratio)
                        : ((t = 5 * parseInt(e.beta) * this.defaults.sensitive * ie.resize.ratio),
                          5 *
                            (this.defaults.centerDegree - parseInt(e.gamma)) *
                            this.defaults.sensitive *
                            ie.resize.ratio)),
                    this.animate2D(t, i, "cursor"),
                    this.animate3D(t, i, "cursor"));
                } else this.calculateTransformProperties();
                ie.slider.state.animatingSlides ||
                  this.shadowIsChecked ||
                  !ie.gui.shadow.$element ||
                  this.addShadow();
              },
              trigger: function () {
                (se(window).trigger("scroll.parallax" + z),
                  se(window).trigger("touchmove.parallax" + z));
              },
              scroll: function () {
                var e =
                  (("top" === this.defaults.centerLayers
                    ? ie.device.winScrollTop
                    : ie.device.winScrollTop + (ie.device.viewportHeight - ie.slider.height) / 2) -
                    ie.slider.offsetTop) *
                  ie.resize.ratio *
                  this.defaults.scrollModifier;
                (ie.slider.state.inFullscreen && (e = 0),
                  this.transformPropertiesCalculated || this.calculateTransformProperties(),
                  this.animate2D(0, e, "scroll"),
                  this.animate3D(0, e, "scroll"));
              },
              mouseMove: function (e) {
                if (this.transformPropertiesCalculated) {
                  ie.slider.state.animatingSlides ||
                    this.shadowIsChecked ||
                    !ie.gui.shadow.$element ||
                    this.addShadow();
                  var t = ie.slider.offsetLeft + ie.slider.width / 2,
                    i = ie.slider.offsetTop + ie.slider.height / 2,
                    a = e.pageX - t,
                    s = e.pageY - i;
                  (this.animate2D(a, s, "cursor"), this.animate3D(a, s, "cursor"));
                } else this.calculateTransformProperties();
              },
              animate2D: function (s, r, e) {
                this.wrappers[e].$2d.each(function () {
                  var e = se(this);
                  if ("active" === e.attr("data-ls-parallax")) {
                    var t = e.data(ie.defaults.init.dataKey).parallax,
                      i = t.x ? -s * (t.distance / 2e3) * parseInt(t.level) : 0,
                      a = t.y ? -r * (t.distance / 2e3) * parseInt(t.level) : 0;
                    ae.TweenMax.to(e[0], t.durationMove, { x: i, y: a });
                  }
                });
              },
              animate3D: function (o, n, e) {
                this.wrappers[e].$3d.each(function () {
                  var e = se(this);
                  if ("active" === e.attr("data-ls-parallax")) {
                    var t,
                      i,
                      a,
                      s,
                      r = e.data(ie.defaults.init.dataKey).parallax;
                    ((a = r.x
                      ? ((i = -o / (4e3 / r.rotation)), -o * (r.distance / 2e3) * parseInt(r.level))
                      : (i = 0)),
                      (s = r.y
                        ? ((t = n / (4e3 / r.rotation)),
                          -n * (r.distance / 2e3) * parseInt(r.level))
                        : (t = 0)),
                      ae.TweenMax.to(e[0], r.durationMove, {
                        rotationX: t,
                        rotationY: i,
                        x: a,
                        y: s,
                      }));
                  }
                });
              },
              reset: function () {
                (se()
                  .add(this.wrappers.cursor.$2d)
                  .add(this.wrappers.cursor.$3d)
                  .each(function () {
                    var e = se(this);
                    "active" === e.attr("data-ls-parallax")
                      ? ae.TweenMax.to(
                          e[0],
                          se(this).data(ie.defaults.init.dataKey).parallax.durationLeave,
                          { x: 0, y: 0, rotationX: 0, rotationY: 0 },
                        )
                      : ae.TweenMax.set(e[0], { x: 0, y: 0, rotationX: 0, rotationY: 0 });
                  }),
                  ie.gui.shadow.$element && this.removeShadow(),
                  (this.transformPropertiesCalculated = !1));
              },
            },
            filters: {
              createTransition: function (e, t, i, a) {
                var s,
                  r = new ie.defaults.layer.properties.filter(),
                  o = {};
                for (s in r)
                  switch (t) {
                    case "in":
                      ((o[s] = [r[s], r[s]]),
                        (o[s][0] = i.hasOwnProperty(s) ? i[s] : a.hasOwnProperty(s) ? a[s] : r[s]),
                        (o[s][1] = a.hasOwnProperty(s) ? a[s] : r[s]),
                        (e.filter.values.afterIn[s] = o[s][1]));
                      break;
                    case "hover":
                    case "loop":
                    case "out":
                      ((o[s] = []),
                        (o[s][0] = i.hasOwnProperty(s) ? i[s] : r[s]),
                        (o[s][1] = a.hasOwnProperty(s)
                          ? a[s]
                          : i.hasOwnProperty(s) && i[s] !== r[s]
                            ? i[s]
                            : r[s]),
                        "loop" === t &&
                          !0 !== e.loop.yoyo &&
                          -1 !== e.loop.count &&
                          (e.filter.values.afterLoop[s] = o[s][1]));
                      break;
                    case "bg":
                      ((o[s] = [r[s], r[s]]),
                        i.hasOwnProperty(s) && (o[s][0] = i[s]),
                        a.hasOwnProperty(s) && (o[s][1] = a[s]));
                  }
                return o;
              },
              convert: function (e) {
                for (
                  var t,
                    i,
                    a,
                    s = {},
                    r = /(blur|brightness|contrast|grayscale|hue-rotate|invert|saturate|sepia)/i,
                    o = 0,
                    n = (e = e.split(" ")).length;
                  o < n;
                  o++
                )
                  (t = (a = e[o].split("("))[0]).match(r) && ((i = parseInt(a[1])), (s[t] = i));
                return s;
              },
              animate: function (e, t) {
                var i = 100 * e.target[0].p;
                if ("object" == typeof t) {
                  var a = "";
                  for (var s in t)
                    if ("object" == typeof t[s] && 2 === t[s].length)
                      switch (s) {
                        case "blur":
                          a +=
                            " blur( " +
                            (t[s][0] < t[s][1]
                              ? t[s][0] + (Math.abs(t[s][0] - t[s][1]) / 100) * i
                              : t[s][0] - (Math.abs(t[s][0] - t[s][1]) / 100) * i) +
                            "px )";
                          break;
                        case "hue-rotate":
                          a +=
                            " hue-rotate( " +
                            (t[s][0] < t[s][1]
                              ? t[s][0] + (Math.abs(t[s][0] - t[s][1]) / 100) * i
                              : t[s][0] - (Math.abs(t[s][0] - t[s][1]) / 100) * i) +
                            "deg )";
                          break;
                        default:
                          a +=
                            " " +
                            s +
                            "( " +
                            (t[s][0] < t[s][1]
                              ? t[s][0] + (Math.abs(t[s][0] - t[s][1]) / 100) * i
                              : t[s][0] - (Math.abs(t[s][0] - t[s][1]) / 100) * i) +
                            "% )";
                      }
                  ae.TweenMax.set(e.target, { "-webkit-filter": a, filter: a });
                }
              },
            },
            splitType: {
              setNodesSequence: function (e, t) {
                var i = t;
                if ("desc" == e[1]) i = t.slice(0).reverse();
                else if ("rand" == e[1])
                  i = t.slice(0).sort(function () {
                    return 0.5 - Math.random();
                  });
                else if ("center" == e[1]) {
                  var a,
                    s = Math.floor(t.length / 2);
                  for (i = [t[s]], a = 1; a <= s; a++) i.push(t[s - a], t[s + a]);
                  i.length = t.length;
                } else if ("edge" == e[1]) {
                  var r,
                    o = Math.floor(t.length / 2);
                  for (i = [t[0]], r = 1; r <= o; r++) i.push(t[t.length - r], t[r]);
                  i.length = t.length;
                }
                return i;
              },
              resetNodes: function (e, t) {
                se(".char, .word, .line", e)
                  .add(t.elements.$wrapper)
                  .css({ transform: "none", opacity: 1 })
                  .each(function () {
                    delete this._gsTransform;
                  });
              },
              setRandomProperties: function (e, t, i) {
                for (var a in t) {
                  for (var s = [], r = 0, o = e.textIn.nodes.length; r < o; r++)
                    s[r] = ie.functions.convert.randomProperties(t[a], a);
                  (delete i[a], (i.cycle[a] = s));
                }
                t = null;
              },
            },
          },
          media: {
            defaults: { delay: 500, fadeIn: 500, fadeOut: 750 },
            changeBackgroundVideo: function (e, t) {
              if (ie.slides.current.index && ie.slides.current.data.$backgroundVideo.length) {
                var i = ie.slides.current.data.$backgroundVideo,
                  a = i.data(ie.defaults.init.dataKey).elements.$bgWrapper;
                t &&
                  ((i.data(ie.defaults.init.dataKey).mediaProperties.willBePaused = !0),
                  a.fadeOut(ie.transitions.media.defaults.fadeOut, function () {
                    (i.trigger("stopBackgroundVideo"),
                      (i.data(ie.defaults.init.dataKey).mediaProperties.willBePaused = !1));
                  }));
              }
              if (ie.slides.next.data.$backgroundVideo.length) {
                var s = ie.slides.next.data.$backgroundVideo,
                  r = s.data(ie.defaults.init.dataKey).elements.$bgWrapper,
                  o = s.data(ie.defaults.init.dataKey).elements.$bgOuterWrapper;
                ((ie.device.isMobile &&
                  ((_.hasClass("ls-device-is-phone") && o.hasClass("ls-hide-on-phone")) ||
                    (_.hasClass("ls-device-is-tablet") && o.hasClass("ls-hide-on-tablet")))) ||
                  setTimeout(
                    function () {
                      s.trigger("playBackgroundVideo");
                    },
                    e ? 50 : 0,
                  ),
                  e || t
                    ? r.fadeIn(ie.transitions.media.defaults.fadeOut)
                    : r.css({ display: "block" }),
                  (s.data(ie.defaults.init.dataKey).mediaProperties.isPreloaded = !0));
              }
            },
          },
          timers: {
            defaults: { fadeInDuration: 0.35, reverseDuration: 0.3 },
            create: function (e) {
              ((this.curNext = e || "next"),
                this.reset(),
                ie.gui.timers.bar.$element && this.bar.createTransition(),
                ie.gui.timers.circle.$element && this.circle.createTransition(),
                ie.gui.timers.slidebar.$element && this.slidebar.createTransition());
            },
            reverse: function () {
              if (ie.slides.current && ie.slides.current.data && ie.transitions._slideTimeline) {
                var e = ie.transitions._slideTimeline.progress(),
                  t = (ie.slides.current.data.duration * e) / this.defaults.reverseDuration;
                (ie.gui.timers.bar.$element &&
                  this.bar._transition &&
                  (ie.transitions._slideTimeline.remove(ie.transitions.timers.bar._transition),
                  this.bar._transition.reverse().timeScale(t)),
                  ie.gui.timers.circle.$element &&
                    this.circle._transition &&
                    (ie.transitions._slideTimeline.remove(ie.transitions.timers.circle._transition),
                    this.circle._transition.reverse().timeScale(t)),
                  ie.gui.timers.slidebar.$element &&
                    this.slidebar._transition &&
                    (ie.transitions._slideTimeline.remove(
                      ie.transitions.timers.slidebar._transition,
                    ),
                    this.slidebar._transition.reverse().timeScale(t)));
              }
            },
            reset: function () {
              (ie.gui.timers.bar.$element && this.bar._transition && this.bar.reset(),
                ie.gui.timers.circle.$element && this.circle._transition && this.circle.reset(),
                ie.gui.timers.slidebar.$element &&
                  this.slidebar._transition &&
                  this.slidebar.reset());
            },
            bar: {
              reset: function () {
                this._transition && (this._transition.kill(), (this._transition = !1));
              },
              createTransition: function () {
                this._transition = ae.TweenMax.fromTo(
                  ie.gui.timers.bar.$element[0],
                  ie.slides[ie.transitions.curNext].data.duration,
                  { autoCSS: !1, paused: !0, css: { width: 0 } },
                  {
                    autoCSS: !1,
                    css: {},
                    ease: ae.Linear.easeNone,
                    onReverseComplete: function () {
                      ie.transitions.timers.bar._transition = !1;
                    },
                    onComplete: function (e) {
                      ((e.target.style.width = "100%"),
                        (e.target.style.width =
                          "calc( 100% - " + ie.slider.initial.skinWidth + "px )"));
                    },
                    onCompleteParams: ["{self}"],
                    onUpdate: function (e) {
                      e.target.style.width =
                        Math.min(ie.slider.width, ie.slider.width * e.progress()) + "px";
                    },
                    onUpdateParams: ["{self}"],
                  },
                );
              },
            },
            circle: {
              reset: function () {
                this._transition &&
                  (ie.gui.timers.circle.$element.stop(!0, !0),
                  this._transition.kill(),
                  (this._transition = !1));
              },
              createTransition: function () {
                var e = ie.gui.timers.circle.$element.find(".ls-ct-right .ls-ct-rotate")[0],
                  t = ie.gui.timers.circle.$element.find(".ls-ct-left .ls-ct-rotate")[0],
                  i = ie.slides[ie.transitions.curNext].data.duration;
                this._transition = new ae.TimelineMax({ paused: !0 })
                  .fromTo(
                    ie.gui.timers.circle.$element[0],
                    ie.transitions.timers.defaults.fadeInDuration,
                    { autoCSS: !1, immediateRender: !0, css: { opacity: 0, display: "block" } },
                    {
                      autoCSS: !1,
                      css: { opacity: ie.gui.timers.circle.$element.data("original").opacity },
                    },
                  )
                  .fromTo(
                    e,
                    i / 2,
                    { autoCSS: !1, css: { rotation: 0 } },
                    { autoCSS: !1, css: { rotation: 180 }, ease: ae.Linear.easeNone },
                    0,
                  )
                  .fromTo(
                    t,
                    i / 2,
                    { autoCSS: !1, css: { rotation: 0 } },
                    { autoCSS: !1, css: { rotation: 180 }, ease: ae.Linear.easeNone },
                    i / 2,
                  );
              },
            },
            slidebar: {
              reset: function () {
                this._transition && (this._transition.kill(), (this._transition = !1));
              },
              createTransition: function () {
                var i = this;
                ((i._transition = new ae.TimelineMax({
                  paused: !0,
                  onReverseComplete: function () {
                    ie.transitions.timers.slidebar._transition = !1;
                  },
                })),
                  se.each(ie.gui.timers.slidebar.$sliderContainerElement, function (t, e) {
                    (i._transition.add(
                      ae.TweenMax.fromTo(
                        ie.gui.timers.slidebar.$sliderContainerElement[t][0],
                        ie.slides[ie.transitions.curNext].data.duration,
                        { autoCSS: !1, css: { left: 0 } },
                        {
                          autoCSS: !1,
                          css: {},
                          ease: ae.Linear.easeNone,
                          onComplete: function (e) {
                            e.target.style.left =
                              "calc( 100% - " +
                              ie.gui.timers.slidebar.sliderContainerElementWidth[t] +
                              "px )";
                          },
                          onCompleteParams: ["{self}"],
                          onUpdate: function (e) {
                            e.target.style.left =
                              (ie.gui.timers.slidebar.containerElementWidth[t] -
                                ie.gui.timers.slidebar.sliderContainerElementWidth[t]) *
                                e.progress() +
                              "px";
                          },
                          onUpdateParams: ["{self}"],
                        },
                      ),
                      0,
                    ),
                      i._transition.add(
                        ae.TweenMax.fromTo(
                          ie.gui.timers.slidebar.$progressBarElement[t][0],
                          ie.slides[ie.transitions.curNext].data.duration,
                          { autoCSS: !1, css: { width: 0 } },
                          {
                            autoCSS: !1,
                            css: {},
                            ease: ae.Linear.easeNone,
                            onComplete: function (e) {
                              e.target.style.width = "100%";
                            },
                            onCompleteParams: ["{self}"],
                            onUpdate: function (e) {
                              e.target.style.width =
                                ie.gui.timers.slidebar.elementWidth[t] * e.progress() + "px";
                            },
                            onUpdateParams: ["{self}"],
                          },
                        ),
                        0,
                      ));
                  }));
              },
            },
          },
        }),
        (ie.plugins = {
          load: function () {
            if (ie.o.plugins && 0 !== ie.o.plugins.length) {
              var e = ie.o.plugins[0],
                a = "object" == typeof e ? e.namespace : e;
              if (window._layerSlider.plugins[a]) (ie.plugins.init(a, e, !0), ie.plugins.load());
              else if (ie.browser.usesFileProtocol || "object" != typeof e)
                (ie.browser.usesFileProtocol
                  ? window.console &&
                    (console.error(
                      ie.defaults.slider.errorText,
                      "Cannot load plugins on file:// protocol.",
                    ),
                    console.info("Please include the plugin files manually."))
                  : window.console &&
                    (console.error(ie.defaults.slider.errorText, "Plugin files are missing!"),
                    console.info(
                      'Plugin "' +
                        a +
                        '" has been added in slider init options, but the source files are not found on page.',
                    )),
                  ie.o.plugins.splice(0, 1),
                  ie.plugins.load());
              else {
                if (-1 !== window._layerSlider.pluginsBeingLoaded.indexOf(a))
                  return void ie.plugins.checkLoaded(a);
                -1 === window._layerSlider.pluginsLoaded.indexOf(a) &&
                -1 === window._layerSlider.pluginsNotLoaded.indexOf(a)
                  ? (window._layerSlider.pluginsBeingLoaded.push(a),
                    se.ajax({
                      url:
                        -1 === e.js.indexOf("http://") && -1 === e.js.indexOf("https://")
                          ? (window._layerSlider.pluginsPath
                              ? window._layerSlider.pluginsPath
                              : window._layerSlider.scriptPath + "/../plugins/") + e.js
                          : e.js,
                      dataType: "script",
                      success: function () {
                        (ie.plugins.init(e.namespace, e, !0),
                          window._layerSlider.pluginsLoaded.push(a));
                      },
                      error: function (e, t, i) {
                        (window.console &&
                          (console.error(
                            ie.defaults.slider.errorText,
                            a,
                            "plugin has not been loaded!",
                          ),
                          console.error("Additional error info:", i)),
                          window._layerSlider.pluginsNotLoaded.push(a));
                      },
                      complete: function () {
                        (window._layerSlider.pluginsBeingLoaded.splice(
                          window._layerSlider.pluginsBeingLoaded.indexOf(a),
                          1,
                        ),
                          ie.plugins.load());
                      },
                    }))
                  : (ie[a] || -1 !== window._layerSlider.pluginsNotLoaded.indexOf(a)
                      ? ie.o.plugins.splice(0, 1)
                      : ie.plugins.init(a, e),
                    ie.plugins.load());
              }
            } else ie.slider.check.initialized();
          },
          init: function (e, t, i) {
            ((ie.initializedPlugins[e] = new window._layerSlider.plugins[e](ie, _, z, t.settings)),
              window._layerSlider.checkVersions(
                ie.initializedPlugins[e].pluginData.requiredLSVersion,
                ie.plugin.version,
              )
                ? (t.css &&
                    i &&
                    se(
                      '<link rel="stylesheet" href="' +
                        (-1 === t.css.indexOf("http://") && -1 === t.css.indexOf("https://")
                          ? (window._layerSlider.pluginsPath
                              ? window._layerSlider.pluginsPath
                              : window._layerSlider.scriptPath + "/../plugins/") + t.css
                          : t.css) +
                        '">',
                    ).appendTo("head"),
                  ie.initializedPlugins[e].init && ie.initializedPlugins[e].init())
                : window.console &&
                  console.error(
                    ie.defaults.slider.errorText,
                    e,
                    "plugin has not been loaded! Required LayerSlider version:",
                    ie.initializedPlugins[e].pluginData.requiredLSVersion,
                    "(you have:",
                    ie.plugin.version + ")",
                  ),
              ie.o.plugins.splice(0, 1));
          },
          checkLoaded: function (e) {
            ie.intervals.pluginLoaded = setInterval(function () {
              (-1 === window._layerSlider.pluginsLoaded.indexOf(e) &&
                -1 === window._layerSlider.pluginsNotLoaded.indexOf(e)) ||
                -1 !== window._layerSlider.pluginsBeingLoaded.indexOf(e) ||
                (clearInterval(ie.intervals.pluginLoaded),
                delete ie.intervals.pluginLoaded,
                ie.plugins.load());
            }, 100);
          },
        }),
        (ie.slider = {
          shouldResize: !0,
          thumbnails: [],
          state: { preloadingImages: !1, changingSlides: !1, animatingSlides: !1 },
          isPaused: !1,
          isBusy: function () {
            return (
              this.state.preloadingImages || this.state.changingSlides || this.state.animatingSlides
            );
          },
          load: function () {
            if (!document.body.contains(M)) return !1;
            (ie.api.hasEvent("sliderWillLoad") && _.triggerHandler("sliderWillLoad"),
              ie.slider.set.global());
          },
          set: {
            global: function () {
              if (
                ((ie.originalMarkup = _[0].outerHTML),
                (ie.userInitOptions = ie.functions.convert.properties(
                  ie.functions.convert.oldProperties(a),
                )),
                (ie.meta = {}),
                (ie.o = se.extend(!0, {}, ie.defaults.init.options, ie.userInitOptions)),
                (ie.o.forceLayersOutDuration /= 1e3),
                (ie.o.forceLayersOutDuration =
                  0 < ie.o.forceLayersOutDuration ? ie.o.forceLayersOutDuration : 0.75),
                (ie.o.sliderFadeInDuration /= 1e3),
                window.console &&
                  !0 !== ie.o.hideWelcomeMessage &&
                  !0 !== window._layerSlider.hideWelcomeMessage)
              ) {
                window._layerSlider.hideWelcomeMessage = !0;
                var e = window.console.info ? "info" : "log",
                  t = window.LS_Meta && window.LS_Meta.v ? " | WP Plugin: " + window.LS_Meta.v : "";
                (console[e](
                  "LayerSlider initialized | core: " +
                    ie.plugin.version +
                    "-" +
                    ie.plugin.release +
                    t,
                ),
                  console[e]("Find updates and docs @ https://layerslider.kreaturamedia.com/"));
              }
              var i = {
                namespace: "debug",
                js: "debug/layerslider.debug.js",
                css: "debug/layerslider.debug.css",
              };
              (-1 !== document.location.hash.indexOf("debug") &&
                window.console &&
                (-1 !== document.location.hash.indexOf("url=") &&
                  ((window._layerSlider.pluginsPath = document.location.hash
                    .split("url=")[1]
                    .split("&")[0]),
                  (i.js = window._layerSlider.pluginsPath + "debug/layerslider.debug.js"),
                  (i.css = window._layerSlider.pluginsPath + "debug/layerslider.debug.css")),
                "object" == typeof ie.o.plugins ? ie.o.plugins.push(i) : (ie.o.plugins = [i])),
                (window._layerSlider.currentScript || window._layerSlider.lsScript) &&
                  (window._layerSlider.scriptPath = (
                    window._layerSlider.currentScript || window._layerSlider.lsScript
                  ).src
                    .replace(/\\/g, "/")
                    .replace(/\/[^\/]*$/, "")),
                "object" == typeof ie.o.plugins
                  ? ie.plugins.load()
                  : ie.slider.check.initialized());
            },
            styles: function () {
              var e,
                t,
                i,
                a,
                s,
                r,
                o,
                n,
                l,
                d,
                u,
                p,
                c,
                h,
                m,
                f,
                g,
                v,
                y,
                b,
                S,
                w,
                x = ie.slider,
                T = _.parent(),
                C = M.style,
                k = window.getComputedStyle(M, null),
                I = parseInt(M.clientWidth),
                L = parseInt(M.clientHeight),
                P = parseInt(T.width()),
                O = parseInt(T.height()),
                $ = ie.o.layersContainerWidth,
                B = ie.o.layersContainerHeight,
                W = ie.o.type.toLowerCase();
              switch (
                (ie.debugMode && ie.debug.add("group", "sliderInit.style"),
                ie.o.width
                  ? (e = -1 == ie.o.width.indexOf("%") ? parseInt(ie.o.width) : ie.o.width)
                  : C.width
                    ? (e = -1 == C.width.indexOf("%") ? parseInt(C.width) : C.width)
                    : 0 < $
                      ? ((e = $), ie.debugMode && ie.debug.add("warn", "sliderInit.noWidth", $))
                      : ((e = I), ie.debugMode && ie.debug.add("warn", "sliderInit.noWidth2", I)),
                (i = e),
                ie.o.height
                  ? (t = -1 == ie.o.height.indexOf("%") ? parseInt(ie.o.height) : ie.o.height)
                  : C.height
                    ? (t = -1 == C.height.indexOf("%") ? parseInt(C.height) : C.height)
                    : 0 < B
                      ? ((t = B), ie.debugMode && ie.debug.add("warn", "sliderInit.noHeight", B))
                      : ((t = L), ie.debugMode && ie.debug.add("warn", "sliderInit.noHeight2", O)),
                (a = t),
                (s =
                  "" !== C.maxWidth
                    ? -1 === C.maxWidth.indexOf("%")
                      ? parseInt(C.maxWidth)
                      : C.maxWidth
                    : 0),
                void 0 === ie.userInitOptions.type &&
                  ((0 < $ && 0 < B) || ("100%" === e && "100%" === t)
                    ? (W = "fullsize")
                    : $ <= 0 &&
                        B <= 0 &&
                        (ie.o.responsiveUnder <= 0 ||
                          (0 < ie.o.responsiveUnder && ie.o.sliderVersion))
                      ? (W =
                          void 0 !== ie.o.responsive && !1 === ie.o.responsive
                            ? "fixedsize"
                            : "responsive")
                      : 0 < ie.o.responsiveUnder && (W = "fullwidth")),
                W)
              ) {
                case "fullwidth":
                  (-1 !== e.indexOf("%") &&
                    (ie.debugMode && ie.debug.add("warn", "sliderInit.percWidth", [W, e, I]),
                    (e = I)),
                    $ <= 0 &&
                      (($ = e),
                      ie.debugMode && ie.debug.add("warn", "sliderInit.conWidth", [W, e])),
                    ie.o.responsiveUnder <= 0 &&
                      ((ie.o.responsiveUnder = $),
                      ie.debugMode && ie.debug.add("warn", "sliderInit.fullwidth", $)),
                    -1 !== t.indexOf("%") &&
                      ((o = O / (100 / parseInt(t))),
                      ie.debugMode && ie.debug.add("warn", "sliderInit.fullwidth2", [W, t, o]),
                      (t = o)),
                    B <= 0 && (B = t));
                  break;
                case "fullsize":
                  (-1 !== e.indexOf("%") &&
                    ((r = 0 < $ ? $ : P),
                    ie.debugMode && ie.debug.add("warn", "sliderInit.fullsize", [W, e, r, P, $]),
                    (e = r)),
                    $ <= 0 &&
                      (($ = e),
                      ie.debugMode && ie.debug.add("warn", "sliderInit.conWidth", [W, e])),
                    -1 !== t.indexOf("%") &&
                      ((o = 0 < B ? B : se(window).height() / (100 / parseInt(t))),
                      ie.debugMode &&
                        ie.debug.add("warn", "sliderInit.fullsize2", [
                          W,
                          t,
                          o,
                          se(window).height(),
                          B,
                        ]),
                      (t = o)),
                    B <= 0 &&
                      ((B = t),
                      ie.debugMode && ie.debug.add("warn", "sliderInit.conHeight", [W, t])));
                  break;
                case "fixedsize":
                  break;
                default:
                  ((ie.userInitOptions.type = ie.o.type = W = "responsive"),
                    (ie.o.responsiveUnder = -1) !== e.indexOf("%") &&
                      ((e = I),
                      ie.debugMode && ie.debug.add("warn", "sliderInit.percWidth", [W, e, I])),
                    -1 !== t.indexOf("%") &&
                      ((e = L),
                      ie.debugMode && ie.debug.add("warn", "sliderInit.responsive", [W, t, L])),
                    ie.debugMode && 0 < $ && ie.debug.add("warn", "sliderInit.conWidth2", [W, $]),
                    ie.debugMode && 0 < B && ie.debug.add("warn", "sliderInit.conHeight2", [W, B]));
              }
              (_.addClass("ls-container ls-" + W),
                _.parent().addClass("ls-direction-fix"),
                ie.o.preventSliderClip &&
                  ie.o.fitScreenWidth &&
                  ("fullwidth" === W || ("fullsize" === W && "fitheight" !== ie.o.fullSizeMode)) &&
                  _.parents(":not(body, html)").each(function () {
                    se(this).addClass("ls-overflow-visible");
                  }),
                ie.userInitOptions.slideBGSize ||
                  "responsive" !== W ||
                  !ie.userInitOptions.hasOwnProperty("sliderVersion") ||
                  ie.userInitOptions.sliderVersion ||
                  ((ie.o.slideBGSize = "auto"),
                  ie.debugMode && ie.debug.add("warn", "sliderInit.bgCover", W)),
                (ie.o.slideBGSize = ie.o.slideBGSize.replace("100% 100%", "stretch")),
                (n = 0 < $ ? $ : e),
                (l = 0 < B ? B : t),
                "auto" === (p = M.style.marginLeft)
                  ? (d = "auto")
                  : "" === p
                    ? (d = parseInt(k.getPropertyValue("margin-left")))
                    : (d = parseInt(M.style.marginLeft)),
                "auto" === (c = M.style.marginRight)
                  ? (u = "auto")
                  : "" === c
                    ? (u = parseInt(k.getPropertyValue("margin-right")))
                    : (u = parseInt(M.style.marginRight)),
                d === u &&
                  ("" === p && "" === c && ((h = d), (u = d = "auto")),
                  _.css({ marginLeft: "auto", marginRight: "auto" })),
                (m =
                  "" !== C.paddingLeft ? parseInt(C.paddingLeft) : parseInt(_.css("padding-left"))),
                (g =
                  "" !== C.paddingRight
                    ? parseInt(C.paddingRight)
                    : parseInt(_.css("padding-right"))),
                (f = "" !== C.paddingTop ? parseInt(C.paddingTop) : parseInt(_.css("padding-top"))),
                (v =
                  "" !== C.paddingBottom
                    ? parseInt(C.paddingBottom)
                    : parseInt(_.css("padding-bottom"))),
                (y =
                  "" !== C.borderLeftWidth
                    ? parseInt(C.borderLeftWidth)
                    : parseInt(_.css("border-left-width"))),
                (S =
                  "" !== C.borderRightWidth
                    ? parseInt(C.borderRightWidth)
                    : parseInt(_.css("border-right-width"))),
                (b =
                  "" !== C.borderTopWidth
                    ? parseInt(C.borderTopWidth)
                    : parseInt(_.css("border-top-width"))),
                (w =
                  "" !== C.borderBottomWidth
                    ? parseInt(C.borderBottomWidth)
                    : parseInt(_.css("border-bottom-width"))),
                (x.initial = {
                  type: W,
                  width: e,
                  height: t,
                  originalWidth: i,
                  originalHeight: a,
                  percW: e / 100,
                  percH: t / 100,
                  layersWidth: $,
                  layersHeight: B,
                  ratio: n / l,
                  maxWidth: s,
                  marginLeft: d,
                  marginRight: u,
                  paddingLeft: m,
                  paddingTop: f,
                  paddingRight: g,
                  paddingBottom: v,
                  borderLeftWidth: y,
                  borderTopWidth: b,
                  borderRightWidth: S,
                  borderBottomWidth: w,
                  skinWidth: m + g + y + S,
                  skinHeight: f + v + b + w,
                }),
                ie.debugMode &&
                  (ie.debug.add("log", "sliderInit.style", [
                    e,
                    t,
                    i,
                    a,
                    $,
                    B,
                    parseInt((n / l) * 100) / 100,
                    0 < s ? s : void 0,
                    [d, u],
                  ]),
                  h && ie.debug.add("warn", "sliderInit.margin", h)),
                se("html").attr("id")
                  ? se("body").attr("id") || se("body").attr("id", "ls-global")
                  : se("html").attr("id", "ls-global"),
                "static" !== C.position &&
                  "absolute" !== C.position &&
                  (M.style.position = "relative"),
                ie.o.insertSelector && _[ie.o.insertMethod](ie.o.insertSelector),
                (ie.slider.$hiddenWrapper = se(
                  '<div class="ls-wp-container fitvidsignore ls-hidden" data-layerslider-uid="' +
                    z +
                    '"></div>',
                )
                  .addClass(_.attr("class"))
                  .prependTo("body")),
                (ie.slider.$innerWrapper = se('<div class="ls-inner"></div>')),
                (ie.slider.$layersWrapper = se('<div class="ls-layers"></div>').appendTo(
                  ie.slider.$innerWrapper,
                )),
                (ie.slider.$bgVideosWrapper = se(
                  '<div class="ls-background-videos"></div>',
                ).appendTo(ie.slider.$layersWrapper)),
                (ie.slider.$slideBGWrapper = se(
                  '<div class="ls-slide-backgrounds"></div>',
                ).appendTo(ie.slider.$layersWrapper)),
                ie.slider.$innerWrapper.appendTo(_),
                !0 === ie.o.hideOnMobile && ie.device.isMobile
                  ? (_.addClass("ls-forcehide"),
                    _.closest(".ls-wp-fullwidth-container").addClass("ls-forcehide"),
                    (ie.o.autoStart = !1))
                  : ie.slider.check.showHide(),
                ie.o.globalBGImage &&
                  ie.slider.$innerWrapper.css({
                    backgroundImage: "url( " + ie.o.globalBGImage + " )",
                    backgroundRepeat: ie.o.globalBGRepeat,
                    backgroundAttachment: ie.o.globalBGAttachment,
                    backgroundSize: ie.o.globalBGSize,
                    backgroundPosition: ie.o.globalBGPosition,
                  }),
                ie.slider.$innerWrapper.css({ backgroundColor: ie.o.globalBGColor }),
                "transparent" == ie.o.globalBGColor &&
                  !1 === ie.o.globalBGImage &&
                  ie.slider.$innerWrapper.css({ background: "none transparent" }));
            },
            options: function () {
              if (
                (se("html").find('meta[content*="WordPress"]').length &&
                  (ie.meta.wpVersion = se("html")
                    .find('meta[content*="WordPress"]')
                    .attr("content")
                    .split("WordPress")[1]),
                window.LS_Meta && window.LS_Meta.v
                  ? (ie.meta.lswpVersion = window.LS_Meta.v)
                  : se("html").find('script[src*="layerslider"]').length &&
                    -1 != se("html").find('script[src*="layerslider"]').attr("src").indexOf("?") &&
                    (ie.meta.lswpVersion = se("html")
                      .find('script[src*="layerslider"]')
                      .attr("src")
                      .split("?")[1]
                      .split("=")[1]),
                "undefined" != typeof layerSliderTransitions &&
                  (ie.t = se.extend({}, layerSliderTransitions)),
                "undefined" != typeof layerSliderCustomTransitions &&
                  (ie.ct = se.extend({}, layerSliderCustomTransitions)),
                ie.debugMode &&
                  ("undefined" != typeof layerCustomSliderTransitions
                    ? (ie.debug.add("log", "sliderInit.customTransitions", !1),
                      "undefined" == typeof layerSliderTransitions &&
                        ie.debug.add("warn", "sliderInit.slideTransitions"))
                    : "undefined" == typeof layerSliderTransitions &&
                      ie.debug.add("warn", "sliderInit.noSlideTransitions")),
                "number" == typeof ie.o.parallaxCenterDegree &&
                  (ie.transitions.layers.parallax.defaults.centerDegree =
                    ie.o.parallaxCenterDegree),
                "number" == typeof ie.o.parallaxSensitivity &&
                  (ie.transitions.layers.parallax.defaults.sensitive = ie.o.parallaxSensitivity),
                ie.o.parallaxCenterLayers &&
                  (ie.transitions.layers.parallax.defaults.centerLayers =
                    ie.o.parallaxCenterLayers),
                ie.o.playByScroll &&
                  ((ie.o.cycles = -1),
                  (ie.o.startInViewport = !0),
                  (ie.o.pauseOnHover = !1),
                  (ie.o.autoStart = !1)),
                ie.device.isMobile && (ie.o.pauseOnHover = !1),
                se(window).on("hashchange." + z, function () {
                  document.location.hash && ie.slides.deeplink(document.location.hash);
                }),
                ie.o.startInViewport)
              ) {
                if (
                  ((ie.slider.positionToViewport =
                    ie.device.winScrollTop >
                    ie.slider.offsetTop - (ie.device.viewportHeight - ie.slider.height) / 2
                      ? "under"
                      : "over"),
                  ie.o.playByScroll)
                ) {
                  var t,
                    i,
                    a,
                    s = !0,
                    r = 4 * ie.o.playByScrollSpeed;
                  ((ie.device.scroll.timeout = 250),
                    (ie.transitions.layers.timeline.timeScaleModifier = 0),
                    se(document).on("wheel." + z + " touchmove." + z, function (e) {
                      (ie.device.isMobile
                        ? ((t = e.originalEvent.touches[0].clientY),
                          i < t
                            ? (ie.device.scroll.direction = "up")
                            : t < i && (ie.device.scroll.direction = "down"),
                          (a = i - t),
                          (i = t))
                        : (0 < e.originalEvent.deltaY
                            ? (ie.device.scroll.direction = "down")
                            : (ie.device.scroll.direction = "up"),
                          (a = e.originalEvent.deltaY)),
                        0 !== Math.abs(a) &&
                          (ie.device.scroll.lastDirection
                            ? ie.device.scroll.lastDirection !== ie.device.scroll.direction &&
                              ((ie.device.scroll.lastDirection = ie.device.scroll.direction),
                              (ie.transitions.layers.timeline.timeScaleModifier = 0))
                            : (ie.device.scroll.lastDirection = ie.device.scroll.direction),
                          "inside" === ie.slider.positionToViewport &&
                            (ie.resize.viewport(),
                            0 <= a
                              ? ie.transitions.layers.timeline.scrollForward()
                              : ie.transitions.layers.timeline.scrollBackwards(),
                            s &&
                              (clearTimeout(ie.timeouts.scroll),
                              (s = !1),
                              (ie.transitions.layers.timeline.timeScaleModifier =
                                ie.transitions.layers.timeline.timeScaleModifier < r
                                  ? ie.transitions.layers.timeline.timeScaleModifier + 0.25
                                  : r),
                              (ie.timeouts.scroll2 = setTimeout(function () {
                                (delete ie.timeouts.scroll2,
                                  (s = !0),
                                  (ie.device.scroll.timeout =
                                    50 < ie.device.scroll.timeout
                                      ? ie.device.scroll.timeout - 50
                                      : 50));
                              }, ie.device.scroll.timeout)))),
                          ie.slider.check.positionToViewport()));
                    }));
                } else
                  se(window).on("scroll." + z, function () {
                    ie.slider.check.positionToViewport();
                  });
                ie.timeouts.checkPosition = setTimeout(function () {
                  ie.slider.check.positionToViewport();
                }, 25);
              }
              ie.slider.canShow = !0;
            },
            attributes: function () {
              _.attr("data-current-slide", ie.slides.current.index);
            },
          },
          check: {
            initialized: function () {
              (ie.debugMode &&
                ie.debug.add(
                  "log",
                  "sliderInit.info",
                  [
                    ie.plugin.version,
                    ie.plugin.releaseDate,
                    ie.userInitOptions.sliderVersion || "n/a or slider version is pre 6.0.0",
                    _.attr("id"),
                    z,
                    se.fn.jquery,
                    ie.meta.lswpVersion,
                    ie.meta.wpVersion,
                  ],
                  !0,
                ),
                ie.slider.initialized || ((ie.slider.initialized = !0), this.skins()));
            },
            skins: function () {
              ie.o.skin && "" !== ie.o.skin && ie.o.skinsPath && "" !== ie.o.skinsPath
                ? ie.gui.skin.load()
                : ie.slider.init();
            },
            showHide: function () {
              (ie.device.isMobile && !1 !== ie.o.hideOnMobile) ||
                (ie.device.viewportWidth < ie.o.hideUnder ||
                (ie.device.viewportWidth > ie.o.hideOver && 0 < ie.o.hideOver)
                  ? ie.slider.hide()
                  : ie.slider.show());
            },
            positionToViewport: function () {
              if ((delete ie.timeouts.checkPosition, ie.o.playByScroll)) {
                if (ie.device.scroll.direction) {
                  var e =
                    "down" === ie.device.scroll.direction
                      ? ie.device.winScrollTop
                      : ie.slider.offsetTop - (ie.device.viewportHeight - ie.slider.height) / 2;
                  ((("down" === ie.device.scroll.direction
                    ? ie.slider.offsetTop - (ie.device.viewportHeight - ie.slider.height) / 2
                    : ie.device.winScrollTop) < e &&
                    (("up" === ie.device.scroll.direction &&
                      "under" === ie.slider.positionToViewport) ||
                      ("down" === ie.device.scroll.direction &&
                        "over" === ie.slider.positionToViewport))) ||
                    ie.device.docHeight <= ie.device.viewportHeight ||
                    (ie.slider.height < ie.device.viewportHeight &&
                      (("up" === ie.device.scroll.direction &&
                        ie.device.winScrollTop <= 0 &&
                        ie.slider.offsetTop + ie.slider.height / 2 <
                          ie.device.viewportHeight / 2) ||
                        ("down" === ie.device.scroll.direction &&
                          ie.device.winScrollTop >=
                            ie.device.docHeight - ie.device.viewportHeight &&
                          ie.slider.offsetTop + ie.slider.height / 2 >
                            ie.device.winScrollTop + ie.device.viewportHeight / 2)))) &&
                    ((ie.slider.positionToViewport = "inside"),
                    ie.resize.viewport(),
                    ie.device.scroll.disable());
                }
              } else {
                var t = ie.device.winScrollTop + ie.device.viewportHeight / 2,
                  i = ie.slider.offsetTop + ie.slider.height / 2;
                (Math.abs(t - i) < ie.device.viewportHeight / 2 ||
                  (ie.device.winScrollTop < ie.slider.offsetTop &&
                    ie.device.winScrollTop + ie.device.viewportHeight >
                      ie.slider.offsetTop + ie.slider.height)) &&
                  ((ie.slider.positionToViewport = "inside"),
                  se(window).off("scroll." + z),
                  ie.debugMode && ie.debug.add("log", "slideshow.inviewport", !1),
                  ie.transitions._slideTimeline && ie.transitions.layers.timeline.play());
              }
            },
          },
          init: function () {
            (clearTimeout(ie.timeouts.skinLoad1),
              clearTimeout(ie.timeouts.skinLoad2),
              clearTimeout(ie.timeouts.skinLoad3),
              clearTimeout(ie.timeouts.skinLoad4),
              ie.device.setBasicEvents(),
              ie.slider.set.styles(),
              ie.slider.set.options(),
              ie.slides.init(),
              ie.device.fullscreen.set(),
              ie.media.init(),
              ie.gui.timers.init(),
              ie.gui.loadingIndicator.init(),
              ie.preload.init(),
              ie.gui.shadow.init(),
              ie.navigation.init(),
              ie.slideshow.init(),
              ie.slides.set.firstSlide(),
              ie.gui.navigation.init(),
              ie.gui.media.init(),
              ie.resize.slider(),
              ie.yourLogo.init(),
              se(window).on("resize." + z, function () {
                (ie.slider.check.showHide(),
                  "inside" === ie.slider.positionToViewport &&
                    ie.o.playByScroll &&
                    ie.resize.viewport(),
                  ie.slider.shouldResize && ie.resize.all());
              }),
              ie.debugMode &&
                (se(window).off(".debug" + z),
                se(window).on("resize.debug" + z, function () {
                  ie.debug.add("log", "resize.window", ie.device.viewportWidth, !0);
                })),
              se(window).on("orientationchange." + z, function () {
                (ie.device.getDimensions(), ie.resize.all());
              }),
              ie.device.getDimensions(),
              se(window).trigger("resize." + z),
              se(window).trigger("orientationchange." + z),
              ie.api.hasEvent("sliderDidLoad") &&
                _.triggerHandler("sliderDidLoad", ie.api.eventData()),
              ie.functions.setStates(ie.slider, { isLoaded: !0 }),
              ie.slider.state.shouldBeDestroyed
                ? ie.api.methods("destroy")
                : ie.slideshow.changeTo(ie.slides.first.index));
          },
          hide: function () {
            (_.addClass("ls-forcehide"),
              _.closest(".ls-wp-fullwidth-container").addClass("ls-forcehide"));
          },
          show: function () {
            (_.removeClass("ls-forcehide"),
              _.closest(".ls-wp-fullwidth-container").removeClass("ls-forcehide"));
          },
        }),
        (ie.functions = {
          convert: {
            transformOrigin: function (e, t, i) {
              var a = se.trim(e),
                s = a.split(" "),
                r = "",
                o = ["Left", "Top"],
                n = [ie.slider.width, ie.slider.height];
              a = a
                .replace("sliderleft", "0")
                .replace("sliderright", "100%")
                .replace("slidercenter", "50%")
                .replace("slidermiddle", "50%")
                .replace("slidertop", "0")
                .replace("sliderbottom", "100%")
                .replace("left", "0")
                .replace("right", "100%")
                .replace("center", "50%")
                .replace("middle", "50%")
                .replace("top", "0")
                .replace("bottom", "100%")
                .split(" ");
              for (var l = 0; l < a.length; l++)
                if (-1 !== s[l].indexOf("slider")) {
                  ie.transitions.layers.timeline.shouldRestart = !0;
                  var d = t.data(ie.defaults.init.dataKey).elements.$wrapper[0].style;
                  r +=
                    l < 2
                      ? n[l] / (100 / parseInt(a[l])) -
                        parseInt(d[o[l].toLowerCase()]) -
                        parseInt(d["margin" + o[l]]) +
                        "px "
                      : "0px";
                } else {
                  if (l < 2 && t && i)
                    switch (l) {
                      case 0:
                        n = i.width();
                        break;
                      case 1:
                        n = i.height();
                    }
                  -1 !== a[l].indexOf("%")
                    ? (r += l < 2 && t && i ? n / (100 / parseInt(a[l])) + "px " : a[l] + " ")
                    : (r += parseInt(a[l]) * ie.resize.ratio + "px ");
                }
              return se.trim(r);
            },
            easing: function (e, t) {
              return "string" != typeof e
                ? e
                : (-1 !== (e = e.toLowerCase()).indexOf("swing") || -1 !== e.indexOf("linear")
                    ? (i = ae.Linear.easeNone)
                    : ((a = e.match(/(easeinout|easein|easeout)(.+)/)[2]),
                      (s = ae[a.charAt(0).toUpperCase() + a.slice(1)]),
                      -1 !== e.indexOf("easeinout")
                        ? (i = s.easeInOut)
                        : -1 !== e.indexOf("easeout")
                          ? (i = t ? s.easeIn : s.easeOut)
                          : -1 !== e.indexOf("easein") && (i = t ? s.easeOut : s.easeIn)),
                  i);
              var i, a, s;
            },
            transition: function (e, t, i, a) {
              var s = se.extend({}, e);
              return (
                se.each(
                  { rotate: "rotation", rotateX: "rotationX", rotateY: "rotationY" },
                  function (e, t) {
                    e in s && ((s[t] = s[e]), delete s[e]);
                  },
                ),
                "after" === i
                  ? (s.scaleX = s.scaleY = s.scaleZ = 1)
                  : s.scale3d !== a &&
                    ((s.scaleX = s.scaleY = s.scaleZ = s.scale3d), delete s.scale3d),
                s.delay && (s.delay = "after" === i ? s.delay / 1e3 : s.delay),
                void 0 === t && (t = "easeInOutQuart"),
                (s.ease = ie.functions.convert.easing(t)),
                s
              );
            },
            randomProperties: function (e, t) {
              if (e && -1 !== e.indexOf("(") && -1 !== e.indexOf(",") && -1 !== e.indexOf(")")) {
                var i = e.split("(")[1].split(")")[0].split(","),
                  a = 1;
                return (
                  (i[0] = parseFloat(i[0])),
                  (i[1] = parseFloat(i[1])),
                  -1 !== t.indexOf("scale") && ((a = 100), (i[0] *= a), (i[1] *= a)),
                  Math.floor(Math.random() * (i[1] - i[0] + 1) + i[0]) / a
                );
              }
              return e;
            },
            properties: function (e, t) {
              if ("string" == typeof e) return ie.functions.convert._properties(e, t);
              if ("object" != typeof e) return e;
              for (var i in e) e[i] = ie.functions.convert._properties(e[i], t);
              return e;
            },
            _properties: function (e, t) {
              if ("enable" == e || "enabled" == e || "true" == e) return !0;
              if ("disable" == e || "disabled" == e || "false" == e) return !1;
              if ("string" != typeof e || -1 === e.indexOf(ie.defaults.init.lsDataArraySplitChar))
                return t
                  ? "" + parseInt(e) == "NaN"
                    ? 0
                    : parseInt(e)
                  : se.isNumeric(e)
                    ? parseFloat(e)
                    : e;
              for (
                var i = e.split(ie.defaults.init.lsDataArraySplitChar), a = [], s = 0;
                s < i.length;
                s++
              )
                a[s] = se.isNumeric(i[s]) ? parseFloat(se.trim(i[s])) : se.trim(i[s]);
              return a;
            },
            oldProperties: function (i) {
              return (
                se.each(
                  {
                    firstLayer: "firstSlide",
                    loops: "cycles",
                    forceLoopNum: "forceCycles",
                    layersContainer: "layersContainerWidth",
                    sublayerContainer: "layersContainerWidth",
                    randomSlideshow: "shuffleSlideshow",
                  },
                  function (e, t) {
                    e in i && ((i[t] = i[e]), delete i[e]);
                  },
                ),
                i
              );
            },
          },
          getSliderClosestParentElementWidthNumericValueOfProperty: function (e) {
            for (
              var t, i = _.parents().not(".ls-fullscreen-wrapper"), a = i.length, s = 100, r = 0;
              r < a;
              r++
            )
              if ("auto" !== (t = window.getComputedStyle(i[r]).getPropertyValue(e))) {
                if (-1 !== t.indexOf("px"))
                  return ((ie.slider.$parentWithNumericWidthValue = se(i[r])), se(i[r]));
                -1 !== t.indexOf("%") &&
                  ((s = (s / 100) * parseInt(t)),
                  (ie.slider.$parentWithNumericWidthValuePercent = s));
              }
          },
          sortArray: function (e, t, i) {
            var a = [];
            if ("forward" == i)
              for (var s = 0; s < e; s++) for (var r = 0; r < t; r++) a.push(s + r * e);
            else
              for (var o = e - 1; -1 < o; o--) for (var n = t - 1; -1 < n; n--) a.push(o + n * e);
            return a;
          },
          shuffleArray: function (e) {
            for (var t, i, a = e.length; 0 !== a;)
              ((i = Math.floor(Math.random() * a)), (t = e[(a -= 1)]), (e[a] = e[i]), (e[i] = t));
            return e;
          },
          countProp: function (e) {
            var t = 0;
            for (var i in e) e.hasOwnProperty(i) && ++t;
            return t;
          },
          getURL: function (e) {
            return e[0].currentSrc
              ? e[0].currentSrc
              : e.data("src")
                ? e.data("src")
                : e.attr("src");
          },
          getALT: function (e) {
            return !!e.attr("alt") && e.attr("alt");
          },
          setStates: function (e, t, i) {
            if (e && e.state) {
              var a = ie.slideshow.isPaused();
              if (i) e.state[t] = i;
              else for (var s in t) e.state[s] = t[s];
              var r = ie.slideshow.isPaused();
              e == ie.slideshow &&
                (ie.api.hasEvent("slideshowStateDidChange") &&
                  _.triggerHandler("slideshowStateDidChange", ie.api.eventData()),
                r != a &&
                  (r
                    ? ie.api.hasEvent("slideshowDidPause") &&
                      _.triggerHandler("slideshowDidPause", ie.api.eventData())
                    : ie.api.hasEvent("slideshowDidResume") &&
                      _.triggerHandler("slideshowDidResume", ie.api.eventData())));
            }
          },
          clearTimers: function () {
            for (var e in ie.timeouts) (clearTimeout(ie.timeouts[e]), delete ie.timeouts[e]);
            for (var t in ie.intervals) (clearInterval(ie.intervals[t]), delete ie.intervals[t]);
          },
          clearTimelines: function () {
            (ie.transitions._slideTimeline &&
              (ie.transitions._slideTimeline.pause().clear().kill(),
              delete ie.transitions._slideTimeline),
              ie.transitions._forceLayersOut &&
                (ie.transitions._forceLayersOut.kill(), delete ie.transitions._forceLayersOut),
              ie.transitions._slideTransition &&
                (ie.transitions._slideTransition.pause().clear().kill(),
                delete ie.transitions._slideTransition),
              ae.TweenMax.killTweensOf(
                _.find(".ls-bg, .ls-layer, .ls-wrapper, .ls-curtile, .ls-nexttile").get(),
              ));
          },
          resetSlideTimelines: function () {
            (ie.transitions._slideTimeline &&
              (ie.transitions._slideTimeline.pause().progress(0).clear().kill(),
              delete ie.transitions._slideTimeline),
              ie.transitions._forceLayersOut &&
                (ie.transitions._forceLayersOut.pause().progress(1).clear().kill(),
                delete ie.transitions._forceLayersOut),
              _.find(".ls-layer:not(.ls-bg-video)").each(function () {
                var e = se(this).data(ie.defaults.init.dataKey);
                (e.loop._timeline &&
                  (e.loop._timeline.stop().clear(),
                  delete e.loop._timeline,
                  ae.TweenMax.set(e.elements.$loopWrapper[0], e.reset.loopWrapperOnSlideChange)),
                  ae.TweenMax.set(e.elements.$wrapper[0], e.reset.wrapperOnSlideChange));
              }));
          },
          clearEvents: function () {
            (se(window)
              .add("body")
              .add(_)
              .add(_.find("*"))
              .add("." + z)
              .off("." + z + " .debug" + z + " .parallax" + z + " .setter" + z),
              _.off());
          },
        }),
        (ie.device = {
          $overflowWrapper: se("body").length ? se("body") : se("html"),
          isMobile: !!navigator.userAgent.match(
            /(iPhone|iPod|iPad|Android|BlackBerry|BB10|webOS|Windows Phone|mobi|opera mini|nexus 7)/i,
          ),
          supportOrientation: !!window.DeviceOrientationEvent,
          scroll: {
            keys: [32, 33, 34, 35, 36, 37, 38, 39, 40],
            disable: function () {
              (window.addEventListener("scroll", this.preventDefault, { passive: !1, capture: !0 }),
                window.addEventListener("wheel", this.preventDefault, { passive: !1, capture: !0 }),
                window.addEventListener("mousewheel", this.preventDefault, {
                  passive: !1,
                  capture: !0,
                }),
                window.addEventListener("touchmove", this.preventDefault, {
                  passive: !1,
                  capture: !0,
                }),
                window.addEventListener("keydown", this.preventDefaultForScrollKeys, {
                  capture: !0,
                }));
            },
            enable: function () {
              (window.removeEventListener("scroll", this.preventDefault, {
                passive: !1,
                capture: !0,
              }),
                window.removeEventListener("wheel", this.preventDefault, {
                  passive: !1,
                  capture: !0,
                }),
                window.removeEventListener("mousewheel", this.preventDefault, {
                  passive: !1,
                  capture: !0,
                }),
                window.removeEventListener("touchmove", this.preventDefault, {
                  passive: !1,
                  capture: !0,
                }),
                window.removeEventListener("keydown", this.preventDefaultForScrollKeys, {
                  capture: !0,
                }));
            },
            preventDefault: function (e) {
              ((e = e || window.event).preventDefault && e.preventDefault(), (e.returnValue = !1));
            },
            preventDefaultForScrollKeys: function (e) {
              if (-1 !== ie.device.scroll.keys.indexOf(e.keyCode))
                return (ie.device.scroll.preventDefault(e), !1);
            },
          },
          removeSelection: function () {
            window.getSelection
              ? window.getSelection().empty
                ? window.getSelection().empty()
                : window.getSelection().removeAllRanges && window.getSelection().removeAllRanges()
              : document.selection && document.selection.empty();
          },
          fullscreen: {
            enter: function () {
              ("fullsize" == ie.slider.initial.type &&
                "hero" == ie.o.fullSizeMode &&
                (ie.slider.heroTop = ie.slider.offsetTop),
                ie.functions.setStates(ie.slider, { inFullscreen: !0 }),
                se("body, html").addClass("ls-fullscreen"),
                ie.slider.fullscreenWrapper.requestFullscreen(),
                _.trigger("mouseleave"),
                ie.device.removeSelection());
            },
            exit: function () {
              (ie.functions.setStates(ie.slider, { inFullscreen: !1 }),
                ie.resize.all(),
                se("body, html").removeClass("ls-fullscreen"),
                ie.device.removeSelection());
            },
            toggle: function () {
              ie.device.fullscreen.element()
                ? (ie.device.fullscreen.exit(), document.exitFullscreen())
                : ie.device.fullscreen.enter();
            },
            set: function () {
              ie.o.allowFullscreen &&
                (document.fullscreenEnabled ||
                  document.webkitFullscreenEnabled ||
                  document.mozFullScreenEnabled ||
                  document.msFullscreenEnabled) &&
                (_.wrap('<div class="ls-fullscreen-wrapper"></div>'),
                (ie.slider.$fullscreenWrapper = _.closest(".ls-fullscreen-wrapper")),
                (ie.slider.fullscreenWrapper = ie.slider.$fullscreenWrapper[0]),
                (ie.slider.fullscreenWrapper.requestFullscreen =
                  ie.slider.fullscreenWrapper.requestFullscreen ||
                  ie.slider.fullscreenWrapper.webkitRequestFullscreen ||
                  ie.slider.fullscreenWrapper.mozRequestFullScreen ||
                  ie.slider.fullscreenWrapper.msRequestFullscreen),
                (document.exitFullscreen =
                  document.exitFullscreen ||
                  document.webkitExitFullscreen ||
                  document.mozCancelFullScreen ||
                  document.msExitFullscreen),
                se(document).on(
                  "fullscreenchange." +
                    z +
                    " webkitfullscreenchange." +
                    z +
                    " mozfullscreenchange." +
                    z +
                    " msfullscreenchange." +
                    z,
                  function () {
                    ie.device.fullscreen.element() || ie.device.fullscreen.exit();
                  },
                ),
                ie.slider.$fullscreenWrapper.on("dblclick." + z, function () {
                  ie.device.fullscreen.toggle();
                }));
            },
            element: function () {
              return (
                document.fullscreenElement ||
                document.webkitFullscreenElement ||
                document.mozFullScreenElement ||
                document.msFullscreenElement
              );
            },
          },
          getDimensions: function () {
            ((this.width = screen.width),
              (this.height = screen.height),
              (this.viewportWidth = se(window).width()),
              (this.viewportHeight = se(window).height()),
              (this.docWidth = se(document).width()),
              (this.docHeight = se(document).height()),
              (this.winScrollTop = se(window).scrollTop()),
              (this.winScrollLeft = se(window).scrollLeft()),
              (this.ratio = this.width / this.height),
              (ie.slider.offsetTop = _.offset().top),
              (ie.slider.offsetLeft = _.offset().left));
          },
          setBasicEvents: function () {
            var t,
              i = this;
            (se(window).on("resize.setter" + z, function () {
              ((i.viewportWidth = se(window).width()),
                (i.viewportHeight = se(window).height()),
                (i.ratio = i.width / i.height),
                (ie.slider.offsetTop = _.offset().top),
                (ie.slider.offsetLeft = _.offset().left));
            }),
              se(window).on("scroll.setter" + z, function () {
                ((i.winScrollTop = se(window).scrollTop()),
                  (i.winScrollLeft = se(window).scrollLeft()),
                  (ie.slider.offsetTop = _.offset().top),
                  (ie.slider.offsetLeft = _.offset().left));
              }),
              se(window).on("touchmove", function (e) {
                ((i.winScrollTop = window.pageYOffset),
                  (i.winScrollLeft = window.pageXOffset),
                  1 == (t = e.touches ? e.touches : e.originalEvent.touches).length &&
                    (i.touchX = t[0].clientX));
              }));
          },
        }),
        (ie.api = {
          hasEvent: function (e, t) {
            var i = se._data(t || M, "events");
            return !(!i || !i[e]);
          },
          methods: function (e, t, i, a) {
            if (!ie.slider.isBusy())
              if ("number" == typeof e)
                0 < e &&
                  e < ie.slides.count + 1 &&
                  e != ie.slides.current.index &&
                  ie.slideshow.changeTo(e, !0, !0);
              else
                switch (e) {
                  case "touchPrev":
                    ie.device.touchPrev = !0;
                  case "previousSlide":
                  case "prev":
                    ie.navigation.prev();
                    break;
                  case "touchNext":
                    ie.device.touchNext = !0;
                  case "nextSlide":
                  case "next":
                    ie.navigation.next();
                    break;
                  case "startSlideshow":
                  case "start":
                    ie.navigation.start();
                }
            switch (e) {
              case "openPopup":
                ie.initializedPlugins.popup &&
                  (t && se.isNumeric(t) && ie.slideshow.changeTo(t, !0, !0),
                  ie.initializedPlugins.popup.events.show());
                break;
              case "closePopup":
                ie.initializedPlugins.popup && ie.initializedPlugins.popup.events.hide();
                break;
              case "updateLayerData":
                t && ie.layers.update.data(t, i, a);
                break;
              case "redrawSlider":
              case "redraw":
                ie.resize.all();
                break;
              case "replaySlide":
              case "replay":
                ie.transitions._slideTimeline &&
                  (ie.transitions._slideTimeline.progress(0), ie.transitions._slideTimeline.play());
                break;
              case "reverseSlide":
              case "reverse":
                ie.transitions._slideTimeline &&
                  (ie.transitions._slideTimeline.reversed()
                    ? ie.transitions._slideTimeline.play()
                    : ie.transitions._slideTimeline.reverse(),
                  t && (ie.transitions.layers.timeline.shouldReplay = !0));
                break;
              case "unmute":
              case "unmuteMedia":
                ie.media.unmute.multipleMediaElements();
                break;
              case "stopSlideshow":
              case "stop":
                ie.navigation.stop();
                break;
              case "pauseSlider":
              case "pause":
                (ie.transitions._slideTimeline && ie.transitions._slideTimeline.stop(),
                  ie.transitions._slideTransition && ie.transitions._slideTransition.stop(),
                  ie.media.functions.stop(!1));
                break;
              case "resumePopup":
                ie.layers.get("active").each(function () {
                  ie.media.functions.playIfAllowed(se(this));
                });
              case "resumeSlider":
              case "resume":
                (ie.transitions._slideTimeline &&
                  (ie.transitions._slideTimeline.timeScale() < 0.001 &&
                    ie.transitions.layers.timeline.resume(),
                  ie.transitions._slideTimeline.play()),
                  ie.transitions._slideTransition && ie.transitions._slideTransition.play());
                break;
              case "playMedia":
                ie.media.functions.playActiveMedia();
                break;
              case "pauseMedia":
                ie.media.functions.pauseActiveMedia();
                break;
              case "toggleSlider":
              case "toggle":
                ie.slider.isPaused
                  ? (_.layerSlider("resume"), (ie.slider.isPaused = !1))
                  : (_.layerSlider("pause"), (ie.slider.isPaused = !0));
                break;
              case "reset":
              case "resetSlider":
                break;
              case "resetSlide":
              case "resetCurrentSlide":
                (ie.transitions._slideTimeline &&
                  (ie.transitions._slideTimeline.progress(0), ie.transitions._slideTimeline.stop()),
                  ie.media.functions.stop(!0));
                break;
              case "destroy":
              case "kill":
                if (ie.slider.state.isLoaded) {
                  if (
                    (ie.functions.clearTimers(),
                    ie.functions.clearTimelines(),
                    ie.layers.$all.removeData(),
                    ie.api.hasEvent("sliderDidDestroy") && _.triggerHandler("sliderDidDestroy"),
                    ie.slider.state.sholudBeRemoved || t)
                  ) {
                    if (
                      (ie.slider.$hiddenWrapper.remove(), ie.gui.timers.slidebar.$containerElement)
                    )
                      for (var s = 0; s < ie.gui.timers.slidebar.$containerElement.length; s++)
                        ie.gui.timers.slidebar.$containerElement[s] instanceof jQuery &&
                          ie.gui.timers.slidebar.$containerElement[s].remove();
                    (ie.api.hasEvent("sliderDidRemove") && _.triggerHandler("sliderDidRemove"),
                      _.parent(".ls-fullscreen-wrapper").remove());
                  }
                  (ie.functions.clearEvents(), window._layerSlider.removeSlider(z));
                } else
                  ie.functions.setStates(ie.slider, {
                    shouldBeDestroyed: !0,
                    sholudBeRemoved: t || !1,
                  });
                ((ie.slider.positionToViewport = "under"), ie.device.scroll.enable());
            }
          },
          eventData: function () {
            return {
              data: ie,
              userData: ie.o,
              uid: z,
              target: M,
              slider: _,
              state: ie.slider.state,
              isBusy: ie.slider.isBusy(),
              event: { target: M },
              api: function (e, t, i, a) {
                _.layerSlider(e, t, i, a);
              },
              slides: {
                first: {
                  index: ie.slides.first.index,
                  deeplink: ie.slides.get.deeplink(ie.slides.first.index),
                  data: ie.slides.first.data,
                },
                prev: {
                  index: ie.slides.prev.index,
                  deeplink: ie.slides.get.deeplink(ie.slides.prev.index),
                  data: ie.slides.prev.data,
                },
                current: {
                  index: ie.slides.current.index || ie.slides.first.index,
                  deeplink: ie.slides.get.deeplink(ie.slides.current.index),
                  layersIn: ie.layers.get("current,in"),
                  layersOut: ie.layers.get("current,out"),
                  timeline: ie.transitions._slideTimeline,
                  data: ie.slides.current.data,
                },
                next: {
                  index: ie.slides.next.index,
                  deeplink: ie.slides.get.deeplink(ie.slides.next.index),
                  layersIn: ie.layers.get("next,in"),
                  layersOut: ie.layers.get("next,out"),
                  data: ie.slides.next.data,
                },
                count: ie.slides.count,
              },
              slideChangeTimeline: ie.transitions._slideTransition,
              slideshow: {
                state: ie.slideshow.state,
                sequence: ie.slideshow.sequence,
                direction: ie.slideshow.direction,
                isPaused: ie.slideshow.isPaused(),
              },
              cycles: { max: ie.o.cycles, current: ie.slideshow.curCycle },
            };
          },
        }),
        (ie.browser = {
          isSafari:
            !!navigator.userAgent.match(/(iPhone|iPod|iPad|Safari)/i) &&
            !navigator.userAgent.match(/(Opera|Chrome|Edge)/i),
          isChrome: function () {
            var e = window.chrome,
              t = window.navigator,
              i = t.vendor,
              a = void 0 !== window.opr,
              s = -1 < t.userAgent.indexOf("Edge");
            return (
              !!t.userAgent.match("CriOS") ||
              (null != e && "Google Inc." === i && !1 == a && !1 == s)
            );
          },
          usesFileProtocol: -1 !== document.location.href.indexOf("file://"),
          supports3D: function () {
            for (
              var e = se("<div>"),
                t = !1,
                i = !1,
                a = [
                  "perspective",
                  "OPerspective",
                  "msPerspective",
                  "MozPerspective",
                  "WebkitPerspective",
                ],
                s = [
                  "transformStyle",
                  "OTransformStyle",
                  "msTransformStyle",
                  "MozTransformStyle",
                  "WebkitTransformStyle",
                ],
                r = a.length - 1;
              0 <= r;
              r--
            )
              t = t || void 0 !== e[0].style[a[r]];
            for (var o = s.length - 1; 0 <= o; o--)
              (e.css("transform-style", "preserve-3d"),
                (i = i || "preserve-3d" == e[0].style[s[o]]));
            return (
              t &&
                void 0 !== e[0].style[a[4]] &&
                (e.attr("id", "ls-test3d").appendTo(_),
                (t = 3 === e[0].offsetHeight && 9 === e[0].offsetLeft),
                e.remove()),
              t && i
            );
          },
          isOld: -1 !== navigator.userAgent.indexOf("rident/5"),
        }),
        (ie.initializedPlugins = {}),
        (ie.timeouts = {}),
        (ie.intervals = {}),
        (ie.debug = { options: {} }),
        (ie.plugin = { version: "6.9.2", release: "stable", releaseDate: "2019. 09. 03." }),
        ie.slider.load());
    };
  })(jQuery));
