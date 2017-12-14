const apiData = function() {
    const getData = new XMLHttpRequest();
    getData.addEventListener('load', this.success);
    getData.open(this.method, this.baseURI + this.searchReq);
    getData.send();
    //(/\/stock\/[A-Za-z]/).test(this.searchReq) ? getData.send() : console.log('nope, not a valid symbol');
};
export { apiData };