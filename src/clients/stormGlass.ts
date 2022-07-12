import { AxiosStatic } from 'axios';

export class StormGlass {
  readonly stormGlassAPIParams =
    'waveHeight,windSpeed,windDirection,swellDirection,swellHeight,swellPeriod,waveDirection';
  readonly stormGlassAPISource = 'noaa';

  constructor(protected request: AxiosStatic) {}

  public async fetchPoints(lat: number, lon: number): Promise<any> {
    return this.request.get(
      `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lon}&params=${this.stormGlassAPIParams}&source=${this.stormGlassAPISource}`,
    );
  }
}
