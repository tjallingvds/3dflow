import React from 'react'
import '../styles/SectionDivider.css'

function SectionDivider({ height = '120px', showDot = false }) {
  return (
    <div className="section-divider-wrapper" style={{ height }}>
      <div className="section-divider-line">
        {showDot && <div className="section-divider-dot"></div>}
      </div>
    </div>
  )
}

export default SectionDivider

