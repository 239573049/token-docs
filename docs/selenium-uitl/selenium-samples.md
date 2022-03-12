---
sidebar_position: 3
---
# 示例

## 使用Selenium-Util工具访问百度的示例

```csharp
using SeleniumUtil;//引用工具包

var data=CrawlerMain.NewCrawlerMain();//默认使用Edge浏览器进行操作（第一次使用的时间会过长，因为需要下载浏览器驱动）
data.GoToUrl("https://www.baidu.com/");//访问百度
var wd = data.FindElementsById("kw");//搜索框的id是 kw 这里使用"FindElementsById"获取到搜索框
wd.SendKeys("Selenium");//输入内容到搜索框
var su = data.FindElementsById("su");//获取搜索按钮
su.Click();//触发搜索按钮的点击事件
Thread.Sleep(500);//等待界面加载完成
var content_left = data.FindElementsById("content_left");//这里获取搜索的内容
Console.WriteLine(content_left.Text);//展示搜索的内容
Console.ReadKey();
```

## 使用工具执行JavaScript代码

```csharp
using SeleniumUtil;//引用工具包

var data = CrawlerMain.NewCrawlerMain();//默认使用Edge浏览器进行操作（第一次使用的时间会过长，因为需要下载浏览器驱动）
data.GoToUrl("https://www.baidu.com/");//访问界百度
data.ExecuteAsyncScript("alert(\"调试\");");//调用js弹出提示窗口
Console.ReadKey();
```
