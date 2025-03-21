import React from 'react'
import TshirtCard from '../tshirt/page'
import HijabCard from '../hijabs/page'
import HoodieCard from '../Hoddie/page'
const PageClo = () => {
  return (
    <div className='bg-black'>

<div className="text-center">
      <br />
      <br />
  <h1 className="text-6xl font-bold text-center mb-4 text-teal-400 bg-black">
 Hijabs
  </h1>
  <span className="inline-block h-1 w-24 rounded bg-emerald-500" />
</div>
<HijabCard />

<div className="text-center">
      <br />
      <br />
  <h1 className="text-6xl font-bold text-center mb-4 text-teal-400 bg-black">
  Tshirts
  </h1>
  <span className="inline-block h-1 w-24 rounded bg-emerald-500" />
</div>
<TshirtCard />


<div className="text-center">
      <br />
      <br />
  <h1 className="text-6xl font-bold text-center mb-4 text-teal-400 bg-black">
 Hoodies
  </h1>
  <span className="inline-block h-1 w-24 rounded bg-emerald-500" />
</div>
<HoodieCard />



    </div>
  )
}

export default PageClo