//验证EMAIL
function IsEmail(v) {
    return IsValid(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/, v);
}
//验证手机号
function IsMobile(v) {
    return IsValid(/^((\(\d{3}\))|(\d{3}\-))?(13|15|18)\d{9}$/, v);
}

//验证电话
function IsPhone(v) {
    return IsValid(/^((\(\d{3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}$/, v);
}
//精确验证电话
function IsTel(v) {
    return IsValid(/^0\d{2}-\d{8}|0\d{3}-\d{7}$/, v);
}
//验证中国邮政编码
function IsZip(v) {
    return IsValid(/^[1-9]\d{5}(?!\d)$/, v);
}
//验证是否数字
function Isint(v) {
    return IsValid(/^[0-9]*$/, v);
}
//是否含有中文（也包含日文和韩文）   
function isChineseChar(str) {
    var reg = /[\u4E00-\u9FA5\uF900-\uFA2D]/;
    return !reg.test(str);
}
//同理，是否含有全角符号的函数   
function isFullwidthChar(str) {
    var reg = /[\uFF00-\uFFEF]/;
    return !reg.test(str);
}
//验证输入是否数字和- 组合
function IsNumAndLing(v) {
    var reg = /^[\d\-]+$/;
    return IsValid(reg, v);
}
//只能输入数字和-
function NumAndLine(v) {
    var reg = /(\d+[-]+)|(\d+)$/;
    return IsValid(reg, v);
}
//验证输入是否数字和. 组合
function IsNumAndDian(v) {
    var reg = /^[\d\.]+$/;
    return IsValid(reg, v);
}  
function IsCardNo15(v) {
    return IsValid(/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/, v);
}
function IsCardNo18(v) {
    return IsValid(/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/, v);
}
function Trim(strSource) {
    return strSource.replace(/^\s*/, '').replace(/\s*$/, '');
}

function IsValid(p, t) {
    if (p.test(t))
        return true;
    return false;
}
function CheckAll(form, ch)//全选
{
    if (form.elements.length > 0) {
        for (var i = 0; i < form.elements.length; i++) {
            form.elements[i].checked = ch;
        }
    }
}
function SValue() {
    var s = "0";
    var flag = false;
    var Elementid = document.form1.SID;
    if (Elementid.length == undefined) {
        if (Elementid.checked) s = Elementid.value;
    } else {
        for (var i = 0; i < Elementid.length; i++) {
            if (Elementid[i].checked) {
                s = s + "," + Elementid[i].value;
                flag = true;
            }
        }
    }
    //if(flag) s=s+"0";
    // alert(s);
    return s;
}
function CheckFile(obj) {
    var array = new Array('rar', 'zip', 'pdf', 'ppt','doc','docx');  //可以上传的文件类型   
    if (obj.value == '') {
        //alert("让选择要上传的图片!");
        return false;
    }
    else {
        var fileContentType = obj.value.match(/^(.*)(\.)(.{1,8})$/)[3]; //这个文件类型正则很有用：）   
        var isExists = false;
        for (var i in array) {
            if (fileContentType.toLowerCase() == array[i].toLowerCase()) {
                isExists = true;
                $("#fileExt").val("");
                return true;
            }
        }
        if (isExists == false) {
            obj.value = ''
            $("#fileExt").val("1");
            alert("选择文件类型不正确(rar,zip,pdf,ppt,doc,docx)，附件最大20M!");
            return false;
        }
        return false;
    }
}  