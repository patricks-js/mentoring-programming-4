import fastify from "fastify";
import { productController } from "./controllers/product.controller.js";

// * function sum(a, b) // Hoisted

const app = fastify();

app.register(productController, { prefix: "/products" });

export default app;
