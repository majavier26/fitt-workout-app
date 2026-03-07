import { Routes, Route } from 'react-router-dom';
import type { RouteType } from '../assets/config/routes';

type AppRoutesProps = {
    routes: RouteType[];
}

const AppRoutes = ({
    routes
}: AppRoutesProps) => {
    return (
        <Routes>
            {routes.map((route) => {
            return <Route key={route.title} path={route.href} element={<route.page />} />
            })}
        </Routes>
    )
}

export default AppRoutes;