import "./css/index.css"

//buscando os elementos para modificações
const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")

function setCardType(type) {
    //array de cores
    const colors = {
        visa: ["#436D99", "#2D57F2"],
        mastercard: ["#2D57F2", "#C69347"],
        default: ["black", "gray"],
    }

    //alterando as cores dos cartões e logos
    ccBgColor01.setAttribute("fill", colors[type][0])
    ccBgColor02.setAttribute("fill", colors[type][1])
    ccLogo.setAttribute("src", `cc-${type}.svg`)
}

//definindo a função como global
globalThis.setCardType = setCardType
