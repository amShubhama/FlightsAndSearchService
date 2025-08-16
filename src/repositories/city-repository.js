const { City } = require('../models/index');


class CityRepository {
    async createCity({ cityName }) {
        try {
            const city = await City.create({ name: cityName });
            return city;
        } catch (error) {
            throw { error };
        }
    }

    async deleteCity({ cityId }) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            })
        } catch (error) {
            throw { error };
        }
    }
}

module.exports = CityRepository;