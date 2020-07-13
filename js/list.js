var ProductRow = React.createClass({
    render: function() {
        
        return (
        <div className="col s12 m6 l3">
          <div className="icon-block">
         
            <h5 className="center center-align">{this.props.product.name}</h5>
            <a className="smoothScroll link-img"><img src={this.props.product.photo} /></a>

            <div className="light price center-align">{this.props.product.price}</div>
            <div className="add"><a data-photo={this.props.product.photo} className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a></div>
          </div>
        </div>
        );
    }
});

var ProductAll = React.createClass({
    render: function() {
        var rows = [];
        // var lastCategory = null;
        this.props.products.forEach(function(product) {
            // if (product.category !== lastCategory) {
            //     rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
            // }
            rows.push(<ProductRow product={product} key={product.name} />);
            // lastCategory = product.category;
        });
        return (
            <div className="row product">{rows}</div>         
        );
    }
});

var Mylist = React.createClass({
    render: function() {
        return (
                <ProductAll products={this.props.products} />     
        );
    }
});

var PRODUCTS = [
//  {price: '$200.00', stocked: true, name: '01', photo: 'img/01.jpg'},
  {price: '$200.00', stocked: true, name: '02', photo: 'img/02.jpg'},
  {price: '$200.00', stocked: true, name: '03', photo: 'img/03.jpg'},
  {price: '$200.00', stocked: true, name: '04', photo: 'img/04.jpg'},
  {price: '$200.00', stocked: true, name: '05', photo: 'img/05.jpg'},
  {price: '$200.00', stocked: true, name: '06', photo: 'img/06.jpg'},
//  {price: '$200.00', stocked: true, name: '07', photo: 'img/07.jpg'},
//  {price: '$200.00', stocked: true, name: '08', photo: 'img/08.jpg'},
//  {price: '$200.00', stocked: true, name: '09', photo: 'img/09.jpg'},
//  {price: '$200.00', stocked: true, name: '10', photo: 'img/10.jpg'},
//  {price: '$200.00', stocked: true, name: '11', photo: 'img/11.jpg'},
//  {price: '$200.00', stocked: true, name: '12', photo: 'img/12.jpg'},
//  {price: '$200.00', stocked: true, name: '13', photo: 'img/13.jpg'},
];
 
ReactDOM.render(
    <Mylist products={PRODUCTS} />,
    document.getElementById('prod')
);
