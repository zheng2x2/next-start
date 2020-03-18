import Layout from '../components/Layout';
import axios from 'axios';

class SSRTest extends React.Component {
    static async getInitialProps({req}) {
        // return req
        //     ? { from: 'server'} //서버에서 실행할 시
        //     : { from: 'client'} //클라이언트에서 실행할 시

        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return {
            users : response.data
        }
    }

    render() {

        const {users} = this.props;
        const userList = users.map(
            user => <li key={user.id}>{user.name}</li>
        )

        return (
            <Layout>
                {/* {this.props.from} 에서 실행이 되었어요 */}
                <ul>
                    {userList}
                </ul>
            </Layout>
        )
    }
}

export default SSRTest;