
var JSON_menu = {

    Home : {
        sub : [{name : "home1", link : "#home1"},{name : "home2", link : "#home2"},{name : "home3", link : "#home3"}]
    },
    About : {
        sub : [{name : "about1", link : "#about1"},{name : "about2", link : "#about2"}]
    },
    Info : {
        sub : [{name : "info1", link : "#info1"},{name : "info2", link : "#info2"},{name : "info3", link : "#info3"}]
    }

};

var MenuModule = (function(){

    var menu;

    function init(element, data) {
        menu = document.getElementById(element);

        for(var menuKey in data) {
            var li_node = document.createElement("LI");
            var ul_node = document.createElement("UL");
            var subMenu_a_node = document.createElement("A");
            var menuName = document.createTextNode(menuKey);
            subMenu_a_node.setAttribute('href', '#'+menuKey);
            subMenu_a_node.appendChild(menuName);
            li_node.appendChild(subMenu_a_node);

            for(var i=0; i < data[menuKey].sub.length; i++) {
                var subMenu_li_node = document.createElement("LI");
                var a_node = document.createElement("A");
                var name = document.createTextNode(data[menuKey].sub[i].name);
                a_node.setAttribute('hred', data[menuKey].sub[i].link);
                a_node.appendChild(name);
                subMenu_li_node.appendChild(a_node);
                ul_node.appendChild(subMenu_li_node);
            }

            li_node.appendChild(ul_node);
            menu.appendChild(li_node);
        }
    }

    return{
        init : init
    }
})();

window.onload = function (){MenuModule.init('menu', JSON_menu)};

//
//var jsonMenu = {
//    menu: [{
//        name: 'Home',
//        href: '#home',
//        submenu: [{
//            name: 'Shop',
//            href: '#home-1',
//            submenu: null
//        }]
//    }, {
//        name: 'About us',
//        href: '#aboutus',
//        submenu: [{
//            name: 'Service',
//            href: '#aboutus-1',
//            submenu: null
//        }, {
//            name: 'Employee',
//            href: '#aboutus-2',
//            submenu: null
//        }]
//    }, {
//        name: 'Gallery',
//        href: '#gallery',
//        submenu: [{
//            name: 'Nature',
//            href: '#gallery-1',
//            submenu: null
//        }, {
//            name: 'Sea',
//            href: '#gallery-2',
//            submenu: null
//        }]
//    }, {
//        name: 'Contact us',
//        href: '#contactus',
//        submenu: [{
//            name: 'Contacts',
//            href: '#contactus-1',
//            submenu: null
//        }]
//    }]
//};
//
//var MenuModule = (function($){
//
//    var menuItems;
//
//    function init(menu, data) {
//        menuItems = $(menu)[0];
//        $.each(data.menu, function () {
//            $(menuItems).append(
//                getMenuItem(this)
//            );
//        });
//        $(menuItems).find('li').on('mouseover', function(){
//            $(this).find('ul').show();
//        });
//        $(menuItems).find('li').on('mouseout', function(){
//            $(this).find('ul').hide();
//        });
//    }
//
//    function getMenuItem(itemData) {
//        var item = $("<li>").append($("<a>", {href: itemData.href,html: itemData.name}));
//        if (itemData.submenu) {
//            var subList = $("<ul>");
//            $.each(itemData.submenu, function () {
//                subList.append(getMenuItem(this));
//            });
//            item.append(subList);
//        }
//        return item;
//    }
//
//    return{
//        init : init
//    }
//})(jQuery);
//
//window.onload = function (){MenuModule.init('#menu', jsonMenu)};