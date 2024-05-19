document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generateBtn');
    const clearBtn = document.getElementById('clearBtn');
    const fizzbuzzContainer = document.getElementById('fizzbuzzContainer');

    generateBtn.addEventListener('click', generateDivs);
    clearBtn.addEventListener('click', clearDivs);

    function generateDivs() {
        let startValue = parseInt(document.getElementById('startValue').value);
        let endValue = parseInt(document.getElementById('endValue').value);
        const fizzValue = parseInt(document.getElementById('fizzValue').value);
        const buzzValue = parseInt(document.getElementById('buzzValue').value);

        // Ensure startValue is not less than 1
        if (startValue < 1) {
            startValue = 1;
        }

        // Ensure endValue does not exceed 100
        if (endValue > 100) {
            endValue = 100;
        }

        fizzbuzzContainer.innerHTML = '';

        for (let i = startValue; i <= endValue; i++) {
            const div = document.createElement('div');
            div.id = `myid${i}`;
            if (i % fizzValue === 0 && i % buzzValue === 0) {
                div.className = 'fizzbuzz';
                div.innerText = 'FizzBuzz';
            } else if (i % fizzValue === 0) {
                div.className = 'fizz';
                div.innerText = 'Fizz';
            } else if (i % buzzValue === 0) {
                div.className = 'buzz';
                div.innerText = 'Buzz';
            } else {
                div.className = 'normal';
                div.innerText = i;
            }
            fizzbuzzContainer.appendChild(div);
        }
    }

    function clearDivs() {
        fizzbuzzContainer.innerHTML = '';
    }
});
