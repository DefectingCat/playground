"use strict";
const box = document.querySelector('.target');
const placeHolder = document.querySelector('.place-text');
const dropText = document.querySelector('.model-text');
const imgWrapper = document.querySelector('.show-img');
const img = document.querySelector('.upload-img');
const imgWrappers = [];
let urls = [];
/**
 * 更改元素样式列表
 * @param set true 添加样式 false 移除样式
 */
const changeBoxBackgroud = (set = true) => {
    if (set) {
        box && box.classList.add('target-upload');
    }
    else {
        box && box.classList.remove('target-upload');
    }
};
/**
 * 获取图片的 blob url
 * @param files
 * @returns
 */
const getImgUrl = (files) => {
    const urls = [];
    for (const file of files) {
        urls.push(window.URL.createObjectURL(file));
    }
    return urls;
};
/**
 * 展示图片时
 * 隐藏 target 子元素
 * 并设置左对齐
 */
const changeBox = (set = true) => {
    if (set) {
        box && box.classList.add('change-box');
    }
    else {
        box && box.classList.remove('change-box');
    }
};
const changeChild = (set = true) => {
    if (set) {
        placeHolder && placeHolder.classList.add('hidden');
    }
    else {
        placeHolder && placeHolder.classList.remove('hidden');
    }
};
/**
 * 克隆图片展示 div
 * 并展示待上传的图片
 * @param url
 * @param set
 */
const showUploadImg = (url, set = true) => {
    if (set) {
        const child = imgWrapper?.cloneNode(true);
        if (child && box) {
            child.classList.remove('hidden');
            box.append(child);
        }
    }
};
const handleDarg = (e) => {
    console.log(e.type);
    const type = e.type;
    switch (type) {
        case 'dragenter':
            e.preventDefault();
            break;
        case 'dragover':
            e.preventDefault();
            changeBoxBackgroud();
            break;
        case 'drop':
            e.preventDefault();
            changeBoxBackgroud(false);
            const files = e.dataTransfer?.files;
            if (files)
                urls = urls.concat(getImgUrl(files));
            changeBox();
            changeChild();
            showUploadImg();
            break;
        case 'dragleave':
            e.preventDefault();
            changeBoxBackgroud(false);
            break;
    }
};
box?.addEventListener('dragenter', handleDarg);
box?.addEventListener('dragover', handleDarg);
box?.addEventListener('drop', handleDarg);
box?.addEventListener('dragleave', handleDarg);
