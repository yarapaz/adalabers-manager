import '../styles/components/Search.scss';

function Search(props) {
  const onSubmit = (ev) => {
    props.handleSubmit(ev);
  };

  const onChangeName = (ev) => {
    props.handleSearchName(ev);
  };

  const onChangeCounselor = (ev) => {
    props.handleSearchCounselor(ev);
  };

  return (
    <form className='form__Search' action='' onSubmit={onSubmit}>
      <label htmlFor='searchName'>Nombre:</label>
      <input
        type='text'
        name='searchName'
        id='searchName'
        placeholder='Ej: MariCarmen'
        value={props.searchName}
        onChange={onChangeName}
      />
      <label htmlFor='searchCounselor'>Escoge una tutora:</label>
      <select
        name='searchCounselor'
        id='searchCounselor'
        value={props.searchCounselor}
        onChange={onChangeCounselor}
      >
        <option value=''>Cualquiera</option>
        <option value='Yanelis'>Yanelis</option>
        <option value='Dayana'>Dayana</option>
        <option value='Iván'>Iván</option>
      </select>
    </form>
  );
}

export default Search;
