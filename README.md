# node-mysql-test
采用的express node mvc框架


基于appfog云空间，详情请访问appfog官网：
```
https://console.appfog.com/
```
演示地址
```
http://snode.hp.af.cm/
```
## 提示
推荐使用CoffeeScript版，该版本会持续更新
```
https://github.com/ChunMengLu/coffee-snode.git
```

# Install
```
git clone git://github.com/ChunMengLu/node_mysql_test.git
```
* 注意jade模版，一行不能同时出现`空格`和`tab`，开发时请将`空格`和`tab`调成可视状态！
* 本demo已经将全部的`tab`转换成了4个`空格`。

# 本地测试需要更改config.js
* appfog无需更改

```
// 端口
exports.port = cloudPort || 3000;
// url供socket.io使用
exports.domain = cloudPort ? 'http://snode.hp.af.cm' : 'http://localhost:3000';
// 数据库url
if(cloudServices){
    var env = JSON.parse(process.env.VCAP_SERVICES);
    exports.db = env['mysql-5.1'][0]['credentials'];
}else{
    exports.db = {
          url:      "localhost"
        , port:     "3306"
        , database: "snode"
        , user:     "root"
        , password: "root"
    }
};
// secret
exports.secret = "snode";
// email 配置
exports.email = {
      user:     "136927705"
    , password: "zuo15802346441."
    , host:     "smtp.qq.com"
    , ssl:      true
}
```

# *测试 启动程序
```
node app.js
```
或
```
./startup.bat 
```

请删除掉views/common/_layout.jade中的百度统计代码！

如果有不明白或问题可联系email：596392912@qq.com Thanks！
