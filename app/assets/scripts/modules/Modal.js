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
        > <input type="hidden" name="form-name" value="contact" />
          <div class="text-fields">
            <input
            tabindex="1" type="text"
              class="text-input name-input"
              placeholder="Name"
              name="name"
            />
            <input
            tabindex="3" type="text"
              class="text-input subject-input"
              placeholder="Subject"
              name="subject"
            />
            <input
            tabindex="2" type="email"
              class="text-input email-input"
              placeholder="Email"
              name="email"
            />
            <input
            tabindex="4" type="text"
              class="text-input phone-input"
              placeholder="Phone Number"
              name="phone"
            />
            <textarea tabindex="5"
              class="text-input message-input"
              placeholder="Enter Message"
              name="message"
            ></textarea>
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