window.onload = function(){
    const [...hobbyCheckboxes] = document.querySelectorAll('input[name="hobby"]');
    const selectedHobbyEl = document.querySelector('#selectedHobby');
    hobbyCheckboxes.forEach(checkbox=>{
        checkbox.addEventListener('change', function(){
            const checkedHobbies = hobbyCheckboxes.filter(i=>i.checked).map(i=>i.value);
            selectedHobbyEl.textContent = `Вибранно такі хоббі ${checkedHobbies.join(', ')}`;
        });

    });
    const [...radioButtonsEl] = document.querySelectorAll('input[name="raiting"]');
    const resultEl = document.querySelector('#ratingResult');
    radioButtonsEl.forEach(radioEl =>{
        radioEl.addEventListener('change', function(){
            resultEl.textContent = `Рейтинг товару за вашою оцінкою ${this.value}`;
        });
    })
}