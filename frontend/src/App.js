import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import DeckDetailsPage from './pages/DeckDetailsPage'
import QuizPage from './pages/QuizPage'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<HomePage />}
            />
            <Route
              path="/decks/:deckId"
              element={<DeckDetailsPage />}
            />
            <Route
              path="/decks/:deckId/quiz"
              element={<QuizPage />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
