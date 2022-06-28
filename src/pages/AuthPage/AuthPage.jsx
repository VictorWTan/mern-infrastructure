import SignupForm from "../../components/SignupForm/SignupForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage(props){
    return(
        <main>
            <h1>AuthPage</h1>
            <SignupForm setUser={props.setUser}/>
            <LoginForm setUser={props.setUser}/>
        </main>
    )
}

