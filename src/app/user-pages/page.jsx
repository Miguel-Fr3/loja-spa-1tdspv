import Image from "next/image";

export default async function UserPages() {

    const response = await fetch("http://localhost:3000/api/git-users");
    const users = await response.json();
    

  return (
    <div>
        <h1>User Pages</h1>

        <div>
            <ul className="card-user">
                {
                    users.map((user)=>(
                        <li  key={user.id}>
                            <figure>
                                <Image
                                src={user.avatar_url}
                                alt="Avatar"
                                width={50}
                                height={50} />
                                <figcaption>{user.login}</figcaption>
                            </figure>
                            </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}
