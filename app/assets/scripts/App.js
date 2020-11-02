import '../styles/styles.css'
import RevealOnScroll from './modules/reveal-on-scroll';
import toggleClassWithButton from './modules/moreButton';

if (module.hot) {
  module.hot.accept()
}

// document.querySelector(".more-projects__title-button").addEventListener("click", () => console.log("Pressed button"));

new RevealOnScroll();
new toggleClassWithButton();


if (module.hot) {
  module.hot.accept()
}