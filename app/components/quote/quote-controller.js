import QuoteService from "./quote-service.js";

let qs = new QuoteService

function drawQuote(res) {
	document.getElementById('quote').innerHTML =
		`
	<p class="quote">${res.quote}</p>
	<p class="author">-${res.author}</p>
	`
}

export default class QuoteController {
	constructor() {
		this.getQuote()
	}

	getQuote() {
		qs.getQuote(drawQuote)
	}
}
