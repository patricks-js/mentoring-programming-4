import fastify from "fastify";
import { productController } from "./controllers/product.controller.js";

const app = fastify();

app.register(productController, { prefix: "/products" });

export default app;
