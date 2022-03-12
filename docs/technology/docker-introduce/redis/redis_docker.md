---
sidebar_position: 3
---

# Docker 使用Redis

## 通过Docker安装Redis

### 获取最新版的 Redis 镜像

```shell
docker pull redis:latest
```

### 运行redis容器

-p /*端口*/ 6379/*本机端口*/:6379/*Docker容器端口*/

```shell
docker run -itd --name redis-test -p 6379:6379 redis
```

### 查看运行信息

```shell
docker ps 
```

### 测试连接

```shell
docker exec -it redis-test /bin/bash
```

### 自定义启动Redis 容器

```shell
docker run -p 6379:6379 --name redis -v /usr/local/docker/redis.conf:/etc/redis/redis.conf -v /usr/local/docker/data:/data -d redis redis-server /etc/redis/redis.conf --appendonly yes    # 不挂载配置文件： 

docker run --name redis -p 6379:6379 -d --restart=always redis redis-server --appendonly yes --requirepass "您的Redis密码"
```

### 命令说明

-p 6379:6379 端口映射：前表示主机部分，：后表示容器部分。

--name myredis  指定该容器名称，查看和进行操作都比较方便。

-v 挂载目录，规则与端口映射相同。

-d redis 表示后台启动redis

redis-server /etc/redis/redis.conf  以配置文件启动redis，加载容器内的conf文件，最终找到的是挂载的目录/usr/local/docker/redis.conf

appendonly yes 开启redis 持久化
