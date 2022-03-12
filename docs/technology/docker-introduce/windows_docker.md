---
sidebar_position: 2
---

# Windows Docker 安装

Docker 并非是一个通用的容器工具，它依赖于已存在并运行的 Linux 内核环境。

Docker 实质上是在已经运行的 Linux 下制造了一个隔离的文件环境，因此它执行的效率几乎等同于所部署的 Linux 主机。

因此，Docker 必须部署在 Linux 内核的系统上。如果其他系统想部署 Docker 就必须安装一个虚拟 Linux 环境。
在 Windows 上部署 Docker 的方法都是先安装一个虚拟机，并在安装 Linux 系统的的虚拟机中运行 Docker。

在Windows系统下运行docker可以安装 wsl

```shell
wsl --install
```

然后需要安装 Hyper-V 安装完成下一步
如果安装wsl的ubuntu失败的话可以在微软的商城安装ubuntu
安装完wsl以后在安装[Docker Desktop](https://hub.docker.com/editions/community/docker-ce-desktop-windows)
安装完成以后就可以使用了
