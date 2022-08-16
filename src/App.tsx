import "./App.css";
import SignIn from "./Components/SignIn/SignIn";
import { AuthProvider } from "./Hooks/useAuth";
import MUI from "./MUI";

const App = () => {
  return (
    <AuthProvider>
      <MUI>
        <SignIn />
      </MUI>
    </AuthProvider>
  );
};

export default App;
