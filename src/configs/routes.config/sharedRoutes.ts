// src/configs/routes.config/sharedRoutes.ts
import Home from '../../views/Home';
import About from '../../views/About';
import Contact from '../../views/Contact';

const sharedRoutes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/about",
    component: About,
    exact: true,
  },
  {
    path: "/contact",
    component: Contact,
    exact: true,
  },
];

export default sharedRoutes;
