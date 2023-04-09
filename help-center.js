const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeaders =>{
    accordionItemHeaders.addEventListener("click", event =>{
        accordionItemHeaders.classList.toggle("active");
        const accordionItemBody = accordionItemHeaders.nextElementSibling;
        if(accordionItemHeaders.classList.contains("active")){
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else{
            accordionItemBody.style.maxHeight = 0;
        }
    })
})