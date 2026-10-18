// 初始化默认数据
if(!localStorage.getItem("memberList")){
    let initMembers = [
        {id:1,name:"张三",dept:"宣传部",phone:"13800138000"}
    ];
    localStorage.setItem("memberList",JSON.stringify(initMembers));
}
if(!localStorage.getItem("activityList")){
    let initAct = [
        {id:1,title:"社团招新",time:"2026-10-20",info:"欢迎新同学报名社团"}
    ];
    localStorage.setItem("activityList",JSON.stringify(initAct));
}
if(!localStorage.getItem("noticeList")){
    let notice = [{id:1,title:"例会通知",content:"本周三晚上7点社团例会"}];
    localStorage.setItem("noticeList",JSON.stringify(notice));
}

// 登录逻辑
function login(){
    let user = document.getElementById("username").value;
    let pwd = document.getElementById("pwd").value;
    if((user==="admin"||user==="user") && pwd==="123456"){
        localStorage.setItem("loginUser",user);
        window.location.href="manage.html";
    }else{
        alert("账号或密码错误！");
    }
}

// 获取成员列表
function getMembers(){
    return JSON.parse(localStorage.getItem("memberList"));
}
// 获取活动列表
function getActivities(){
    return JSON.parse(localStorage.getItem("activityList"));
}
// 获取公告
function getNotices(){
    return JSON.parse(localStorage.getItem("noticeList"));
}
