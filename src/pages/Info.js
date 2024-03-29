import React from 'react'
import { Link } from 'react-router-dom'
const Info = () => {
  return (
    <div className='Info'>
      <div className='aboutSection'>
        <h1 className='aboutheading'>ABOUT US</h1>
        <div className='aboutparadiv'>
        <p className='aboutpara'>BitBlocks offers a ​​diverse range of ​​educational resources ​​and interactive ​​experiences designed ​​to demystify ​​blockchain technology.</p>
        </div>
      </div>
      <div className='blocksection'>
        <div className='redblock'>
          <div className='blackblock'>
            <h2 className='bbheading'>why choose bitblocks?</h2>
            <div className='bblist'>
              <li className='lis'>Innovative Approach</li>
              <li className='lis'>Comprehensive Content</li>
              <li className='lis'>Accessible Learning</li>
              <li className='lis'>Fun Games</li>
            </div>
            <Link to='https://bitblocks.my.canva.site/learn'>
              <button className="button-24">Learn</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info