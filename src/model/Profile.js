let data = {
    name: "Augusto",
    avatar: "https://i.psnprofiles.com/avatars/l/Gd6b182a3d.png",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 5,
    "vacation-per-year": 4,
    "value-hour": 75
};

module.exports = {
    get(){
        return data;
    },
    update(newData){
        data = newData;
    }
}