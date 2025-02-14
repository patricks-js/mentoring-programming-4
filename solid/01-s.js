// * Single Responsibility Principle

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// ❌ Bad way

class OrderBad {
  constructor(customerName, items) {
    this.customerName = customerName;
    this.items = items;
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price, 0); // Total price of the all products
  }

  save() {
    OrderRepository.save(this);
  }

  printInvoice() {
    // ? Nota fiscal
    InvoicePrinter.print(this);
  }
}

// ✅ Good way

class ReplacementOrder {
  constructor(customerName, item) {
    this.customerName = customerName;
    this.items = item;
  }
}

class Order {
  constructor(customerName, items) {
    this.customerName = customerName;
    this.items = items;
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
class InvoicePrinter {
  static print(order) {
    console.log(
      `Invoice for ${order.customerName}: ${JSON.stringify(order.items)}`,
    );
  }
}

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
class OrderRepository {
  static save(order) {
    console.log("Saving order to database...");
  }

  static getByEmail(email) {
    console.log("Returning user by email...");
  }
}

const order = new Order("John Doe", [
  new Product("Product 1", 10),
  new Product("Product 2", 20),
]);
console.log(order.getTotal());
InvoicePrinter.print(order);
OrderRepository.save(order);

const replacement = new ReplacementOrder(
  "John Doe",
  new Product("Product 1", 10),
);
InvoicePrinter.print(replacement);

const productSaved = OrderRepository.save(replacement);

if (!productSaved) {
  console.log("Error saving product!");
}

// Service
const emailTaken = OrderRepository.getByEmail("john@doe.com");

if (emailTaken) {
  console.log("Email already taken!");
}

function orderFn(order) {
  const total = order.getTotal();
  const invoice = InvoicePrinter.print(order);
  const saved = OrderRepository.save(order);
}

function processOrder(order) {
  return order.getTotal();
}

function printInvoice(order) {
  return InvoicePrinter.print(order);
}

function saveOrder(order) {
  return OrderRepository.save(order);
}
