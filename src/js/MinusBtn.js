"use strict";
var MinusBtn = OpBtn.extend({
    ctor:function(){
        OpBtn.prototype.ctor.apply(this,arguments);
        this.name="减法btn";
    },
    operate:function(a,b){
        return a-b;
    }
});