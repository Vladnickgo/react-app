import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AuthForm from "../AuthForm/AuthForm";

function AuthPage() {
    const name = "";
    return (<div>
        <Header name={name} />
        <AuthForm />
        <Footer />
    </div>);
}

export default AuthPage;