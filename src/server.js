import app from "./app.js";
import { env } from "./config/env.js";

const port = env.PORT || 3000;

// app
//   .listen({
//     port,
//   })
//   .then(() => console.log("Server is running"))
//   .catch((err) => console.error(err));

try {
  await app.listen({ port });
  console.log(`Server is running on port ${port}`);
} catch (err) {
  console.error(err);
}
