"use strict";
const target = document.querySelector('.target');
const img = document.querySelector('#preview');
const handleDarg = (e) => {
    console.log(e.type);
    const type = e.type;
    switch (type) {
        case 'dragenter':
            e.preventDefault();
            break;
        case 'dragover':
            e.preventDefault();
            break;
        case 'drop':
            e.preventDefault();
            e.dataTransfer && (e.dataTransfer.dropEffect = 'copy');
            const file = e.dataTransfer?.files[0];
            const url = window.URL.createObjectURL(file);
            console.log(url);
            if (url) {
                img && (img.src = url);
            }
            break;
    }
};
target?.addEventListener('dragenter', handleDarg);
target?.addEventListener('dragover', handleDarg);
target?.addEventListener('drop', handleDarg);
