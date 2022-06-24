# 简易的依赖注入工具

[![NuGet](https://img.shields.io/nuget/dt/Token.Inject.svg?label=NuGet&style=flat&logo=nuget)](https://www.nuget.org/packages/Token.Inject/)
[![NuGet](https://img.shields.io/nuget/v/Token.Inject.svg?label=NuGet&style=flat&logo=nuget)](https://www.nuget.org/packages/Token.Inject/)

## 安装注入工具

```csharp
Install-Package Token.Inject 
```

## 示例

```csharp
// 然后再需要注入的方法继承指定生命周期的接口，启动的时候扫描
service.AddInject(typeof(需要注入的项目的类));

```
