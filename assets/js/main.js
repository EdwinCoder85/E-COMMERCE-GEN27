import cart from './components/cart.js';
import loader from './components/loader.js';
import products from './components/products.js';
import showCart from './components/showCart.js';
import showMenu from './components/showMenu.js';
import getProducts from './helpers/getProducts.js';
import colorTheme from './helpers/colorTheme.js';
import stickyNavbar from './helpers/stickyNavbar.js';
import showDetailModal from './components/showModal.js';

/* UI Element */

/* Hidden loader */
loader()

/* Show Menu */
showMenu()

/* Show Cart */
showCart()

/* Color Theme */
colorTheme()

/* Scroll Menu*/
stickyNavbar()

/* End UI Element */

/* Products */
const { db, printProducts } = products(await getProducts())

/* Cart */
cart(db, printProducts)

/* Show Detail in Modal */
showDetailModal(db)




