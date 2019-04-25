import asyncComponent from './async-component';

const importModules = (moduleName,module) => (
	asyncComponent(moduleName, () => import(`../components/${module}/index`))
)

export const Home = importModules("Home",'Home');
export const Grid = importModules("Grid",'Grid');