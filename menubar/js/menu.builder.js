var jsonMenu = {
    menu: [{
        name: 'Home',
        href: '#home',
        submenu: [{
            name: 'Shop',
            href: '#home-1',
            submenu: null
        }]
    }, {
        name: 'About us',
        href: '#aboutus',
        submenu: [{
            name: 'Service',
            href: '#aboutus-1',
            submenu: null
        }, {
            name: 'Employee',
            href: '#aboutus-2',
            submenu: null
        }]
    }, {
        name: 'Gallery',
        href: '#gallery',
        submenu: [{
            name: 'Nature',
            href: '#gallery-1',
            submenu: null
        }, {
            name: 'Sea',
            href: '#gallery-2',
            submenu: null
        }]
    }, {
        name: 'Contact us',
        href: '#contactus',
        submenu: [{
            name: 'Contacts',
            href: '#contactus-1',
            submenu: null
        }]
    }]
};

var MenuModule = (function($){

    var menuItems;

    function init(menu, data) {
        menuItems = $(menu)[0];
        $.each(data.menu, function () {
            $(menuItems).append(
                getMenuItem(this)
            );
        });
        $(menuItems).find('li').on('mouseover', function(){
            $(this).find('ul').show();
        });
        $(menuItems).find('li').on('mouseout', function(){
            $(this).find('ul').hide();
        });
    }

    function getMenuItem(itemData) {
        var item = $("<li>").append($("<a>", {href: itemData.href,html: itemData.name}));
        if (itemData.submenu) {
            var subList = $("<ul>");
            $.each(itemData.submenu, function () {
                subList.append(getMenuItem(this));
            });
            item.append(subList);
        }
        return item;
    }

    return{
        init : init
    }
})(jQuery);

window.onload = function (){MenuModule.init('#menu', jsonMenu)};