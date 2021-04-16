// options = [
//   {
//     name: 'menu1'
//     mutation: Function
//   }
// ]

interface Option {
  name: string;
  mutation: (e: any) => any;
}
class Menu {
  public menus: Option[];
  public ul = document.createElement('ul');
  constructor(options: Option[]) {
    this.menus = options;
    this.createMenu();
  }
  private createMenu() {
    let frag = document.createDocumentFragment();
    for (let i of this.menus) {
      let li = document.createElement('li');
      li.textContent = i.name;
      li.addEventListener('click', i.mutation);
      frag.append(li);
    }
    this.ul.classList.add('context-menu');
    this.ul.append(frag);
  }
  showMenu(e: MouseEvent) {
    this.ul.style.display = 'block';
    this.ul.style.position = 'fixed';
    this.ul.style.display = 'block';
    this.ul.style.left = `${e.pageX}px`;
    this.ul.style.top = `${e.pageY}px`;
    document.body.append(this.ul);
  }
  hideMenu() {
    this.ul.style.display = 'none';
  }
}
let test = new Menu([
  {
    name: 'test1',
    mutation: (e: MouseEvent) => {
      console.log(e);
    },
  },
  {
    name: 'test2',
    mutation: (e: MouseEvent) => {
      console.log(e);
    },
  },
  {
    name: 'test3',
    mutation: (e: MouseEvent) => {
      console.log(e);
    },
  },
  {
    name: 'xfy.plus',
    mutation: () => {
      window.open('https://xfy.plus');
    },
  },
]);
document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  test.showMenu(e);
});
document.addEventListener('click', () => {
  test.hideMenu();
});
