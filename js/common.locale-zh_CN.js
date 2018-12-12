/**
 * App 中文
 */
if (typeof(App) == 'undefined') {
    App = {};
}

$.extend(App, {
    msg : {
        successful : "操作成功",
        failure : "操作失败",
        confirmBtnText : "确定",
        cancelBtnText : "取消",
        inputError : "请输入内容",
        warnUpdate : "请选择要修改的记录",
        warnDelete : "请选择要删除的记录",
        confirmDelete : "确定要删除选择的记录？"
    },
    ajax : {
        emptyresponse : "响应数据为空",
        status0 : "无法与服务器建立连接",
        status1 : "向服务端发生请求失败",
        status404 : "不存在",
        status405 : "请求不被允许",
        status408 : "服务器等候请求时发生超时",
        status500 : "服务器内部错误",
        status503 : "服务不可用",
        statusfail : "请求失败, 状态代码",
    },
    date : {
        invalidformat : "日期格式不正确"
    },
    window : {
        title : "窗口"
    }
});
