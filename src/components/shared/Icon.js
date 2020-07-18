import React from 'react'

export function Icon({ name, alt = 'Icon' }) {
  const src = `./icons/${name}.svg`
  return <img src={src} alt={alt} />
}
