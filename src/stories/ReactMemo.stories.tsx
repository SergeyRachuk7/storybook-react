import React, { useState } from "react"

export default {
  title: "React.memo demo",
}

const NewMessageCounter = (props: any) => {
  return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
  return <div>{
    props.users.map((u, i) => <div>{u}</div>)
  } </div>
}

const Users = React.memo(UsersSecret);

export const Exampel1 = () => {
  const [counter, setCounter] = useState(0);
  console.log(counter);
  const [users, setUsers] = useState(["DIMAS", "VITACO", "ROMA", "DAVID"]);

  const addUsers = () => {
    const newUsers = [...users, "Sveta" + new Date().getTime()];
    setUsers(newUsers);
  }

  return <>
    <button onClick={() => setCounter(counter + 1)}>+</button>
    <button onClick={addUsers}>add user</button>
    <NewMessageCounter count={counter} />
    <Users users={users} />
  </>
}