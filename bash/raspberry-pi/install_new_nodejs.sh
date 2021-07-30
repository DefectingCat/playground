# !/bin/bash
# 这是更新 nodejs 的脚本
# 它接收第一个参数作为版本号
# 像这样使用：./install_nodejs.sh 16.5.0
# 也许还需要添加可执行权限： chmod +x install_nodejs.sh

VERSION="v$1"

doInstall() {
    
    echo "Downloading nodejs ${VERSION}"
    wget https://nodejs.org/dist/${VERSION}/node-${VERSION}-linux-${PLATFORM}.tar.xz
    
    echo 'Exacting'
    tar -xvf node-${VERSION}-linux-${PLATFORM}.tar.xz
    cd node-${VERSION}-linux-${PLATFORM}
    
    echo 'installing'
    cp -a bin/* /usr/local/bin
    cp -a include/* /usr/local/include
    cp -a lib/* /usr/local/lib
    cp -a share/* /usr/local/share
    
    cd ..
    rm -rf node-${VERSION}-linux-${PLATFORM}
    rm -rf node-${VERSION}-linux-${PLATFORM}.tar.xz
    echo 'Done!'
    
}

if [ "$1" ];
then
    PS3='Please choose paltform: '
    options=("x86" "arm64" "armv7l" "Quit")
    select opt in "${options[@]}"
    do
        case $opt in
            "x86")
                echo 'Install x64 version'
                PLATFORM="x64"
                doInstall
                exit
            ;;
            "arm64")
                echo 'Install arm64 version'
                PLATFORM="arm64"
                doInstall
                exit
            ;;
            "armv7l")
                echo 'Install armv7 version'
                PLATFORM="armv7l"
                doInstall
                exit
            ;;
            "Quit")
                exit
            ;;
            *) echo "invalid option $REPLY";;
        esac
    done
else
    echo 'No special version!'
    echo 'Run like: ./install_nodejs.sh 16.5.0'
fi