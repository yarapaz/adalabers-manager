function SearchForm(props) {
  const onSubmit = (ev) => {
    props.handleSubmit(ev);
  };

  const onChangeName = (ev) => {
    props.handleSearchName(ev.target.value);
  };

  const onChangeCounselor = (ev) => {
    props.handleSearchCounselor(ev.target.value);
  };

  return (
    <form className='form__Search' action='' onSubmit={onSubmit}>
      <label className='form__label' htmlFor='searchName'>
        Nombre:
      </label>
      <input
        className='form__input'
        type='text'
        name='searchName'
        id='searchName'
        placeholder='Ej: MariCarmen'
        value={props.searchName}
        onChange={onChangeName}
      />
      <label className='form__label' htmlFor='searchCounselor'>
        Escoge una tutora:
      </label>
      <select
        className='form__input'
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

export default SearchForm;
