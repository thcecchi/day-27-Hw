describe("Movie View", function(){
  beforeEach(function (){
    this.movieView = new PostView();
    // this.movieStub = sinon.stub(this.movieModel, 'save');
  });
  //
  it("should be an instance of PostView", function () {
    expect(this.movieView).is.instanceof(PostView);
  });
  //
});
