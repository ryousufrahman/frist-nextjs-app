import Link from "next/link";


const UserCard = ({user}) => {
  return (
    <div>
      <div className="card card-border bg-base-100 ">
        <div className="card-body">
          <h2 className="card-title">{user.name}</h2>
          <p>
            {user.email}
          </p>
          <div className="card-actions justify-end">
              <Link href={`/users/${user.id}`}>
              <button className="btn btn-primary">Buy Now</button>
              </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
