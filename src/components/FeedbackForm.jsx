import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"

function FeedbackForm() {
  const [text, setText] = useState("")
  const [btnDisabled, setBtnDisabled] = useState("")
  const [message, setMessage] = useState("")

  function handleTextChange(e) {
    setText(e.target.value)
  }
  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        <div className="input-group">
          <input
            type="text"
            id=""
            value={text}
            placeholder="Write a review"
            onChange={handleTextChange}
          />
          <Button type="submit" version="secondary">
            Send
          </Button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm
