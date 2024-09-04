const dropMenu = Array.from(document.getElementsByClassName("drop-menu"))
const dropList = Array.from(document.getElementsByClassName("drop-list"))

function keepingStyle(e, state){
    e.classList.toggle("drop-menu--hover", state)
}

function start() {
    let drop = [dropList, dropMenu]
    
    drop.forEach((item) => {
        item.forEach((element, index) => {
            element.addEventListener('mouseenter', () => {
                keepingStyle(dropMenu[index], true)
            })
            element.addEventListener('mouseleave', () => {
                keepingStyle(dropMenu[index], false)
            })
        });
    })
}

start()