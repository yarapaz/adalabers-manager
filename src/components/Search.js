import '../styles/components/Search.scss';
import SearchForm from './SearchForm';

function Search(props) {
  return (
    <article>
      <SearchForm
        searchName={props.searchName}
        searchCounselor={props.searchCounselor}
        handleSearchName={props.handleSearchName}
        handleSearchCounselor={props.handleSearchCounselor}
      />
    </article>
  );
}

export default Search;
