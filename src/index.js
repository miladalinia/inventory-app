import CategoryView from "./js/CategoryView";
import ProductView from "./js/ProductView";


document.addEventListener("DOMContentLoaded", () => {
    CategoryView.setApp();
    ProductView.setApp();
    console.log(ProductView);
    CategoryView.createCategoriesList();
    ProductView.createProductsList(ProductView.products);
    ProductView.productsCount()
})