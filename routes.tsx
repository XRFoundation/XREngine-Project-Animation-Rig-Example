import React from 'react'
import { Route } from 'react-router-dom'

const $ikrig = React.lazy(() => import('./ikrig'))

export default function (route: string) {
  switch (route) {
    case '/ikrig':
      return [<Route key={'/ikrig'} path={'/ikrig'} component={$ikrig} />]
  }
}
