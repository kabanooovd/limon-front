export const MINIMAL_RATING = 1;
export const MAXIMAL_RATING = 5;

export const routesMapper = {
  cart: 'cart',
  help: 'help',
  about: 'about',
}

const {help, about} = routesMapper

export const navigations = [
  {route: help, name: 'ПОМОЩЬ'},
  {route: about, name: 'О НАС'},
]