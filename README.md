# Hash Tool

跨平台 Hash 生成工具，支持 10 种常用 Hash 算法。

## 功能特性

- 支持 10 种 Hash 算法：MD5, SHA-1, SHA-224, SHA-256, SHA-384, SHA-512, SHA3-224, SHA3-256, SHA3-384, SHA3-512
- 实时计算，输入即生成
- 大小写格式都支持
- 一键复制功能
- 跨平台支持（Windows, macOS, Linux）

## 下载

前往 [Releases](../../releases) 页面下载对应平台的安装包。

### macOS 安装说明

由于应用未签名，首次打开时需要：

1. 右键点击应用，选择"打开"
2. 在弹出的对话框中点击"打开"

或者使用命令行移除隔离属性：

```bash
xattr -cr /Applications/HashTool.app
```

## 开发

```bash
# 安装依赖
npm install

# 开发模式运行
npm run electron:dev

# 构建
npm run dist
```

## 技术栈

- Angular 20
- Electron 39
- ng-zorro-antd
- crypto-js

## License

MIT
