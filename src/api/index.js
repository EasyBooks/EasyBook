import axios,{serverAdder} from './config'

// 请求方法
export let getX = () => axios.get('/X');

export let getBoutique = () => {
  let req = new Request(serverAdder+'/api/app/book/boutique', {method: 'GET', cache: 'reload'});
  return fetch(req);
}

export let getRanking = () => axios.get('/book/ranking');
export let getCategory = () => {
  let req = new Request(serverAdder+'/api/app/base/category', {method: 'GET', cache: 'reload'});
  return fetch(req);
};
export let getTheme = o => axios.get('/book/categoryBooks', {params: o});


// user 方法
export let isLogin = () => axios.get('/user/isLogin');
export let register = (username, password) => axios.post('/user/register', {
  username, password
});
export let logout = () => axios.get('/user/logout');
export let login = (username, password) => axios.post('/user/login', {
  username, password
});
export let getUserInfo = () => axios.get('/user/userInfo');

export let getBanner = () => {
  let req = new Request(serverAdder+'/api/app/base/banner', {method: 'GET', cache: 'reload'});
  return fetch(req);
};


export let getBook = (id) => {
  return axios.get('/user/hasBookInBookshelf/:bid')
};
export let getDetail = id => {
  let req = new Request(serverAdder+'/api/app/book/detail/'+id, {method: 'GET', cache: 'reload'});
  return fetch(req);
};

export let bookRack = () => {
  return axios.get('/user/bookshelf')
};


export let getCircle = (page,size) => {
  let req=new Request(serverAdder+'/api/app/circle/list?page='+page+"&size="+size, {method: 'GET', cache: 'reload'});
  return fetch(req);
};

export let getRead = bid => {
  let req = new Request(serverAdder+'/api/app/book/read/'+bid, {method: 'GET', cache: 'reload'});
  return fetch(req);
};
export let getChapter = id => {
  let req = new Request(serverAdder+'/api/app/book/chapters/'+id, {method: 'GET', cache: 'reload'});
  return fetch(req);
};
export let getReadContent = link => {
  let req = new Request(serverAdder+'/api/app/book/read', {method: 'GET', cache: 'reload',params:{
      "id":link
    }});
  return fetch(req);
};

export let getSearch = () => {
  return axios.get('/book/search')
};


export let deleteBook = id => {
  return axios.delete('/user/bookshelf/' + id);
};


// 自动补全关键词
export let getKeyword = val => axios.get('/view/keyCom?val=' + val,);
export let search = ({query, start, limit}) => axios.get('/book/search', {
  params: {
    query, start, limit
  }
});

// 判断书籍是否已存入书架
export let isCollect = bid => axios.get('/user/hasBookInBookshelf/' + bid,);


// 收藏书籍(加入书架)
export let collectBook = id => axios.post('/user/bookshelf', {id})
