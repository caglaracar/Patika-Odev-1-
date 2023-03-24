import axios from "axios";
import "./App.css";
const baseURL = "https://jsonplaceholder.typicode.com";
function App() {
    const getData = async (id) => {
        try {
            const usersResponse = await axios.get(`${baseURL}/users?id=${id}`);
            const user = usersResponse.data[id - 1];

            const postsResponse = await axios.get(`${baseURL}/posts?userId=${id}`);
            const posts = postsResponse.data[id - 1];

            console.log(user , posts);
        } catch (error) {
            console.error(error);
        }
    };
    // id 1'e sahip kullanıcının posts ve user bilgileri konsola yazdırılacaktır.
    getData(1);
    return (
        <div className="App">

        </div>
    );
}
export default App;