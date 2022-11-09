import css from "./friendListItem.module.css"
export const FriendItem = ({name,status,image}) =>{
    return(
            <li>
                <span className={`${css[status]}`}> {status} </span>
                <img src={image} alt="img" width="50" />
                <p>{name}</p>
            </li>
    );
};