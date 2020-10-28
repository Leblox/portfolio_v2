import '../styles/styles.css'
import RevealOnScroll from './modules/RevealOnScroll'


new RevealOnScroll(document.querySelectorAll(".projects__item"), 75);

if (module.hot) {
  module.hot.accept()
}