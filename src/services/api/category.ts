import { api } from "../configs";

class Category {
  async fetchCategories() {
    return await api.get("/category?requestBy=USER");
  }
}

export const categoryService = new Category();
