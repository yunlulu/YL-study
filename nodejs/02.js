/*替换文件名字*/
var fs=require("fs");
var src="images";
fs.readdir(src,function (err,files) {
    console.log(files);
    for(i=0;i<files.length;i++){
        var oldPath=src+"/"+files[i];
        var newPath=src+"/"+files[i].replace(/-/g,"haha-");
        fs.rename(oldPath,newPath,function (err) {
            if(!err){
                console.log(newPath+"haha-替换成功！");
            }
        })
    }
});