window.onload = () => {
    const button = document.querySelector("button")
    
    button.addEventListener("click", (event) => {
    
    const paragrafo = document.querySelector("p")
    
    paragrafo.remove();

    })


    const form = document.querySelector("form");
    form.addEventListener("submit", (event) =>{
        event.preventDefault();
        console.log(event);
    })
    
    
};