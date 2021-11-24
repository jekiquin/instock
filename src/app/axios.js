import axios from "axios";
import env from "react-dotenv";

const axiosInstance = axios.create({
	baseURL: env.API_URL,
	headers: {
		"Content-Type": "application/json",
	},
});
