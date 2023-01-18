
document.addEventListener('DOMContentLoaded', function () {
    const ratingButtons = document.querySelectorAll('.rating-button');
    ratingButtons.forEach(button => button.addEventListener('click', handleClick));

    const form = document.querySelector('.rating-state__form');
    const submitButton = document.querySelector(".rating-state__submit");
    
    submitButton.disabled = true;

    function handleClick(event) {
        if (event.target.classList.contains("active")) {
            event.target.classList.remove("active");
        } else {
            ratingButtons.forEach(button => button.classList.remove("active"));
            event.target.classList.add("active");
        }

        const radioButtons = document.querySelectorAll("input[type='radio']");
        let isActive = false;
        for (let i = 0; i < radioButtons.length; i++) {
            if (radioButtons[i].classList.contains('active')) {
                isActive = true;
            }
        }
        if (!isActive) {
            submitButton.disabled = true;
        } else {
            submitButton.disabled = false;
        }

    }


    form.addEventListener('submit', function (event) {

        event.preventDefault();
        const selectedRadioButton = document.querySelector('input[name="rating"]:checked');

        const selectedValue = selectedRadioButton.value;


        const span = document.querySelector('.thanks-state__rating');
        span.innerHTML = selectedValue;

        const ratingState = document.querySelector('.rating-state');
        ratingState.classList.add('hide');
        const thankState = document.querySelector('.hideable');
        thankState.classList.remove('hide');

    });
});
