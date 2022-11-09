import { Profile } from "./profile/profile";
import { Statistics } from "./statistics/statistics";
import { FriendListItem } from "./friendList/friendList";
import {TransactionHistory} from "./transactionHistory/transactionHistory";
import data from "./statistics/data.json";
import friends from "./friendList/friends.json";
import transaction from "./transactionHistory/transactions.json";
export const App = () =>{
return(
    <div>
    <Profile />
    <Statistics  stats={data}/>
    <FriendListItem FriendListItems={friends}/>
    <TransactionHistory TransactionItems={transaction} />
    </div>
    
)
};
