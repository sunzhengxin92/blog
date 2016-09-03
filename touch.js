
//基于百度云touch.js
//单击
    touch.on(oBox,'tap',function(e){
        this.style.webkitTransitionDuration='1s';
        this.style.webkitTransform='rotate(360deg)';
        var delayTimer=window.setTimeout(function(){
            this.style.webkitTransitionDuration='0s';
            this.style.webkitTransform='rotate(0deg)';
        }.bind(this),1000);
    });
    //双击
    touch.on(oBox,'doubletap',function(e){
        this.style.webkitTransitionDuration='1s';
        this.style.webkitTransform='rotate(0deg)';
        var delayTimer=window.setTimeout(function(){
            this.style.webkitTransitionDuration='0s';
            this.style.webkitTransform='rotate(360deg)';
        }.bind(this),1000);
    });
    //长按
    touch.on(oBox,'hold',function(e){
        this.style.backgroundColor='red';
    });
