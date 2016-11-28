"use strict";
var MultiBtn = OpBtn.extend({
    ctor:function(){
        OpBtn.prototype.ctor.apply(this,arguments);
        this.name="乘法Btn";
    },
    operate:function(a,b){
        return a*b;
    }
});