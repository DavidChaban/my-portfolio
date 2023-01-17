import Header from "../components/Header/Header"
// import Footer from "../components/Footer"

 

function Layout(props) {
    return (
        <>
        
            <Header />
            {props.children}
            {/* <Footer/> */}
      


        </>
    )
}
export default Layout