// options = [
//   {
//     name: 'menu1'
//     mutation: Function
//   }
// ]
var Menu = /** @class */ (function () {
    function Menu(options) {
        this.ul = document.createElement('ul');
        this.menus = options;
    }
    Menu.prototype.createMenu = function () {
        var frag = document.createDocumentFragment();
        for (var _i = 0, _a = this.menus; _i < _a.length; _i++) {
            var i = _a[_i];
            var li = document.createElement('li');
            li.textContent = i.name;
            li.addEventListener('click', i.mutation);
            frag.append(li);
        }
        this.ul.classList.add('context-menu');
        this.ul.append(frag);
    };
    Menu.prototype.showMenu = function (e) {
        this.ul.style.display = 'block';
        this.ul.style.position = 'fixed';
        this.ul.style.display = 'block';
        this.ul.style.left = e.pageX + "px";
        this.ul.style.top = e.pageY + "px";
        document.body.append(this.ul);
    };
    Menu.prototype.hideMenu = function () {
        this.ul.style.display = 'none';
    };
    return Menu;
}());
var test = new Menu([
    {
        name: 'test1',
        mutation: function (e) {
            console.log(e);
        }
    },
    {
        name: 'test2',
        mutation: function (e) {
            console.log(e);
        }
    },
    {
        name: 'test3',
        mutation: function (e) {
            console.log(e);
        }
    },
    {
        name: 'xfy.plus',
        mutation: function () {
            window.open('https://xfy.plus');
        }
    },
]);
test.createMenu();
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    test.showMenu(e);
});
document.addEventListener('click', function () {
    test.hideMenu();
});
