import NavBar from './components/NvBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <ItemListContainer greeting={'Bienvenidos'}/>
    </div>
  );
}

export default App;
