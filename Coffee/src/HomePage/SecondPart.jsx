import React from 'react'
import './Home.css'
import CardSec2 from './CardSec2'
import './MediaQurey.css';

const SecondPart = () => {
  return (
    <div className='second-part'>
            <div className='second-part-text'>
                <h1 className='you-love'>Find and Get <br></br> What You Love</h1>
            </div>
            <div className='sec-2-card'>
                        <CardSec2 src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fce915822fd2280e71c105_Black%20Coffee.avif" title="Coffee" />
                        <CardSec2 src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fce92633545aae0dbbf527_Virgin%20Mojito.avif" title="Cold Drinks" />
                        <CardSec2 src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fce93b81d27502589462e9_Package.avif" title="Bakery" />
            </div>
    </div>
  )
}

export default SecondPart
