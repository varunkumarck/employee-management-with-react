import { Redirect, Route, RouteProps } from "react-router"
import { useAppSelector } from "../../redux/hooks";
import { getLoginUserData, User } from "../User/userSlice";

interface Props extends RouteProps {
    children: any
}

export default function ProtectedRoute(props: Props) {

    const loggedInUser: User = useAppSelector(getLoginUserData);

    return (
        <Route render={() => {
            return loggedInUser?.id ? props.children : <Redirect to='/login' />
        }} />
    )
}