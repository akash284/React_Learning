import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/theme";
import ThemeBtn from "./components/Themebtn";
import Card from "./components/Card";

// sare component ko themeMode,lightTheme,darkTheme ka direct access hein --> thembtn,Card ko inka access miljyga
// themeMode he ,  lightTHeme,darkTheme method h pr ye method kuch kar ni rahe he abhi bcz abhi tk humne unki functionality define ni kari hein

// lightTheme,darkTHeme same name k methods lo and unki functionality define krdo voh functionality automatically in methods k andr chali jati hein

// ye functionality likhdi par iska mtlb ye ni ki ye functionality automatically html k andr inject hojygi
function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };

  // actual change in theme

  // core functinoality
  useEffect(() => {
    const clslist = document.querySelector("html").classList;

    clslist.remove("light", "dark");
    clslist.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* themebtn ayga */}
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* Card */}
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
