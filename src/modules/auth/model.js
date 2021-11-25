import {
	fetch
} from "../../lib/postgres.js"


const LOGIN = `
	select * from users as u where u.email = $1 and u.password = $2
`

const register = async ({
	first_name,
	last_name,
	password,
	email,
	specialist
}) => {
	try {
		return await fetch('insert into users (first_name, last_name, password, email, specialist) values ($1, $2, $3, $4, $5)', first_name, last_name, password, email, specialist)
	} catch (error) {
		console.log(error);
	}
}

const login = async ({
	email,
	password
}) => {
	try {
		const message = await fetch(LOGIN, email, password)
		return await message
	} catch (error) {
		console.log(error);
	}
}

export default {
	register,
	login
}