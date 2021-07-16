# !/bin/bash
# 这是更新树莓派 armv7 上 nodejs 的脚本
# 它接收第一个参数作为版本号
# 像这样使用：./install_nodejs.sh 16.5.0
# 也许还需要添加可执行权限： chmod +x install_nodejs.sh

VERSION="v$1"
PLATFORM="armv7l"

if [ "$1" ];
then
  echo "Downloading nodejs ${VERSION}"
  wget https://nodejs.org/dist/${VERSION}/node-${VERSION}-linux-${PLATFORM}.tar.xz

  echo 'Exacting'
  tar -xvf node-${VERSION}-linux-${PLATFORM}.tar.xz
  cd node-${VERSION}-linux-${PLATFORM}

  echo 'installing'
  cp -a bin/* /usr/local/bin 
  cp -a include /usr/local/include 
  cp -a lib/* /usr/local/lib 
  cp -a share/* /usr/local/share 

  cd ..
  rm -rf node-${VERSION}-linux-${PLATFORM}
  rm -rf node-${VERSION}-linux-${PLATFORM}.tar.xz
  echo 'Done!'
else
  echo 'No special version!'
  echo 'Run like: ./install_nodejs.sh 16.5.0'
fi