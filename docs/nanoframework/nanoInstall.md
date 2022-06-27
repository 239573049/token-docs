---
sidebar_position: 2
---

# .NET nanoFramework 安装教程

## 准备材料

esp32单片机（支持wifi蓝牙） 安卓数据线（需要支持传输）

![alt-text](../../static/nanoframework/cailiao.png)

### 注意！请先安装esp32驱动程序

[ESP32驱动链接]('http://nanoframework.oss-cn-shenzhen.aliyuncs.com/MH-ET%20ESP32%E5%BC%80%E5%8F%91%E6%9D%BF%E8%B5%84%E6%96%99.zip')

### 安装 .NET nanoFramework固件闪存

安装工具

```shell
dotnet tool install -g nanoff
```

刷入固件

```shell
nanoff --platform esp32 --serialport COM3 --update
```

## 然后准备vs code, 和vs2022,本文将用vs2022做教程

准备好以后将esp32设备和电脑连接（安卓线连接）

开始搭建esp32的nanoframework 开发环境

### 安装完成以后；打开vs2022,点击继续但无需代码

![alt-text](../../static/nanoframework/3.png)

### 点击管理扩展

![alt-text](../../static/nanoframework/4.png)

### 搜索并安装nanoframework扩展，安装完成以后关闭整个vs2022

![alt-text](../../static/nanoframework/5.png)

### 关闭vs2022以后后弹出这个安装扩展的界面点击安装

![alt-text](../../static/nanoframework/6.png)

### 漫长的等待安装

![alt-text](../../static/nanoframework/7.png)

### 安装完成重新打开vs2022

![alt-text](../../static/nanoframework/8.png)

### 然后点击创建新项目

![alt-text](../../static/nanoframework/9.png)

### 搜索nanoframework，然后点击第一个然后点击下一步

![alt-text](../../static/nanoframework/10.png)

### 创建项目Demo示例点击创建

![alt-text](../../static/nanoframework/11.png)

### 依次点击视图=》其他窗口=》Device Explorer

![alt-text](../../static/nanoframework/12.png)

### 点击设置

![alt-text](../../static/nanoframework/13.png)

### 全部点击两边全部点击（COM port black list:表示屏蔽COM）

![alt-text](../../static/nanoframework/14.png)
![alt-text](../../static/nanoframework/15.png)

### 然后关闭设置；我们在来到vs code中找到刚刚vs2022创建的项目路径 并打开

![alt-text](../../static/nanoframework/16.png)


然后打开vs2022这个时候我们就可以看到设备了然后点击运行

![alt-text](../../static/nanoframework/24.png)

### 好了运行完成

![alt-text](../../static/nanoframework/25.png)

有喜欢c#单片机研究的朋友可以加我的q：239573049
