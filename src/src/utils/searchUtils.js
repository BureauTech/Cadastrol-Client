export default {
    searchUserInUserList: function(user, userList) {
        let start = 0
        let end = userList.length - 1
        while (start <= end) {
            const mid = Math.floor((start + end) / 2)
            if (userList[mid].useCod === user.useCod) return mid
            if (user.useCod < userList[mid].useCod) end = mid - 1
            else start = mid + 1
        }
        return -1
    }
}