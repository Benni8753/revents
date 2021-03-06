import React, { Fragment } from "react";
import EventDashboard from "../../features/events/eventdashboard/EventDashboard";
import HomePage from "../../features/home/HomePage";
import NavBar from "../../features/nav/NavBar";
import EventDetailedPage from "../../features/eventDetailed/EventDetailedPage";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import EventForm from "../../features/events/eventForm/EventForm";

export default function App() {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container className="main">
              <Route exact path="/events" component={EventDashboard} />
              <Route path="/events/:id" component={EventDetailedPage} />
              <Route path={['/createEvent', '/manage/:id']} component={EventForm} />
            </Container>
          </>
        )}
      />
    </>
  );
}
