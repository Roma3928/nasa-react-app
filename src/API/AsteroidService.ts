import axios, { AxiosResponse } from 'axios';
import { getCurentDate } from '../utils/dates';
import { Asteroid } from '../components/elements/Main/Main';

interface AsteroidData {
  near_earth_objects: {
    key: string;
    values: Asteroid[];
  };
}

export default class AsteroidService {
  static async getAll(): Promise<AsteroidData> {
    const [currentYear, currentMonth, currentDay] = getCurentDate();

    const response: AxiosResponse<AsteroidData> = await axios.get(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${currentYear}-${currentMonth}-${currentDay}&api_key=PX1aCqAsemzgfEadMH6zsaqkcgZtbEwj0fBrxq8j`,
    );

    return response.data;
  }
}
