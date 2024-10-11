import { Routes, Route, Navigate } from "react-router-dom"
import { Home } from "../home/Home"
import { Main } from "../main/Main"
import { PrivateRouter } from "./PrivateRouter"
import { PublicRouter } from "./PublicRouter"
import { TweetsList } from "../main/pages/TweetsList"
import { ProfileView } from "../main/pages/ProfileView"


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
          >
            <Route path="" element={<TweetsList />} />
            <Route path="user/:user" element={<ProfileView />} />
            <Route path="profile" element={<ProfileView />} />
            <Route path="*" element={<Navigate to="" />} />
          </Route>
          <Route path="*" element={<Navigate to="home" />} />
        </Routes>
      </>
    )
}