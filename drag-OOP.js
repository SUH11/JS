<html>
<head>
  <title></title>
  <meta charset="utf-8">
  <style>
    div { width: 100px; height: 100px; background: yellowgreen; position: absolute; left:100px; top: 100px; }
  </style>
  <script>
    window.onload = function() {
      var oDiv = document.getElementsByTagName('div')[0];

      var d1 = new Drag(oDiv);

      d1.init();

    };

    function Drag(obj) {
      this.oDiv = obj;
      this.disX = null;
      this.disY = null;
    }

    Drag.prototype.init = function() {
      var _this = this;
      this.oDiv.onmousedown = function(ev) {
        var ev = ev || event;
        _this.fnDown(ev);
      };
    };

    Drag.prototype.fnDown = function(ev) {
      var _this = this;
      this.disX = ev.clientX - parseInt( this.oDiv.offsetLeft );
      this.disY = ev.clientY - parseInt( this.oDiv.offsetTop );
      console.log( ev.clientX );

      document.onmousemove = function(ev){
        var ev = ev || event;
        _this.fnMove(ev, _this);
      };

      document.onmouseup = function() {
        _this.fnUp();
      };

      return false;
    };

    Drag.prototype.fnMove = function(ev, _this) {
      console.log(_this.disX);
      _this.oDiv.style.left = ev.clientX - _this.disX + 'px';
      _this.oDiv.style.top = ev.clientY - _this.disY + 'px';
    };

    Drag.prototype.fnUp = function() {
      document.onmousemove = document.onmouseup = null;
    };
    
  </script>
</head>
<body>
    <div></div>
</body>
</html>
