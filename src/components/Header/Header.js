import React from "react";
import styles from "./Header.module.scss";
import { useSelector } from "react-redux";
import cx from "classnames";
import CONSTANTS from "../../constants";
import { setTheme } from "../../store/slices/themeSlice";
const { THEMES } = CONSTANTS;

const Header = (props) => {
  const theme = useSelector((state) => ({
    theme: state.theme,
    language: state.lang,
  }));

  const className = cx(styles.header, {
    [styles.darkTheme]: theme.theme === THEMES.DARK,
    [styles.lightTheme]: theme.theme === THEMES.LIGHT,
  });

  return (
    <header className={className}>
      <h1>My Counter</h1>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>Link 1</li>
          <li className={styles.navListItem}>Link 2</li>
          <li className={styles.navListItem}>Link 3</li>
        </ul>
      </nav>

      <div>
        <button onClick={() => setTheme()}>Switch Theme</button>
      </div>
    </header>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     theme: state.theme,
//     language: state.lang,
//   };
// };

// const mapDispatchToProps = {
//   setTheme,
// };

export default Header;
