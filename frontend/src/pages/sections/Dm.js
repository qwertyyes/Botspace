import React from 'react'

const Dm = ({ message, setMessage }) => {
  return (
    <div>
      <div class="container3">
        <h4>They will get</h4>
        <div class="cont3">
        <div class="dm">
          <p class="radio">an opening dm</p>
          <div class="toggle">
          <label class="toggle-switch">
    <input type="checkbox" />
    <span class="slider"></span>
</label>
</div>
        </div>
        <p class="radio">a DM with a link</p>
        <textarea
         id="story"
        name="story"
        rows="5"
        cols="33"
        className="story"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
<div class="tab"></div>
<a href="/link" class="radio">Why does an Opening DM matter?</a>

      </div>
      </div>
      <div class="addlink">
        <p class="link"> + Add a Link</p>
      </div>
    </div>
  )
}

export default Dm
