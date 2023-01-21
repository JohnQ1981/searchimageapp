import {useState} from 'react';
import './SearchBar.css';
function SearchBar({onSubmit}) {
    const [term, setTerm ] =useState('');
    const handleClick =()=>{
        onSubmit(term);
    }
    const handleFormSubmit=(event)=>{
        event.preventDefault();
        //console.log('I need to tell the parent about some data.');
        onSubmit(term);
    }
    const handleChange =(event)=>{
        console.log(event.target.value);
        setTerm(event.target.value);
    };

    return (
        <div className="search-bar">
            <form className ="search-bar form" onSubmit={handleFormSubmit}>
                <label>Enter Search Term</label>
            <input value={term} onChange ={handleChange}/>
            </form>
            <button onClick={handleClick}>Click Search or Press Enter </button>
            {/* {term.length <3 && 'Term must be greater than 3 chars.'} */}
            <h2> You are Searching: {term}</h2>
        </div>
    );
};
export default SearchBar;