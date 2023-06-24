import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/navigation'
import './App.css'
import { ROUTES } from './constain'
import Footer from './layout/Footer'
import Header from './layout/Header'
import Loading from './pages/Loading'

const HomePage = lazy(() => import('./pages/HomePage'))
const Shop = lazy(() => import('./pages/Shop'))

function App() {
    return (
        <>
            <main>
                <Suspense fallback={<Loading />}>
                    <Header />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                    <Routes>
                        <Route path={ROUTES.home} element={<HomePage />} />
                    </Routes>
                    <Routes>
                        <Route path={ROUTES.shop} element={<Shop />} />
                    </Routes>
                    <Footer />
                </Suspense>
            </main>
        </>
    )
}

export default App
