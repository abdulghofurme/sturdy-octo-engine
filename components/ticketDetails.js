app.component("ticket-details", {
  props: {
    name: String,
    image: String,
    tickets: Number,
  },
  data() {
    return {
      ticketsToBuy: 0,
      ticketsLeft: this.tickets,
    };
  },
  methods: {
    addTickets(num = 1) {
      this.ticketsLeft -= num;
      this.ticketsToBuy = 0;
    },
  },
  template: `
  <li>
  	<div>{{ name }}</div>

  	<select v-model='ticketsToBuy'>
  		<option value='0'>0</option>
  		<option v-for='number in ticketsLeft' :value='number'>{{number}}</option>
  	</select>

  	<button v-if='ticketsToBuy > 0' @click='addTickets(ticketsToBuy)'>Buy</button>
  </li>
  `,
});
