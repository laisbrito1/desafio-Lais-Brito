class CaixaDaLanchonete {
    cardapio = {
        cafe: { descricao: 'cafe', valor: 3.00, quantidade: 0, },
        chantily: { descricao: 'chantily', valor: 1.50, quantidade: 0, },
        suco: { descricao: 'Suco Natural', valor: 6.20, quantidade: 0, },
        sanduiche: { descricao: 'sanduiche', valor: 6.50, quantidade: 0, },
        queijo: { descricao: 'queijo', valor: 2.00, quantidade: 0, },
        salgado: { descricao: 'Salgado', valor: 7.25, quantidade: 0,  },
        combo1: { descricao: '1 Suco e 1 sanduiche', valor: 9.50, quantidade: 0,},
        combo2: { descricao: '1 cafe e 1 sanduiche', valor: 7.50, quantidade: 0, }
    };

    calcularValorDaCompra(metodoDePagamento, itens) {
        if (!['debito', 'credito', 'dinheiro'].includes(metodoDePagamento)) {
            return "Forma de pagamento inválida!";
        }

        if (itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        }
    }}
export { CaixaDaLanchonete };



