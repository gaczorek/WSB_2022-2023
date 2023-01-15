const addBtn = document.querySelector('button.add');
const removeBtn = document.querySelector('button.remove');
const waterInput = document.querySelector('input');

let glassesOfWater = 0; 

function addGlassOfWater(){
    glassesOfWater += 250;
    waterInput.value = glassesOfWater + 'ml'
}

function removeGlassOfWater() {
    if(glassesOfWater > 0 ) {
    glassesOfWater -= 250;
    waterInput.value = glassesOfWater + 'ml'
    }
}

addBtn.addEventListener('click', addGlassOfWater)

removeBtn.addEventListener('click', removeGlassOfWater)