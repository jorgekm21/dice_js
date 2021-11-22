button_dice.addEventListener("click", () => {
    let resultado = Math.round(Math.random() * (6 - 1) + 1)
    dice.innerText = resultado
})