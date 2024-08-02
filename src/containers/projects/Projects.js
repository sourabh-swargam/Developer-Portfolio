import React, {useContext, Suspense, lazy} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import {socialMediaLinks, openSourceInfo} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";
import {} from "../../portfolio";

export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const renderLoader = () => <Loading />;
  // todo: remove useContex because is not supported
  const {isDark} = useContext(StyleContext);

  return (
    <Suspense fallback={renderLoader()}>
      <div className="main" id="opensource">
        <h1 className="project-title">Open Source Projects</h1>
        <div className="repo-cards-div-main">
          {openSourceInfo.data.user.pinnedItems.edges.map((v, i) => {
            if (!v) {
              console.error(
                `Github Object for repository number : ${i} is undefined`
              );
            }
            return <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />;
          })}
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href={socialMediaLinks.github}
          newTab={true}
        />
      </div>
    </Suspense>
  );
}
