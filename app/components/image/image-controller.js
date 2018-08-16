//Your ImageService is a global class what can you do here to instantiate it?
import ImageService from "./image-service.js"

let ImgServ = new ImageService()

function drawImages(images) {

}

export default class ImageController {
 constructor() {
  ImgServ.getImage(drawImages)
 }

}

