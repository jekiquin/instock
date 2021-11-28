import axios from 'axios';
import env from 'react-dotenv';

class Axios {
	constructor(baseUrl) {
		this._instance = axios.create({
			baseURL: baseUrl,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}

	getData = async (endpoint) => {
		const response = await this._instance.get(endpoint);
		return response.data;
	};

	postData = async (endpoint, body) => {
		const response = await this._instance.post(endpoint, body);
		return response.data;
	};

	deleteData = async (endpoint) => {
		const response = await this._instance.delete(endpoint);
		return response.data;
	};

	putData = async (endpoint, body) => {
		const response = await this._instance.put(endpoint, body);
		return response.data;
	};
}

export const { getData, postData, deleteData, putData } = new Axios(env.API_URL);
