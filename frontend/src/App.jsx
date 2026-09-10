import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import FloatingCart from "./components/FloatingCart/FloatingCart";
import AIChatbot from "./components/AIChatbot/AIChatbot";


function App() {
  return (
    <div className="App">
      <AppRoutes />

      <FloatingCart />
      <AIChatbot />
    </div>
  );
}

export default App;