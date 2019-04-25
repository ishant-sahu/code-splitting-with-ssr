import {Home, Grid} from "./sync-routes";
import { fetchPopularRepos } from '../apis/api';

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/popular/:id",
    exact: true,
    component: Grid,
    fetchInitialData: (path = "") => fetchPopularRepos(path.split("/").pop())
  }
];

export default routes;
