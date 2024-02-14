import { getUsers } from './get-users';

const users = await getUsers();
export const getUser = (loginToFind) => {
	return users.find(({ login }) => login === loginToFind);
};
