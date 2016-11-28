"use strict";
//退格按钮
var DelBtn = Btn.extend({
    num:null,
    ctor:function(id){
        Btn.prototype.ctor.call(this,id);
    },
    initListener:function(){
        var _this = this;
        this.btn.addEventListener("click",function(){
            alert("退格键被点击了");
        },false);
    }
});