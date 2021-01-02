import React, { Suspense, lazy, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import GlobalStyle from "./globalStyle";

import {
  Header,
  Loading,
  Container,
  Navigation,
  Footer,
  PrivateRoute,
} from "./components";
import { AuthContext } from "./contexts/AuthContext";

const HomeLazy = lazy(() => import("./pages/Home/Home"));
const LoginLazy = lazy(() => import("./pages/Login/Login"));
const AddStudentLazy = lazy(() => import("./pages/AddStudent/AddStudent"));
const AddCourseLazy = lazy(() => import("./pages/AddCourse/AddCourse"));
const StudentsLazy = lazy(() => import("./pages/Students/Students"));
const CoursesLazy = lazy(() => import("./pages/Courses/Courses"));
const GroupLazy = lazy(() => import("./pages/Groups/Groups"));

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
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
            <Route exact path="/login" component={LoginLazy} />
            <PrivateRoute exact path="/home" component={HomeLazy} />
            <PrivateRoute exact path="/addstudent" component={AddStudentLazy} />
            <PrivateRoute exact path="/addcourse" component={AddCourseLazy} />
            <PrivateRoute exact path="/students" component={StudentsLazy} />
            <PrivateRoute exact path="/courses" component={CoursesLazy} />
            <PrivateRoute exact path="/groups" component={GroupLazy} />
          </Switch>
        </Suspense>
      </Container>
      <Footer isLoggedIn={!!auth.token} />
    </Router>
  );
}

export default Routes;
