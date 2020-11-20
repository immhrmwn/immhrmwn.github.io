const section = document.getElementsByTagName('section')[0]
const display = document.querySelector('.display')
const button = document.querySelectorAll('.btn')
const destination = document.getElementById('destination')

section.addEventListener('mouseover', function(e) {
    if(e.target.className == 'btn') {
        display.src = e.target.src;

        button.forEach(function(btn) {
            btn.className = 'btn'
        })

        e.target.classList.add('active');

        if(e.target.id == 'patung'){
            destination.innerHTML = 'PATUNG'
        } else if (e.target.id == 'bali'){
            destination.innerHTML = 'BALI'
        } else if (e.target.id == 'kelapa'){
            destination.innerHTML = 'WONDERFUL KELAPA'
        } else if (e.target.id == 'raja'){
            destination.innerHTML = 'RAJA AMPAT'
        } else if (e.target.id == 'ampat'){
            destination.innerHTML = 'RAJA AMPAT LAGI'
        } else if (e.target.id == 'mantau'){
            destination.innerHTML = 'MANCING MANIA'
        }
    }

})