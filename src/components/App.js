import { useState, useEffect } from 'react';
import '../styles/App.scss';
import callToApi from '../services/api';
import Search from './Search';
import Table from './Table';
import AddNew from './AddNew';

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
  console.log(adalabers);

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
    adalabers.unshift(newAdalaber);
    setAdalabers([...adalabers]);
    setNewAdalaber({
      id: crypto.randomUUID(),
      name: '',
      counselor: '',
      speciality: '',
      social_networks: [],
    });
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
      .filter((eachAdalaber) => {
        if (searchCounselor === '') {
          return true;
        } else {
          return (
            eachAdalaber.counselor.toLowerCase() ===
            searchCounselor.toLowerCase()
          );
        }
      })
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
          <section>
            <Search
              handleSubmit={handleSubmit}
              searchName={searchName}
              searchCounselor={searchCounselor}
              handleSearchName={handleSearchName}
              handleSearchCounselor={handleSearchCounselor}
            />
          </section>
          <section className='section'>
            <Table renderAdalabers={renderAdalabers} />
            <AddNew
              handleSubmit={handleSubmit}
              newAdalaber={newAdalaber}
              handleInput={handleInput}
              handleNewAdalaber={handleNewAdalaber}
            />
          </section>
        </section>
      </main>
    </>
  );
}

export default App;
