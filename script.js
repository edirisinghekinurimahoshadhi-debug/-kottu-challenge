const servingsInput = document.getElementById('servings');
const rotiSpan = document.getElementById('roti');
const cheeseSpan = document.getElementById('cheese');
const chickenSpan = document.getElementById('chicken');

const baseRoti = 2;
const baseCheese = 50;
const baseChicken = 100;

servingsInput.addEventListener('input', () => {
    const servings = parseInt(servingsInput.value) || 1;
    rotiSpan.textContent = baseRoti * servings;
    cheeseSpan.textContent = baseCheese * servings;
    chickenSpan.textContent = baseChicken * servings;
});
