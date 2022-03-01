const header = document.querySelector("header");
const sectionOne = document.querySelector(".front-page-bio");

const sectionOneOptions = {
    rootMargin: "-160px"
};

const sectionOneObserver = new IntersectionObserver(function(
    entries,
    sectionOneObserver
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.classList.add("bg-gray-900");
        } else {
            header.classList.remove("bg-gray-900");
        }
    });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

