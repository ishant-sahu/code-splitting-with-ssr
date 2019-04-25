import syncComponent from './sync-component';

const importModules = (moduleName, module) => (
	syncComponent(moduleName, require(`../components/${module}/index`).default)
)

export const Home = importModules("Home",'Home');
export const Grid = importModules("Grid",'Grid');