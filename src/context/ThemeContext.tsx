import React, { createContext, useCallback, useMemo, useState } from "react";

export const THEME_DATA = {
  LIGHT: "Light",
  DARK: "Dark",
} as const;

type THEME_DATA = (typeof THEME_DATA)[keyof typeof THEME_DATA];

export const ThemeContext = createContext(
  {} as {
    currentTheme: THEME_DATA;
    changeTheme: (newTheme: THEME_DATA) => void;
  }
);

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentTheme, setCurrentTheme] = useState<THEME_DATA>(
    THEME_DATA.LIGHT
  );

  // この関数は、ページ遷移などの際に新しく生成されるため、異なる関数 となる。
  // したがって、オブジェクト { currentTheme, changeTheme } は、毎回異なるオブジェクトとなる。
  // ---> 何もしなければ、ThemeContext が使用されているコンポーネントは、その度に再レンダーされる。
  // これを最適化するためには、useMemo, useCallback を用いる。
  const changeTheme = useCallback(function changeTheme(newTheme: THEME_DATA) {
    setCurrentTheme(newTheme);
  }, []);

  // useMemo だけだと、 changeTheme が毎回、再生成されて新しい関数になるため、無意味
  const contextValue = useMemo(
    () => ({
      currentTheme,
      changeTheme,
    }),
    [currentTheme, changeTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
