const app = Vue.createApp({
  data() {
    return {
      title: "Comedy events",
      tickets: 50,
      image: faker.image.image(200, 200, true),
      details: ["Funny comics", "Mime artistry", "Satire", "Sketches"],
      cart: 0,
      ticketTypes: [
        {
          id: "bronze",
          name: "Bronze",
          image: faker.image.image(200, 200, true),
        },
        {
          id: "silver",
          name: "Silver",
          image: faker.image.image(200, 200, true),
        },
        {
          id: "gold",
          name: "Gold",
          image: faker.image.image(200, 200, true),
        },
      ],
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
});
