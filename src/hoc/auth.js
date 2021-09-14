import React, { useEffect } from 'react';
import { auth } from '../_actions/user_actions';
import { useSelector, useDispatch } from "react-redux";
import Notify from '../components/utils/notify'
export default function Auth (SpecificComponent, option, adminRoute = null) {
    function AuthenticationCheck(props) {
        const [visible, setVisible] = React.useState(false)
        let user = useSelector(state => state.user);
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(auth()).then(response => {
                if (!response.payload.isAuth) {
                    if (option) {
                        setVisible(true)
                        setTimeout(() => {
                            setVisible(false)
                            props.history.push("/login");
                          }, 2500)
                    }
                } else {
                    if (adminRoute && !response.payload.isAdmin) {
                        props.history.push('/')
                    }
                    else {
                        if (option === false) {
                            props.history.push('/')
                        }
                    }
                }
            })

        }, [props, dispatch])

        return (
            <>
            <SpecificComponent {...props} user={user} />
            <Notify visible = {visible} text={'로그인이 필요합니다. 로그인창으로 이동합니다.'} />
            </>
        )
    }
    return AuthenticationCheck
}


