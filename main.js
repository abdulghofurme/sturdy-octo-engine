const app = Vue.createApp({
  data() {
    return {
      title: "Comedy events",
      tickets: 20,
      image: faker.image.image(200, 200, true),
      details: ["Funny comics", "Mime artistry", "Satire", "Sketches"],
      cart: 0,
      hidden: false,
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
      soldOutClass: 'sold-out',
      hiddenClass: 'hidden' 
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
