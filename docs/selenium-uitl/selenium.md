---
sidebar_position: 1
---

# Selenium-Util工具文档

[![NuGet](https://img.shields.io/nuget/dt/SeleniumUtil.svg?label=NuGet&style=flat&logo=nuget)](https://www.nuget.org/packages/SeleniumUtil/)
[![NuGet](https://img.shields.io/nuget/v/SeleniumUtil.svg?label=NuGet&style=flat&logo=nuget)](https://www.nuget.org/packages/SeleniumUtil/)

## 项目介绍

项目Gitee地址 [SeleniumUtil工具](https://gitee.com/attacking-code-farmer/selenium-util)
为了简化Selenium的操作封装了此工具包，简化了下载浏览器驱动，一键切换浏览器；**目前NuGet包支持.net6以及以上的程序，如果需要适配其他请自行获取代码更改！**

## 通过NuGet安装Selenium-Util工具

```csharp
Install-Package SeleniumUtil 
```

## 方法构造详细说明

```csharp
var data = new CrawlerMain(browser:SeleniumUtil.Entitys.BrowserEnum.Edge,//浏览器
                                        size:new SeleniumUtil.Entitys.Size(500,500),//浏览器显示大小
                                        hideCommandPromptWindow:false,//是否隐藏命令窗口
                                        pageLoadStrategy:OpenQA.Selenium.PageLoadStrategy.None,//加载策略
                                        isEnableVerboseLogging:true,//是否显示日志详情
                                        isGpu:false,//是否启动gpu加速
                                        isShowBrowser:false//是否显示浏览器
                                        );//创建详细方法

```
