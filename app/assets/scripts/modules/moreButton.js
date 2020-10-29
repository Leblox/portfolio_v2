export default class toggleClassWithButton {
    constructor() {
        this.button = document.querySelector(".more-projects__title-button");
        this.targetedElement = document.querySelector(".more-projects__project-list");
        this.addedClass = 'more-projects__project-list--button-is-pressed';
        this.addedClassButton = "more-projects__title-button--pressed";
        this.events();
    }

    events() {
        // Listen for click
        this.button.addEventListener("click", () => this.toggleTheClass());
    }

    toggleTheClass() {
        this.targetedElement.classList.toggle(this.addedClass);
        this.button.classList.toggle(this.addedClassButton);
    }
}