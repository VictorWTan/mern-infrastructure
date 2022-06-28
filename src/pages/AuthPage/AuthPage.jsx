import SignupForm from "../../components/SignupForm/SignupForm";

export default function AuthPage(props){
    return(
        <main>
            <h1>AuthPage</h1>
            <SignupForm setUser={props.setUser}/>
        </main>
    )
}

