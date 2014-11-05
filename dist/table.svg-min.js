// table.svg 0.1.0
// 
// Copyright (c) 2014 cocu
//
// Licensed under the Apache License, Version 2.0 (the "License")
//
// github: https://github.com/cocu/table.svg
// build : 2014-11-05
var TableSVG=function(){function a(){}function b(a){var b=["rootWidth","rootHeight","viewBox"],c=b.filter(function(b){return void 0===a||void 0===a[b]}).join(", ");if(c.length>0)throw"NoRequiredArgument: "+c;this.classes={active:"active",root:"svg-table",selecting:"selecting",cell:"cell",rowHeader:"row-header",colHeader:"col-header",header:"header"},this.rootElem=this._initRootElem(a.rootWidth,a.rootHeight,a.viewBox),this.status={start:{col:null,row:null},end:{col:null,row:null},isSelecting:!1},this.cells=[],this.table={},this.header={row:{},col:{}};var d=this;f.doc.body.addEventListener("mouseup",function(){d.status.isSelecting&&d._activateSelectingCells.call(d),d.status.isSelecting=!1})}var c={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/2000/xhtml",xlink:"http://www.w3.org/1999/xlink"},d={},e={};a.Mode={},a._={};var f={xmlns:c,win:window,doc:window.document};a._.global=f,a.createElement=function(a){return f.doc.createElementNS(c.svg,a)};var g=function(){var a=function(a,b){console.log("[table.svg]"+a+" "+b)};this.fatal=function(b){a("[FATAL]",b)},this.warn=function(b){a("[WARN]",b)},this.info=function(b){a("[INFO]",b)},this.debug=function(b){a("[DEBUG]",b)}}();return function(a){a._initRootElem=function(a,b,c){var e=Snap(d.createElement("svg"));return e.node.setAttribute("viewBox",c),e.node.setAttribute("height",b),e.node.setAttribute("width",a),e.addClass(this.classes.root),e},a._clearSelectingCells=function(){var a=this;this.cells.forEach(function(b){b.removeClass(a.classes.selecting)})},a._activateSelectingCells=function(){this._clearSelectingCells(),this._toggleSelectingCellClass(this.classes.active)},a._toggleSelectingCellClass=function(a,b){void 0===b&&(b=!this.table[this.status.start.row][this.status.start.col].hasClass(a)),this.selectMode.updateStatus(this.status);var c=this;this.cells.forEach(function(d){c.selectMode.isInSelecting(d,c.status)&&d.toggleClass(a,b)})},a._eventHandlerFactory=function(a,b){var c=this,d=this.status,e=function(){d.start.col=a,d.start.row=b},f=function(){d.end.col=a,d.end.row=b},g=function(){c._toggleSelectingCellClass(c.classes.selecting,!0)};return{mousedown:function(a){e(),f(),d.isSelecting=!0,g(),a.preventDefault()},mouseover:function(a){c._clearSelectingCells(),d.isSelecting&&0!=a.buttons&&a.which%2!=0&&(f(),g()),a.preventDefault()}}},a._registerCell=function(a,b,c){a.addClass(this.classes.cell),a.data("row",b),a.data("col",c),this.cells.push(a),void 0===this.table[b]&&(this.table[b]={}),this.table[b][c]=a},a._setCellHandlers=function(a,b,c){var d=this._eventHandlerFactory(c,b);return a.node.addEventListener("mousedown",d.mousedown),a.node.addEventListener("mouseover",d.mouseover),a},a._registerRowHeader=function(a,b){a.addClass(this.classes.rowHeader),a.addClass(this.classes.header),a.data("row",b),this.header.row[b]=a},a._registerColHeader=function(a,b){a.addClass(this.classes.colHeader),a.addClass(this.classes.header),a.data("col",b),this.header.col[b]=a},a.getRootElem=function(){return this.rootElem.node},a.createCell=function(a,b,c,d){var e=this.genCellElem(a,b,c,d);return this._registerCell(e,a,b),this._setCellHandlers(e,a,b),e},a.createRowHeader=function(a,b){var c=this.genRowHeaderElem(a,b);return this._registerRowHeader(c,a),c},a.createColHeader=function(a,b){var c=this.genColHeaderElem(a,b);return this._registerColHeader(c,a),c},a.getRootElem=function(){return this.rootElem.node},a.genRowHeaderElem=function(){},a.genColHeaderElem=function(){},a.genCellElem=function(a,b,c,e){var f=Snap(d.createElement("rect"));return f.attr({width:c,height:e}),f},a.generateTable=function(){throw"NotImplementedError: generateTable"},a.isInSelecting=function(){throw"NotImplementedError: isInSelecting"}}(b.prototype),a.addMode=function(c,e,h){e?(parent=a.Mode[e],void 0===parent&&g.fatal("no such mode error mode:"+e)):parent=b;var i=h(parent,f,d);!i instanceof b&&g.warn("no inherit AbstractTable. please set prototype AbstractTable(first argument) modeName:"+c),a.Mode[c]=i},a.plugin=function(c){c(a,b,f,d)},e={},e.horizontal=function(a){return{updateStatus:function(b){var c=b.start.col+b.start.row*a,d=b.end.col+b.end.row*a;b.min=Math.min(c,d),b.max=Math.max(c,d)},isInSelecting:function(b,c){var d=b.data("col"),e=b.data("row"),f=d+e*a;return c.min<=f&&f<=c.max}}},e.vertical=function(a){return{updateStatus:function(b){var c=b.start.col*a+b.start.row,d=b.end.col*a+b.end.row;b.min=Math.min(c,d),b.max=Math.max(c,d)},isInSelecting:function(b,c){var d=b.data("col"),e=b.data("row"),f=d*a+e;return c.min<=f&&f<=c.max}}},d={},d.sum=function(a){return a.reduce(function(a,b){return a+b})},d.inherit=function(a,b){a._parent=b,a.prototype=Object.create(b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}})},d.translate=function(a,b,c){a.transform("translate("+b+","+c+")")},d.createElement=function(a){return f.doc.createElementNS(c.svg,a)},d.logger=g,d.selectMode=e,a}();TableSVG.addMode("VerticalTable",null,function(a,b,c){function d(b){var d=["rowHeights","colWidths","rootHeight","rootWidth"],e=d.filter(function(a){return void 0===b||void 0===b[a]}).join(", ");if(e.length>0)throw"NoRequiredArgument: "+e;var f=b.rowHeights,g=b.colWidths,h=b.rootHeight,i=b.rootWidth,j=c.sum(g),k=Math.max.apply(null,f.map(c.sum)),l=b.colHeaders,m=b.colHeaderHeight?b.colHeaderHeight:0;a.call(this,{rootHeight:h,rootWidth:i,viewBox:"0 "+-m+" "+j+" "+(m+k)});var n=g.length;if(n!==f.length)throw"no match the number of col and row, col:"+n+" row:"+row.length;this._rootHeight=h,this._rootWidth=i,this._colNum=n,this._rowHeights=f,this._colWidths=g,this._viewWidth=j,this._viewHeight=k,this._colHeaders=l,this._colHeaderHeight=m,this.selectMode=c.selectMode.horizontal(n),this._initTable()}return c.inherit(d,a),function(a){a._initTable=function(){var a=this,b=this.rootElem,d=0;this._colWidths.map(function(e,f){var g=0,h=a._rowHeights[f].map(function(b,d){var h=a.createCell(d,f,e,b);return c.translate(h,0,g),g+=b,h}),i=b.g();return h.map(function(a){i.add(a)}),c.translate(i,d,0),d+=e,i}),d=0;var e=Snap(c.createElement("g"));this._colWidths.map(function(b,f){var g=a.createColHeader(f,b);c.translate(g,d,0),d+=b,e.add(g)}),b.add(e)},a.genColHeaderElem=function(a,b){var d=Snap(c.createElement("g"));return d.rect(0,-this._colHeaderHeight,b,this._colHeaderHeight),d.text(b/2,-this._colHeaderHeight,this._colHeaders[a]),d}}(d.prototype),d}),TableSVG.addMode("Table",null,function(a,b,c){function d(b){var d=["rowHeights","colWidths","rootHeight","rootWidth"],e=d.filter(function(a){return void 0===b||void 0===b[a]}).join(", ");if(e.length>0)throw"NoRequiredArgument: "+e;var f=b.rowHeights,g=b.colWidths,h=b.rootHeight,i=b.rootWidth,j=f.length,k=g.length,l=c.sum(g),m=c.sum(f),n=b.colHeaderHeight?b.colHeaderHeight:0;a.call(this,{rootHeight:h,rootWidth:i,viewBox:"0 "+-n+" "+l+" "+(n+m)}),this._colWidths=g,this._rowHeights=f,this._colNum=k,this._rowNum=j,this._viewHeight=m,this._viewWidth=l,this.selectMode=c.selectMode.vertical(j),this._initTable()}return c.inherit(d,a),function(a){a._initTable=function(){var a=this,b=this.rootElem,d=0;this._colWidths.map(function(e,f){var g=0,h=a._rowHeights.map(function(b,d){var h=a.createCell(d,f,e,b);return c.translate(h,0,g),g+=b,h}),i=b.g();return h.map(function(a){i.add(a)}),c.translate(i,d,0),d+=e,i})}}(d.prototype),d});