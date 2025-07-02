const overlay = document.getElementById('modal-overlay');
const btnOpen = document.getElementById('btn-open-modal');
const btnClose = document.getElementById('btn-close-modal');
const btnEntrada = document.getElementById('btn-entrada');
const btnSaida = document.getElementById('btn-saida');
const form = document.getElementById('form-transacao');

btnOpen.addEventListener('click', () => {
  overlay.classList.remove('hidden');
});

btnClose.addEventListener('click', () => {
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', e => {
  if (e.target === overlay) overlay.classList.add('hidden');
});

btnEntrada.addEventListener('click', () => {
  btnEntrada.classList.add('selected');
  btnSaida.classList.remove('selected');
});

btnSaida.addEventListener('click', () => {
  btnSaida.classList.add('selected');
  btnEntrada.classList.remove('selected');
});

form.addEventListener('submit', async e => {
  e.preventDefault();
  const titulo = form.titulo.value;
  const preco = parseFloat(form.preco.value);
  const categoria = form.categoria.value;
  const tipo = btnEntrada.classList.contains('selected') ? 'entrada' : 'saida';
  const data = new Date().toISOString();

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ titulo, preco, categoria, data, tipo })
    });
    if (!res.ok) throw new Error(`Erro ${res.status}`);
    overlay.classList.add('hidden');
    carregarTransacoes();
    form.reset();
    btnEntrada.classList.add('selected');
    btnSaida.classList.remove('selected');
  } catch (err) {
    console.error('Erro na criação:', err);
  }
});