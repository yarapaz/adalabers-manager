import '../styles/components/AddNew.scss';

function AddNew(props) {
  const onSubmit = (ev) => {
    props.handleSubmit(ev);
  };

  const onChange = (ev) => {
    props.handleInput(ev);
  };

  const handleNewAdalaber = () => {
    props.handleNewAdalaber();
  };

  return (
    <article>
      <h2 className='subtitle'>Añadir una nueva Adalaber</h2>
      <form className='addForm' action='' onSubmit={onSubmit}>
        <label htmlFor='name'>Nombre:</label>
        <input
          name='name'
          id='name'
          type='text'
          value={props.newAdalaber.name}
          onChange={onChange}
        />
        <label htmlFor='counselor'>Tutora:</label>
        <input
          name='counselor'
          id='counselor'
          type='text'
          value={props.newAdalaber.counselor}
          onChange={onChange}
        />
        <label htmlFor='speciality'>Especialidad:</label>
        <input
          name='speciality'
          id='speciality'
          type='text'
          value={props.newAdalaber.speciality}
          onChange={onChange}
        />
        <button type='button' onClick={handleNewAdalaber}>
          Añadir una nueva adalaber
        </button>
      </form>
    </article>
  );
}

export default AddNew;
