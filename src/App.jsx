import {useState } from "react";
import TipResult from "./components/TipResult";
import Footer from "./components/Footer";
import Form from "./components/Form";

function App() {
  const [showCustom, setShowCustom] = useState(false);
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState();
  const [person, setPerson] = useState();

  const billAmount = parseFloat(bill) || 0;
  const tipPercent = parseFloat(tip) || 0;
  const people = parseInt(person) || 0;

  const tipAmount = (billAmount * tipPercent) / 100;
  const totalBills = billAmount + tipAmount;
  const totalPerPerson = people > 0 ? totalBills / people : 0;
  const tipPerPerson = people > 0 ? tipAmount / people : 0;

  const handelButtonTip = (event) => {
    const tipPercent = event.target.value;
    setTip(tipPercent);
  
}
 const handleReset = () => {
    setBill("");
    setTip("");
    setPerson("");
  };
  return (  
    <div className="app">
      <main>
        {/* <img src={logo} alt="Tip Calculator Logo" /> */}
        <h1>Tip Calculator App</h1>
        <div className="calculator-container">
          <div className="calculator">
           <Form 
           bill={bill} setBill={setBill} 
           handelButtonTip={handelButtonTip} 
           showCustom={showCustom} 
           setShowCustom={setShowCustom} 
           tip={tip} 
           setTip={setTip} 
           person={person} 
           setPerson={setPerson}
           /> 
          </div>
        <TipResult 
            tipPerPerson={tipPerPerson}
            totalBills={totalBills}
            totalPerPerson={totalPerPerson}
            handleReset={handleReset}
          />
        </div>
       <Footer />
      </main>
    </div>
  );
}

export default App;
