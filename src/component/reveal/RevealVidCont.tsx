import React, { Children } from 'react'
import { motion } from 'framer-motion' 



interface RevealVidCont {
    "children" : React.ReactNode
}

const RevealVidCont = (props:RevealVidCont) => {
  return (
    <motion.div
    variants={{
        hidden : {y:-20 , opacity : 0 , perspective: 900 , rotateX : 25 , translateZ: 0},
        visible : {y:0 , opacity : 1 , perspective: 0 , rotateX: 0}
    }}
    initial="hidden"
    animate="visible"
    transition={{duration : 1.25 , ease : [0, 0.42, 0.17, 0.99] }}>
        {props.children}
    </motion.div>
  )
}

export default RevealVidCont