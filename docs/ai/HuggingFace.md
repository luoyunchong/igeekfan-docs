# HuggingFace 安装本地模型

- https://hf-mirror.com/ 镜像站点
- https://huggingface.co 官网
- https://huggingface.co/shenzhi-wang/Llama3-8B-Chinese-Chat 支持中文的 Llama3-8B 模型

1. 安装相关依赖

```bash
pip install -U huggingface_hub
```

2. 设置环境变量

- HF_ENDPOINT: 设置为 https://hf-mirror.com 解决下载速度慢的问题
- HF_HOME: 设置为本地目录（如 E:\data\huggingface） 解决安装目录默认 C 盘，会导致磁盘空间不足的问题

```bash
export HF_ENDPOINT=https://hf-mirror.com
export HF_HOME=/var/huggingface
```

3. 安装 Llama3-8B-Chinese-Chat 模型

```bash
huggingface-cli download --resume-download --local-dir-use-symlinks False shenzhi-wang/Llama3-8B-Chinese-Chat
```
