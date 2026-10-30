// ===== SEÇÃO 1: CARRINHO (laços de repetição) =====

function calcularSubtotal(itens) {
    // TODO
  }
  
  function contarItens(itens) {
    // TODO
  }
  
  
  // ===== SEÇÃO 2: CUPOM (estruturas condicionais) =====
  
  function aplicarCupom(subtotal, codigo) {
    let desconto = 0;
  
    if (codigo === "DESC10") {
      desconto = subtotal * 0.10;
    } else if (codigo === "DESC20" && subtotal >= 200) {
      desconto = subtotal * 0.20;
    } else if (codigo === "FRETEGRATIS") {
      desconto = 15;
    }
  
    return Math.max(0, subtotal - desconto);
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