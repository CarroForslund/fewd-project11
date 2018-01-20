// SEED.JS FILE WITH DATA ======================================================

const products = [
  {
    id: 1,
    title: 'Yellow Pail',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl: 'images/avatars/daniel.jpg',
    productImageUrl: 'images/products/image-aqua.png',
  },
  //and so on
]

// PRODUCT LIST ================================================================

class ProductList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    //Make sure this will refer to the same inside a method in this class
    this.handleProductUpVote = this.handleProductUpVote.bind(this);
  }

  componentDidMount() {
    this.setState({
      products: Seed.products
    });
  }

  //This method takes action when data is sent back from Product.
  handleProductUpVote(productId) {
    // console.log(productId + ' was upvoted.');
    const nextProducts = this.state.products.map((product) => {
      if (product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes + 1,
        });
      } else {
        return product;
      }
    });
    this.setState({
      products: nextProducts,
    });
  }

  render() {
    const products = Seed.products.sort((a, b) => (
      b.votes - a.votes
    ));
    //Array's map method takes a function as an argument
    //Calls this funtion for each item in the Array and builds a new array
    //Using return() from Product
    const productComponents = Seed.products.map((product) => (
      <Product
        //Props passed down to Product
        //Key is a kind of React id
        key={'product-' + product.id}
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}votes={product.votes}
        submitterAvatarUrl={product.submitterAvatarUrl}
        productImageUrl={product.productImageUrl}
        //On button click in Product's return() a method in Product is called and
        //that method pass up the vote to this prop.
        //This prop calls the method handleProductUpVote.
        onVote={this.handleProductUpVote}//Even when sent down to product this prop lives within ProductList
      />
    ));
  }

  return (
    <div className='ui unstackable items'>
      //Render the array productComponents
      {productComponents}
    </div>
  );
}


// PRODUCT =====================================================================

class Product extends React.Component {
  //The constructor function invokes whenever an object is created via a class
  //React invokes constructor() with the component’s props.
  constructor(props) {
    super(props); //constructor of Component. Have to be called first

    //Make sure this will refer to the same inside a method in this class
    //Like here the handleUpVote method
    this.handleUpVote = this.handleUpVote.bind(this);
  }

  handleUpVote() {
    //This calls the prop onVote sent from ProductList
    this.props.onVote(this.props.id);
  }

  render() {
    return (
      <div className='item'>
        <div className='image'>
          <img src={this.props.productImageUrl} />
        </div>
        <div className='middle aligned content'>
          <div className='header'>
            //A click on this button calls Product's method handleUpVote
            <a onClick={this.handleUpVote}>
              <i className='large caret up icon' />
            </a>
            {this.props.votes}
          </div>
          <div className='description'>
            <a href={this.props.url}>
              {this.props.title}
            </a>
            <p>
              {this.props.description}
            </p>
          </div>
          <div className='extra'>
            <span>Submitted by:</span>
            <img className='ui avatar image'src={this.props.submitterAvatarUrl}/>
          </div>
        </div>
      </div>
    );
  }
}
