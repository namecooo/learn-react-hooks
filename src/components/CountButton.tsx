import { memo, useContext } from "react";
import { THEME_DATA, ThemeContext } from "../context/ThemeContext";

export const CountButton = memo(function CountButton() {
  const { currentTheme, changeTheme } = useContext(ThemeContext);

  const handleButtonClick = () => {
    const newTheme =
      currentTheme === THEME_DATA.LIGHT ? THEME_DATA.DARK : THEME_DATA.LIGHT;

    changeTheme(newTheme);
  };

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <button type="button" onClick={handleButtonClick}>
          テーマ変更
        </button>
      </div>
    </div>
  );
});
