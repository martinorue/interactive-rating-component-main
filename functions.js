
document.addEventListener('DOMContentLoaded', function () {
    const ratingButtons = document.querySelectorAll('.rating-button');
    console.log(ratingButtons)
    ratingButtons.forEach(button => button.addEventListener('click', handleClick));

    function handleClick(event) {
        console.log('holis')
        ratingButtons.forEach(button => button.classList.remove('active'));
        event.target.classList.add('active');
    }

    const submitButton = document.querySelector('.rating-state__submit');
    submitButton.addEventListener('click', handleSubmitClick);

    function handleSubmitClick(event) {
        event.preventDefault();
        const ratingState = document.querySelector('.rating-state');
        ratingState.classList.add('hide');
        const thankState = document.querySelector('.hideable');
        thankState.classList.remove('hide');
    }

});

