// Instructors
var span = document.getElementsByClassName('span');
var div = document.getElementsByClassName('div');
var l = 0;
span[1].onclick = ()=>{
    l++;
    for(var i of div)
    {
        if (l==0) {i.style.left = "0px";}
        if (l==1) {i.style.left = "-265px";}
        if (l==2) {i.style.left = "-550px";}
        if (l>2) {l=2;}
    }
}
span[0].onclick = ()=>{
    l--;
    for(var i of div)
    {
        if (l==0) {i.style.left = "0px";}
        if (l==1) {i.style.left = "-265px";}
        if (l==2) {i.style.left = "-550px";}
        if (l<0) {l=0;}
    }
}

// S.Y. 2020-2021
var span3 = document.getElementsByClassName('span3');
var div3 = document.getElementsByClassName('div3');
var o = 0;
span3[1].onclick = ()=>{
    o++;
    for(var i of div3)
    {
        if (o==0) {i.style.left = "0px";}
        if (o==1) {i.style.left = "-300px";}
        if (o==2) {i.style.left = "-600px";}
        if (o==3) {i.style.left = "-900px";}
        if (o==4) {i.style.left = "-1200px";}
        if (o==5) {i.style.left = "-1500px";}
        if (o==6) {i.style.left = "-1880px";}
        if (o>6) {o=6;}
    }
}
span3[0].onclick = ()=>{
    o--;
    for(var i of div3)
    {
        if (o==0) {i.style.left = "0px";}
        if (o==1) {i.style.left = "-380px";}
        if (o==2) {i.style.left = "-680px";}
        if (o==3) {i.style.left = "-980px";}
        if (o==4) {i.style.left = "-1280px";}
        if (o==5) {i.style.left = "-1580px";}
        if (o==6) {i.style.left = "-1880px";}
        if (o<0) {o=0;}
    }
}

// S.Y. 2019-2020
var span2 = document.getElementsByClassName('span2');
var div2 = document.getElementsByClassName('div2');
var n = 0;
span2[1].onclick = ()=>{
    n++;
    for(var i of div2)
    {
        if (n==0) {i.style.left = "0px";}
        if (n==1) {i.style.left = "-300px";}
        if (n==2) {i.style.left = "-600px";}
        if (n==3) {i.style.left = "-900px";}
        if (n==4) {i.style.left = "-1200px";}
        if (n==5) {i.style.left = "-1615px";}
        if (n>5) {n=5;}
    }
}
span2[0].onclick = ()=>{
    n--;
    for(var i of div2)
    {
        if (n==0) {i.style.left = "0px";}
        if (n==1) {i.style.left = "-415px";}
        if (n==2) {i.style.left = "-715px";}
        if (n==3) {i.style.left = "-1015px";}
        if (n==4) {i.style.left = "-1315px";}
        if (n==5) {i.style.left = "-1615px";}
        if (n<0) {n=0;}
    }
}

// S.Y. 2018-2019
var span1 = document.getElementsByClassName('span1');
var div1 = document.getElementsByClassName('div1');
var m = 0;
span1[1].onclick = ()=>{
    m++;
    for(var i of div1)
    {
        if (m==0) {i.style.left = "0px";}
        if (m==1) {i.style.left = "-300px";}
        if (m==2) {i.style.left = "-600px";}
        if (m==3) {i.style.left = "-900px";}
        if (m==4) {i.style.left = "-1350px";}
        if (m>6) {m=6;}
    }
}
span1[0].onclick = ()=>{
    m--;
    for(var i of div1)
    {
        if (m==0) {i.style.left = "0px";}
        if (m==1) {i.style.left = "-450px";}
        if (m==2) {i.style.left = "-750px";}
        if (m==3) {i.style.left = "-1050px";}
        if (m==4) {i.style.left = "-1350px";}
        if (m<0) {m=0;}
    }
}