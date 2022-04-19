
import './style.css';
import Mainroutes from './component/Mainroutes';
import Sidebar from "./component/Sidebar"

function App() {
  return (
    <div className='app'>
    <Sidebar/>
    <Mainroutes/>
    </div>
  );
}

export default App;
