"use strict";
//清空按钮
var AcBtn = Btn.extend({
    num:null,
    ctor:function(id){
        Btn.prototype.ctor.call(this,id);
    },
    initListener:function(){
        var _this = this;
        this.btn.addEventListener("click",function(){
            //点击了数字键
            alert("清空键被点击了");
        },false);
    }
});