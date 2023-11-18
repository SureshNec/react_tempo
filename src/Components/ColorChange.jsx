function ColorChange(props) {
  return (
    <div>
      <div style={{ backgroundColor: `${props.pValue}`, height: 100 }}></div>
      <button style={props.btnStyle} onClick={() => props.increTen(10)}>
        +10
      </button>
    </div>
  );
}

export default ColorChange;
