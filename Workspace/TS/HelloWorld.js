var Menu = (function () {
    function Menu(items_list, total_pages) {
        this.items = items_list;
        this.pages = total_pages;
    }
    Menu.prototype.list = function () {
        console.log("The list of items of page number " + this.pages + " are :");
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    };
    return Menu;
}());
var sundayMenu = new Menu(["pancakes", "waffles", "orange juice"], 1);
var sundayMenu1 = new Menu(["pancakes", "waffles", "orange juice"], 2);
sundayMenu.list();
sundayMenu1.list();
