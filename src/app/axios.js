import axios from "axios";
import env from "react-dotenv";

// need to make class instead or maybe have get and post functions
export const axiosInstance = axios.create({
	baseURL: env.API_URL,
	headers: {
		"Content-Type": "application/json",
	},
});
