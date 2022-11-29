import Table from './Table';
import AddNewForm from './AddNewForm';
import '../styles/components/Adalabers.scss';

function Adalabers(props) {
  return (
    <article className='section'>
      <Table renderAdalabers={props.renderAdalabers} />
      <AddNewForm
        handleSubmit={props.handleSubmit}
        newAdalaber={props.newAdalaber}
        handleInput={props.handleInput}
        handleNewAdalaber={props.handleNewAdalaber}
      />
    </article>
  );
}

export default Adalabers;
