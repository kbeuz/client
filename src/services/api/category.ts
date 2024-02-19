import { api } from "../configs";

class Category {
  async fetchCategories() {
    return await api.get("/category");
  }
}

export const categoryService = new Category();
