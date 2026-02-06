import { AxiosInstance } from 'axios';
import SinkData from '../../types/sink-data';
import APIResource from '../shared/api-resource';

export default class SinksResource extends APIResource<SinkData> {
  constructor(axios: AxiosInstance) {
    super(axios, '/sinks');
  }
}
