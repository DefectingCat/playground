FROM ubuntu:20.04
WORKDIR /root
ENV NODE_VER=16.6.1
COPY ./ ./
RUN sed -i s@/archive.ubuntu.com/@/mirrors.tuna.tsinghua.edu.cn/@g /etc/apt/sources.list \
  && sed -i s@/security.ubuntu.com/@/mirrors.tuna.tsinghua.edu.cn/@g /etc/apt/sources.list  \
  && apt update -y  && apt upgrade -y \
  && apt install python3 python3-pip git wget -y \
  && wget https://nodejs.org/dist/v${NODE_VER}/node-v${NODE_VER}-linux-x64.tar.xz \
  && tar -xvf node-v${NODE_VER}-linux-x64.tar.xz \
  && rm -rf node-v${NODE_VER}-linux-x64.tar.xz \
  && cd node-v${NODE_VER}-linux-x64 \
  && cp -a bin/* /usr/local/bin \
  && cp -a include /usr/local/include \
  && cp -a lib/* /usr/local/lib \
  && cp -a share/* /usr/local/share \
  && cd .. \
  && rm -rf node-v${NODE_VER}-linux-x64 \
  && npm i yarn -g \
  && pip install coscmd 
