;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-moreunfold" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M478.31207 644.159081C502.692194 671.061286 542.819471 670.698193 566.819471 643.269621L837.388303 334.048098C845.146852 325.181184 844.248346 311.703582 835.381431 303.94503 826.514517 296.186481 813.036915 297.084988 805.278364 305.951902L534.709532 615.173423C527.507586 623.40422 517.168621 623.497773 509.927514 615.507586L229.141056 305.674253C221.229163 296.943889 207.737949 296.280386 199.007586 304.192277 190.277222 312.104171 189.61372 325.595383 197.525612 334.325747L478.31207 644.159081Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-search" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1001.526404 991.699618C999.922771 986.822379 999.922771 986.822379 998.661741 984.531443 997.556333 982.547938 996.293839 980.724943 994.702325 978.653549 992.500075 975.787264 989.423708 972.169135 985.358477 967.619563 978.223881 959.634933 967.82403 948.546074 954.04227 934.18551 932.495573 911.733901 910.909628 889.684252 858.479859 836.391998 806.561909 783.619985 784.782022 761.370402 763.425645 739.113463 750.035742 725.158933 739.986204 714.441517 733.331893 706.993367 730.0273 703.294545 727.65239 700.501581 726.365602 698.828322 727.222236 700.438869 727.222236 700.438869 728.57702 704.41879 730.685899 711.913483 730.685899 711.913483 721.610157 729.174018 803.853596 649.91606 851.33145 539.987051 851.33145 422.399774 851.33145 189.11482 665.530044 0 436.332393 0 207.134741 0 21.333333 189.11482 21.333333 422.399774 21.333333 655.684727 207.134741 844.799548 436.332393 844.799548 441.356706 844.799548 446.556279 844.56416 452.347883 844.11767 456.487002 843.798575 460.079727 843.454155 466.651669 842.776804 479.958906 841.405269 484.804847 841.014569 490.397372 841.014558 499.896397 841.014541 514.964663 837.646929 537.39015 831.429666 540.021178 830.700239 542.719546 829.938705 545.476431 829.148403 553.976567 826.711712 562.667765 824.108471 571.097184 821.505798 576.160226 819.942528 580.026436 818.721914 582.233225 818.013231 595.480279 813.759108 602.830912 799.380094 598.651326 785.896804 594.471738 772.413515 580.344653 764.931795 567.097598 769.18592 565.058735 769.840674 561.367413 771.006074 556.494825 772.510539 548.364858 775.020755 539.986116 777.530404 531.839533 779.865745 529.217662 780.617342 526.657771 781.339795 524.170112 782.029476 506.936476 786.807345 493.480702 789.814579 490.397278 789.814586 482.458716 789.814601 476.720548 790.277235 461.583853 791.837329 455.416051 792.473024 452.140828 792.787008 448.548723 793.063932 443.933724 793.419714 439.960704 793.599575 436.332393 793.599575 234.916275 793.599575 71.63625 627.407763 71.63625 422.399774 71.63625 217.391785 234.916275 51.199973 436.332393 51.199973 637.74851 51.199973 801.028533 217.391785 801.028533 422.399774 801.028533 525.775443 759.336083 622.309077 687.025254 691.994987 677.769918 709.563029 677.769918 709.563029 679.976768 717.62707 681.566101 722.305182 681.566101 722.305182 682.808947 724.550298 683.910231 726.511657 685.170219 728.326692 686.754421 730.386692 688.964348 733.260343 692.047349 736.886044 696.115554 741.439575 703.261474 749.437982 713.66454 760.532418 727.438434 774.887134 749.001325 797.359294 770.84669 819.675765 822.916311 872.601946 875.194278 925.7399 896.716879 947.724843 918.057933 969.962174 931.455439 983.922347 941.502012 994.634524 948.144469 1002.068378 951.440527 1005.757135 953.805218 1008.538259 955.077419 1010.194061 954.139053 1008.441707 954.139053 1008.441707 952.75811 1004.249822 950.686453 996.172693 950.686453 996.172693 960.850534 978.849743 950.24269 987.977788 948.913429 1004.130236 957.881542 1014.927251 966.849655 1025.724265 982.719104 1027.077231 993.326948 1017.949188 1003.683753 1000.332838 1003.683753 1000.332838 1001.526404 991.699618Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-Loading" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M384 128A64 64 13680 1 0 640 128 64 64 13680 1 0 384 128zM655.53 240.47A64 64 13680 1 0 911.53 240.47 64 64 13680 1 0 655.53 240.47zM832 512A32 32 13680 1 0 960 512 32 32 13680 1 0 832 512zM719.53 783.53A32 32 13680 1 0 847.53 783.53 32 32 13680 1 0 719.53 783.53zM448.002 896A32 32 13680 1 0 576.002 896 32 32 13680 1 0 448.002 896zM176.472 783.53A32 32 13680 1 0 304.472 783.53 32 32 13680 1 0 176.472 783.53zM144.472 240.47A48 48 13680 1 0 336.472 240.47 48 48 13680 1 0 144.472 240.47zM56 512A36 36 13680 1 0 200 512 36 36 13680 1 0 56 512z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-subtract" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M853.333333 533.333333C865.115407 533.333333 874.666667 523.782075 874.666667 512 874.666667 500.217925 865.115407 490.666667 853.333333 490.666667L170.666667 490.666667C158.884592 490.666667 149.333333 500.217925 149.333333 512 149.333333 523.782075 158.884592 533.333333 170.666667 533.333333L853.333333 533.333333Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shoujiwangye01" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M991.9488 752.0256 512 271.9744 32.0512 752.0256Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)