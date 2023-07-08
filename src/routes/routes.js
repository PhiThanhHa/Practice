//Layouts
import { HeaderOnly } from '~/components/Layout';

//pages
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Register from '~/pages/Register';

//publicRoutes
const publicRoutes = [
    { path: '/', component: Home, layout: null },
    { path: '/login', component: Login, layout: null },
    // {path: '/register', component : Register, layout: null },
    { path: '/register', component: Register, layout: HeaderOnly },
];

//privateRoutes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
