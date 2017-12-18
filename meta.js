module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "项目名称"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "项目描述",
      "default": "基于Vue.js的前端项目"
    },
    "author": {
      "type": "string",
      "message": "作者"
    },
    "build": {
      "type": "list",
      "message": "Vue 编译",
      "choices": [
        {
          "name": "运行时+编译器：推荐大多数用户使用",
          "value": "standalone",
          "short": "standalone"
        },
        {
          "name": "运行时版本：约6KB的打包机最小+ gzip，但模板（或任何Vue特定的HTML）只允许在.vue文件中 - 渲染功能需要在其他地方",
          "value": "runtime",
          "short": "runtime"
        }
      ]
    },
    "router": {
      "type": "confirm",
      "message": "安装 路由?"
    },
    "lint": {
      "type": "confirm",
      "message": "使用 ESLint 规范 你的代码?"
    },
    "lintConfig": {
      "when": "lint",
      "type": "list",
      "message": "选择一个默认ESLint标准",
      "choices": [
        {
          "name": "Standard (https://github.com/standard/standard)",
          "value": "standard",
          "short": "Standard"
        },
        {
          "name": "Airbnb (https://github.com/airbnb/javascript)",
          "value": "airbnb",
          "short": "Airbnb"
        },
        {
          "name": "none (配置你自己的)",
          "value": "none",
          "short": "none"
        }
      ]
    },
    "vuesocket": {
      "type": "confirm",
      "message": "集成Vue-Socket.io开发响应式项目?"
    },
    "socketio": {
      "type": "string",
      "message": "如果你选择集成vue-socket.io 请输入 你的socket.io服务端远程地址"
    },
    "unit": {
      "type": "confirm",
      "message": "安装测试框架 Karma + Mocha?"
    },
    "e2e": {
      "type": "confirm",
      "message": "使用Nightwatch进行端到端测试?"
    }
  },
  "filters": {
    ".eslintrc.js": "lint",
    ".eslintignore": "lint",
    "config/test.env.js": "unit || e2e",
    "test/unit/**/*": "unit",
    "build/webpack.test.conf.js": "unit",
    "test/e2e/**/*": "e2e",
    "src/router/**/*": "router"
  },
  "completeMessage": "友情提示: 编程有害身体,为了你和家人的健康，请到野外编程\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\n如有疑问请联系QQ:121625933"
};
