export const TopBar = () => {
  return (
    <div className="intro-header">
      <header className="page-header">
        <nav className="navbar navbar-fixed-top palette-turquoise">
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <h5>
                <i className="fui-folder"></i>The Folders Project
              </h5>
            </div>

            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <h4 className="folder-title">React!</h4>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
