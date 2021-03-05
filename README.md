# THIS IS UDACITY PROJECT NUMBER 2

## Create a Landing Page

**Assume sections are being loaded in from a 3rd party API/CDN _and we don't know ahead of time how much content(sections) will arrive_ successfully**

### The requirements are as follows:

- Build out NavBar _dynamically_ according to which sections we received

- Implement smooth scrolling behaviour to section when nav links are clicked instead of jumping straight to the section

- **make navbar list item active when user scrolls over the corresponding section**

- make >= 4 sections

- make section active when user scrolls over section and deactivate when sections leave current viewport threshold

- Ensure navbar sticks to the top of page _when_ scrolling down the page and then disappears _after_ user has stopped scrolling. Navbar should be present on page load.

- make sections collapsible

- Implement a button that scrolls to the top of page

[check out this devEd video on Intersection Observer](https://www.youtube.com/watch?v=RLc8NB2JyxE)

[check out this MDN doc on Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

## Here's an example of intersection observer from MDN

```javascript
let options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: 1.0,
};

let observer = new IntersectionObserver(callback, options);
```

```javascript
let target = document.querySelector('#listItem');
observer.observe(target);

// the callback we setup for the observer will be executed now for the first time
// it waits until we assign a target to our observer (even if the target is currently not visible)
```

```javascript
let callback = (entries, observer) => {
  entries.forEach((entry) => {
    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
};
```

### Intersection Observer diagram from https://blog.jxck.io/entries/2016-06-25/intersection-observer.svg

![Intersection Observer diagram from https://blog.jxck.io/entries/2016-06-25/intersection-observer.svg](https://blog.jxck.io/entries/2016-06-25/intersection-observer.svg)

### MDN said the following about Intersection Observer:

> Implementing intersection detection in the past involved event handlers and loops calling methods like Element.getBoundingClientRect() to build up the needed
> information for every element affected. Since all this code runs on the main thread, even one of these can cause performance problems. When a site is loaded with
> these tests, things can get downright ugly.


- This site is hosted at [https://udacity-landing-page-jw.netlify.app/](https://udacity-landing-page-jw.netlify.app/)
