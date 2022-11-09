import PropTypes from "prop-types";
import { FriendItem } from "./friendItem/friendListItem"
export const FriendListItem = ({FriendListItems})=>{
    return(
            <ul>
                {FriendListItems.map(({name,image,status})=>(
                    <FriendItem
                        key={name}
                        name={name}
                        image={image}
                        status={status}
                    />
            ))}
        </ul>
        
    );
};

 FriendItem.propTypes = {
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired    
 }