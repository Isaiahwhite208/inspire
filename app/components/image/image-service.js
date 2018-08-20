const url = '//bcw-getter.herokuapp.com/?url=';
const url2 = 'http://www.splashbase.co/api/v1/images/random'
const apiUrl = url + encodeURIComponent(url2);


const imgApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});

export default class ImageService {
	getImage(callWhenDone) {
		// console.log("Looking for a good pic")
		imgApi().then(res => {
			console.log('Image Data:', res.data)
			callWhenDone(res.data)
		})
	}
}
