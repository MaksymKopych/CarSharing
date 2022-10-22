import { useWindowWidth } from "@react-hook/window-size";
import { useEffect, useState } from "react";
import { Bolog } from "./Components/Bolog";
import { Contacts } from "./Components/Contacts";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Service } from "./Components/Service";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    if (showMenu) {
      setShowMenu(false);
      document.body.style.overflow = "auto";
    }
    document.body.style.overflow = showMenu ? "hidden" : "auto";
  }, [windowWidth]);
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "auto";
    }
    document.body.style.overflow = showMenu ? "hidden" : "auto";
  }, [showMenu]);
  return (
    <div className="App">
      <Header
        showMenu={showMenu}
        windowWidth={windowWidth}
        setShowMenu={setShowMenu}
      />
      <Bolog />
      <Service />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
