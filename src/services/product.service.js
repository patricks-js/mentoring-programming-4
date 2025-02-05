import { Product } from "../models/product.js";

export class ProductService {
  #products = [];

  constructor() {
    this.#products = [
      new Product("1", "Biscoito", 4),
      new Product("2", "Batata", 8),
      new Product("3", "Frango", 7),
      new Product("4", "Abacaxi", 3),
      new Product("5", "Whey Protein - Growth", 120),
    ];
  }

  async findAll() {
    return this.#products;
  }

  // Input: 3
  async findById(id) {
    const index = this.#products.findIndex((p) => p.id === id);

    if (index === -1) {
      throw new Error("Product not found");
    }

    // Out: Biscoito
    return this.#products[index];
  }

  async create(product) {
    if (this.#products.find((p) => p.id === product.id)) {
      throw new Error("Product already exists");
    }

    this.#products.push(new Product(product.id, product.name, product.price));

    return this.#products[this.#products.length - 1];
  }

  async update(id, newValues) {
    const productToUpdate = await this.findById(id);
    const index = this.#products.findIndex((p) => p.id === id);

    if (!productToUpdate) {
      throw new Error("Product not found");
    }

    this.#products[index] = {
      ...productToUpdate,
      ...newValues,
    };

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
