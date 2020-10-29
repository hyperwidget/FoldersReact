import { Link, useLocation, useHistory } from "react-router-dom";

export const JumboTron = () => {
  const location = useLocation();
  const history = useHistory();
  const trimmedPath = location.pathname.split("/")[1];
  let text;
  switch (trimmedPath) {
    case "archives":
      text = "Archived Posts";
      break;
    case "post":
      break;
    default:
      text = "Recent Posts";

      break;
  }

  if (!text) {
    return (
      <div className="jumbotron">
        <div className="container">
          <Link onClick={() => history.goBack()}>{"<-"} Go Back</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="jumbotron">
      <div className="container">
        <h3>{text}</h3>
      </div>
    </div>
  );
};
