//引入查询字符串模块
const querystring=require('querystring') ;
//查询字符串
let str='kw=dell&price=4000';
//解析为对象
let obj=querystring.parse(str);
console.log(obj.kw,obj.price);

