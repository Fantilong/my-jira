import { AuthenticateApp } from "authenticated-app";
import { useAuth } from "context/auth-context";
import { UnauthencatedApp } from "unauthenticated-app";
import "./App.css";

function App() {
  const { user } = useAuth();

  return (
    <div className="App">
      {user ? <AuthenticateApp /> : <UnauthencatedApp />}
    </div>
  );
}

export default App;
