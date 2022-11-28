const callToApi = () => {
  return fetch(
    'https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/adalabers-v1/promo-radsajsd.json'
  )
    .then((response) => response.json())
    .then((data) => {
      const adalabersList = data.results.map((eachData) => {
        const adalaber = {
          name: eachData.name,
          counselor: eachData.counselor,
          speciality: eachData.speciality,
        };
        return adalaber;
      });
      return adalabersList;
    });
};

export default callToApi;
