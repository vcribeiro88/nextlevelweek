function populateStates(){
    const stateSelect = document.querySelector("select[name=state]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(res => res.json())
        .then(states => {
            for(const state of states){
                stateSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }
        })
}

populateStates()

function getCities(event){
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=uf]")
    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = `<option value="">Selecione a cidade</option>`
    citySelect.disabled = true

    fetch(url)
        .then(res => res.json())
        .then(cities => {
            for(const city of cities){
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }

            citySelect.disabled = false
        })
}

document
    .querySelector("select[name = state]")
    .addEventListener("change", getCities)

// Itens de coleta

const itemsToCollect = document.querySelectorAll(".items-grid li")

for(const item of itemsToCollect){
    item.addEventListener("click", handleSelectedItem)
}

//Declara uma variável para o valor do input
const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(event){
    // Pega o target do evento de
    const itemLi = event.target
    // Adcionar ou remover uma classe com javascript
    itemLi.classList.toggle("selected")
    const itemId = itemLi.dataset.id

    // Verificar se existe itens selecionados
    // Se sim, pegar os selecionados
    const alredySelected = selectedItems.findIndex(item => {
        return item == itemId
    })

    // Se já estiver selecionado, tirar da seleção
    // Se não estiver selecionado, adicionar a seleção
    if(alredySelected >= 0){
        //Remover
        const filterItems = selectedItems.filter(item => {
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })

        selectedItems = filterItems
    } else{
        selectedItems.push(itemId)
    }

    // Atualizar o campo escondido com os itens selecionados
    collectedItems.value = selectedItems
}