import Storage from "./Storage";

const addNewProductBtn = document.querySelector("#add-new-product");
const productTitle = document.querySelector("#product-title");
const productDescription = document.querySelector("#product-description");
const productQuantity = document.querySelector("#product-quantity");
const selectedCategories = document.querySelector("#selectCategories");
const searchInput = document.querySelector("#search-input");
const sortProducts = document.querySelector("#sort-products");
const productsList = document.querySelector("#products-list");

class ProductView {
    constructor() {
        addNewProductBtn.addEventListener("click", (e) => this.addNewProduct(e));
        searchInput.addEventListener("input", (e) => this.searchProducts(e));
        sortProducts.addEventListener("change", (e) => this.sortProducts(e));
        this.products = [];
    }

    addNewProduct(e) {
        e.preventDefault();
        let title = productTitle.value;
        let description = productDescription.value;
        let quantity = productQuantity.value;
        let category = selectedCategories.value;
        if (!title || !description || !quantity) return;

        Storage.saveProducts({title, description, quantity, category});
        this.products = Storage.getAllProducts();
        //update DOM
        this.createProductsList(this.products);
        productTitle.value = '';
        productDescription.value = '';
        productQuantity.value = '';
    }

    setApp() {
        this.products = Storage.getAllProducts();
    }

    createProductsList(products) {
        let result = '';
        products.forEach(item => {
            const selectedCategory = Storage.getAllCategories().find((c) => c.id === parseInt(item.category))
            result += `<div class="flex items-center justify-between mb-2">
                    <span class="text-slate-500">${item.title}</span>
                    <div class="flex items-center gap-x-3">
                        <span class="text-slate-400">${new Date().toLocaleDateString("fa-IR")}</span>
                        <span class="block px-3 py-0.5 text-slate-400 border border-slate-400 text-sm rounded-2xl">${selectedCategory.title}</span>
                        <span class="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 border-2 border-slate-300 text-slate-300">${item.quantity}</span>
                        <button data-product-id="${item.id}" class="delete-product border-2 bg-transparent text-slate-600 px-2 py-0.5 rounded-2xl border-red-400 mb-1">delete</button>
                    </div>
                </div>`;
        })
        productsList.innerHTML = result;

        const deleteBtns = document.querySelectorAll(".delete-product");
        // console.log(deleteBtns)
        deleteBtns.forEach((deleteBtn) => {
            deleteBtn.addEventListener("click", (e) => this.deleteProduct(e))
        })

    }

    productsCount() {
        const count = Storage.getAllProducts().length;
        const productsCount = document.querySelector("#productsCount");
        productsCount.innerText = count;
    }

    searchProducts(e) {
        const value = e.target.value.trim().toLowerCase();
        const filteredProducts = this.products.filter((product) => product.title.toLowerCase().includes(value));
        this.createProductsList(filteredProducts);
    }

    sortProducts(e) {
        const value = e.target.value;
        this.products = Storage.getAllProducts(value);
        this.createProductsList(this.products);
    }

    deleteProduct(e) {
        const productId = e.target.dataset.productId;
        Storage.deleteProduct(productId);
        this.products = Storage.getAllProducts();
        this.createProductsList(this.products);
    }

}


export default new ProductView();
