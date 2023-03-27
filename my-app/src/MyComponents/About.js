import React from 'react'

export const About = () => {
  const myimgstyle = {
    color: 'var(--bs-indigo)'
  }
  return (
    <>
      <div className="container my-5">
        <div className="p-5 text-center bg-body-tertiary rounded-3">
          <svg className="bi mt-4 mb-3" style={myimgstyle} width="100" height="100"><use href="#bootstrap"></use></svg>
          <img src="" alt=''></img>
          <h1 className="text-body-emphasis">Welcome to our Text Utils website!</h1>
          <p className="col-lg-8 mx-auto fs-5 text-muted">
            Our app provides a variety of features to help you manipulate and format text with ease. Change the color of your text, convert it to upper or lower case, and copy it with just a few clicks. Try it out and see how it can simplify your text editing tasks.
          </p>
          <div className="d-inline-flex gap-2 mb-5">
            <button className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" type="button">
              Call to action
              <svg className="bi ms-2" width="24" height="24"><use href="#arrow-right-short"></use></svg>
            </button>
            <button className="btn btn-outline-secondary btn-lg px-4 rounded-pill" type="button">
              Secondary link
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
