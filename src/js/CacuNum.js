"use strict";
function CacuNum(){

}
CacuNum.prototype={
    isMinus:0,//是否是负数
    intPart:0,//整数部分
    floatPart:0,//小数部分
    dotType:0,//是否有小数点
    all:0,//整个数
    clear:function(){
        this.intPart=0;
        this.floatPart=0;
        this.dotType=0;
        this.all=0;
    },
    addNum:function(num){
        if(this.dotType){
            //有小数点
            var floatPart = this.floatPart;
            floatPart+=""+num;
            this.floatPart = parseFloat(floatPart);
        }else{
            var intPart = this.intPart;
            if(intPart==0){
                intPart=num;
            }else{
                intPart+=""+num;
            }
            this.intPart=parseInt(intPart);
        }
    },
    removeNum:function(){
        if(this.dotType){
            //有小数点
            var floatPart = this.floatPart+"";
            if(floatPart.length>2){
                floatPart = floatPart.substring(0,floatPart.length-1);
            }
            this.floatPart = parseFloat(floatPart);
        }else{
            var intPart = this.intPart+"";
            if(intPart.length>0){
                intPart = intPart.substring(0,intPart.length-1);
            }
            if(intPart==""){
                intPart=0;
            }
            this.intPart=parseInt(intPart);
        }
    },
    //将一个数字设置到此对象中
    parseNumIn:function(num){
        if(num==0){
            this.isMinus=0;
        }else{
            this.isMinus = num/Math.abs(num)==-1?1:0;
        }
        var intPart = Math.floor(num);
        var floatPart = num=intPart;
        if(floatPart!=0){
            this.dotType=1
        }else{
            this.dotType=0;
        }
        this.intPart = intPart;
        this.floatPart = floatPart;
    },
    parseAll:function(){
        this.all = parseInt(this.intPart);
        if(this.dotType){
            this.all +=parseFloat(this.floatPart);
        }
        if(this.isMinus){
            this.all = -this.all;
        }
        return this.all;
    }
}