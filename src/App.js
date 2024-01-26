import styles from "./App.module.css";
import React from "react";
import NavigationMenu from "./components/navigation/NavigationMenu";
import SearchComponent from "./components/search/SearchComponent";
import ResultsComponents from "./components/results/ResultsComponents";

import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import mobileIconMenu from "./assets/mobile/mobile-icon__menu.svg";

function App() {
  return (
    <div className={styles.appContainer}>
      <div className={styles.navigationMenu}>
        <NavigationMenu />
      </div>

      <div className={styles.mobileNavigationMenu}>
        <img alt="img" src={mobileIconMenu} />
      </div>

      <div className={styles.appContent}>
        <div className={styles.appContentInner}>
          <h1>Поиск заказов</h1>
          <button className={styles.appContentButton}>
            <AddIcon style={{ marginRight: "10px", display: "inline-block" }} />
            Создать новый заказ
          </button>
        </div>

        <div className={styles.mainContent}>
          <SearchComponent />
          <div className={styles.countAndFilterResult}>
            <p>Найдено заказов: 32</p>
            <span className={styles.filterSortBy}>
              <span>Сначала дорогие</span> <KeyboardArrowDownIcon />
            </span>
          </div>

          <ResultsComponents />

          <div>
            <button className={styles.mobileAppContentButton}>
              <AddIcon style={{ marginRight: "10px" }} />
              Создать новый заказ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
