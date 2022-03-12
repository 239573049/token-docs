---
sidebar_position: 2
---

# api文档

```csharp
        // 访问地址
        // 参数:
        //   url:
        public void GoToUrl(string url)
        //     访问地址
        // 参数:
        //   url:
        public void GoToUrl(Uri url)
        //     在浏览器的历史记录中向后移动一个条目。
        public void Back()
        //     在浏览器的历史记录中向前移动一个“项目”。
        public void Forward()
        //     刷新当前页面
        public void Refresh()
        //     查找与提供的类名匹配的元素列表
        // 参数:
        //   className:
        //     元素的CSS类名
        // 返回结果:
        //     IWebElement对象的ReadOnlyCollection，这样你就可以与它们交互了
        public ReadOnlyCollection<IWebElement> FindElementsByClassNames(string className)
        //     查找与指定CSS选择器匹配的所有元素。
        // 参数:
        //   cssSelector:
        //     要匹配的CSS选择器。
        public ReadOnlyCollection<IWebElement> FindElementsByCssSelectors(string cssSelector)
        //     查找页面中与提供的ID匹配的第一个元素
        // 参数:
        //   id:
        //     元素的ID
        public ReadOnlyCollection<IWebElement> FindElementsByIds(string id)
        //     查找与所提供的链接文本匹配的元素列表
        // 参数:
        //   linkText:
        //     元素的链接文本
        public ReadOnlyCollection<IWebElement> FindElementsByLinkTexts(string linkText)
        //     查找与提供的类名匹配的元素列表
        // 参数:
        //   partialLinkText:
        //     部分链接文本
        public ReadOnlyCollection<IWebElement> FindElementsByPartialLinkTexts(string partialLinkText)
        //     查找与所提供的DOM标记匹配的元素列表
        // 参数:
        //   tagName:
        //     DOM标记被搜索的元素名
        public ReadOnlyCollection<IWebElement> FindElementsByTagNames(string tagName)
        //     查找匹配链接文本XPath的元素列表
        // 参数:
        //   xpath:
        //     Xpath到元素
        public ReadOnlyCollection<IWebElement> FindElementsByXPaths(string xpath)
        //     查找与提供的类名匹配的元素列表
        // 参数:
        //   className:
        //     元素的CSS类名
        // 返回结果:
        //     IWebElement对象的ReadOnlyCollection，这样你就可以与它们交互了
        public IWebElement FindElementsByClassName(string className)
        //     查找与指定CSS选择器匹配的所有元素。
        // 参数:
        //   cssSelector:
        //     要匹配的CSS选择器。
        public IWebElement FindElementsByCssSelector(string cssSelector)
        //     查找页面中与提供的ID匹配的第一个元素
        // 参数:
        //   id:
        //     元素的ID
        public IWebElement FindElementsById(string id)
        //     查找与所提供的链接文本匹配的元素列表
        // 参数:
        //   linkText:
        //     元素的链接文本
        public IWebElement FindElementsByLinkText(string linkText)
        //     查找与提供的类名匹配的元素列表
        // 参数:
        //   partialLinkText:
        //     部分链接文本
        public IWebElement FindElementsByPartialLinkText(string partialLinkText)
        //     查找与所提供的DOM标记匹配的元素列表
        // 参数:
        //   tagName:
        //     DOM标记被搜索的元素名
        public IWebElement FindElementsByTagName(string tagName)
        //     查找匹配链接文本XPath的元素列表
        // 参数:
        //   xpath:
        //     Xpath到元素
        public IWebElement FindElementsByXPath(string xpath)
        //     获取一个对象来设置速度
        // 返回结果:
        //     返回一个IOptions对象，允许驱动程序设置速度和cookie，获取cookie
        public IOptions Manage()
        //     关闭浏览器
        public void CloseBrowser()
        //     方法使您能够访问开关框架和窗口
        // 返回结果:
        //     返回一个对象，该对象允许您切换帧和窗口
        public ITargetLocator SwitchTo()
        //     在当前选择的框架或窗口的上下文中执行JavaScript
        // 参数:
        //   script:
        //     要执行的JavaScript代码。
        //   args:
        //     script的参数
        //
        // 返回结果:
        //     脚本返回的值。
        public object ExecuteScript(string script, params object[] args)
        //     在当前选择的框架或窗口的上下文中异步执行JavaScript。
        // 参数:
        //   script:
        //     要执行的JavaScript代码。
        //   args:
        //     script的参数
        // 返回结果:
        //     脚本返回的值。
        public object ExecuteAsyncScript(string script, params object[] args)
        //     重置操作执行程序的输入状态。
        public void ResetInputState()
        //     使用此操作执行程序执行指定的操作列表。
        // 参数:
        //   actionSequenceList:
        //     要执行的动作序列列表。
        public void PerformActions(IList<ActionSequence> actionSequenceList)
        //     获取一个 OpenQA.Selenium.Screenshot对象，该对象表示屏幕上页面的图像。
        // 返回结果:
        //     包含 OpenQA.Selenium.Screenshot 对象。
        public Screenshot GetScreenshot()
        //     关闭浏览器关闭驱动
        public void Dispose()
        //     监听JavaScript异常启动 使用示例 await JavaScriptConsoleApiCalled((a,s) => { Console.WriteLine($"a:{a},s:{s.MessageContent}");
        //     });
        // 参数:
        //   javaScriptExceptionListening:
        public Task JavaScriptConsoleApiCalled(EventHandler<JavaScriptConsoleApiCalledEventArgs> javaScriptExceptionListening)
        //     关闭JavaScript监听
        public void JavaScriptConsoleStop()
        //     切换到Frame
        // 参数:
        //   data:
        public IWebDriver Frame(string data)
        //     切换到Frame
        // 参数:
        //   data:
        public IWebDriver Frame(IWebElement data)
        //     切换到Frame
        // 参数:
        //   data:
        //     第几个Frame
        public IWebDriver Frame(int data)
        //     回到顶层退出Frame
        public IWebDriver DefaultContent()
        //     添加Cookie
        // 参数:
        //   key:
        //   value:
        public void AddCookie(string key, string value)
        //     添加Cookie
        // 参数:
        //   key:
        //   value:
        public void AddCookie(Dictionary<string, string> cookies)
        //     获取Cookie
        // 参数:
        //   name:
        //     Key
        public Cookie GetCookie(string name)
        //     删除Cookie
        // 参数:
        //   key:
        public void DeleteCookie(string key)
        //     删除Cookie
        // 参数:
        //   key:
        public void DeleteCookie(Cookie cookie)
        //     获取所有Cookie
        public ReadOnlyCollection<Cookie> GetCookiesAll()
        //     删除所有Cookie
        public void DeleteCookieAll()
        //     切换Window界面
        // 参数:
        //   windowName:
        public IWebDriver SwitchoverWindow(string windowName)
        //     获取标题
        public string GetTitle()
```
