const {ROLE} = require('../data')

const canView = (user,item)=>{
    return (
        user.role === ROLE.ADMIN ||
        user.id === item.userId
    )
}
module.exports = {
    canView
}