export default function Element({ value, onclick }) {
  return (
    <button className="square" onClick={onclick}>
      {value}
    </button>
  );
}
