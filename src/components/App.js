import { useState, useEffect } from 'react';
import '../styles/App.scss';
import callToApi from '../services/api';

function App() {
  //States
  const [adalabers, setAdalabers] = useState([]);
  const [newAdalaber, setNewAdalaber] = useState({
    id: crypto.randomUUID(),
    name: '',
    counselor: '',
    speciality: '',
    social_networks: [],
  });
  const [searchName, setSearchName] = useState('');
  const [searchCounselor, setSearchCounselor] = useState('');

  //Effects
  useEffect(() => {
    callToApi().then((adalabers) => {
      setAdalabers(adalabers);
    });
  }, []);

  //Handlers
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleInput = (ev) => {
    setNewAdalaber({ ...newAdalaber, [ev.target.name]: ev.target.value });
  };

  const handleNewAdalaber = () => {
    debugger;
    console.log(newAdalaber);
    adalabers.unshift(newAdalaber);
    setAdalabers([...adalabers]);
    console.log(adalabers);
  };

  const handleSearchName = (ev) => {
    setSearchName(ev.target.value);
  };

  const handleSearchCounselor = (ev) => {
    setSearchCounselor(ev.target.value);
  };

  //Render Helpers

  const renderSocialNetworks = (adalaberId) => {
    const foundAdalaber = adalabers.find(
      (eachAdalaber) => eachAdalaber.id === adalaberId
    );
    const socialNetworks = foundAdalaber.social_networks.map(
      (eachNetwork, i) => {
        return (
          <li key={i}>
            <a href={eachNetwork.url}>{eachNetwork.name}</a>
          </li>
        );
      }
    );
    return socialNetworks;
  };

  const renderAdalabers = () => {
    const AdalabersList = adalabers
      .filter((eachAdalaber) =>
        eachAdalaber.name.toLowerCase().includes(searchName.toLowerCase())
      )
      .filter((eachAdalaber) =>
        eachAdalaber.counselor
          .toLowerCase()
          .includes(searchCounselor.toLowerCase())
      )
      .map((eachAdalaber) => {
        return (
          <tr key={eachAdalaber.id} className='row'>
            <td className='column'>{eachAdalaber.name}</td>
            <td className='column'>{eachAdalaber.counselor}</td>
            <td className='column'>{eachAdalaber.speciality}</td>
            <td className='column'>
              <ul className='list'>{renderSocialNetworks(eachAdalaber.id)}</ul>
            </td>
          </tr>
        );
      });
    return AdalabersList;
  };

  return (
    <>
      <main>
        <h1 className='title'>Adalabers</h1>
        <section className='landing'>
          <form className='form__Search' action='' onSubmit={handleSubmit}>
            <label htmlFor='searchName'>Nombre:</label>
            <input
              type='text'
              name='searchName'
              id='searchName'
              placeholder='Ej: MariCarmen'
              value={searchName}
              onChange={handleSearchName}
            />
            <label htmlFor='searchCounselor'>Escoge una tutora:</label>
            <select
              name='searchCounselor'
              id='searchCounselor'
              value={searchCounselor}
              onChange={handleSearchCounselor}
            >
              <option value=''>Cualquiera</option>
              <option value='Yanelis'>Yanelis</option>
              <option value='Dayana'>Dayana</option>
              <option value='Iván'>Iván</option>
            </select>
          </form>
          <section className='section'>
            <article>
              <table className='table'>
                <thead>
                  <tr className='row'>
                    <th className='column'>Nombre</th>
                    <th className='column'>Tutora</th>
                    <th className='column'>Especialidad</th>
                    <th className='column'>Redes</th>
                  </tr>
                </thead>
                <tbody>{renderAdalabers()}</tbody>
              </table>
            </article>
            <article>
              <h2 className='subtitle'>Añadir una nueva Adalaber</h2>
              <form className='addForm' action='' onSubmit={handleSubmit}>
                <label htmlFor='name'>Nombre:</label>
                <input
                  name='name'
                  id='name'
                  type='text'
                  value={newAdalaber.name}
                  onChange={handleInput}
                />
                <label htmlFor='counselor'>Tutora:</label>
                <input
                  name='counselor'
                  id='counselor'
                  type='text'
                  value={newAdalaber.counselor}
                  onChange={handleInput}
                />
                <label htmlFor='speciality'>Especialidad:</label>
                <input
                  name='speciality'
                  id='speciality'
                  type='text'
                  value={newAdalaber.speciality}
                  onChange={handleInput}
                />
                <button type='button' onClick={handleNewAdalaber}>
                  Añadir una nueva adalaber
                </button>
              </form>
            </article>
          </section>
        </section>
      </main>
    </>
  );
}

export default App;
