import { HashRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import { Footer, JumboTron, TopBar } from "./components/layout";
import { Home, Archives, PostPage } from "./pages";

function App() {
  return (
    <Router>
      <TopBar />
      <JumboTron />
      <div className="container-fluid full">
        <section className="content row">
          <div className="col-md-3"></div>
          <main className="col-md-6">
            <Switch>
              <Route path="/archives">
                <Archives />
              </Route>
              <Route path="/post/:id">
                <PostPage />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </main>
          <div className="col-md-3"></div>
        </section>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
