import { Routes, Route } from "react-router-dom"
import { Home } from "../home/Home"
import { Main } from "../main/Main"
import { PrivateRouter } from "./PrivateRouter"
import { PublicRouter } from "./PublicRouter"


export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route
                    path='/'
                    element={
                        <PublicRouter>
                            <Home />
                        </PublicRouter>
                    }
                />
                <Route path='/home' element={
                    <PrivateRouter>
                        <Main />
                    </PrivateRouter>
                } />
            </Routes>
        </>
    )
}