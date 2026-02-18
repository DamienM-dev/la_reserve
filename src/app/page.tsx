

import Header from "./pages/header/header"
import SliderRestaurant from "./pages/sliderRestaurant/sliderRestaurant"
import Commentary from "./pages/commentary/commentary"
import ServicesPages from "./pages/servicesRestaurant/servicesPages"
import ToGetInPage from "./pages/toGetIn/toGetInPage"
import HourPage from "./pages/hour/hourPage"
import Footer from "./pages/footer/footer"
export default function Page() {
  return (
    <>
      <Header/>
      <SliderRestaurant />
      <Commentary />
      <ServicesPages />
      <ToGetInPage />
      <HourPage />
      <Footer />
    </>
  )
}