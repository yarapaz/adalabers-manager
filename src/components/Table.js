import '../styles/components/Table.scss';

function Table(props) {
  return (
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
        <tbody>{props.renderAdalabers()}</tbody>
      </table>
    </article>
  );
}

export default Table;
