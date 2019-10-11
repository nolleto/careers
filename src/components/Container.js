import React from 'react'
import { Box } from 'flokit'

const Container = (props) => (
  <Box width={1} maxWidth='1024px' m='0 auto' px={[3, 4]} {...props} />
)

export default Container
