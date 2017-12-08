/*window.onload=function(){*/

var menuItem=document.getElementsByClassName("menu-item");
    var home=document.getElementsByClassName("home");
    for (var i = 0; i < menuItem.length;i++) {
        menuItem[0].className="menu-item cur";
        home[0].className = 'home';
        menuItem[i].key=i;
        menuItem[i].onclick=function(){
            for (var j = 0; j < menuItem.length;j++) {
                menuItem[j].className="menu-item";
                home[j].className='home dis';
            }
            this.className="menu-item cur";
            home[this.key].className='home';
            console.log(this,this.key);
        };
    };
    var oList=document.getElementsByClassName("promo-list")[0];
    var oImg=document.getElementsByClassName("list-img");
    var oText=document.getElementsByClassName("list-text");
    var timer=0;

    for (var i = 0; i < oText.length;i++) {
        oText[i].key=i;
        oText[i].onmouseover=function(){
            for (var j = 0; j < oText.length;j++) {
                oText[j].className="list-text ";
            }
            this.className="list-text on";
            oList.style.marginLeft = '-'+820*this.key+'px';
            console.log(this,this.key);
        };
    };

/*};*/