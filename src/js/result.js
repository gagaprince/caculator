"use strict";
function Result(id){
    this.input = document.getElementById(id);
}
Result.prototype={
    input:null,
    result:0,
    render:function(){
        this.input.value=this.result;
    }
}