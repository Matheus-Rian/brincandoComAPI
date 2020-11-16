const cep = document.querySelector('#cep')

const showData = result => {
    for(const campo in result){
        if(document.querySelector(`#${campo}`)){
            document.querySelector(`#${campo}`).value = result[campo]
        }
    }
}

//Evento blur: Quando o input não tiver mais o foco, ele vai capturar o valor.
cep.addEventListener('blur', (e) => {
    let search = cep.value.replace('-', '')
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response => {response.json()
        .then(data => showData(data))
    })
    .catch(e => console.log(`Deu erro: ${e}, ${message}`))
    
})