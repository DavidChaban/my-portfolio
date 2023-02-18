import Header from "../components/Header/Header"
 
 

function WebsiteLayout(props) {
    return (
        <>
        
            <Header/>
            {props.children}
           


        </>
    )
}
export default WebsiteLayout