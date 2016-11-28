"use strict";
var NumBtn = Btn.extend({
    num:null,
    ctor:function(id,num){
        Btn.prototype.ctor.call(this,id);
        this.num = num;
    },
    initListener:function(){
        var _this = this;
        this.btn.addEventListener("click",function(){
            //点击了数字键
            alert(_this.num+"键被点击了");
        },false);
    }
});