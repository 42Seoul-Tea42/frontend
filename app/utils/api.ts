const SERVER_URL = process.env.NEXT_PUBLIC_API_URL;

function fetchApi(endpoint: string, method: string, body?: string) {
  const handleError = (error: any) => {
    console.error('Error:', error);
  };

  fetch(`${SERVER_URL}${endpoint}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    body: body
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => handleError(error));
}

export default fetchApi;
