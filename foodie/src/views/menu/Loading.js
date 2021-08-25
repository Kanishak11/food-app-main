import React from 'react'
import { useSpring, animated } from 'react-spring'

function Loading() {
    const styles = useSpring({
        loop: true,
        to: [
          { opacity: 1, color: '#ffaaee' },
          { opacity: 0, color: 'rgb(14,26,19)' },
        ],
        from: { opacity: 0, color: 'blue' },
      })
      // ...
      return <animated.div style={{...styles ,}}>
           <p style={{margin :"auto" ,fontSize :'4em'}} >Loading.....</p>
           </animated.div>
}

export default Loading

