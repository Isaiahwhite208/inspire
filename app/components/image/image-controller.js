//Your ImageService is a global class what can you do here to instantiate it?
import ImageService from "./image-service.js"

const iS = new ImageService

function drawImg(img) {
 document.getElementById('background').style.backgroundImage = `url(${img.large_url})`
}

export default class ImageController {
 constructor() {
  iS.getImage(drawImg)
 }

}
