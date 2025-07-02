const API_URL = 'http://localhost:3000/api/v1/transacoes';

document.addEventListener('DOMContentLoaded', () => {
    carregarTransacoes();
});

async function carregarTransacoes() {
    try {
        const res = await fetch(API_URL);
        if (!res.ok) {
            throw new Error(`Erro na requisição: ${res.status} ${res.statusText}`);
        }

        const transacoes = await res.json();
        preencherCards(transacoes);
        preencherTabela(transacoes);
    } catch (err) {
        alert('Erro ao carregar transações. Verifique o console para detalhes.');
        console.error('Erro:', err);
    }
}

function preencherCards(transacoes) {
    const container = document.querySelector('.cards-container');
    if (!container) return;

    container.innerHTML = '';

    let totalEntrada = 0;
    let totalSaida = 0;
    let ultimaEntrada = null;
    let ultimaSaida = null;

    transacoes.forEach(tx => {
        const dataTx = new Date(tx.data);
        if (tx.tipo === 'entrada') {
            totalEntrada += Number(tx.preco);
            if (!ultimaEntrada || dataTx > ultimaEntrada) {
                ultimaEntrada = dataTx;
            }
        } else if (tx.tipo === 'saida') {
            totalSaida += Number(tx.preco);
            if (!ultimaSaida || dataTx > ultimaSaida) {
                ultimaSaida = dataTx;
            }
        }
    });

    const totalGeral = totalEntrada - totalSaida;

    function formatarData(date) {
        if (!date) return 'Nenhuma';
        const dia = String(date.getDate()).padStart(2, '0');
        const mes = String(date.getMonth() + 1).padStart(2, '0');
        const ano = date.getFullYear();
        return `${dia}/${mes}/${ano}`;
    }

    const cardEntrada = document.createElement('div');
    cardEntrada.classList.add('card', 'entrada');
    cardEntrada.innerHTML = `
        <div class="card-header">
            <h3>Total de Entradas</h3>
            <i class="fa-regular fa-circle-up icon-entrada"></i>
        </div>
        <div class="price">R$ ${totalEntrada.toFixed(2)}</div>
        <div class="date">Última entrada: ${formatarData(ultimaEntrada)}</div>
    `;

    const cardSaida = document.createElement('div');
    cardSaida.classList.add('card', 'saida');
    cardSaida.innerHTML = `
        <div class="card-header">
            <h3>Total de Saídas</h3>
            <i class="fa-regular fa-circle-down icon-saida"></i>
        </div>
        <div class="price">R$ ${totalSaida.toFixed(2)}</div>
        <div class="date">Última saída: ${formatarData(ultimaSaida)}</div>
    `;

    const cardTotal = document.createElement('div');
    cardTotal.classList.add('card', 'total');
    cardTotal.innerHTML = `
        <div class="card-header">
            <h3>Total</h3>
            <i class="fa-solid fa-dollar-sign"></i>
        </div>
        <div class="price">R$ ${totalGeral.toFixed(2)}</div>
    `;

    container.appendChild(cardEntrada);
    container.appendChild(cardSaida);
    container.appendChild(cardTotal);
}

function preencherTabela(transacoes) {
    const tbody = document.getElementById('transacoes-tbody');
    if (!tbody) return;

    tbody.innerHTML = '';

    transacoes.forEach(tx => {
        const precoNum = Number(tx.preco).toFixed(2);
        const dataObj = new Date(tx.data);
        const dia = String(dataObj.getDate()).padStart(2, '0');
        const mes = String(dataObj.getMonth() + 1).padStart(2, '0');
        const ano = dataObj.getFullYear();
        const dataFormatada = `${dia}/${mes}/${ano}`;

        const tr = document.createElement('tr');

        const tdTitulo = document.createElement('td');
        tdTitulo.className = 'title';
        tdTitulo.textContent = tx.titulo;
        tr.appendChild(tdTitulo);

        const tdPreco = document.createElement('td');
        tdPreco.className = 'price ' + (tx.tipo === 'entrada' ? 'positive' : 'negative');
        tdPreco.textContent = `R$ ${precoNum.replace('.', ',')}`;
        tr.appendChild(tdPreco);

        const tdCat = document.createElement('td');
        tdCat.className = 'category';
        tdCat.textContent = tx.categoria;
        tr.appendChild(tdCat);

        const tdData = document.createElement('td');
        tdData.className = 'date';
        tdData.textContent = dataFormatada;
        tr.appendChild(tdData);

        tbody.appendChild(tr);
    });
}