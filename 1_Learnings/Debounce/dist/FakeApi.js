"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const faker_1 = require("@faker-js/faker");
const users = Array(20).fill(0).map((_, index) => {
    return ({
        id: index,
        name: faker_1.faker.person.fullName()
    });
});
const getUsers = (search) => __awaiter(void 0, void 0, void 0, function* () {
    yield new Promise((resolve) => resolve("Resolved")).then();
    const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()));
    return filteredUsers;
});
exports.getUsers = getUsers;
