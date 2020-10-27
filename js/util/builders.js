function buildList(content, liClass = "", ulClass = "") {
    let ul = buildElementWithClass(ulClass, "ul");
    content.forEach(desc => {
        let li = buildElementWithClass(liClass, "li");
        li.innerHTML = desc;
        ul.appendChild(li);
    });

    return ul;
}

function buildInlineList(content, ulClass = "") {

    let ul = buildElementWithClass(ulClass, "ul");

    Object.entries(content).forEach(([key, item]) => {

        item.forEach(i => {
            let li = buildElementWithClass(key, "span");
            li.innerHTML = i;
            ul.appendChild(li);
        });
    });

    return ul;

}

function buildElementWithClass(classlist, element = "div") {
    let container = document.createElement(element);
    container.setAttribute("class", classlist);

    return container;
}

export { buildList, buildInlineList, buildElementWithClass };