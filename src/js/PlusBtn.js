"use strict";
var PlusBtn = OpBtn.extend({
    ctor:function(){
        OpBtn.prototype.ctor.apply(this,arguments);
        this.name="plusBtn";
    },
    operate:function(a,b){
        return a+b;
    }
});