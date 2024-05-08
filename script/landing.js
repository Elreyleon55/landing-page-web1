const button = document.querySelector( '#main-button' );
console.log("button", button)
const links  = document.querySelector( '#main-nav-list' );
console.log("links", links)

button.addEventListener( 'click', function() {
    links.classList.toggle( 'toggled' );
} );