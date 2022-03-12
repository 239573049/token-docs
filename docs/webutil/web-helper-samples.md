---
sidebar_position: 3
---
# 示例

## 如何使用Web-Helper工具

### 推荐使用特性注释接口

```csharp
#region 注解
[Annotation("您的接口的注释")]//在你需要对接口展示注释的接口添加这个特性就可以在使用方法的时候展示出来
[HelperName("您的接口名称")]//这个特性是展示接口名称没有这个特性默认接口名称
[NotShow]//这个特性是标注不会在返回的参数显示
#endregion
```

### 使用注解对接口注释

```csharp
#region 使用方法获取树形结构
var basePath = AppDomain.CurrentDomain.BaseDirectory;//获取程序运行路径
var WebDllFile = Path.Combine(basePath, "WebApi.dll");//Controller所在的dll
ApiControllerHelper.GetApiControllerTree(WebDllFile);//获取到接口树形结构数据
#endregion
```

### 使用swaager获取接口注释

```csharp
//需要配置好swagger的配置；一下以.net6项目Demo为例
//在Progrm.cs中配置

builder.Services.AddSwaggerGen(a =>
{
    a.SwaggerDoc("1", new OpenApiInfo
    {
        Version = "1",//获取的时候的版本
        Title = "Web Api",
        Description = "",
        Contact = new OpenApiContact
        {
            Name = "小虎",
            Email = "239573049@qq.com"
        }
    });
    string[] files = Directory.GetFiles(AppContext.BaseDirectory, "*.xml");//获取api文档；注：请先在接口项目中选择生成Xml文档路径默认
    string[] array = files;
    foreach (string filePath in array)
    {
        a.IncludeXmlComments(filePath, includeControllerXmlComments: true);

    }
});
builder.Services.AddSingleton(typeof(SwaggerGenerator));//必须使用这一段
...

app.UseSwagger();
app.UseSwaggerUI(s =>
{
    s.SwaggerEndpoint("/swagger/1/swagger.json", "Web Api");//swagger中间的1是版本号
    s.DocExpansion(Swashbuckle.AspNetCore.SwaggerUI.DocExpansion.None);
    s.DefaultModelExpandDepth(-1);
    s.RoutePrefix = string.Empty;//默认直接进入swagger文档
});

#region 使用方法获取树形结构

private readonly SwaggerGenerator _swaggerGenerator;
/// <summary>
/// 
/// </summary>
/// <param name="swaggerGenerator"></param>
public GetTreeController(
    SwaggerGenerator swaggerGenerator
    )
{
     _swaggerGenerator = swaggerGenerator;//通过依赖注入拿到SwaggerGenerator
}

...
var basePath = AppDomain.CurrentDomain.BaseDirectory;//获取程序运行路径
var WebDllFile = Path.Combine(basePath, "WebApi.dll");//Controller所在的dll
ApiControllerHelper.GetApiControllerTreeXml(_swaggerGenerator,"1"/*您的swaager的版本*/,WebDllFile);//获取到接口树形结构数据
#endregion
```
