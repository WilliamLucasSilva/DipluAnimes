const sections = Array.from(document.getElementsByTagName('section'))
const navButtons = Array.from(document.getElementsByClassName('h-nav-children'))
navButtons.push(Array.from(document.getElementsByClassName('h-logo'))[0])
const iTypes = ['t-new', 't-recommendation', 't-review', 'art-section']
const types = new Map()

for(let i in iTypes){
    types.set(i, iTypes[i])
}

for(let i in navButtons){
    navButtons[i].addEventListener("click", () => {
        applyHidden(types.get(i))
    })
}


function applyHidden(type) {
    for(let i of sections){
        i.style.display = 'flex'
    }
    for(let i of selectSection(type)){
        i.style.display = 'none'
    }
}

function selectSection(type) {
    let selected = sections.filter(i => Array.from(i.classList).includes(type))
    selected.push(sections[0])

    let hidden = sections.filter(i => !selected.includes(i))
    return hidden
}