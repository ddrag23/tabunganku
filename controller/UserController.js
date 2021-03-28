import * as UserModel from '../model/UserModel.js'
async function index(req, res, next) {
    try {
        const [rows, field] = await UserModel.all()
        res.json(rows)
    } catch (err) {
        console.log(err)
        res.json(err)
    }
}

async function store(req, res) {
    try {
        const save = await UserModel.save(req.body)
        res.json({
            success: true,
            status: 200,
            message: 'Data berhasil dimasukkan',
        })
    } catch (err) {
        console.log(err)
        res.json({error: err})
    }
}

async function update(req, res) {
    try {
        const id = req.params.id
        const update = await UserModel.update(id, req.body)
        res.json({
            success: true,
            status: 200,
            message: 'Data berhasil dimasukkan',
            result: update
        })
    } catch (err) {
        console.log(err)
        res.json({error: 'Internal Server Error'})
    }

}

export {index, store, update}
