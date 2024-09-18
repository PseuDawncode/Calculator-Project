import "./App.css";
import { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import Screen from "./components/Screen";
import Header from "./components/Header";

function App() {
  const [firstInput, setFirstInput] = useState<string>("");
  const [secondInput, setSecondInput] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  const addNumbers = (a: string, b: string) => {
    const num1 = parseInt(a);
    const num2 = parseInt(b);
    setResult(num1 + num2);
  };

  return (
    <div className="calculator">
      <Header />
      <Input
        value={firstInput}
        onChange={setFirstInput}
        placeholder="first input"
      />
      <h1>+</h1>
      <Input
        value={secondInput}
        onChange={setSecondInput}
        placeholder="second input"
      />
      <Button onClick={() => addNumbers(firstInput, secondInput)} />
      <Screen result={result} />
    </div>
  );
}

export default App;
