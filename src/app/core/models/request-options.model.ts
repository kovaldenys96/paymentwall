export interface RequestOptions {
  method: 'DELETE' | 'GET' | 'HEAD' | 'JSONP' | 'OPTIONS',
  uri: string,
  params?: any,
  responseType?: 'arraybuffer' | 'blob' | 'json' | 'text'
}
