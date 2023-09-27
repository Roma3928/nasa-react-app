import axios from 'axios';

export default class AsteroidService {
  static async getAll() {
    const response = await axios.get(
      'https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-09-24&api_key=PX1aCqAsemzgfEadMH6zsaqkcgZtbEwj0fBrxq8j',
    );
    return response.data;
  }
}
