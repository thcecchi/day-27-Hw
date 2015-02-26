describe('Movie Collection', function () {
  beforeEach(function(){
    this.movieCollection = new PostCollection();
  })
  //
  it("should be an instance of PostCollection Class", function () {
    expect(this.movieCollection).is.instanceof(PostCollection);
  });
  //
  it("should have correct urlRoot", function(){
    expect(this.movieCollection.url).to.be.ok;
    expect(this.movieCollection.url).to.be.equal('http://tiy-fee-rest.herokuapp.com/collections/tylerbb3');
  });
  //
  it("should have contain post model", function(){
    expect(this.movieCollection.model).to.be.ok;
    expect(this.movieCollection.model).to.be.equal(PostModel);
  });
});
