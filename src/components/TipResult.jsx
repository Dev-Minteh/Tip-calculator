export default function TipResult({tipPerPerson, totalPerPerson, totalBills, handleReset}) {
  return (
      <div className="tip-result">
            <div className="tip-result-row">
              <div>
                <span className="tip-result-label">Tip Amount</span>
                <span>/ person</span>
              </div>
              <div>{`D${tipPerPerson.toFixed(2)}`}</div>
            </div>
 
            <div className="tip-result-row">
              <div>
                <span className="tip-result-label">Total</span>
                <span>/ person</span>
              </div>

              <div>{`D${totalPerPerson.toFixed(2)}`}</div>
            </div>

            <div className="tip-result-row">
              <div>
                <span className="tip-result-label">Total</span>
                <span>/ Bill</span>
              </div>

              <div>{`D${totalBills.toFixed(2)}`}</div>
            </div>

            <button type="reset" form="tip-calculator" onClick={handleReset}>
              Reset
            </button>
          </div>
  );
}