import getApiUrl from 'helpers/getApiUrl/getApiUrl';

const getConfigUrl = (channelId: string) =>
  getApiUrl({ channelId, type: 'config', activity: 'get' });

export default getConfigUrl;
