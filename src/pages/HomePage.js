import React from "react";
import Greeting from "../containers/greeting/Greeting";
import Skills from "../containers/skills/Skills";
import StackProgress from "../containers/skillProgress/skillProgress";
import Profile from "../containers/profile/Profile";

function HomePage() {
  return (
    <>
      <Greeting />
      <Skills />
      <StackProgress />
      <Profile />
    </>
  );
}
export default HomePage;
