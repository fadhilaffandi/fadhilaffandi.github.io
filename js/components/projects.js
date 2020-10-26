import { PROJECTS } from "./content/projects.js";


Object.entries(PROJECTS).reverse().map(([key, item]) => {
    console.log(item);

    // create caption
    let captionContainer = buildCaption(item.caption, item.subcaption, item.githubUrl);

    // create thumbnail
    let thumbnailWrapper = buildImage(item.imageUrl);

    // create project description
    let descWrapper = buildDesc(item);

    // bundle thumbnail and description together
    let outermostWrapper = buildElementWithClass("row portfolio-item p-0 my-5 flex-wrap", "section");

    outermostWrapper.appendChild(captionContainer);
    outermostWrapper.appendChild(thumbnailWrapper);
    outermostWrapper.appendChild(descWrapper);

    document.querySelector("#projects .content-wrapper")
        .appendChild(outermostWrapper);
})


function buildImage(imageUrl) {

    let projectImg = buildElementWithClass("img-fluid mx-3 mb-3", "img");
    projectImg.setAttribute("src", imageUrl);

    let thumbnailWrapper = buildElementWithClass("col-lg-4 col-12 project-image d-flex justify-content-center");
    thumbnailWrapper.appendChild(projectImg);

    return thumbnailWrapper;
}


function buildDesc(project) {

    // append descriptions statements to project
    let techSubheading = buildElementWithClass("", "h5");
    techSubheading.innerHTML = "Technologies used";
    let tech = buildInlineList(project.tech, "tech p-0");

    let descSubheading = buildElementWithClass("", "h5");
    descSubheading.innerHTML = "Description";
    let description = buildList(project.descriptions, "pb-2");

    let descContainer = buildElementWithClass("portfolio-content");

    descContainer.appendChild(techSubheading);
    descContainer.appendChild(tech);

    descContainer.appendChild(descSubheading);
    descContainer.appendChild(description);


    let descWrapper = buildElementWithClass("col-lg-8 col-12");
    descWrapper.appendChild(descContainer);

    return descWrapper;
}


function buildCaption(caption, subcaption, githubUrl) {

    let captionHeading = buildElementWithClass("portfolio-caption-heading");
    captionHeading.innerHTML = caption;

    let subheading = buildElementWithClass("portfolio-caption-subheading text-muted")
    subheading.innerHTML = subcaption;

    let githubLink = buildElementWithClass("d-block mt-3", "a");
    githubLink.setAttribute("href", githubUrl);
    githubLink.innerHTML = "Click to see this on GitHub";

    let captionContainer = buildElementWithClass(["portfolio-caption col-12"]);
    captionContainer.appendChild(captionHeading);
    captionContainer.appendChild(subheading);
    captionContainer.appendChild(githubLink);

    return captionContainer;
}


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
            let li = buildElementWithClass(key, "li");
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