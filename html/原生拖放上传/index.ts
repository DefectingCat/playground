const box = document.querySelector<HTMLDivElement>('.target');
const placeHolder = document.querySelector<HTMLDivElement>('.place-text');
const dropText = document.querySelector<HTMLDivElement>('.model-text');
const imgWrapper = document.querySelector<HTMLDivElement>('.show-img');

/* */
const btn = document.querySelector<HTMLInputElement>('.upload-btn');

const imgWrappers = [];

let urls: string[] = [];

/**
 * 更改元素样式列表
 * @param set true 添加样式 false 移除样式
 */
const changeBoxBackgroud = (set = true) => {
  if (set) {
    box && box.classList.add('target-upload');
  } else {
    box && box.classList.remove('target-upload');
  }
};

/**
 * 展示图片时
 * 隐藏 target 子元素
 * 并设置左对齐
 */
const changeBox = (set = true) => {
  if (set) {
    box && box.classList.add('change-box');
  } else {
    box && box.classList.remove('change-box');
  }
};

/**
 * 放下图片时
 * 隐藏 placeholder
 * @param set
 */
const changeChild = (set = true) => {
  if (set) {
    placeHolder && placeHolder.classList.add('hidden');
  } else {
    placeHolder && placeHolder.classList.remove('hidden');
  }
};

/**
 * 克隆图片展示 div
 * 并展示待上传的图片
 * 修改单张图片
 * @param url
 * @param set
 */
const showUploadImg = (url: string, name: string, set = true) => {
  if (set) {
    // 克隆准备好的图片展示 DOM
    const child = imgWrapper?.cloneNode(true) as HTMLDivElement | undefined;
    if (child && box) {
      const img = child.querySelector<HTMLImageElement>('.upload-img');
      const text = child.querySelector('.img-name span');
      img && (img.src = url);
      text && (text.textContent = name);
      child.classList.remove('hidden');
      box.append(child);
    }
  }
};

/**
 * 根据文件列表创建图片
 * @param files
 */
const applyImg = (files: FileList) => {
  for (const file of files) {
    // 创建 blob url
    const url = window.URL.createObjectURL(file);
    urls.push(url);
    showUploadImg(url, file.name);
  }
};

const handleDarg = (e: DragEvent) => {
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
      changeBox();
      changeChild();
      if (files) applyImg(files);
      break;
    case 'dragleave':
      e.preventDefault();
      changeBoxBackgroud(false);
      break;
  }
};

box?.addEventListener('dragenter', handleDarg as EventListener);
box?.addEventListener('dragover', handleDarg as EventListener);
box?.addEventListener('drop', handleDarg as EventListener);
box?.addEventListener('dragleave', handleDarg as EventListener);

box?.addEventListener('paste', (e: ClipboardEvent) => {
  const files = e.clipboardData?.files;
  changeBox();
  changeChild();
  if (files) applyImg(files);
});

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

const handChange = (e: HTMLInputEvent) => {
  const files = e.target.files;
  changeBox();
  changeChild();
  if (files) applyImg(files);
};

btn?.addEventListener('change', handChange as EventListener);

/* ----------- */
