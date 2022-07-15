app.component("ticket-details", {
  props: {
    type: {
      id: String,
      name: String,
      image: String,
      tickets: Number,
    },
  },
  data: () => ({
    ticketToBuy: 0,
  }),
  template: `
 	<li>
  	<div>{{ type.name }}</div>
		<select v-model='ticketToBuy'>
			<option value='0'>0</option>
			<option v-for='number in type.tickets' :value='number'>{{number}}</option>
		</select>
  </li>
	`,
});
