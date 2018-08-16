const url = '//bcw-getter.herokuapp.com/?url=';
const url2 = 'http://www.splashbase.co/api/v1/images/random'
const apiUrl = '//bcw-getter.herokuapp.com/?url=' + encodeURIComponent('http://www.splashbase.co/api/v1/images/random');


const imgApi = axios.create({
	baseURL: '//bcw-getter.herokuapp.com/?url=' + encodeURIComponent('http://www.splashbase.co/api/v1/images/random'),
	timeout: 3000
});

export default class ImageService {
	getImage(background) {
		// ^^^^^^^ How do you call this function?
		console.log("Looking for a good pic")
		imgApi().then(res => {
			console.log('Image Data:', res.data)
			background(res.data)
		})
	}
}
