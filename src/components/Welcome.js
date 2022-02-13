import React from 'react'
import { memo } from 'react';

function Welcome() {
    console.log('Welcome is randring');
  return (
    <div>Welcome here</div>
  )
}

export default memo(Welcome);