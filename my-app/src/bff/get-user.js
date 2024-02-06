import { getUsers } from './get-users';

const users = await getUsers();
export const getuser = (loginToFind) => {
	return users.find(({ login }) => login === loginToFind);
};
