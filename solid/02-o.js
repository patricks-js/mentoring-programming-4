// * Open-Closed Principle

// ❌ Bad way

class DiscountBad {
  getDiscount(type, amount) {
    if (type === "regular") return amount * 0.9;
    if (type === "vip") return amount * 0.8;
    if (type === "super") {
      return amount * 0.7;
    }

    return amount;
  }
}

// ✅ Good way

class Discount {
  apply(amount) {
    return amount;
  }
}

class RegularDiscount extends Discount {
  apply(amount) {
    return amount * 0.9;
  }
}

class VIPDiscount extends Discount {
  apply(amount) {
    return amount * 0.8;
  }
}

class SuperDiscount extends Discount {
  apply(amount) {
    return amount * 0.7;
  }
}

// Uso:
const discount = new VIPDiscount();
console.log(discount.apply(100)); // Saída: 80

const discount2 = new SuperDiscount();
console.log(discount2.apply(100)); // Saída: 70
