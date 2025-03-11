# Environment

自行安装好pnpm（npm也可以更推荐pnpm一步到位吧），直到可以在命令行中输入 `pnpm -v`能返回版本号

# Install

在项目根目录下执行 `pnpm i`

# Run

执行 `pnpm run server`开启后端
不要关闭后端控制台，另开一个命令行，执行 `pnpm run dev`开启前端，随后会在命令行中展示URL，打开即可。

# 打包

执行 `pnpm run build`
等待打包即可在 `/dist`下看到打包出来的html文件，注意无法直接在浏览器中本地打开，需要用到服务器（要用到自行解决了）

实际上这些run命令来自于 `/package.json.script`，可以自行查看

# 源码

## 项目结构

源码主要在 `/src`下

main.tsx是入口文件，App.tsx……第二个入口？
server：后端服务器代码
util：工具类代码
其余自行判断（懒）
