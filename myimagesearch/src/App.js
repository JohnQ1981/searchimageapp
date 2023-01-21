import './App.css';
import SearchBar from './components/SearchBar';
import searchImages from './api';
import ImageList from './components/ImageList';
import {useState} from 'react';
import PositionedTooltips from './ToolTip';



function App() {
  const [images, setImages] =useState([]);
  const handleSubmit= async (term)=>{
    console.log("doing search with", term);
    const result = await searchImages(term);
    //console.log(result);
    setImages(result);
  }
  return (
    <div className="App">
      <div> <SearchBar onSubmit ={handleSubmit}/></div>
      <div><ImageList images ={images}/></div>
      <div><PositionedTooltips /></div>
    </div>
  );
}

export default App;
