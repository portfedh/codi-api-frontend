import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Playground from './pages/Playground';
import Docs from './pages/Docs';
import Tools from './pages/Tools';
import Enrollment from './pages/Enrollment';
import DonationSuccess from './pages/DonationSuccess';
import DonationCancel from './pages/DonationCancel';
import { AvisoPrivacidad } from './pages/AvisoPrivacidad';
import FairUsePolicy from './pages/FairUsePolicy';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/enrollment" element={<Enrollment />} />
        <Route path="/donation/success" element={<DonationSuccess />} />
        <Route path="/donation/cancel" element={<DonationCancel />} />
        <Route path="/aviso-privacidad" element={<AvisoPrivacidad />} />
        <Route path="/politica-uso-justo" element={<FairUsePolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
