import Storage from "./Storage";

const categoryTitle = document.querySelector("#category-title");
const addNewCategoryBtn = document.querySelector("#add-new-category");
const selectCategories = document.querySelector("#selectCategories");
const toggleAddCategoryBtn = document.getElementById("toggle-add-category");
const categoryWrapper = document.getElementById("category-wrapper");
const cancelAddCategoryBtn = document.querySelector("#cancel-add-category-btn");


class CategoryView {
    constructor() {
        addNewCategoryBtn.addEventListener("click", (e) => this.addNewCategory(e));
        toggleAddCategoryBtn.addEventListener("click", (e) => this.toggleAddCategory(e));
        cancelAddCategoryBtn.addEventListener("click", (e) => this.cancelAddCategoryBtn(e));
        this.categories = [];
    }

    addNewCategory(e) {
        e.preventDefault();
        let title = categoryTitle.value;
        if (!title) return;

        Storage.saveCategories({title});
        this.categories = Storage.getAllCategories();
        //update DOM
        this.createCategoriesList();
        categoryTitle.value = '';
        categoryWrapper.classList.add("hidden");
        toggleAddCategoryBtn.classList.remove("hidden");
    }

    setApp() {
        this.categories = Storage.getAllCategories()
    }

    createCategoriesList() {
        let result = `<option class="bg-slate-500 text-slate-300" value="">Select a category</option>`;

        this.categories.forEach(element => {
            result += `<option class="bg-slate-500 text-slate-300" value="${element.id}">${element.title}</option>`
        })
        selectCategories.innerHTML = result;
    }

    toggleAddCategory(e) {
        e.preventDefault();
        toggleAddCategoryBtn.classList.add("hidden");
        categoryWrapper.classList.remove("hidden");
    }
    cancelAddCategoryBtn(e){
        e.preventDefault();
        toggleAddCategoryBtn.classList.remove("hidden");
        categoryWrapper.classList.add("hidden");
    }
}

export default new CategoryView();
