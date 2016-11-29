"use strict";
var PmBtn = Btn.extend({
    name:null,
    ctor:function(id){
        Btn.prototype.ctor.call(this,id);
        this.name = "正负号";
    },
    initListener:function(){
        var _this = this;
        this.btn.addEventListener("click",function(){
            //点击了数字键
            alert(_this.name+"键被点击了");
        },false);
    }
});