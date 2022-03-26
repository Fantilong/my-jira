import React from "react";
import { AuthenticateApp } from "authenticated-app";
import { useAuth } from "context/auth-context";
import "./App.css";
import { UnauthencatedApp } from "unauthenticated-app";
import { FullPageErrorFallback } from "components/lib";
import { ErrorBoundary } from "components/error-boundary";

function App() {
  const { user } = useAuth();

  return (
    <div className="App">
      <ErrorBoundary fallbackRender={FullPageErrorFallback}>
        {user ? <AuthenticateApp /> : <UnauthencatedApp />}
      </ErrorBoundary>
    </div>
  );
}

export default App;
