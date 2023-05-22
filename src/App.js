import "./App.css";
import styles from "./UI/CssModules/App.module.css";
import styless from "./UI/CssModules/NavBarContextArea.module.css";
import { Header } from "./UI/Header";
import { NavBar } from "./UI/NavBar";
import { Content } from "./UI/Content";
import { BrowserRouter } from "react-router-dom";


const App = () => {

  return (
    <div className={styles.app}>
      <div>
        <Header />
      </div>
      <BrowserRouter>
        <div className={styless.NavBarContextArea}>
          <NavBar />
          <Content />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
