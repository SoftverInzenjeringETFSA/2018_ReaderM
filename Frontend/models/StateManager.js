class StateManager {
  constructor(){
    uri = null;
  }
  getUri(){
    return this.uri;
  }
  setUri(uri){
    this.uri = uri;
  }
  isUriSet(){
    return !(uri === null);
  }

};

export default new StateManager();
