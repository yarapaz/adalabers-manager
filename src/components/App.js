import { useState, useEffect } from 'react';
import '../styles/App.scss';
import callToApi from '../services/api';

function App() {
  //States
  const [adalabers, setAdalabers] = useState([]);
  const [newAdalaber, setNewAdalaber]

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

  const handleNewAdalaber = () => {

  };

  //Render Helpers
  const renderAdalabers = () => {
    const AdalabersList = adalabers.map((eachAdalaber) => {
      return (
        <tr key={eachAdalaber.id}>
          <td>{eachAdalaber.name}</td>
          <td>{eachAdalaber.counselor}</td>
          <td>{eachAdalaber.speciality}</td>
        </tr>
      );
    });
    return AdalabersList;
  };

  return (
    <>
      <main>
        <h1>Adalabers</h1>
        <section className='section'>
          <table className='table'>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Tutora</th>
                <th>Especialidad</th>
              </tr>
            </thead>
            <tbody>{renderAdalabers()}</tbody>
          </table>
          <form action='' onSubmit={handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input name='name' id='name' type='text' />
            <label htmlFor='counselor'>Counselor</label>
            <input name='counselor' id='counselor' type='text' />
            <label htmlFor='speciality'>Speciality</label>
            <input name='speciality' id='speciality' type='text' />
            <button type='button' onClick={handleNewAdalaber}>
              Add New Adalaber
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

export default App;
