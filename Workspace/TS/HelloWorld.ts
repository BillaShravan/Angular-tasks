class Menu{
	items:Array<string>;
	pages:number;
	
	constructor(items_list:Array<string>,total_pages:number){
		this.items = items_list;
		this.pages = total_pages;
	}
	
	list():void{
		console.log("The list of items of page number "+this.pages+" are :");
		for(var i=0;i<this.items.length;i++){
			console.log(this.items[i]);
		}
	}
} 


var sundayMenu= new Menu(["pancakes","waffles","orange juice"],1);
var sundayMenu1= new Menu(["pancakes","waffles","orange juice"],2);
sundayMenu.list();
sundayMenu1.list();
