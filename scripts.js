let p = document.querySelector('p')
let input = document.querySelector('input')

const contacts = [
    { name: 'Rodolfo', number: '(19) 94343-3434' },
    { name: 'Paulo', number: '(19) 94343-3434' },
    { name: 'Aline', number: '(19) 94343-3434' },
    { name: 'Maria', number: '(19) 94343-3434' },
]

function limparForm() {
    document.getElementById('input-name').value = "";
    input.autofocus()
}

function search() {

    for (let i = 0; i < contacts.length; i++) {

        if (input.value.toLowerCase() === contacts[i].name.toLowerCase()) {
            p.innerHTML = `Contato encontrado Nome:${contacts[i].name} Tel:${contacts[i].number}`

            limparForm()
            break

        } else {

            p.innerHTML = "Contato não encontrado, tente novamente!";

            input.focus()
        }
    }
}

