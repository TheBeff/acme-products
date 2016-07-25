var _products = [
	{
		id: 1,
		name: "Suede backpack"
	},
	{
		id: 2,
		name: "Button-down plaid shirt"
	}
];

module.exports = {
	getProducts: function(){
		return _products;
	},
	deleteItem: function(id){
		var toDelete = this.getProducts().filter(function(item){
			return item.id === id
		})[0];
		var idx = this.getProducts().indexOf(toDelete);
		this.getProducts().splice(idx, 1);

	}
};