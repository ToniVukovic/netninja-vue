const app = Vue.createApp({
  //   template: "<h2>I am the template</h2>",
  data() {
    return {
      url: "https://netninja.dev/",
      showBooks: true,
      books: [
        { title: "name of the wind", author: "patrick rothfuss", isFav: true },
        {
          title: "the way of the kings",
          author: "brandon sanders",
          isFav: false,
        },
        { title: "the final empire", author: "brandon sanders", isFav: true },
      ],
      x: 0,
      y: 0,
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent() {
      console.log("hello sidney");
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    toggleFav(book) {
      book.isFav = !book.isFav;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount("#app");
