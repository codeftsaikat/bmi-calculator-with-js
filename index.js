const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
        e.preventDefault();
        const height = parseInt(document.querySelector('#height').value);
        const weight = parseInt(document.querySelector('#weight').value);
        const result = document.querySelector('#result');

        if (height === '' || height < 0 || isNaN(height)) {
                result.innerHTML = `<hr/> Please give a valid height number`;
        } else if (weight === '' || weight < 0 || isNaN(weight)) {
                result.innerHTML = `<hr/> Please give a valid weight number`;
        } else {
                const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
                result.innerHTML = `<hr/> <span>${bmi}</span>`
                if (bmi < 18.6) {
                        result.innerHTML = `<hr/> Under weight: ${bmi}`
                } else if (bmi > 18.6 || bmi < 24.9) {
                        result.innerHTML = `<hr/> Normal range: ${bmi}`
                }
                if (bmi > 24.9) {
                        result.innerHTML = `<hr/> Overweight: ${bmi}`
                }
        }
});