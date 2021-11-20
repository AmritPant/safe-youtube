import "./Btn.css";

const Btn = function (props) {
  const splitedArr = props.searchValue?.split(" ");
  const joinedStr = splitedArr?.join("+");

  return (
    <div className="btn-box">
      <a
        href={`https://youtube.com/results?search_query=${joinedStr}`}
        className="btn"
      >
        Search
      </a>
    </div>
  );
};
export default Btn;
