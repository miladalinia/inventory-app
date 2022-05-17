//localstorage

export default class Storage {

    static getAllProducts(sort = "newest") {
        const savedProducts = JSON.parse(localStorage.getItem("products")) || [];

        return savedProducts.sort((a, b) => {
            if (sort === "newest") {
                return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
            } else if (sort === "oldest") {
                return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
            }
        });
    }

    static saveProducts(productToSave) {
        const savedProducts = Storage.getAllProducts();
        const existedItem = savedProducts.find((product) => product.id === productToSave.id);
        if (existedItem) {
            //edit
            existedItem.title = productToSave.title;
            existedItem.description = productToSave.description;
            existedItem.category = productToSave.category;
            existedItem.quantity = productToSave.quantity;
        } else {
            //push
            productToSave.id = new Date().getTime();
            productToSave.createdAt = new Date().toISOString();
            savedProducts.push(productToSave);
        }
        localStorage.setItem("products", JSON.stringify(savedProducts));
    }

    static getAllCategories() {
        const savedcategories = JSON.parse(localStorage.getItem("categories")) || [];

        return savedcategories.sort((a, b) => {
            return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
        });

    }

    static saveCategories(categoryToSave) {
        const savedcategories = Storage.getAllCategories();
        const existedItem = savedcategories.find((category) => category.id === categoryToSave.id);
        if (existedItem) {
            //edit
            existedItem.title = categoryToSave.title;
        } else {
            //push
            categoryToSave.id = new Date().getTime();
            categoryToSave.createdAt = new Date().toISOString();
            savedcategories.push(categoryToSave);
        }
        localStorage.setItem("categories", JSON.stringify(savedcategories));
    }

    static deleteProduct(id) {
        const savedProducts = Storage.getAllProducts();
        const filteredProducts = savedProducts.filter((product) => product.id !== parseInt(id));
        localStorage.setItem("products", JSON.stringify(filteredProducts));
    }
}
