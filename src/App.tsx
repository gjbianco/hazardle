import "./App.css";
import hazards from "./hazards.json";
import Diamond from "./Diamond";

export function App() {
  const randomIndex = Math.floor((Math.random() * 1000) % hazards.length) - 1;
  console.log(
    `Displaying random hazard with index ${randomIndex}:`,
    hazards[randomIndex]
  );
  return <HazardDiamond hazard={hazards[randomIndex]}></HazardDiamond>;
}

export type Hazard = {
  chemical: string;
  health: number;
  fire: number;
  reactivity: number;
  special: string;
};
function HazardDiamond(props: { hazard: Hazard }) {
  const { chemical, health, fire, reactivity, special } = props.hazard;
  return (
    <>
      <Diamond hazard={props.hazard} />
      <div>Chemical: {chemical}</div>
      <div>Health: {health}</div>
      <div>Fire: {fire}</div>
      <div>Reactivity: {reactivity}</div>
      <div>Special: {special || "None"}</div>
    </>
  );
}
