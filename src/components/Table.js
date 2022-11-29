import '../styles/components/Adalabers.scss';

function Table(props) {
  return (
    <article>
      <table className='table'>
        <thead className='table__head'>
          <tr className='table__row'>
            <th className='table__head__column'>Nombre</th>
            <th className='table__head__column'>Tutora</th>
            <th className='table__head__column'>Especialidad</th>
            <th className='table__head__column'>Redes</th>
          </tr>
        </thead>
        <tbody>{props.renderAdalabers()}</tbody>
      </table>
    </article>
  );
}

export default Table;
