export default function ({ $axios }, inject) {
  const api = $axios.create();

  api.onError(() => {
    return Promise.resolve(false);
  });

  // Set baseURL
  api.setBaseURL('http://localhost:8080');

  // Inject to context as $api
  inject('api', api);
}
