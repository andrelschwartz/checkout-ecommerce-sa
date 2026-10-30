// ===== SEÇÃO 1: CARRINHO (laços de repetição) =====

function calcularSubtotal(itens) {
    let subtotal = 0;
  
    for (const item of itens) {
      subtotal += item.preco * item.quantidade;
    }
  
    return subtotal;
}
  
  function contarItens(itens) {
    // TODO
  }
  
  
  // ===== SEÇÃO 2: CUPOM (estruturas condicionais) =====
  
  function aplicarCupom(subtotal, codigo) {
    // TODO
  }
  
  
  // ===== SEÇÃO 3: CHECKOUT (integração) =====
  
  function finalizarCompra(itens, codigoCupom) {
    return { subtotal: 0, desconto: 0, total: 0 }; // TODO: integrar carrinho e cupom
  }
  
  
  // ===== SEÇÃO 4: TESTES =====
  
  const itens = [
    { nome: "Camiseta", preco: 50, quantidade: 2 },
    { nome: "Tênis", preco: 150, quantidade: 1 }
  ];
  console.log(finalizarCompra(itens, "DESC10"));