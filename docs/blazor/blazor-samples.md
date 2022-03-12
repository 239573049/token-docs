---
sidebar_position: 2
---

# 示例

## 依赖注入

### 实现批量依赖注入的方法

```csharp
var builder = WebAssemblyHostBuilder.CreateDefault(args);
...
var basePath = AppDomain.CurrentDomain.BaseDirectory;///获取程序运行地址
builder.Services.AddInjectSingletonExtensions(Path.Combine(basePath, "BlazorApp.Client.dll"), a => a.Name.EndsWith("Api"));//需要注入的程序dll   注入条件 请务必加上条件   注入生命周期Singleton
```

### 实现注入Http工具

```csharp

var builder = WebAssemblyHostBuilder.CreateDefault(args);
...
var http = HttpClientFactory.Create();
http.BaseAddress = new Uri(builder.HostEnvironment.BaseAddress);
var httpHelper=new HttpHelper(http);
httpHelper.AddRequestHandlin(a =>//注册响应前的拦截器
{
    Console.WriteLine("发送处理时间："+ DateTime.Now.ToFileTimeUtc().ToString());
});
httpHelper.AddResponseBodyHandling(a =>//注册响应后拦截器
{
    var now = DateTime.Now;
    Console.WriteLine("接收处理时间：" + DateTime.Now.ToFileTimeUtc().ToString());
});

```

### 使用Http工具

```csharp
    private readonly HttpHelper _httpHelper;//构造方法注入HttpHelper工具
    public FileAdminApi(HttpHelper httpHelper
        )
    {
        httpHelper= httpHelper;
    }
...

_httpHelper.GetAsync<ModelStateResult<List<FilesDto>>>("api/File/GetFileData")//使用Post发送请求  如果注册了请求前拦截器会先经过拦截器在发送请求    如果注册了响应拦截器的话响应成功以后会经过响应拦截器然后返回结果  拦截器优先执行

```
