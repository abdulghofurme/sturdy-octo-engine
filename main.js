const app = Vue.createApp({
  data() {
    return {
      title: "Comedy events",
      image: faker.image.image(200, 200, true),
      details: ["Funny comics", "Mime artistry", "Satire", "Sketches"],
      tickets: 20,
      cart: 0,
      ticketTypes: [],
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
    buyTickets(num) {
      this.cart += num;
    },
  },
  computed: {
    soldOut() {
      return this.tickets === 0;
    },
  },
  mounted() {
    fetch(
      "https://raw.githubusercontent.com/abdulghofurme/sturdy-octo-engine/master/ticketTypes.json"
    )
      .then((response) => response.json())
      .then((data) => {
        this.ticketTypes = data;
      });
  },
});
