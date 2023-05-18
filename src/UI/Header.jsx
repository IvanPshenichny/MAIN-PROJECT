import React from "react";
import styles from "./CssModules/Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <img src="https://pngicon.ru/file/uploads/jetiketka-4k-ultra-hd-900x730.png" />
      </div>
    </div>
  );
};
export { Header };
