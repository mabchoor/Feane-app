import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reservations from './pages/Reservations';
import BookTable from './pages/BookTable';
import Feedback from './pages/Feedback';
import About from './pages/About';
import OnlineOrder from './pages/OnlineOrder';
import Dashboard from './pages/Dashboard';
import theme from './theme';
import { Box, GlobalStyles } from '@mui/material';
import Footer from './components/Footer';
import Feedbacks from './pages/Feedbacks';
import SearchResults from './pages/SearchResults';

const globalStyles = {
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  'body': {
    width: '100%',
    overflowX: 'hidden',
  },
  '#root': {
    width: '100%',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      <Router>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          minHeight: '100vh',
          width: '100%',
          overflow: 'hidden',
        }}>
          <Navbar />
          <Box sx={{ 
            flex: 1,
            pt: { xs: '70px', md: '80px' },
            width: '100%',
          }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/book-table" element={<BookTable />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/about" element={<About />} />
              <Route path="/order" element={<OnlineOrder />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/feedbacks" element={<Feedbacks />} />
              <Route path="/search" element={<SearchResults />} />
            </Routes>
          </Box>
          <Box sx={{ 
            width: '100%',
            mt: 'auto',
          }}>
            <Footer />
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
