interface RequestParams {
  url: string;    // 请求地址
  type: string;   // 请求类型
  data?: any;     // 请求数据
  header?: any;    // 请求头数据
}

interface HttpRequestOption {
  url: string;          // 请求地址
  type?: string;        // 请求类型
  dataType?: string;    // 请求数据类型
  data?: any;           // 请求数据
  header?: any;         // 请求头数据
}
