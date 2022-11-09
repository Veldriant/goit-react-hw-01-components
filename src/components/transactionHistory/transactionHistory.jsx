import PropTypes from "prop-types";
import { TransactionItem } from "./transactionItem/transactionItem";
export const TransactionHistory = ({TransactionItems}) =>{
    return(
        <table >
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {TransactionItems.map(({id,type,amount,currency})=>(
                    <TransactionItem
                        key={id}
                        type={type}
                        amount={amount}
                        currency={currency}
                    />
            ))}          
            </tbody>
        </table>
    );
};
 TransactionItem.propTypes = {
            type: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            currency: PropTypes.string.isRequired    
 }