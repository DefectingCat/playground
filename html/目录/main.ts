/**
 * The purpose of this file is generate a toc.
 */
let num = 0;

const createTag = (
  elementA: HTMLAnchorElement,
  elementH: Element,
  elementL: HTMLLIElement
) => {
  elementA.href = `#${elementH.textContent}${num}`;
  elementA.textContent = elementH.textContent;
  if (elementH.textContent) elementH.id = elementH.textContent + num;
  elementL.append(elementA);
  num++;
};

const generateToc = (titles: NodeListOf<Element>) => {
  const ul = document.createElement('ul');
  ul.className = 'main-toc';
  let h2u: HTMLUListElement = document.createElement('ul');
  let h3u: HTMLUListElement = document.createElement('ul');

  for (const title of titles) {
    const tag = title.nodeName;
    const li = document.createElement('li');
    const a = document.createElement('a');

    if (title.textContent) {
      switch (tag) {
        case 'H2':
          h2u = document.createElement('ul');
          createTag(a, title, li);
          li.append(h2u);
          ul.append(li);
          break;
        case 'H3':
          h3u = document.createElement('ul');
          createTag(a, title, li);
          li.append(h3u);
          h2u.append(li);
          break;
        case 'H4':
          createTag(a, title, li);
          h3u.append(li);
          console.log(h3u);
          break;
      }
    }
  }

  document.body.insertBefore(ul, mainBody);
};

const post = document.querySelector('.markdown-body');
const mainBody = document.querySelector('.main-body');
let titles: NodeListOf<Element>;
if (post) {
  titles = post.querySelectorAll('h1, h2, h3, h4');
  generateToc(titles);
}
