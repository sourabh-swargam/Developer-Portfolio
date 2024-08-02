import React, {useEffect, useState} from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useRoutes
} from "react-router-dom";
import Main from "./containers/Main";

import Header from "./components/header/Header";
import Greeting from "./containers/greeting/Greeting";
import Skills from "./containers/skills/Skills";
import StackProgress from "./containers/skillProgress/skillProgress";
import WorkExperience from "./containers/workExperience/WorkExperience";
import Projects from "./containers/projects/Projects";
import StartupProject from "./containers/StartupProjects/StartupProject";
import Achievement from "./containers/achievement/Achievement";
import Blogs from "./containers/blogs/Blogs";
import Footer from "./components/footer/Footer";
import Talks from "./containers/talks/Talks";
import Podcast from "./containers/podcast/Podcast";
import Education from "./containers/education/Education";
import ScrollToTopButton from "./containers/topbutton/Top";
import Twitter from "./containers/twitter-embed/twitter";
import Profile from "./containers/profile/Profile";
import SplashScreen from "./containers/splashScreen/SplashScreen";
import {splashScreen} from "./portfolio";
import {StyleProvider} from "./contexts/StyleContext";
import "./containers/Main.scss";

import HomePage from "./pages/HomePage";
import StudyPage from "./pages/StudyPage";
import WorkPage from "./pages/WorkPage";
import ProjectPage from "./pages/ProjectPage";

// import {useLocalStorage} from "./hooks/useLocalStorage";

const useLocalStorage = (key, initialValue) => {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
};

function App() {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <div className={isDark ? "dark-mode" : null}>
        <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
          {isShowingSplashAnimation && splashScreen.enabled ? (
            <SplashScreen />
          ) : (
            <>
              <Router>
                <Header />
                <Routes>
                  {["/", "/home", "/dev-portfolio"].map(path => (
                    <Route path={path} element={<HomePage />} />
                  ))}
                  <Route path="/education" element={<StudyPage />} />
                  <Route path={"/work"} element={<WorkPage />} />
                  <Route path={"/projects"} element={<ProjectPage />} />
                </Routes>
              </Router>
              {/* <Footer /> */}
              <ScrollToTopButton />
            </>
            // <>
            //   <Blogs />
            //   <Talks />
            //   <Twitter />
            //   <Podcast />
            // </>
          )}
        </StyleProvider>
      </div>
    </>
  );
}

export default App;
