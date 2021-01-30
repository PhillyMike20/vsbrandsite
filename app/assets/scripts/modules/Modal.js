class Modal {
  constructor() {
    this.injectHTML()
    this.modal = document.querySelector(".modal")
    this.closeIcon = document.querySelector(".modal__close")
    this.events()
  }

  events() {
    // listen for close click
    this.closeIcon.addEventListener("click", () => this.closeTheModal())
    // pushes any key
    document.addEventListener("keyup", e => this.keyPressHandler(e))
    }

    keyPressHandler(e) {
      if (e.keyCode == 27) {
        this.closeTheModal()
      }
    }

  openTheModal() {
    this.modal.classList.add("modal--is-visible")
  }

  closeTheModal() {
    this.modal.classList.remove("modal--is-visible")
  }

  injectHTML() {
    document.body.insertAdjacentHTML('beforeend', `
    <div class="modal">
    <div class="modal__inner">
    <!-- Section A: Contact Form -->
    <div class="contact contact--a text-center py-2">
      <div class="container">
        <h2 class="section-title section-title--no-bm section-title--blue"><img src="assets/images/icons/mail.png">Get in Touch</h2>
        <div class="bottom-line"></div> 
        <p class="lead2">Here is how you can reach me</p>
        <form
          method="POST"
        >
          <div class="text-fields">
            <input
              type="text"
              class="text-input name-input"
              placeholder="Name"
              name="name"
            />
            <input
              type="text"
              class="text-input subject-input"
              placeholder="Subject"
              name="subject"
            />
            <input
              type="email"
              class="text-input email-input"
              placeholder="Email"
              name="email"
            />
            <input
              type="text"
              class="text-input phone-input"
              placeholder="Phone Number"
              name="phone"
            />
            <textarea
              class="text-input message-input"
              placeholder="Enter Message"
              name="message"
            ></textarea>
            <div class="my-2">
            </div>
          </div>
          <button type="submit" class="btn btn--blue">Submit</button>
        </form>
      </div>
    </div>
    <div class="modal__close">X</div>
  </div>
  </div>
    `)
  }
}

export default Modal