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

        //// CALCULO DOS PEDIDOS//////
        const pedidos = {};
        let total = 0;

        for (const item of itens) {
            const [tipo, quantidade] = item.split(',');

            if (!this.cardapio[tipo]) {
                return "Item inválido!";
            }

            if (!pedidos[tipo]) {
                pedidos[tipo] = 0;
            }

            pedidos[tipo] += parseInt(quantidade);

            if (tipo !== 'chantily' && tipo !== 'queijo') {
                total += this.cardapio[tipo].valor * parseInt(quantidade);
            }
        }
        /////// REGRA EXTRAS////
        switch (true) {    
            case pedidos['queijo'] && !pedidos['sanduiche'] || pedidos['chantily']&& !pedidos['cafe']:
                return "Item extra não pode ser pedido sem o principal";
            default:
                total = Object.keys(pedidos).reduce((conta, tipo) => {
                    return conta + this.cardapio[tipo].valor * pedidos[tipo];
                }, 0);
        
                if (total === 0) {
                    return "Quantidade inválida!";
                }
                break;
        }
        //////////PAGAMENTO//////////////
        let totalpagamento = 0; //valor após os acrescimos e descontos

        switch (metodoDePagamento) {
            case 'dinheiro':
                const desconto = 5/100 * total;
                totalpagamento = total - desconto;

                break;
        
            case 'credito':
                const acrescimo = 3/100 * total;
                totalpagamento = total + acrescimo;
                break;
        
            case 'debito':
                totalpagamento = total
                break;
        
            default:
                return 'Forma de pagamento inválida!';
        }
        
        return `R$ ${totalpagamento.toFixed(2).replace('.', ',')}`;
    }
}

export { CaixaDaLanchonete };



