import { useLocation, Link } from "react-router-dom";

export const Footer = () => {
  const location = useLocation();
  const trimmedPath = location.pathname.split("/")[1];
  let text = "View Archives";
  let path = "/archives";
  switch (trimmedPath) {
    case "archives":
    case "post":
      text = "Go Home";
      path = "/";
      break;
    default:
      break;
  }
  return (
    <footer>
      <div className="jumbotron">
        <Link className="archive" to={path}>
          {text}
        </Link>
      </div>
    </footer>
  );
};
