(function(b){b.eb=b.eb||{};b.eb.ie=function(e,c){if(b.browser.msie){var d=Math.floor(b.browser.version);if(d>=e&&d<=c){return true}}return false};b.eb.color=function(){var c=function(e,d){var f="0";e=e+"";while(e.length<d){e=f+e}return e};this.changeColor=function(e,h,k){e=e.replace(/^\s*|\s*$/,"");e=e.replace(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i,"#$1$1$2$2$3$3");var j=Math.round(h*256)*(k?-1:1),f=e.match(new RegExp("^rgba?\\(\\s*(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])\\s*,\\s*(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])\\s*,\\s*(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])(?:\\s*,\\s*(0|1|0?\\.\\d+))?\\s*\\)$","i")),i=!!f&&f[4]!=null?f[4]:null,d=!!f?[f[1],f[2],f[3]]:e.replace(/^#?([a-f0-9][a-f0-9])([a-f0-9][a-f0-9])([a-f0-9][a-f0-9])/i,function(){return parseInt(arguments[1],16)+","+parseInt(arguments[2],16)+","+parseInt(arguments[3],16)}).split(/,/),g;return !!f?"rgb"+(i!==null?"a":"")+"("+Math[k?"max":"min"](parseInt(d[0],10)+j,k?0:255)+", "+Math[k?"max":"min"](parseInt(d[1],10)+j,k?0:255)+", "+Math[k?"max":"min"](parseInt(d[2],10)+j,k?0:255)+(i!==null?", "+i:"")+")":["#",c(Math[k?"max":"min"](parseInt(d[0],10)+j,k?0:255).toString(16),2),c(Math[k?"max":"min"](parseInt(d[1],10)+j,k?0:255).toString(16),2),c(Math[k?"max":"min"](parseInt(d[2],10)+j,k?0:255).toString(16),2)].join("")};this.lighten=function(d,e){return changeColor(d,e,false)};this.darken=function(d,e){return changeColor(d,e,true)};return this}();function a(e){function f(i){i.each(function(){var m=0;b(this).children("li").each(function(){var n=b(this).outerWidth();if(n>m){m=n}});b(this).width(m)})}if(b.eb.ie(0,6)){e=e||b("html");b('.row-fluid [class*="span"]:first-child, .row [class*="span"]:first-child').addClass("span-first-child");var k=["dropdown-submenu"];for(var g in k){var d="li."+k[g];var j=k[g]+"-hover";b("ul",e).on("mouseenter",d,function(){b(this).addClass(j)}).on("mouseleave",d,function(){b(this).removeClass(j)})}b(".dropdown-submenu > a",e).after('<span class="dropdown-tri"></span>');b(".dropdown-submenu.pull-left",e).removeClass("pull-left").addClass("dropdown-submenu-pull-left");f(b(".dropdown-menu:visible",e));b(".dropdown-toggle",e).parent().on("propertychange",function(){f(b(".dropdown-menu:visible",this))});var h=["btn-primary","btn-warning","btn-danger","btn-success","btn-info","btn-inverse"];var l=["btn-mini","btn-small","btn-large"];b(".btn-group",e).parent().find(".btn-group:eq(0)").addClass("btn-group-first");b(".btn",e).parent().find(".btn:eq(0)").addClass("btn-first");b("body",e).on("mouseenter",".btn",function(){var i=b(this);var m="btn-hover";i.data("ie6hover",m);b.each(h,function(o,n){if(i.hasClass(n)){m=n+"-hover";i.data("ie6hover",m);return false}});i.addClass(m)}).on("mouseleave",".btn",function(){var i=b(this);var m=i.data("ie6hover");i.removeData("ie6hover");if(m){i.removeClass(m)}});b(".btn.dropdown-toggle",e).each(function(){var m=b(this);var i="btn-dropdown-toggle";m.addClass(i);i=null;b.each(h,function(o,n){if(m.hasClass(n)){i=n+"-dropdown-toggle";return false}});if(i){m.addClass(i)}i=null;b.each(l,function(o,n){if(m.hasClass(n)){i=n+"-dropdown-toggle";return false}});if(i){m.addClass(i)}});b(".btn + .btn.dropdown-toggle",e).each(function(){var i=b(this);var m=i.css("background-color");i.css("background-color",b.eb.color.darken(m,0.1))});b.each(["btn-group","dropdown"],function(m,i){b("."+i,e).on("propertychange",function(o){var n=b(this);if(n.data("changeClass")){n.removeData("changeClass");return}if(n.hasClass("open")&&!n.hasClass(i+"-open")){n.addClass(i+"-open");n.data("changeClass",true)}else{if(!n.hasClass("open")&&n.hasClass(i+"-open")){n.removeClass(i+"-open");n.data("changeClass",true)}}})});b(".btn.disabled",e).addClass("btn-disabled");b.each(["btn"],function(m,i){b("button."+i,e).on("propertychange",function(o){var n=b(this);if(n.data("chgDisabled")){n.removeData("chgDisabled");return}if(n.hasClass("disabled")&&!n.hasClass(i+"-disabled")){n.addClass(i+"-disabled");n.data("chgDisabled",true)}else{if(!n.hasClass("disabled")&&n.hasClass(i+"-disabled")){n.removeClass(i+"-disabled");n.data("chgDisabled",true)}}})});b("table.table-hover",e).on("mouseenter","tr",function(){b(this).addClass("tr-hover")}).on("mouseleave","tr",function(){b(this).removeClass("tr-hover")});b('input[type="file"], input[type="image"], input[type="submit"], input[type="reset"], input[type="button"], input[type="radio"], input[type="checkbox"], input[type="text"], input[type="password"], input[type="datetime"], input[type="datetime-local"], input[type="date"], input[type="month"], input[type="time"], input[type="week"], input[type="number"], input[type="email"], input[type="url"], input[type="search"], input[type="tel"], input[type="color"]',e).each(function(){var i=b(this);i.addClass("input-"+i.attr("type"))});b(".form-horizontal .controls:first-child",e).addClass("controls-first-child");b(".checkbox.inline",e).addClass("checkbox-inline");b(".radio.inline",e).addClass("radio-inline");b("select[multiple]",e).addClass("select-multiple");b("select[size]",e).addClass("select-size");b("input[disabled], select[disabled], textarea[disabled]",e).each(function(){var i=b(this);i.addClass(i[0].tagName.toLowerCase()+"-disabled")});b("input[readonly], select[readonly], textarea[readonly]",e).each(function(){var i=b(this);i.addClass(i[0].tagName.toLowerCase()+"-readonly")});b('input[type="radio"][disabled], input[type="checkbox"][disabled]',e).each(function(){var i=b(this);i.addClass(i.attr("type").toLowerCase()+"-disabled")});b('input[type="radio"][readonly], input[type="checkbox"][readonly]',e).each(function(){var i=b(this);i.addClass(i.attr("type").toLowerCase()+"-readonly")});var c=["warning","success","error","info"];b.each(c,function(m,i){b(".control-group."+i,e).addClass("control-group-"+i)});b(".control-group",e).on("propertychange",function(m){if(m.originalEvent.propertyName.toLowerCase()=="classname"){var i=b(this);b.each(c,function(o,n){var p="control-group-"+n;if(i.hasClass(n)){if(!i.hasClass(p)){i.addClass(p)}}else{if(i.hasClass(p)){i.removeClass(p)}}})}});b(".pagination ul li:first-child",e).addClass("first-child");b('[class^="icon-"],[class*=" icon-"]').each(function(){var i=b(this);if(!i.hasClass("icon-xxx")){i.addClass("icon-xxx");i.css("background-position-y",(parseInt(i.css("background-position-y"))+1)+"px")}})}}b.bootstrapIE6=a;b(document).ready(function(){a();if(b.eb.ie(0,6)){}})})(jQuery);