import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyle";

import { Header, Loading, Container, Navigation, Footer } from "./components";

const HomeLazy = lazy(() => import("./pages/Home/Home"));
const LoginLazy = lazy(() => import("./pages/Login/Login"));
const AddStudentLazy = lazy(() => import("./pages/AddStudent/AddStudent"));

function Routes() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Container>
        <Navigation />
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={HomeLazy} />
            <Route exact path="/login" component={LoginLazy} />
            <Route exact path="/addstudent" component={AddStudentLazy} />
          </Switch>
        </Suspense>
      </Container>
      <Footer />
    </Router>
  );
}

export default Routes;
