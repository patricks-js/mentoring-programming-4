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

  app.get("/:productId", { onResponse: [logger] }, async (request, reply) => {
    const productId = request.params.productId;

    try {
      const product = await productService.findById(productId);
      return { product };
    } catch (err) {
      if (err.message === "Product not found") {
        return reply.status(404).send();
      }

      console.log(err.message);
    }
  });

  app.post("/", { onRequest: [logger] }, async (request, reply) => {
    const product = request.body;
    const createdProduct = await productService.create(product);
    return reply.status(201).send({ product: createdProduct });
  });

  app.put("/:productId", { onRequest: [logger] }, async (request, reply) => {
    const product = request.body;
    const id = request.params.productId;
    const updatedProduct = await productService.update(id, product);
    return { product: updatedProduct };
  });

  app.delete("/:productId", { onRequest: [logger] }, async (request, reply) => {
    const id = request.params.productId;
    await productService.delete(id);
    return { message: "Product deleted successfully" };
  });
}
