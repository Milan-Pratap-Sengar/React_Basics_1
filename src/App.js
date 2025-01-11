import logo from './logo.svg';
import './App.css';
import F1 from "./Components/Item.js" //here we will import the component from "Components/Item.js" folder."F1" can be replaced by any word but First letter of that word must be capital.But the best practise is that you should use the same component name here so that when you use it in this file,you can understand it easily.
import Date from './Components/Date.js';
 
//way 1

// function App() {
//   return (
//     <div> 
//       <div className="App">This is my first project</div>
//       <F1></F1>
//       <Date dayName="10" monthName="june" yearName="2022"></Date>
//       <Date dayName="20" monthName="july" yearName="2023"></Date>
//       <Date dayName="30" monthName="august" yearName="2024"></Date>
//     </div>
//   );
// }

//  way 2 {better}
function App() {
  let arr=[
    {
      dayName:'10',
      monthName:"june",
      yearName:'2022'

    },
    {
      dayName:'20',
      monthName:"july",
      yearName:'2023'

    },
    {
      dayName:'30',
      monthName:"august",
      yearName:'2024'

    }
  ]
  return (
    <div>
      <div className="App">This is my first project</div>
      <F1></F1>
      <Date dayName={arr[0].dayName} monthName={arr[0].monthName} yearName={arr[0].yearName}> milan </Date>
      <Date dayName={arr[1].dayName} monthName={arr[1].monthName} yearName={arr[1].yearName}> pratap </Date>
      <Date dayName={arr[2].dayName} monthName={arr[2].monthName} yearName={arr[2].yearName}> sengar </Date>
    </div>
  );
}

export default App;
