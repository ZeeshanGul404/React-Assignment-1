import './App.css'
import victoriaFalls from './assets/1794055875_0_l3seihy0.jpg'

function App() {
  return (
    <main className="page">
      <h1>Exploring Natural Wonders</h1>

      <p className="intro">
        Discover the awe-inspiring beauty of natural landscapes across the globe, from the{' '}
        <strong>Victoria Falls</strong> in Zimbabwe to the captivating <strong>Aurora Borealis</strong>{' '}
        visible in various countries.
      </p>

      <h2>Natural Wonders</h2>
      <ol className="wonder-list">
        <li>Victoria Falls, Zimbabwe</li>
        <li>Grand Canyon, USA</li>
        <li>Aurora Borealis, Various Countries</li>
        <li>Mount Everest, Nepal</li>
        <li>Great Barrier Reef, Australia</li>
      </ol>

      <blockquote>
        "Nature always wears the colors of the spirit." - Ralph Waldo Emerson
      </blockquote>

      <h2>Benefits of Experiencing Natural Beauty</h2>
      <ul className="benefits-list">
        <li>Fostering a sense of wonder</li>
        <li>Deepening appreciation for the planet</li>
        <li>Creating lasting memories</li>
      </ul>

      <h2>Discover More</h2>

      <div className="image-frame">
        <img src={victoriaFalls} alt="Victoria Falls from above" />
      </div>

      <p className="caption">The Majestic Victoria Falls</p>
      <a href="#" className="explore-link">Explore more natural wonders.</a>
    </main>
  )
}

export default App
