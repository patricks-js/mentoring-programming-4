import supertest from "supertest";
import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import app from "../src/app";

describe("Product Controller", () => {
  beforeAll(async () => {
    await app.ready();
  });

  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  afterAll(async () => {
    await app.close();
  });

  describe("Find All Products", () => {
    it("should return an array of products", async () => {
      const request = await supertest(app.server).get("/products");
      vi.setSystemTime(new Date(2024, 6, 25));

      console.log(new Date());

      expect(request.statusCode).toEqual(200);
      expect(request.body).toEqual({
        products: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
          }),
        ]),
      });
    });

    it("should return 404 if a product not found", async () => {
      const request = await supertest(app.server).get("/products/6");

      expect(request.statusCode).toEqual(404);
    });

    it("should return 404 if a product not found", async () => {
      const request = await supertest(app.server).post("/products").send({
        id: "6",
        name: "Esponja",
        price: 13,
      });

      expect(request.statusCode).toEqual(201);
      expect(request.body).toEqual({
        product: expect.objectContaining({
          id: expect.any(String),
        }),
      });
    });
  });
});
