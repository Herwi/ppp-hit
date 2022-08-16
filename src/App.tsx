import { collection, getDocs } from "firebase/firestore/lite";
import "./App.css";
import { useFirestore } from "./Hooks/useFirestore";

const App = () => {
  const firestore = useFirestore();

  return (
    <div>
      <h1>waaaat</h1>
    </div>
  );
};

export default App;
