var span = document.getElementsByClassName('span');
  var div = document.getElementsByClassName('div');
  var l = 0;
  span[1].onclick = ()=>{
      l++;
      for(var i of div)
      {
          if (l==0) {i.style.left = "0px";}
          if (l==1) {i.style.left = "-265px";}
          if (l==2) {i.style.left = "-530px";}
          if (l==3) {i.style.left = "-795px";}
          if (l==4) {i.style.left = "-1060px";}
          if (l==5) {i.style.left = "-1325px";}
          if (l==6) {i.style.left = "-1590px";}
          if (l>6) {l=6;}
      }
  }
  span[0].onclick = ()=>{
      l--;
      for(var i of div)
      {
          if (l==0) {i.style.left = "0px";}
          if (l==1) {i.style.left = "-265px";}
          if (l==2) {i.style.left = "-530px";}
          if (l==3) {i.style.left = "-795px";}
          if (l==4) {i.style.left = "-1060px";}
          if (l==5) {i.style.left = "-1325px";}
          if (l==6) {i.style.left = "-1590px";}
          if (l<0) {l=0;}
      }
  }