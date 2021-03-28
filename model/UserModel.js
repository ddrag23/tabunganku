import db from '../config/database.js'
import bcrypt from 'bcryptjs'

function find(id) {
    const query = 'SELECT * FROM users WHERE id = ?'
    return db.execute(query, [id])
}

function all() {
    const query = 'SELECT * FROM users'
    return db.execute(query)
}

function save(params) {
    const hashPassword = bcrypt.hashSync(params.password, 8)
    const query = 'INSERT INTO users (nama,username,password,role,age,gender) VALUES (?,?,?,?,?,?)'
    return db.execute(query, [params.nama, params.username, hashPassword, params.role, params.age, params.gender])
}

function update(id, params) {
    const updated_at = new Date(Date.now())
    const hashPassword = bcrypt.hashSync(params.password, 8)
    const query = 'UPDATE users SET nama = ?, username = ?, password = ?, role = ?, age =?, gender = ?, updated_at = ? WHERE id = ? '
    return db.execute(query, [params.nama, params.username, hashPassword, params.role, params.age, params.gender, updated_at, id])

}

export {
    find,
    all,
    save,
    update
}


