"use strict";
//加减乘除按钮
var OpBtn = Btn.extend({
    num:null,
    name:"",
    ctor:function(id){
        Btn.prototype.ctor.call(this,id);
    },
    initListener:function(){
        var _this = this;
        this.btn.addEventListener("click",function(){
            alert(_this.name+"被点击了");
        },false);
    }
});