/*
	包的概念：
		js中的包，类似于java中的jar包，个人理解
	npm ：
		包管理工具
	全局安装：
		全局安装一般用来cmd窗口命令，安装在 node_modules中
	安装包：
		全局安装 加上 -g命令，本地安装 不需要加上 -g命令
		npm install -g 包名
	卸载包：
		npm uninstall -g 包名
	更新包：(注意，更新只会更新到最新版本)
		npm update -g 包名

	本地安装：
		npm init [-y] 将自己写得代码进行打包
		node . 执行自己打的包
		npm install 包名[@版本号] 安装包以便开发使用
		再次安装会将原来的包覆盖掉
	卸载更新都与全局都差不多，去掉 -g即可
	
	--save 命令
	--save-dev命令
	npm install 包 --save 安装生产环境的包
	npm install 包 --save-dev 安装开发环境的包

	yarn 命令
		yarn命令与npm类似，但是效率比npm快，可以自己了解

*/