import Child1 from './Child1'
import Child2 from './Child2'
import Data from './Data'
import './App.css';

function App() {
  const score=3;

  return (
    <div className="App">
      <Child1 name="Shiv Shakti" />
      <Child2 namestr="hello" number1={3} optbool={true} say={()=>{console.log("hello")}}  obj={{name:"Rohit"}} />
      <Data name="Shiv Shakti" marks={100} total={()=>{Math.max(1,score)}}/> 
    </div>
  );
}

export default App;
