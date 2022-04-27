import Die from "./Die";

const random = () => Math.floor(Math.random() * 6) + 1;

function Main(props) {
  const dieArray = [];
  for (let i = 0; i < 10; i++) {
    dieArray.push(<Die>{random()}</Die>);
  }
  return (
    <main>
      <div className="die--container">{dieArray.map((ele) => ele)}</div>
    </main>
  );
}
export default Main;
