import React, { Suspense, lazy, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyle";

import { Header, Loading, Container, Navigation, Footer } from "./components";
import { AuthContext } from "./contexts/AuthContext";

const HomeLazy = lazy(() => import("./pages/Home/Home"));
const LoginLazy = lazy(() => import("./pages/Login/Login"));
const AddStudentLazy = lazy(() => import("./pages/AddStudent/AddStudent"));
const StudentsLazy = lazy(() => import("./pages/Students/Students"));

function Routes() {
  const auth = useContext(AuthContext);

  return (
    <Router>
      <GlobalStyle />
      <Header
        isLoggedIn={!!auth.token}
        logOut={() => {
          auth.setToken();
          localStorage.removeItem("token");
        }}
      />
      <Container>
        <Navigation isLoggedIn={!!auth.token} />
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={HomeLazy} />
            <Route exact path="/login" component={LoginLazy} />
            <Route exact path="/addstudent" component={AddStudentLazy} />
            <Route exact path="/students" component={StudentsLazy} />
          </Switch>
        </Suspense>
      </Container>
      <Footer />
    </Router>
  );
}

export default Routes;
