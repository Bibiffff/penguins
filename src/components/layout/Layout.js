import Footer from "./Footer";
import Nav from "./Nav";

const Layout = ({ children }) => {

    return (
        <>
            <Nav />
            <main className="container-fluid" style={{marginTop:56}}>
                {children}
            </main>
            <Footer />
        </>
    );
};
export default Layout;