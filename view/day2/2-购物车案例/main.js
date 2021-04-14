const app = new Vue({
  el: '.app',
  data: {
    books: [
      {
        id: 1,
        name: '计算器',
        price: 27,
        num: 1
      },
      {
        id: 2,
        name: '卷尺',
        price: 85,
        num: 1
      },
      {
        id: 3,
        name: '铅笔',
        price: 46,
        num: 1
      },
      {
        id: 4,
        name: '圆珠笔',
        price: 90,
        num: 1
      },
    ]

  },
  methods: {
    add(index){
      this.books[index].num++
    },
    sub(index){
      this.books[index].num--
    },
    btndel(index){
      this.books.splice(index, 1)
    }
  },
  computed: {
    computPrice(){
      let totalPrice = 0
      for (item of this.books){
        totalPrice += item.price * item.num
      }
      // for (let i = 0; i < books.length; i++){
      //  totalPrice += this.books[i].price * this.books[i].num
      // }
      return totalPrice
    }
  },
  filters: {
    showPrice(price){
      return "￥" + price.toFixed(2)
    }
  }
})