"use strict";
var em = EventManager;
function CaculatorManager (){
    this.init();
}
var CacularStates={
    LEFTINPUT:0,
    RIGHTINPUT:1,
    ENSURE:2
}
CaculatorManager.prototype={
    resultContent:0,

    leftNum:null,
    rightNum:null,
    currentNum:null,

    state:CacularStates.LEFTINPUT,//当前计算状态
    init:function(){
        this.initData();
        this.initListener();
        this.postReuslt();
    },
    initData:function(){
        this.leftNum = new CacuNum();
        this.rightNum = new CacuNum();
        this.currentNum = this.leftNum;
    },
    postReuslt:function(){
        //向屏幕发送一个消息 改变屏幕内容
        var result = this.resultContent;
        var e = new QEvent(QEvent.EventName.RENDER);
        e.setData(result);
        em.postMsg(e);
    },
    initListener:function(){
        //接收按键消息
        var _this = this;
        //接收数字键
        em.addEventListener(QEvent.EventName.NUMBTN,function(e){
            var num = e.getData();
            _this.excuteNum(num);
        });
        em.addEventListener(QEvent.EventName.DELBTN,function(e){
            _this.delNum();
        });
    },
    excuteNum:function(num){
        this.currentNum.addNum(num);
        this.resultContent = this.currentNum.parseAll();
        this.postReuslt();
    },
    delNum:function(){
        this.currentNum.removeNum();
        this.resultContent = this.currentNum.parseAll();
        this.postReuslt();
    }
}