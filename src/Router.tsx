// Packages
import { Routes, Route } from 'react-router-dom'

// Components
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
      </Route>
    </Routes>
  )
}