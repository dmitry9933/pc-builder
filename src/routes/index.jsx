import {
  BrowserRouter,
  Navigate,
  Route,
  Routes as Switch,
} from "react-router-dom";
import BodyLayout from "../layout/BodyLayout";
import ArtistPage from "../pages/ArtistPage";
import Artists from "../pages/Artists";
import Home from "../pages/Home";
// import WorksPage from "../pages/WorksPage";

const Routes = () => {
  return (
    <BrowserRouter>
      {/* <IntlContextProvider> */}
      <BodyLayout>
        <Switch>
          <Route exact path="/" element={<Navigate to="/home" />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/artists" element={<Artists />} />
          <Route exact path="/artists/:id" element={<ArtistPage />} />
          {/* <Route exact path="/works" element={<WorksPage />} /> */}
          <Route exact path="/not_found" element={<h1>Not Found</h1>} />
          <Route path="*" element={<Navigate to="/not_found" />} />
        </Switch>
      </BodyLayout>
      {/* </IntlContextProvider> */}
    </BrowserRouter>
  );
};

export default Routes;
