// ===== SEÇÃO 1: CARRINHO (laços de repetição) =====

function calcularSubtotal(itens) {
    let subtotal = 0;
  
    for (let i = 0; i < itens.length; i++) {
      subtotal += itens[i].preco * itens[i].quantidade;
    }
  
    return Number(subtotal.toFixed(2));
  }
  
  function contarItens(itens) {
    let quantidadeTotal = 0;
  
    for (const item of itens) {
      quantidadeTotal += item.quantidade;
    }
  
    return quantidadeTotal;
  }
  
  
  // ===== SEÇÃO 2: CUPOM (estruturas condicionais) =====
  
  function aplicarCupom(subtotal, codigo) {
    let desconto = 0;
  
    if (typeof subtotal !== "number" ||
        !Number.isFinite(subtotal) || subtotal < 0) {
      return 0;
    }
  
    switch (codigo) {
      case "DESC10":
        desconto = subtotal * 0.10;
        break;
  
      case "DESC20":
        if (subtotal >= 200) {
          desconto = subtotal * 0.20;
        }
        break;
  
      case "FRETEGRATIS":
        desconto = 15;
        break;
  
      default:
        desconto = 0;
    }
  
    // O desconto nunca pode ser negativo
    // nem maior que o subtotal.
    desconto = Math.max(0, Math.min(desconto, subtotal));
  
    return Number(desconto.toFixed(2));
  }
  
  
  // ===== SEÇÃO 3: CHECKOUT (integração) =====
  
  function finalizarCompra(itens, codigoCupom) {
    const subtotal = calcularSubtotal(itens);
    const desconto = aplicarCupom(subtotal, codigoCupom);
    const total = Number((subtotal - desconto).toFixed(2));
  
    return {
      subtotal: subtotal,
      desconto: desconto,
      total: total
    };
  }
  
  
  // ===== SEÇÃO 4: TESTES =====
  
  const itens = [
    { nome: "Camiseta", preco: 50, quantidade: 2 },
    { nome: "Tênis", preco: 150, quantidade: 1 }
  ];
  
  console.log("Quantidade de unidades:", contarItens(itens));
  console.log("Compra com DESC10:", finalizarCompra(itens, "DESC10"));
  console.log("Compra com DESC20:", finalizarCompra(itens, "DESC20"));
  console.log("Compra com FRETEGRATIS:", finalizarCompra(itens, "FRETEGRATIS"));
  console.log("Compra com cupom inválido:", finalizarCompra(itens, "INVALIDO"));