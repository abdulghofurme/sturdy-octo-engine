const app = Vue.createApp({
  data() {
    return {
      title: "Comedy events",
      tickets: 50,
      image: "https://picsum.photos/200",
      details: ["Funny comics", "Mime artistry", "Satire", "Sketches"],
      cart: 0,
    };
  },
  methods: {
    updateCart(number = 1) {
      this.cart += number;
      this.tickets -= number;
    },
  },
});
