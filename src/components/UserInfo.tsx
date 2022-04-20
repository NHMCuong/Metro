export const UserInfo = ({...props}) => {
    return(
        <div>{props.user.phone.person.country}</div>
    )
}