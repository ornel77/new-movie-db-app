/* eslint-disable react/prop-types */
const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className="search">
      <input type="text" value={searchTerm}/>
    </div>
  )
}
export default Search