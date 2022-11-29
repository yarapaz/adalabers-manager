function AddNew(props) {
  const onSubmit = (ev) => {
    props.handleSubmit(ev);
  };

  const onChange = (ev) => {
    props.handleInput(ev.target);
  };

  const handleNewAdalaber = () => {
    props.handleNewAdalaber();
  };

  return (
    <article>
      <h2 className='subtitle'>Añadir una nueva Adalaber</h2>
      <form className='addForm' action='' onSubmit={onSubmit}>
        <label className='addForm__label' htmlFor='name'>
          Nombre:
        </label>
        <input
          className='addForm__input'
          name='name'
          id='name'
          type='text'
          value={props.newAdalaber.name}
          onChange={onChange}
        />
        <label className='addForm__label' htmlFor='counselor'>
          Tutora:
        </label>
        <input
          className='addForm__input'
          name='counselor'
          id='counselor'
          type='text'
          value={props.newAdalaber.counselor}
          onChange={onChange}
        />
        <label className='addForm__label' htmlFor='speciality'>
          Especialidad:
        </label>
        <input
          className='addForm__input'
          name='speciality'
          id='speciality'
          type='text'
          value={props.newAdalaber.speciality}
          onChange={onChange}
        />
        <button
          className='addForm__btn'
          type='button'
          onClick={handleNewAdalaber}
        >
          Añadir una nueva adalaber
        </button>
      </form>
    </article>
  );
}

export default AddNew;
