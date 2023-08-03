import './Search.css';
import Pokelist from '../Pokelist/Pokelist.jsx';
function Search(){
    return (
        <div>
            <input type="text" id="search" placeholder="search pokemon"/>
            <Pokelist />
        </div>
    )
}
export default Search;