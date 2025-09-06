import Button from "./Button";

export default function Form({bill, setBill, handelButtonTip, showCustom, setShowCustom,tip, setTip, person, setPerson}) {
  return (
    <form action="" id="tip-calculator">
              <div className="form-group">
                <label htmlFor="bill">Bill</label>
                <div className="input-group">
                  <span className="input-addon">
                    <span className="currency">D</span>
                  </span>
                  <input
                    value={bill}
                    onChange={(e) => setBill(e.target.value)}
                    type="number"
                    name="bill"
                    placeholder="0"
                    autoComplete="off"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="tip">Select Tip %</label>
                <div className="tip-percent-buttons">
                  <Button  handelButtonTip={handelButtonTip} 
                  showCustom={showCustom} 
                  setShowCustom={setShowCustom} 
                  tip={tip} setTip={setTip}/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="number-of-people">Number Of People</label>
                <div className="input-group">
                  <span className="input-addon">
                    <img src="images/icon-person.svg" alt="Person Icon" />  
                  </span>
                  <input
                    value={person}
                    onChange={(e) => setPerson(e.target.value)}
                    type="number"
                    name="number-of-people"
                    placeholder="0"
                    autoComplete="off"
                  />
                </div>
              </div>
            </form>
  );
}