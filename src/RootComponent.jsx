import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ROUTES } from './resources/route-constants'
import './styles/main.sass'
import { Home, Login } from './components/pages'

export default function RootComponent() {
  return (
    <Router>
      <Routes>
        {/* <Route path="*" element={<NotFoundPage />} /> */}
        <Route path={ROUTES.HOMEPAGE_ROUTE} element={<Home />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
      </Routes>
    </Router>
  )
}