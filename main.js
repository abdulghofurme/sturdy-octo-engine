const app = Vue.createApp({
  data() {
    return {
      title: "Comedy events",
      image: faker.image.image(200, 200, true),
      details: ["Funny comics", "Mime artistry", "Satire", "Sketches"],
      tickets: 20,
      cart: 0,
      ticketTypes: [
        {
          id: "bronze",
          name: "Bronze",
          image: faker.image.image(200, 200, true),
          tickets: 100,
        },
        {
          id: "silver",
          name: "Silver",
          image: faker.image.image(200, 200, true),
          tickets: 50,
        },
        {
          id: "gold",
          name: "Gold",
          image: faker.image.image(200, 200, true),
          tickets: 20,
        },
      ],
      soldOutClass: "sold-out",
      hiddenClass: "hidden",
      hidden: false,
      message: "",
    };
  },
  methods: {
    updateCart(number = 1) {
      this.cart += number;
      this.tickets -= number;
    },
    updateImage(image) {
      this.image = image;
    },
  },
  computed: {
    soldOut() {
      return this.tickets === 0;
    },
  },
});
