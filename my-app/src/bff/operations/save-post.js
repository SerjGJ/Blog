import { updatePost } from '../api';
import { sessions } from '../sessions';
import { ROLE } from '../constants';

export const savePost = async (hash, newPostData) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещён',
			res: null,
		};
	}

	const updatedPost = await updatePost(newPostData);

	return {
		error: null,
		res: updatedPost,
	};
};