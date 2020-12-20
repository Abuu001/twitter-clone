import './App.css';
import SideBar from "./components/Sidebar/Sidebar"
import Feed from "./components/Feed/Feed"
import Widegets from "./components/Widgets/Widgets"

function App() {
  return (
    <div className="app">
       <SideBar />
       <Feed />
       <Widegets />
    </div>
  );
}

export default App;
