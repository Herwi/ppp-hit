import "./App.css";
import { AuthProvider } from "./Hooks/useAuth";
import MUI from "./MUI";

const App = () => {
  return (
    <AuthProvider>
      <MUI>
        <div>
          <h1>waaaat</h1>
        </div>
      </MUI>
    </AuthProvider>
  );
};

export default App;
