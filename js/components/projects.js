import { PROJECTS } from "./content/projects.js";
import { buildList, buildInlineList, buildElementWithClass } from "../util/builders.js";


Object.entries(PROJECTS).reverse().map(([key, item]) => {
    // console.log(item);

    // create caption
    let captionWrapper = buildCaption(item);

    // create thumbnail
    let thumbnailWrapper = buildImage(item.imageUrl, item.imageAlt);

    // create project description
    let descWrapper = buildDesc(item);

    // bundle thumbnail and description together
    let outermostWrapper = buildElementWithClass("row portfolio-item p-4 my-5 flex-wrap", "section");

    outermostWrapper.appendChild(captionWrapper);
    outermostWrapper.appendChild(thumbnailWrapper);
    outermostWrapper.appendChild(descWrapper);

    document.querySelector("#projects .content-wrapper")
        .appendChild(outermostWrapper);
})


function buildCaption(item) {

    let captionHeading = buildElementWithClass("portfolio-caption-heading");
    captionHeading.innerHTML = item.caption;

    let subheading = buildElementWithClass("portfolio-caption-subheading text-muted")
    subheading.innerHTML = item.subcaption;

    let githubLink = buildElementWithClass("d-inline-block my-3 text-link", "a");
    githubLink.setAttribute("href", item.githubUrl);
    githubLink.innerHTML = "Click to see this on GitHub";

    // create tech list
    let techWrapper = buildTech(item);

    let captionContainer = buildElementWithClass("portfolio-caption col-12 col-lg-8");
    captionContainer.appendChild(captionHeading);
    captionContainer.appendChild(subheading);
    captionContainer.appendChild(githubLink);
    captionContainer.appendChild(techWrapper);

    return captionContainer;
}


function buildImage(imageUrl, imageAlt) {

    let projectImg = buildElementWithClass("img-fluid", "img");
    projectImg.setAttribute("src", imageUrl);
    projectImg.setAttribute("alt", imageAlt)

    let thumbnailWrapper = buildElementWithClass("col-lg-4 col-12 project-image d-flex justify-content-center");
    thumbnailWrapper.appendChild(projectImg);

    return thumbnailWrapper;
}

function buildTech(project) {
    // append descriptions statements to project
    let techSubheading = buildElementWithClass("mt-5", "h5");
    techSubheading.innerHTML = "Technologies used";
    let tech = buildInlineList(project.tech, "tech p-0");

    let techContainer = buildElementWithClass("portfolio-content");
    techContainer.appendChild(techSubheading)
    techContainer.appendChild(tech);

    // let techWrapper = buildElementWithClass("col-lg-7 col-12");
    // techWrapper.appendChild(techContainer);

    return techContainer;

}


function buildDesc(project) {

    let descSubheading = buildElementWithClass("", "h5");
    descSubheading.innerHTML = "Description";
    let description = buildList(project.descriptions, "pb-2");

    let descWrapper = buildElementWithClass("col-12 project-description");
    descWrapper.appendChild(descSubheading);
    descWrapper.appendChild(description);;

    return descWrapper;
}