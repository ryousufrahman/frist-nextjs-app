import UserCard from "../components/UserCard";
export const metadata = {
  title: 'All user',
  description: '...',
}


const UserPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
    
    
    return (
        <div>
            <h2 className="text-2xl mt-10 text-white">All user are her</h2>
            <div className="grid grid-cols-3 gap-5">
                {
                    users.map(user => <UserCard key={user.id} user={user}></UserCard>)
                }
                
            </div>
        </div>
    );
};

export default UserPage;