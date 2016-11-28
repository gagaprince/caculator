"use strict";
function Btn(){

}
Btn.prototype={

};
Btn.extend=function(prototype){
    function Class(){}
    Class.prototype = new Btn();
    for(var key in prototype){
        Class.prototype[key]=prototype[key];
    }
    return Class;
}