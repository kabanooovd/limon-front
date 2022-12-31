import axios from 'axios';


// const accessToken = loacalData.getToken("accessToken");
// const refreshToken = loacalData.getToken("refreshToken");

// const flowId = getFlowIdFromParams(window.location.href);

export const instance = axios.create({
	baseURL: `${process.env.REACT_APP_PROXY_URL}/${process.env.REACT_APP_API_URL}`,
});

// Request interceptor
instance.interceptors.request.use((config: any) => {
	if (config.headers) {
			// config.headers.Authorization = `Bearer ${accessToken}`;
		return config;
	}
});


instance.interceptors.response.use(
	(config) => {
		return config;
	},
	async (error) => {
		if (error.response) {
		}
	}
);



// Response interceptor
// instance.interceptors.response.use(
// 	(config) => {
// 		return config;
// 	},
// 	async (error) => {
// 		const originalRequest = error.config;
// 		if (error.response) {
// 			if (
// 				(error.response.status === 401 || error.response.status === 403) &&
// 				!error.config?._isRetry
// 			) {
// 				originalRequest._isRetry = true;

// 				const accessToken = loacalData.getToken("accessToken");
// 				const refreshToken = loacalData.getToken("refreshToken");
// 				const flowId = getFlowIdFromParams(window.location.href);

// 				if (accessToken !== null || refreshToken !== null) {
// 					const client = new AuthApi();
// 					return client
// 						.fakeMethodForRefresh(
// 							{ token: "string", refreshToken },
// 							flowId,
// 							"refresh"
// 						)
// 						.then((resp: any) => {
// 							console.warn(
// 								"********* RESPONSE INTERCEPTOR HAS WORKED ********* => ",
// 								error.config
// 							);
// 							const { token, refreshToken } = resp;
// 							loacalData.setToken(token, "accessToken");
// 							loacalData.setToken(refreshToken, "refreshToken");
// 							return instance.request(originalRequest);
// 						})
// 						.catch((err) => {
// 							loacalData.removeToken("accessToken");
// 							loacalData.removeToken("refreshToken");
// 							return Promise.reject(err);
// 						});
// 				}

// 				return instance.request(originalRequest);
// 			}
// 		}

// 		return Promise.reject(error);
// 	}
// );