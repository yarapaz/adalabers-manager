const callToApi = () => {
  return fetch(
    'https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/adalabers-v1/promo-radsajsd.json'
  )
    .then((response) => response.json())
    .then((data) => {
      const adalabersList = data.results.map((eachData) => {
        const adalaber = {
          id: eachData.id,
          name: eachData.name,
          counselor: eachData.counselor,
          speciality: eachData.speciality,
          social_networks: eachData.social_networks,
        };
        return adalaber;
      });
      return adalabersList;
    });
};

export default callToApi;
