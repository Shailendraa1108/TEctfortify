import React from 'react'

function ContactForm() {
  return (
    <section>
    <form>
      <div className="form">
        <div className="form-center">
          <div className="form-text">
            <div className="width40">
              <div className="contact">
                <h1>CONTACT US</h1>
              </div>
              <div>
                <label required>FullName</label>
                <input placeholder="fullname" type="text" />
              </div>
              <div>
                <label required>Email id</label>
                <input placeholder="Email" type="text" />
              </div>
              <div>
                <label required>Phone Number (optional)</label>
                <input placeholder="Phone Number" type="text" />
              </div>

              <div>
                <label>Description</label>
                {/* <textarea
                  id="w3review"
                  name="w3review"
                  rows="4"
                  cols="50"
                >
                  {" "}
                  all web development technologies.
                </textarea> */}
              </div>
              <div></div>
              <button className="button-knowmore">
                {" "}
                <span
                  style={{
                    color: "white",
                    fontWeight: "600",
                    fontSize: "20px",
                  }}
                >
                  Send Messege
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </section>
  )
}

export default ContactForm