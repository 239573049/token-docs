---
sidebar_position: 3
---

# Docker 命令指南

```shell
docker tag <image> <repository>:<tag>                                               # 标记镜像
docker pull <repository>:<tag>                                                      # 从docker hub下载镜像
docker rmi <image>                                                                  # 删除镜像
docker images                                                                       # 查看镜像
docker run -d -p 8080:8080 <image>                                                  # 启动容器
docker ps                                                                           # 查看容器
docker exec -it <container> bash                                                    # 在容器中执行命令
docker stop <container>                                                             # 停止容器
docker rm <container>                                                               # 删除容器
docker rmi <image>                                                                  # 删除镜像
docker images -a                                                                    # 查看所有镜像
docker images -f "dangling=true"                                                    # 查看未使用的镜像
docker images -f "dangling=true" -q                                                 # 查看未使用的镜像id
docker images -f "dangling=true" -q | xargs docker rmi                              # 删除未使用的镜像
docker images -f "dangling=true" -q | xargs docker rmi -f                           # 强制删除未使用的镜像
docker images -a | grep <image>                                                     # 查看镜像是否存在
docker images --help                                                                # 查看docker images命令帮助
docker image prune                                                                  # 删除未使用的镜像
docker iamge                                                                        # 查看镜像
docker ps                                                                           # 查看正在运行的容器
docker ps -a                                                                        # 查看所有容器（包括未运行的容器）
docker stop  容器名称|容器id                                                         # 停止容器
docker rm    容器名称|容器id                                                         # 删除容器
docker rmi   镜像名称|镜像id                                                         # 删除镜像
docker run -d -p 80:80 --name=nginx nginx                                           # 启动容器
docker exec -it 容器名称|容器id /bin/bash                                            # 进入容器
```

## Docke-Compose 命令指南

```shell
docker-compose up                                                                   # 启动docker-compose
docker-compose down                                                                 # 停止docker-compose
docker-compose ps                                                                   # 查看docker-compose运行的容器
docker-compose logs                                                                 # 查看docker-compose运行的容器日志
docker-compose exec 容器名称|容器id /bin/bash                                        # 进入容器
docker-compose run 容器名称|容器id /bin/bash                                         # 运行容器
docker-compose run --rm 容器名称|容器id /bin/bash                                    # 运行容器，并删除容器
docker-compose run --rm -p 80:80 nginx                                              # 运行nginx容器，并删除容器
docker-compose start 容器名称|容器id                                                 # 启动容器
docker-compose stop 容器名称|容器id                                                 # 停止容器
docker-compose restart 容器名称|容器id                                              # 重启容器
docker-compose scale 容器名称|容器id=2                                              # 增加容器
docker-compose scale 容器名称|容器id=-2                                             # 减少容器
docker-compose rm 容器名称|容器id                                                   # 删除容器
docker-compose up -d                                                                # 启动docker-compose后台运行
docker-compose up -d --build                                                        # 启动docker-compose后台运行，并自动构建镜像
docker-compose up -d --build --force-recreate                                       # 启动docker-compose后台运行，并自动构建镜像，并重新创建容器
docker-compose up -d --build --force-recreate-deps                                  # 启动docker-compose后台运行，并自动构建镜像，并重新创建容器，并重新构建依赖镜像
docker-compose images                                                                # 查看docker-compose镜像
docker-compose pull                                                                 # 拉取docker-compose镜像
docker-compose pull --ignore-pull-failures                                          # 拉取docker-compose镜像，忽略失败

```shell
