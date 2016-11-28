"use strict";
var DiviBtn = OpBtn.extend({
    ctor:function(){
        OpBtn.prototype.ctor.apply(this,arguments);
        this.name="除法Btn";
    },
    operate:function(a,b){
        return a/b;
    }
});