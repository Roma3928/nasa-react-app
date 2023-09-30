import axios from 'axios';
import { getCurentDate } from '../utils/dates';

export default class AsteroidService {
  static async getAll() {
    const [currentYear, currentMonth, currentDay] = getCurentDate();

    const response = await axios.get(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${currentYear}-${currentMonth}-${currentDay}&api_key=PX1aCqAsemzgfEadMH6zsaqkcgZtbEwj0fBrxq8j`,
    );
    return response.data;
  }
}
