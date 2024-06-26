interface Coordinates {
  latitude: number;
  longitude: number;
}

async function getGeoLocation(): Promise<Coordinates> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by this browser.'));
    }

    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        resolve({ latitude, longitude });
      },
      error => {
        reject(error);
      }
    );
  });
}

async function requestUserLocation() {
  try {
    const { latitude, longitude } = await getGeoLocation();
    localStorage.setItem('user-location', JSON.stringify({ latitude, longitude }));
  } catch (error) {
    alert('위치 권한 정보를 허용해주세요.');
  }
}

export default requestUserLocation;
