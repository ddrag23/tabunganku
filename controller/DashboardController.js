function index(req, res, next) {
    res.render('main', {
        title: 'Dashboard',
        src: 'modules/dashboard/dashboard'
    })
}

export {index}
