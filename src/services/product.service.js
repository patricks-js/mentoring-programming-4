import { Product } from "../models/product.js";

export class ProductService {
  #products = [];

  async findAll() {
    return this.#products;
  }

  async create(product) {
    if (this.#products.find((p) => p.id === product.id)) {
      throw new Error("Product already exists");
    }

    this.#products.push(new Product(product.id, product.name, product.price));

    return this.#products[this.#products.length - 1];
  }

  async update(id, product) {
    const index = this.#products.findIndex((p) => p.id === id);

    if (index === -1) {
      throw new Error("Product not found");
    }

    this.#products[index] = new Product(
      product.id,
      product.name,
      product.price,
    );

    return this.#products[index];
  }

  async delete(id) {
    const index = this.#products.findIndex((p) => p.id === id);

    if (index === -1) {
      throw new Error("Product not found");
    }

    this.#products.splice(index, 1);
  }
}
