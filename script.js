function openForm(filme) {
    document.getElementById('filmeNome').textContent = filme;
    document.getElementById('formModal').style.display = 'block';
}

function closeForm() {
    document.getElementById('formModal').style.display = 'none';
}

function handleSubmit(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    alert(`Compra confirmada para ${nome}!\nE-mail: ${email}`);
    closeForm();
}
