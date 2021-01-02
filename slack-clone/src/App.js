import Header from './component/Header';
import './css/App.css';

function App() {
  return (
    //BEM naming convention
    <div className='app'>
      <h1>Hello guys, ı am starting Slack clone with REACT.js</h1>
      {/* Header*/}

      <Header />
      {/* Sidebar*/}
      {/* React-Router->Chat screen*/}
    </div>
  );
}

export default App;
