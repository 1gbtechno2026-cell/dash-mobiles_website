import { Link } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle'
import './NotFound.css'

function NotFound() {
  usePageTitle('Page Not Found')

  return (
    <section className="not-found">
      <div className="container">
        <span className="eyebrow">404</span>
        <h1>Page Not Found</h1>
        <p>The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.</p>
        <Link to="/" className="btn btn--primary">Back to Home</Link>
      </div>
    </section>
  )
}

export default NotFound
