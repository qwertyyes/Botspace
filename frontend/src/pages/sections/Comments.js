import React from 'react'

const Comments = ({ keyword, setKeyword }) => {
  return (
    <div class="commentcont">
      <h4>And this comment has</h4>
      <div class="container2">
        <div class="search">
        <input type="radio" class="radio"/>
        <label class="radio">a specific word or words</label>
        </div>
        <input type="text" class="inbox" value={keyword}
  onChange={(e) => setKeyword(e.target.value)}/>
        <p class="text">Use commas to seperate words</p>
        <div class="hint">
        <p class="radio">for example</p>
          <div className="buttons">
  {["Price", "Link", "Shop"].map((word) => (
    <button
      type="button"
      className="button"
      onClick={() => setKeyword(word)}
      key={word}
    >
      {word}
    </button>
  ))}
</div>
          </div>
      </div>
      <div class="comment2">
        <input type="radio"></input>
        <label class="radio">any word</label>
      </div>
    </div>
  )
}

export default Comments
