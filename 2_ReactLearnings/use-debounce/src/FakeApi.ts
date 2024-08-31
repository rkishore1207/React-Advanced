import { faker } from "@faker-js/faker";
import { User } from "./App";

const users : User[] = Array(500).fill(0).map((_,index)=>{
    return ({
        id:index,
        name: faker.person.fullName()
    });
});

export const getUsers =  (search:string) : User[] => {
    // await new Promise((resolve) => resolve("Resolved")).then();
    const filteredUsers = users.filter((user:User)=>user.name.toLowerCase().includes(search.toLowerCase()));
    return filteredUsers;
}