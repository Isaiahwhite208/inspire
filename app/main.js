import ImageController from "./components/image/image-controller.js";
import WeatherController from "./components/weather/weather-controller.js";
import QuoteController from "./components/quote/quote-controller.js";
import TodoController from "./components/todo/todo-controller.js";

// HEY WHERE ARE ALL OF YOUR CONTROLLERS??
class app {
  constructor() {
    this.controllers = {
      imageController: new ImageController(),
      weatherController: new WeatherController(),
      quoteController: new QuoteController(),
      todoController: new TodoController()
    }
  }
}

window.app = new app()  