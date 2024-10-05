import { Routes, Route } from "react-router-dom";
import { Home } from "../home/Home";
import { Main } from "../main/Main";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";
import { Profile } from "../main/Profile";
import { ProfileView } from "../main/ProfileView";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRouter>
              <Home />
            </PublicRouter>
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRouter>
              <Main />
            </PrivateRouter>
          }
        />

        <Route
          path="/home/profile"
          element={
            <PrivateRouter>
              <Profile />
            </PrivateRouter>
          }
        />
      </Routes>
    </>
  );
};
