//全局回调
function callback(msg,callNme) {
    if(callNme=="selectTargetCallBack"){
        selectTargetCallBack(msg);
    }else if(callNme=="addTargetCallBack"){
        addTargetCallBack(msg);
    }else if(callNme=="targeteditLoadCallBack"){
        targeteditLoadCallBack(msg);
    }else if(callNme=="updateTargetCallBack"){
        updateTargetCallBack(msg);
    }
}

//修改指标
function targetupdate(){
    var data={
        colsNumb:$("#colsNumb").val(),
        sqlsName:$("#sqlsName").val(),
        sqlsValu:$("#sqlsValu").val(),
        paraType:$("#paraType").val()
    }
    ajaxPost("targetController.updateTarget.action",data,"updateTargetCallBack");
}
function updateTargetCallBack(msg){
    var index=parent.layer.getFrameIndex(window.name);
    parent.location.reload();
    parent.layer.close(index);
}

//指标修改页面载入
function targeteditLoad(){
    var colsNumb=RequestParameter()["colsNumb"];
    var data={
        colsNumb:colsNumb
    }
    ajaxPost("targetController.selectTarget.action",data,"targeteditLoadCallBack");
}
function targeteditLoadCallBack(msg){
    $("#colsNumb").val(msg.myList[0].colsNumb);
    $("#sqlsName").val(msg.myList[0].sqlsName);
    $(".select").val(msg.myList[0].paraType);
    $("#sqlsValu").val(msg.myList[0].sqlsValu);
}

//删除指标
function target_del(obj,value){
    layer.confirm('确认要删除吗？',function(index){
        var data={
            colsNumb:value
        }
        $.ajax({
            type: 'POST',
            url: 'targetController.deleteTarget.action',
            data:data,
            dataType: 'json',
            success: function(data){
                location.replace(location.href);
                layer.msg('已删除!',{icon: 6,time:1000});
            },
            error:function(data) {
                console.log(data.msg);
            },
        });
    });
}

//指标执行
function execTarget(){
    layer.open({
        type: 3,
        area: [30+'px', 30+'px'],
        shade:0.4,
        title: false,
        success: function(layero, index){
            var data= {};
            $.ajax({
                url :"targetController.execTarget.action",
                data:data,
                type:"post",
                dataType: "json",
                success : function(msg) {
                    layer.msg('指标 ： ['+ msg.result +']个 执行完成。', {icon: 1});
                    layer.close(index);
                }
            });
        }
    });
}

//加载指标明细
function targetLoad(){
    var data= {};
    ajaxPost("targetController.selectTarget.action",data,"selectTargetCallBack");
}
function selectTargetCallBack(msg){
    innerHtmlForTemplate('myTbody','target_Template',msg);
    table_refurbish();
}

//导入账单
function  targetadd() {
    var data= $("#form-target-add").serialize();
    ajaxPost("targetController.addTarget.action",data,"addTargetCallBack");
}
function  addTargetCallBack(msg) {
    var index=parent.layer.getFrameIndex(window.name);
    parent.location.reload();
    parent.layer.close(index);
}
