import { Router } from "./routes/Router";
import "./styles.css";
import { UserProvider } from "./providers/UserProvider";

export default function App() {
  return (
    <UserProvider>
      <Router />;
    </UserProvider>
  );
}
