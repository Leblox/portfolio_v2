// Adapted from https://cssanimation.rocks/scroll-animations/

class RevealOnScroll {
    constructor() {
        console.log("started reveal on scroll");
        this.init();
    }

    init() {
        let scroll = window.requestAnimationFrame || function(callback) {window.setTimeout(callback, 1000/60)};
        
        var elementsToShow = document.querySelectorAll('.show-on-scroll');
        
        function loop() {
            elementsToShow.forEach(function(element) {
                if (isElementInViewport(element)) {
                    element.classList.add('is-visible');
                    console.log("It's visible!");
                } else {
                    element.classList.remove('is-visible');
                }
            });
            scroll(loop);
        }
        
        loop();

        // Helper function from: http://stackoverflow.com/a/7557433/274826
        function isElementInViewport(el) {
            var rect = el.getBoundingClientRect();
            return (
                (rect.top <= 0 && rect.bottom >= 0) 
                || 
                (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight))
                ||
                (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
            );
        }
    }
}
export default RevealOnScroll;