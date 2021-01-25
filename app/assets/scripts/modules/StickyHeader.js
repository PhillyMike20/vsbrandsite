import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class StickyHeader {
  constructor() {
    this.siteHeader = document.querySelector(".site-header")
    this.primaryNav = document.querySelector(".primary-nav")
    this.pageSections = document.querySelectorAll(".page-section")
    this.browserHeight = window.innerHeight
    this.events()
  }

  events() {
    window.addEventListener("scroll", throttle(() => this.runOnScroll(), 200))
    window.addEventListener("resize", debounce(() => {
      this.browserHeight = window.innerHeight
    }, 333))
  }

  runOnScroll() {
    if (window.scrollY > 60) {
      this.siteHeader.classList.add("site-header--dark") && this.primaryNav.classList.add("primary-nav--white")

    } else {
      this.siteHeader.classList.remove("site-header--dark") && this.primaryNav.classList.remove("primary-nav--white")
    }

    this.pageSections.forEach(el => this.calcSection(el))
  }

  calcSection(el) {
    if (window.scrollY + window.innerHeight > el.offsetTop && window.scrollY < el.offsetTop + el.offsetHeight) {
      let scrollPercent = el.getBoundingClientRect().y / window.innerHeight * 100
    }
  }
}

export default StickyHeader;