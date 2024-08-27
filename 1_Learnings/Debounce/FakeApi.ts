import { faker } from "@faker-js/faker";

const users = Array(50).fill(0).map((_,index)=>{
    return ({
        id:index,
        name: faker.person.fullName()
    });
});

export const getUsers = async (search:string) => {
    // await new Promise((resolve) => resolve("Resolved"));
    const filteredUsers = users.filter((user)=>user.name.toLowerCase().includes(search.toLowerCase()));
    return filteredUsers;
}