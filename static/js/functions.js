function toggleDeprecatedEntitiesContainer(e) {
    const button = e;
    const deprecatedContainer = button.parentNode.nextSibling.nextSibling;

    if(deprecatedContainer.classList.contains('active')){
    deprecatedContainer.classList.remove('active');
    button.innerText = "Show deprecated fields";
    }else{
        deprecatedContainer.classList.add('active');
        button.innerText = "Hide deprecated fields";
    }
}