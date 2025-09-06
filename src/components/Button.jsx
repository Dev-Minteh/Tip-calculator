export default function Button({handelButtonTip, setShowCustom, showCustom, tip, setTip}) {
  return (
    <>
     {[5, 10, 15, 25, 50].map((value) => (
    <button
      key={value}
      type="button"
      value={value}
      onClick={(e) => {
        handelButtonTip(e);
        setShowCustom(false);
      }}
      className={tip == value ? "active-button" : ""}
    >
      {value}%
    </button>
  ))}

    <button
    type="button"
    className={showCustom ? "active-button custom" : ""}
    onClick={() => {
      setShowCustom(true);
      setTip(""); 
    }}
  >
    Custom
  </button>

  {showCustom && (
    <input
      type="number"
      className={tip ? "active-button" : ""}
      value={tip}
      onChange={(e) => setTip(e.target.value)}
    />
  )}
    </>
  );
}