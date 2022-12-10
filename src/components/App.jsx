import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import users from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import { GlobalStyle } from "./GlobalStyle";



export const App = () => {
  return <div>
    <Profile user={users} />
   <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends}/>
    <TransactionHistory items={transactions} />
    <GlobalStyle />
  </div>;
};