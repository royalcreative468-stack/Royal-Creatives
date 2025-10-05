import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import OurServices from './Services'
import AchievementsRecognition from './AchievementsRecognition'
import CategoryCarousel from './CategoryCarousel'
import HomeWork from './WorkFlow.jsx'
import LatestJobs from './LatestJobs'
import Footer from './shared/Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  useGetAllJobs();
  const { user } = useSelector(store => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === 'recruiter') {
      navigate("/admin/companies");
    }
  }, []);
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
      <OurServices />
      <AchievementsRecognition />
      <HomeWork />
      <LatestJobs />
      <Footer />
    </div>
  )
}

export default Home