var crazy = function(){
      function c() {
          var e = document.createElement("link");
          e.setAttribute("type", "text/css");
          e.setAttribute("rel", "stylesheet");
          e.setAttribute("href", f);
          e.setAttribute("class", l);
          document.body.appendChild(e)
      }
  
      function h() {
          var e = document.getElementsByClassName(l);
          for (var t = 0; t < e.length; t++) {
              document.body.removeChild(e[t])
          }
      }
  
      function p() {
          var e = document.createElement("div");
          e.setAttribute("class", a);
          document.body.appendChild(e);
          setTimeout(function() {
              document.body.removeChild(e)
          }, 100)
      }
  
      function d(e) {
          return {
              height: e.offsetHeight,
              width: e.offsetWidth
          }
      }
  
      function v(i) {
          var s = d(i);
          return s.height > e && s.height < n && s.width > t && s.width < r
      }
  
      function m(e) {
          var t = e;
          var n = 0;
          while (!!t) {
              n += t.offsetTop;
              t = t.offsetParent
          }
          return n
      }
  
      function g() {
          var e = document.documentElement;
          if (!!window.innerWidth) {
              return window.innerHeight
          } else if (e && !isNaN(e.clientHeight)) {
              return e.clientHeight
          }
          return 0
      }
  
      function y() {
          if (window.pageYOffset) {
              return window.pageYOffset
          }
          return Math.max(document.documentElement.scrollTop, document.body.scrollTop)
      }
  
      function E(e) {
          var t = m(e);
          return t >= w && t <= b + w
      }
  
      function S() {
          var e = document.createElement("audio");
          e.setAttribute("class", l);
          e.src = i;
          e.loop = false;
          e.addEventListener("canplay", function() {
              setTimeout(function() {
                  x(k)
              }, 500);
              setTimeout(function() {
                  N();
                  p();
                  for (var e = 0; e < O.length; e++) {
                      T(O[e])
                  }
              }, 9750)
          }, true);
          e.addEventListener("ended", function() {
              N();
              h()
          }, true);
          e.innerHTML = " <p>If you are reading this, it is because your browser does not support the audio element. We recommend that you get a new browser.</p> <p>";
          document.body.appendChild(e);
          e.play()
      }
  
      function x(e) {
          e.className += " " + s + " " + o
      }
  
      function T(e) {
          e.className += " " + s + " " + u[Math.floor(Math.random() * u.length)]
      }
  
      function N() {
          var e = document.getElementsByClassName(s);
          var t = new RegExp("\\b" + s + "\\b");
          for (var n = 0; n < e.length;) {
              e[n].className = e[n].className.replace(t, "")
          }
      }
      var e = 10;
      var t = 10;
      var n = 700;
      var r = 700;
      var i = "/static/upload/sabm.mp3";
      var s = "mw-harlem_shake_me";
      var o = "im_first";
      var u = ["im_drunk", "im_baked", "im_trippin", "im_blown"];
      var a = "mw-strobe_light";
      var f = "/template/default/common/shake.css";
      var l = "mw_added_css";
      var b = g();
      var w = y();
      var C = document.getElementsByTagName("*");
      var k = null;
      for (var L = 0; L < C.length; L++) {
          var A = C[L];
          if (v(A)) {
              if (E(A)) {
                  k = A;
                  break
              }
          }
      }
      if (A === null) {
          console.warn("Could not find a node of the right size. Please try a different page.");
          return
      }
      c();
      S();
      var O = [];
      for (var L = 0; L < C.length; L++) {
          var A = C[L];
          if (v(A)) {
              O.push(A)
          }
      }
};

(function(){
      document.addEventListener('DOMContentLoaded', function() {
        var link = document.createElement("A");
        link.id = "shake-now";
        link.style.color = "red";
        link.href = "javascript:void(0)";
        link.innerHTML = "嗨一下";
        document.getElementById("toptb").getElementsByClassName("z")[0].appendChild(link);
        document.getElementById("shake-now").addEventListener("click", crazy, false);});
}());