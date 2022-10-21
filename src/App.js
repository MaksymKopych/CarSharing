import { Bolog } from "./Components/Bolog";
import { Contacts } from "./Components/Contacts";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Service } from "./Components/Service";

function App() {
  return (
    <div className="App">
      <Header />
      <Bolog />
      <Service />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
