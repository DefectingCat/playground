setInterval(() => {
  let t = document.title;
  document.title = '无敌螺旋小肥羊';
  setTimeout(() => {
    document.title = t;
  }, 500);
}, 1000);

let vm = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        bookName: '小肥羊算法导论',
        publicDate: '2006-09',
        currentPrice: 39.0,
        price: 39.0,
        num: 1,
      },
      {
        id: 2,
        bookName: '小肥羊编程艺术',
        publicDate: '2009-01',
        currentPrice: 66.0,
        price: 66.0,
        num: 1,
      },
      {
        id: 3,
        bookName: '小肥羊biograph',
        publicDate: '2016-12',
        currentPrice: 47.0,
        price: 47.0,
        num: 1,
      },
      {
        id: 4,
        bookName: '小肥羊代码大全',
        publicDate: '2007-04',
        currentPrice: 75.0,
        price: 75.0,
        num: 1,
      },
    ],
  },
  filters: {
    normalizePrice(p) {
      return `￥${p.toFixed(2)}`
    }
  },
  methods: {
    increase(i) {
      let book = this.books[i];
      book.num++;
      book.price += book.currentPrice;
    },
    decrease(i) {
      let book = this.books[i];
      book.num--;
      book.price = book.price - book.currentPrice;
    },
    remove(i) {
      this.books.splice(i, 1);
    }
  },
  computed: {
    sum() {
      // let p = 0;
      // for (let i of this.books) {
      //   p += i.price;
      // }
      // return p;
      return this.books.reduce((pre, cur) => {
        return pre += cur.price;
      }, 0)
    }
  },
})