import { logger } from "../middlewares/logger.js";
import { ProductService } from "../services/product.service.js";

/**
 *
 * @param {import("fastify").FastifyInstance} app
 */
export async function productController(app) {
  const productService = new ProductService();

  app.get("/", { onRequest: [logger] }, async (request, reply) => {
    const products = await productService.findAll();
    return { products };
  });

  app.post("/", { onRequest: [logger] }, async (request, reply) => {
    const product = request.body;
    const createdProduct = await productService.create(product);
    return { product: createdProduct };
  });

  app.put("/:id", { onRequest: [logger] }, async (request, reply) => {
    const product = request.body;
    const id = request.params.id;
    const updatedProduct = await productService.update(id, product);
    return { product: updatedProduct };
  });

  app.delete("/:id", { onRequest: [logger] }, async (request, reply) => {
    const id = request.params.id;
    await productService.delete(id);
    return { message: "Product deleted successfully" };
  });
}
