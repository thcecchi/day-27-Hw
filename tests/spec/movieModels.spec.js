describe("Movie Model", function(){
    beforeEach(function (){

        this.movieModel = new PostModel();
        // this.movieStub = sinon.stub(this.movieModel, 'save');
    });
  //
  it("should be an instance of PostModel Class", function () {
    expect(this.movieModel).is.instanceof(PostModel);
  });
  //
  it("should have correct urlRoot", function () {
    expect(this.movieModel.urlRoot).to.be.ok;
    expect(this.movieModel.urlRoot).to.be.equal("http://tiy-fee-rest.herokuapp.com/collections/tylerbb3");
  });
  //
  it("should be able to add property to model", function () {
    expect(this.movieModel.attributes.title).to.not.be.ok;
    this.movieModel.set({title: 'Citizen Kane'});
    expect(this.movieModel.attributes.title).to.equal('Citizen Kane');
  });
  //
  it("should save my model when save is called", function () {
    this.movieModel.set({title: 'Citizen Kane'});
    this.movieModel.save();

    // expect(this.movieStub).to.have.been.calledOnce;
    this.movieModel.set({author: 'Tyler'});
    this.movieModel.save();
    // expect(this.movieStub).to.have.been.calledTwice;
  });

});
