const http = require('http');

const homePage = `
<!DOCTYPE html>
<html>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<meta charset="utf-8">
<head>
<title>logan的个人网站</title>
<style type="text/css">
	*{padding:0;margin:0;}
	body{background:#666;}
	.top_nav{background:black;padding:0 50px;height:70px;}
	.top_nav li{padding:0 25px;height:70px;line-height:70px;float:left;list-style:none;color:white;font-size:17px;cursor:pointer;}
	.top_nav li:hover{background:#666;}
	.content{line-height:600px;font-size:30px;text-align:center;color:green;}
</style>
</head>
<body>
	<div class="wrapper">
		<ul class="top_nav">
			<li class="top_nav_item">首页</li>
			<li class="top_nav_item">站长简历</li>
			<li class="top_nav_item">csdn博客</li>
			<li class="top_nav_item">github</li>
			<li class="top_nav_item">开源中国</li>
		</ul>
		<div class="content">网站内容开发中，敬请期待</div>
	</div>
</body>
</html>`;

http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html;');
  res.end(homePage);
})
.listen(3000, () => {
  console.log('server Tunning At port: 3000');
});