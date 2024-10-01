# Docker 国内镜像源/加速列表

- https://dockerproxy.cn
- https://dislabaiot.xyz
- https://ginger20240704.asia
- https://doublezonline.cloud


```bash
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<EOF
{
    "registry-mirrors": [
        "https://hub.uuuadc.top",
        "https://docker.anyhub.us.kg",
        "https://dockerhub.jobcher.com",
        "https://dockerhub.icu",
        "https://docker.ckyl.me",
        "https://docker.awsl9527.cn"
    ]
}
sudo systemctl daemon-reload
sudo systemctl restart docker
```
