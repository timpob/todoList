import './App.css';
import Filter from "./Components/Filters/Filter";
import Search from "./Components/Search/Search";
import Input from "./Components/Input/Input";
import Statistics from "./Components/Statistics/Statistics";

import TaskSet from "./Components/TaskSet/TaskSet";

function App() {
    return (
        <div className="App">
            <>ToDo List</>
            <Statistics/>
            <Filter/>
            <Search/>
            <TaskSet/>
            <Input/>
        </div>
    );
}

export default App;
