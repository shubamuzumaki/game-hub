import { Badge } from '@chakra-ui/react'
import React from 'react'

const CriticScore = ({ score }: { score: number }) => {
  let color = score > 85 ? 'green' : score > 75 ? 'yellow' : ''
  return (
    <Badge colorScheme={color} fontSize={'14px'} paddingX={4} borderRadius={'4px'}>
      {score}
    </Badge>
  )
}

export default CriticScore
