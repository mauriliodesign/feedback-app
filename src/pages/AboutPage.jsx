import Card from "../components/shared/Card"
import { Link } from "react-router-dom"

function AboutPage() {
  return <Card>
    <div className="about">
      <h1>About This Project</h1>
      <p>This is a React app to leave feedbacks for a products or service</p>
      <p>Version: 1.0.0</p>
      <Link to="/">Back to home</Link>
    </div>
  </Card>
}

export default AboutPage
