//digital twins
//comment out selfdriving
//contact
//mission and vision
//motion capture page:: strictly abt stage and pricing (external price, "contact for internal price")


import "../scss/App.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Starlab | Texas A&M University at RELLIS",
  description: "Starlab is a motion capture and 3D digitization lab at Texas A&M University, supporting research, teaching, and creative work.",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
      <Header/>
      {children} 
      <Footer/>
      </body>
    </html>
  )
}
