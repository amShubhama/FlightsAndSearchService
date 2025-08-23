const { where } = require('sequelize');
const { City } = require('../models/index');
const city = require('../models/city');


class CityRepository {

    async createCity({ name }) {
        try {
            const city = await City.create({
                name,
            })
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }

    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId,
                }
            })
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async updateCity(cityId, data) {
        try {
            //This below code also works but not able to return updated object
            // if we are using pg sql then returning:true will return updated object
            // const city = await City.update(data, {
            //     where: {
            //         id: cityId,
            //     }
            // })

            // This above code returns updated object
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;

        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }
}

module.exports = CityRepository;