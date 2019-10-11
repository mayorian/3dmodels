AFRAME.registerComponent('set-rotation', {
    tick: function () {    
      var el = this.el;  
      var player_head = document.querySelector("#playerhead");
      var rotY = player_head.getAttribute('rotation');
      //el.setAttribute('rotation', rotY);
     el.setAttribute('rotation', {y : rotY.y});
      
     // console.log(rotY.y);
    }
  });

