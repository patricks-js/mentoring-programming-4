class Pedido {
  constructor(comida) {
    this.comida = comida;
  }

  adicionarAoPedido(fn) {
    return new Pedido(fn(this.comida));
  }

  pegarComida(fn) {
    return this.comida;
  }

  inspect() {
    console.log(`Pedido(${this.comida})`);
    return "";
  }
}

const pedidoPizza = new Pedido("Pizza de Calabresa")
  .adicionarAoPedido((x) => `${x} com coca-cola`)
  .adicionarAoPedido((x) => `${x} e com batata`);

// console.log(pedidoPizza);

const PedidoMonad = (comida) => ({
  map: (fn) => PedidoMonad(fn(comida)),
  flatMap: (fn) => fn(comida), // Desfaz a estrutura extra!
  inspect: () => `Pedido(${comida})`,
});

const resultadoMonad = PedidoMonad("Hambúrguer")
  .flatMap((x) => PedidoMonad(`${x} com batata`)) // Pedido("Hambúrguer com batata")
  .flatMap((x) => PedidoMonad(`${x} + refrigerante`)); // Pedido("Hambúrguer com batata + refrigerante")

console.log(resultadoMonad.inspect()); // Pedido("Hambúrguer com batata + refrigerante")
