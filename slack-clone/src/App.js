import Header from './component/Header';
import Sidebar from './component/Sidebar';
import './css/App.css';

function App() {
  return (
    //BEM naming convention
    <div className='app'>
      {/* Header*/}
      <Header />
      <div className='app__body'>
        {/* Sidebar*/}
        <Sidebar />
        {/* React-Router->Chat screen*/}
      </div>
    </div>
  );
}

export default App;
