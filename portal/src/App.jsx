import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from '@/components/ProtectedRoute'
import LoginPage from '@/pages/LoginPage'
import HomePage from '@/pages/HomePage'
import SummaryPage from '@/pages/SummaryPage'
import PatternsPage from '@/pages/PatternsPage'
import TimelinePage from '@/pages/TimelinePage'
import PeoplePage from '@/pages/PeoplePage'
import ArcsPage from '@/pages/ArcsPage'
import EventsPage from '@/pages/EventsPage'
import FilesPage from '@/pages/FilesPage'
import IncidentsPage from '@/pages/IncidentsPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
        <Route path="/summary" element={<ProtectedRoute><SummaryPage /></ProtectedRoute>} />
        <Route path="/patterns" element={<ProtectedRoute><PatternsPage /></ProtectedRoute>} />
        <Route path="/timeline" element={<ProtectedRoute><TimelinePage /></ProtectedRoute>} />
        <Route path="/people" element={<ProtectedRoute><PeoplePage /></ProtectedRoute>} />
        <Route path="/arcs" element={<ProtectedRoute><ArcsPage /></ProtectedRoute>} />
        <Route path="/incidents" element={<ProtectedRoute><IncidentsPage /></ProtectedRoute>} />
        <Route path="/events" element={<ProtectedRoute><EventsPage /></ProtectedRoute>} />
        <Route path="/files" element={<ProtectedRoute><FilesPage /></ProtectedRoute>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
