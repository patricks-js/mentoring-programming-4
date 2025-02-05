import { describe, expect, it, vi } from "vitest";
import { ProductService } from "../src/services/product.service";

describe("Product Service", () => {
  // beforeEach();

  it("should delete a product by id", () => {
    const productService = new ProductService();
    // spy
    const spy = vi.spyOn(productService, "delete");

    productService.delete("1");
    productService.delete("2");

    expect(spy).toBeCalledTimes(2);
    expect(spy).toBeCalledWith("3");

    console.log(`DELETE NAME MOCKED => ${spy.getMockName()}`);

    // fn()
    productService.delete = vi.fn().mockResolvedValue(null);
    expect(productService.delete("3")).resolves.toBe(null);
    expect(productService.delete("3")).resolves.toBe(null);
  });
});
