(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["browse~config~itemdetails"],{2266:function(t,e,i){var n=i("825a"),s=i("e95a"),a=i("50c4"),o=i("f8c2"),r=i("35a1"),l=i("9bdd"),c=function(t,e){this.stopped=t,this.result=e},u=t.exports=function(t,e,i,u,h){var d,p,f,v,m,g,b,x=o(e,i,u?2:1);if(h)d=t;else{if(p=r(t),"function"!=typeof p)throw TypeError("Target is not iterable");if(s(p)){for(f=0,v=a(t.length);v>f;f++)if(m=u?x(n(b=t[f])[0],b[1]):x(t[f]),m&&m instanceof c)return m;return new c(!1)}d=p.call(t)}g=d.next;while(!(b=g.call(d)).done)if(m=l(d,x,b.value,u),"object"==typeof m&&m&&m instanceof c)return m;return new c(!1)};u.stop=function(t){return new c(!0,t)}},"24e2":function(t,e,i){"use strict";var n=i("e0c7");e["a"]=n["a"]},2626:function(t,e,i){"use strict";var n=i("d066"),s=i("9bf2"),a=i("b622"),o=i("83ab"),r=a("species");t.exports=function(t){var e=n(t),i=s.f;o&&e&&!e[r]&&i(e,r,{configurable:!0,get:function(){return this}})}},"326d":function(t,e,i){"use strict";var n=i("e449");e["a"]=n["a"]},"4ec9":function(t,e,i){"use strict";var n=i("6d61"),s=i("6566");t.exports=n("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),s,!0)},6566:function(t,e,i){"use strict";var n=i("9bf2").f,s=i("7c73"),a=i("e2cc"),o=i("f8c2"),r=i("19aa"),l=i("2266"),c=i("7dd0"),u=i("2626"),h=i("83ab"),d=i("f183").fastKey,p=i("69f3"),f=p.set,v=p.getterFor;t.exports={getConstructor:function(t,e,i,c){var u=t((function(t,n){r(t,u,e),f(t,{type:e,index:s(null),first:void 0,last:void 0,size:0}),h||(t.size=0),void 0!=n&&l(n,t[c],t,i)})),p=v(e),m=function(t,e,i){var n,s,a=p(t),o=g(t,e);return o?o.value=i:(a.last=o={index:s=d(e,!0),key:e,value:i,previous:n=a.last,next:void 0,removed:!1},a.first||(a.first=o),n&&(n.next=o),h?a.size++:t.size++,"F"!==s&&(a.index[s]=o)),t},g=function(t,e){var i,n=p(t),s=d(e);if("F"!==s)return n.index[s];for(i=n.first;i;i=i.next)if(i.key==e)return i};return a(u.prototype,{clear:function(){var t=this,e=p(t),i=e.index,n=e.first;while(n)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete i[n.index],n=n.next;e.first=e.last=void 0,h?e.size=0:t.size=0},delete:function(t){var e=this,i=p(e),n=g(e,t);if(n){var s=n.next,a=n.previous;delete i.index[n.index],n.removed=!0,a&&(a.next=s),s&&(s.previous=a),i.first==n&&(i.first=s),i.last==n&&(i.last=a),h?i.size--:e.size--}return!!n},forEach:function(t){var e,i=p(this),n=o(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:i.first){n(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!g(this,t)}}),a(u.prototype,i?{get:function(t){var e=g(this,t);return e&&e.value},set:function(t,e){return m(this,0===t?0:t,e)}}:{add:function(t){return m(this,t=0===t?0:t,t)}}),h&&n(u.prototype,"size",{get:function(){return p(this).size}}),u},setStrong:function(t,e,i){var n=e+" Iterator",s=v(e),a=v(n);c(t,e,(function(t,e){f(this,{type:n,target:t,state:s(t),kind:e,last:void 0})}),(function(){var t=a(this),e=t.kind,i=t.last;while(i&&i.removed)i=i.previous;return t.target&&(t.last=i=i?i.next:t.state.first)?"keys"==e?{value:i.key,done:!1}:"values"==e?{value:i.value,done:!1}:{value:[i.key,i.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),i?"entries":"values",!i,!0),u(e)}}},"68dd":function(t,e,i){},"6d61":function(t,e,i){"use strict";var n=i("23e7"),s=i("da84"),a=i("94ca"),o=i("6eeb"),r=i("f183"),l=i("2266"),c=i("19aa"),u=i("861d"),h=i("d039"),d=i("1c7e"),p=i("d44e"),f=i("7156");t.exports=function(t,e,i,v,m){var g=s[t],b=g&&g.prototype,x=g,I=v?"set":"add",y={},$=function(t){var e=b[t];o(b,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(m&&!u(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return m&&!u(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(m&&!u(t))&&e.call(this,0===t?0:t)}:function(t,i){return e.call(this,0===t?0:t,i),this})};if(a(t,"function"!=typeof g||!(m||b.forEach&&!h((function(){(new g).entries().next()})))))x=i.getConstructor(e,t,v,I),r.REQUIRED=!0;else if(a(t,!0)){var C=new x,k=C[I](m?{}:-0,1)!=C,O=h((function(){C.has(1)})),S=d((function(t){new g(t)})),w=!m&&h((function(){var t=new g,e=5;while(e--)t[I](e,e);return!t.has(-0)}));S||(x=e((function(e,i){c(e,x,t);var n=f(new g,e,x);return void 0!=i&&l(i,n[I],n,v),n})),x.prototype=b,b.constructor=x),(O||w)&&($("delete"),$("has"),v&&$("get")),(w||k)&&$(I),m&&b.clear&&delete b.clear}return y[t]=x,n({global:!0,forced:x!=g},y),p(x,t),m||i.setStrong(x,t,v),x}},"8adc":function(t,e,i){},b810:function(t,e,i){"use strict";var n=i("ce7e");e["a"]=n["a"]},b974:function(t,e,i){"use strict";i("99af"),i("4de4"),i("c740"),i("a630"),i("caad"),i("d81d"),i("13d5"),i("fb6a"),i("a434"),i("b0c0"),i("4ec9"),i("d3b7"),i("ac1f"),i("25f0"),i("2532"),i("3ca3"),i("1276"),i("2ca0"),i("498a"),i("ddb0");var n=i("b85c"),s=i("ade3"),a=i("5530"),o=(i("4ff9"),i("68dd"),i("4160"),i("3835")),r=(i("8adc"),i("58df")),l=i("0789"),c=i("9d26"),u=i("a9ad"),h=i("4e82"),d=i("7560"),p=i("f2e7"),f=i("1c87"),v=i("af2b"),m=i("d9bd"),g=Object(r["a"])(u["a"],v["a"],f["a"],d["a"],Object(h["a"])("chipGroup"),Object(p["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])(Object(a["a"])(Object(a["a"])({"v-chip":!0},f["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(f["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var i=Object(o["a"])(e,2),n=i[0],s=i[1];t.$attrs.hasOwnProperty(n)&&Object(m["a"])(n,s,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(c["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(l["b"],t)},genClose:function(){var t=this;return this.$createElement(c["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],i=this.generateRouteLink(),n=i.tag,s=i.data;s.attrs=Object(a["a"])(Object(a["a"])({},s.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:s.attrs.tabindex}),s.directives.push({name:"show",value:this.active}),s=this.setBackgroundColor(this.color,s);var o=this.textColor||this.outlined&&this.color;return t(n,this.setTextColor(o,s),e)}}),b=g,x=i("326d"),I=(i("c975"),i("a15b"),i("b64b"),i("159b"),i("cf36"),i("5607")),y=i("2b0e"),$=i("132d"),C=i("d9f7"),k=i("80d2"),O=y["a"].extend({name:"v-simple-checkbox",functional:!0,directives:{ripple:I["a"]},props:Object(a["a"])(Object(a["a"])(Object(a["a"])({},u["a"].options.props),d["a"].options.props),{},{disabled:Boolean,ripple:{type:Boolean,default:!0},value:Boolean,indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},onIcon:{type:String,default:"$checkboxOn"},offIcon:{type:String,default:"$checkboxOff"}}),render:function(t,e){var i=e.props,n=e.data,s=(e.listeners,[]);if(i.ripple&&!i.disabled){var a=t("div",u["a"].options.methods.setTextColor(i.color,{staticClass:"v-input--selection-controls__ripple",directives:[{name:"ripple",value:{center:!0}}]}));s.push(a)}var o=i.offIcon;i.indeterminate?o=i.indeterminateIcon:i.value&&(o=i.onIcon),s.push(t($["a"],u["a"].options.methods.setTextColor(i.value&&i.color,{props:{disabled:i.disabled,dark:i.dark,light:i.light}}),o));var r={"v-simple-checkbox":!0,"v-simple-checkbox--disabled":i.disabled};return t("div",Object(C["a"])(n,{class:r,on:{click:function(t){t.stopPropagation(),n.on&&n.on.input&&!i.disabled&&Object(k["F"])(n.on.input).forEach((function(t){return t(!i.value)}))}}}),s)}}),S=i("b810"),w=i("24e2"),T=i("da13"),A=i("1800"),j=i("5d23"),D=i("8860"),M=Object(r["a"])(u["a"],d["a"]).extend({name:"v-select-list",directives:{ripple:I["a"]},props:{action:Boolean,dense:Boolean,hideSelected:Boolean,items:{type:Array,default:function(){return[]}},itemDisabled:{type:[String,Array,Function],default:"disabled"},itemText:{type:[String,Array,Function],default:"text"},itemValue:{type:[String,Array,Function],default:"value"},noDataText:String,noFilter:Boolean,searchInput:null,selectedItems:{type:Array,default:function(){return[]}}},computed:{parsedItems:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},tileActiveClass:function(){return Object.keys(this.setTextColor(this.color).class||{}).join(" ")},staticNoDataTile:function(){var t={attrs:{role:void 0},on:{mousedown:function(t){return t.preventDefault()}}};return this.$createElement(T["a"],t,[this.genTileContent(this.noDataText)])}},methods:{genAction:function(t,e){var i=this;return this.$createElement(A["a"],[this.$createElement(O,{props:{color:this.color,value:e},on:{input:function(){return i.$emit("select",t)}}})])},genDivider:function(t){return this.$createElement(S["a"],{props:t})},genFilteredText:function(t){if(t=t||"",!this.searchInput||this.noFilter)return Object(k["k"])(t);var e=this.getMaskedCharacters(t),i=e.start,n=e.middle,s=e.end;return"".concat(Object(k["k"])(i)).concat(this.genHighlight(n)).concat(Object(k["k"])(s))},genHeader:function(t){return this.$createElement(w["a"],{props:t},t.header)},genHighlight:function(t){return'<span class="v-list-item__mask">'.concat(Object(k["k"])(t),"</span>")},getMaskedCharacters:function(t){var e=(this.searchInput||"").toString().toLocaleLowerCase(),i=t.toLocaleLowerCase().indexOf(e);if(i<0)return{start:"",middle:t,end:""};var n=t.slice(0,i),s=t.slice(i,i+e.length),a=t.slice(i+e.length);return{start:n,middle:s,end:a}},genTile:function(t){var e=this,i=t.item,n=t.index,s=t.disabled,o=void 0===s?null:s,r=t.value,l=void 0!==r&&r;l||(l=this.hasItem(i)),i===Object(i)&&(o=null!==o?o:this.getDisabled(i));var c={attrs:{"aria-selected":String(l),id:"list-item-".concat(this._uid,"-").concat(n),role:"option"},on:{mousedown:function(t){t.preventDefault()},click:function(){return o||e.$emit("select",i)}},props:{activeClass:this.tileActiveClass,disabled:o,ripple:!0,inputValue:l}};if(!this.$scopedSlots.item)return this.$createElement(T["a"],c,[this.action&&!this.hideSelected&&this.items.length>0?this.genAction(i,l):null,this.genTileContent(i,n)]);var u=this,h=this.$scopedSlots.item({parent:u,item:i,attrs:Object(a["a"])(Object(a["a"])({},c.attrs),c.props),on:c.on});return this.needsTile(h)?this.$createElement(T["a"],c,h):h},genTileContent:function(t){var e=this.genFilteredText(this.getText(t));return this.$createElement(j["a"],[this.$createElement(j["c"],{domProps:{innerHTML:e}})])},hasItem:function(t){return this.parsedItems.indexOf(this.getValue(t))>-1},needsTile:function(t){return 1!==t.length||null==t[0].componentOptions||"v-list-item"!==t[0].componentOptions.Ctor.options.name},getDisabled:function(t){return Boolean(Object(k["q"])(t,this.itemDisabled,!1))},getText:function(t){return String(Object(k["q"])(t,this.itemText,t))},getValue:function(t){return Object(k["q"])(t,this.itemValue,this.getText(t))}},render:function(){for(var t=[],e=this.items.length,i=0;i<e;i++){var n=this.items[i];this.hideSelected&&this.hasItem(n)||(null==n?t.push(this.genTile({item:n,index:i})):n.header?t.push(this.genHeader(n)):n.divider?t.push(this.genDivider(n)):t.push(this.genTile({item:n,index:i})))}return t.length||t.push(this.$slots["no-data"]||this.staticNoDataTile),this.$slots["prepend-item"]&&t.unshift(this.$slots["prepend-item"]),this.$slots["append-item"]&&t.push(this.$slots["append-item"]),this.$createElement(D["a"],{staticClass:"v-select-list",class:this.themeClasses,attrs:{role:"listbox",tabindex:-1},props:{dense:this.dense}},t)}}),V=i("c37a"),B=i("8654"),E=i("8547"),L=y["a"].extend({name:"filterable",props:{noDataText:{type:String,default:"$vuetify.noDataText"}}}),_=i("a293"),F={closeOnClick:!1,closeOnContentClick:!1,disableKeys:!0,openOnClick:!1,maxHeight:304},P=Object(r["a"])(B["a"],E["a"],L);e["a"]=P.extend().extend({name:"v-select",directives:{ClickOutside:_["a"]},props:{appendIcon:{type:String,default:"$dropdown"},attach:{type:null,default:!1},cacheItems:Boolean,chips:Boolean,clearable:Boolean,deletableChips:Boolean,disableLookup:Boolean,eager:Boolean,hideSelected:Boolean,items:{type:Array,default:function(){return[]}},itemColor:{type:String,default:"primary"},itemDisabled:{type:[String,Array,Function],default:"disabled"},itemText:{type:[String,Array,Function],default:"text"},itemValue:{type:[String,Array,Function],default:"value"},menuProps:{type:[String,Array,Object],default:function(){return F}},multiple:Boolean,openOnClear:Boolean,returnObject:Boolean,smallChips:Boolean},data:function(){return{cachedItems:this.cacheItems?this.items:[],menuIsBooted:!1,isMenuActive:!1,lastItem:20,lazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,selectedIndex:-1,selectedItems:[],keyboardLookupPrefix:"",keyboardLookupLastTime:0}},computed:{allItems:function(){return this.filterDuplicates(this.cachedItems.concat(this.items))},classes:function(){return Object(a["a"])(Object(a["a"])({},B["a"].options.computed.classes.call(this)),{},{"v-select":!0,"v-select--chips":this.hasChips,"v-select--chips--small":this.smallChips,"v-select--is-menu-active":this.isMenuActive,"v-select--is-multi":this.multiple})},computedItems:function(){return this.allItems},computedOwns:function(){return"list-".concat(this._uid)},computedCounterValue:function(){return this.multiple?this.selectedItems.length:(this.getText(this.selectedItems[0])||"").toString().length},directives:function(){return this.isFocused?[{name:"click-outside",value:{handler:this.blur,closeConditional:this.closeConditional}}]:void 0},dynamicHeight:function(){return"auto"},hasChips:function(){return this.chips||this.smallChips},hasSlot:function(){return Boolean(this.hasChips||this.$scopedSlots.selection)},isDirty:function(){return this.selectedItems.length>0},listData:function(){var t=this.$vnode&&this.$vnode.context.$options._scopeId,e=t?Object(s["a"])({},t,!0):{};return{attrs:Object(a["a"])(Object(a["a"])({},e),{},{id:this.computedOwns}),props:{action:this.multiple,color:this.itemColor,dense:this.dense,hideSelected:this.hideSelected,items:this.virtualizedItems,itemDisabled:this.itemDisabled,itemText:this.itemText,itemValue:this.itemValue,noDataText:this.$vuetify.lang.t(this.noDataText),selectedItems:this.selectedItems},on:{select:this.selectItem},scopedSlots:{item:this.$scopedSlots.item}}},staticList:function(){return(this.$slots["no-data"]||this.$slots["prepend-item"]||this.$slots["append-item"])&&Object(m["b"])("assert: staticList should not be called if slots are used"),this.$createElement(M,this.listData)},virtualizedItems:function(){return this.$_menuProps.auto?this.computedItems:this.computedItems.slice(0,this.lastItem)},menuCanShow:function(){return!0},$_menuProps:function(){var t="string"===typeof this.menuProps?this.menuProps.split(","):this.menuProps;return Array.isArray(t)&&(t=t.reduce((function(t,e){return t[e.trim()]=!0,t}),{})),Object(a["a"])(Object(a["a"])({},F),{},{eager:this.eager,value:this.menuCanShow&&this.isMenuActive,nudgeBottom:t.offsetY?1:0},t)}},watch:{internalValue:function(t){this.initialValue=t,this.setSelectedItems()},isMenuActive:function(t){var e=this;window.setTimeout((function(){return e.onMenuActiveChange(t)}))},items:{immediate:!0,handler:function(t){var e=this;this.cacheItems&&this.$nextTick((function(){e.cachedItems=e.filterDuplicates(e.cachedItems.concat(t))})),this.setSelectedItems()}}},methods:{blur:function(t){B["a"].options.methods.blur.call(this,t),this.isMenuActive=!1,this.isFocused=!1,this.selectedIndex=-1},activateMenu:function(){this.isInteractive&&!this.isMenuActive&&(this.isMenuActive=!0)},clearableCallback:function(){var t=this;this.setValue(this.multiple?[]:void 0),this.setMenuIndex(-1),this.$nextTick((function(){return t.$refs.input&&t.$refs.input.focus()})),this.openOnClear&&(this.isMenuActive=!0)},closeConditional:function(t){return!this.isMenuActive||!this._isDestroyed&&(!this.getContent()||!this.getContent().contains(t.target))&&this.$el&&!this.$el.contains(t.target)&&t.target!==this.$el},filterDuplicates:function(t){for(var e=new Map,i=0;i<t.length;++i){var n=t[i],s=this.getValue(n);!e.has(s)&&e.set(s,n)}return Array.from(e.values())},findExistingIndex:function(t){var e=this,i=this.getValue(t);return(this.internalValue||[]).findIndex((function(t){return e.valueComparator(e.getValue(t),i)}))},getContent:function(){return this.$refs.menu&&this.$refs.menu.$refs.content},genChipSelection:function(t,e){var i=this,n=!this.isInteractive||this.getDisabled(t);return this.$createElement(b,{staticClass:"v-chip--select",attrs:{tabindex:-1},props:{close:this.deletableChips&&!n,disabled:n,inputValue:e===this.selectedIndex,small:this.smallChips},on:{click:function(t){n||(t.stopPropagation(),i.selectedIndex=e)},"click:close":function(){return i.onChipInput(t)}},key:JSON.stringify(this.getValue(t))},this.getText(t))},genCommaSelection:function(t,e,i){var n=e===this.selectedIndex&&this.computedColor,s=!this.isInteractive||this.getDisabled(t);return this.$createElement("div",this.setTextColor(n,{staticClass:"v-select__selection v-select__selection--comma",class:{"v-select__selection--disabled":s},key:JSON.stringify(this.getValue(t))}),"".concat(this.getText(t)).concat(i?"":", "))},genDefaultSlot:function(){var t=this.genSelections(),e=this.genInput();return Array.isArray(t)?t.push(e):(t.children=t.children||[],t.children.push(e)),[this.genFieldset(),this.$createElement("div",{staticClass:"v-select__slot",directives:this.directives},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,t,this.suffix?this.genAffix("suffix"):null,this.genClearIcon(),this.genIconSlot(),this.genHiddenInput()]),this.genMenu(),this.genProgress()]},genIcon:function(t,e,i){var n=V["a"].options.methods.genIcon.call(this,t,e,i);return"append"===t&&(n.children[0].data=Object(C["a"])(n.children[0].data,{attrs:{tabindex:n.children[0].componentOptions.listeners&&"-1","aria-hidden":"true","aria-label":void 0}})),n},genInput:function(){var t=B["a"].options.methods.genInput.call(this);return delete t.data.attrs.name,t.data=Object(C["a"])(t.data,{domProps:{value:null},attrs:{readonly:!0,type:"text","aria-readonly":String(this.isReadonly),"aria-activedescendant":Object(k["o"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(k["o"])(t.data,"attrs.autocomplete","off")},on:{keypress:this.onKeyPress}}),t},genHiddenInput:function(){return this.$createElement("input",{domProps:{value:this.lazyValue},attrs:{type:"hidden",name:this.attrs$.name}})},genInputSlot:function(){var t=B["a"].options.methods.genInputSlot.call(this);return t.data.attrs=Object(a["a"])(Object(a["a"])({},t.data.attrs),{},{role:"button","aria-haspopup":"listbox","aria-expanded":String(this.isMenuActive),"aria-owns":this.computedOwns}),t},genList:function(){return this.$slots["no-data"]||this.$slots["prepend-item"]||this.$slots["append-item"]?this.genListWithSlot():this.staticList},genListWithSlot:function(){var t=this,e=["prepend-item","no-data","append-item"].filter((function(e){return t.$slots[e]})).map((function(e){return t.$createElement("template",{slot:e},t.$slots[e])}));return this.$createElement(M,Object(a["a"])({},this.listData),e)},genMenu:function(){var t=this,e=this.$_menuProps;return e.activator=this.$refs["input-slot"],""===this.attach||!0===this.attach||"attach"===this.attach?e.attach=this.$el:e.attach=this.attach,this.$createElement(x["a"],{attrs:{role:void 0},props:e,on:{input:function(e){t.isMenuActive=e,t.isFocused=e},scroll:this.onScroll},ref:"menu"},[this.genList()])},genSelections:function(){var t,e=this.selectedItems.length,i=new Array(e);t=this.$scopedSlots.selection?this.genSlotSelection:this.hasChips?this.genChipSelection:this.genCommaSelection;while(e--)i[e]=t(this.selectedItems[e],e,e===i.length-1);return this.$createElement("div",{staticClass:"v-select__selections"},i)},genSlotSelection:function(t,e){var i=this;return this.$scopedSlots.selection({attrs:{class:"v-chip--select"},parent:this,item:t,index:e,select:function(t){t.stopPropagation(),i.selectedIndex=e},selected:e===this.selectedIndex,disabled:!this.isInteractive})},getMenuIndex:function(){return this.$refs.menu?this.$refs.menu.listIndex:-1},getDisabled:function(t){return Object(k["q"])(t,this.itemDisabled,!1)},getText:function(t){return Object(k["q"])(t,this.itemText,t)},getValue:function(t){return Object(k["q"])(t,this.itemValue,this.getText(t))},onBlur:function(t){t&&this.$emit("blur",t)},onChipInput:function(t){this.multiple?this.selectItem(t):this.setValue(null),0===this.selectedItems.length?this.isMenuActive=!0:this.isMenuActive=!1,this.selectedIndex=-1},onClick:function(t){this.isInteractive&&(this.isAppendInner(t.target)||(this.isMenuActive=!0),this.isFocused||(this.isFocused=!0,this.$emit("focus")),this.$emit("click",t))},onEscDown:function(t){t.preventDefault(),this.isMenuActive&&(t.stopPropagation(),this.isMenuActive=!1)},onKeyPress:function(t){var e=this;if(!this.multiple&&this.isInteractive&&!this.disableLookup){var i=1e3,n=performance.now();n-this.keyboardLookupLastTime>i&&(this.keyboardLookupPrefix=""),this.keyboardLookupPrefix+=t.key.toLowerCase(),this.keyboardLookupLastTime=n;var s=this.allItems.findIndex((function(t){var i=(e.getText(t)||"").toString();return i.toLowerCase().startsWith(e.keyboardLookupPrefix)})),a=this.allItems[s];-1!==s&&(this.lastItem=Math.max(this.lastItem,s+5),this.setValue(this.returnObject?a:this.getValue(a)),this.$nextTick((function(){return e.$refs.menu.getTiles()})),setTimeout((function(){return e.setMenuIndex(s)})))}},onKeyDown:function(t){var e=this;if(!this.isReadonly||t.keyCode===k["w"].tab){var i=t.keyCode,n=this.$refs.menu;if([k["w"].enter,k["w"].space].includes(i)&&this.activateMenu(),this.$emit("keydown",t),n)return this.isMenuActive&&i!==k["w"].tab&&this.$nextTick((function(){n.changeListIndex(t),e.$emit("update:list-index",n.listIndex)})),!this.isMenuActive&&[k["w"].up,k["w"].down].includes(i)?this.onUpDown(t):i===k["w"].esc?this.onEscDown(t):i===k["w"].tab?this.onTabDown(t):i===k["w"].space?this.onSpaceDown(t):void 0}},onMenuActiveChange:function(t){if(!(this.multiple&&!t||this.getMenuIndex()>-1)){var e=this.$refs.menu;if(e&&this.isDirty)for(var i=0;i<e.tiles.length;i++)if("true"===e.tiles[i].getAttribute("aria-selected")){this.setMenuIndex(i);break}}},onMouseUp:function(t){var e=this;this.hasMouseDown&&3!==t.which&&this.isInteractive&&(this.isAppendInner(t.target)?this.$nextTick((function(){return e.isMenuActive=!e.isMenuActive})):this.isEnclosed&&(this.isMenuActive=!0)),B["a"].options.methods.onMouseUp.call(this,t)},onScroll:function(){var t=this;if(this.isMenuActive){if(this.lastItem>this.computedItems.length)return;var e=this.getContent().scrollHeight-(this.getContent().scrollTop+this.getContent().clientHeight)<200;e&&(this.lastItem+=20)}else requestAnimationFrame((function(){return t.getContent().scrollTop=0}))},onSpaceDown:function(t){t.preventDefault()},onTabDown:function(t){var e=this.$refs.menu;if(e){var i=e.activeTile;!this.multiple&&i&&this.isMenuActive?(t.preventDefault(),t.stopPropagation(),i.click()):this.blur(t)}},onUpDown:function(t){var e=this.$refs.menu;if(e){if(t.preventDefault(),this.multiple)return this.activateMenu();var i=t.keyCode;e.isBooted=!0,window.requestAnimationFrame((function(){e.getTiles(),k["w"].up===i?e.prevTile():e.nextTile(),e.activeTile&&e.activeTile.click()}))}},selectItem:function(t){var e=this;if(this.multiple){var i=(this.internalValue||[]).slice(),n=this.findExistingIndex(t);if(-1!==n?i.splice(n,1):i.push(t),this.setValue(i.map((function(t){return e.returnObject?t:e.getValue(t)}))),this.$nextTick((function(){e.$refs.menu&&e.$refs.menu.updateDimensions()})),!this.multiple)return;var s=this.getMenuIndex();if(this.setMenuIndex(-1),this.hideSelected)return;this.$nextTick((function(){return e.setMenuIndex(s)}))}else this.setValue(this.returnObject?t:this.getValue(t)),this.isMenuActive=!1},setMenuIndex:function(t){this.$refs.menu&&(this.$refs.menu.listIndex=t)},setSelectedItems:function(){var t,e=this,i=[],s=this.multiple&&Array.isArray(this.internalValue)?this.internalValue:[this.internalValue],a=Object(n["a"])(s);try{var o=function(){var n=t.value,s=e.allItems.findIndex((function(t){return e.valueComparator(e.getValue(t),e.getValue(n))}));s>-1&&i.push(e.allItems[s])};for(a.s();!(t=a.n()).done;)o()}catch(r){a.e(r)}finally{a.f()}this.selectedItems=i},setValue:function(t){var e=this.internalValue;this.internalValue=t,t!==e&&this.$emit("change",t)},isAppendInner:function(t){var e=this.$refs["append-inner"];return e&&(e===t||e.contains(t))}}})},cf36:function(t,e,i){}}]);
//# sourceMappingURL=browse~config~itemdetails.4a1fc3ca.js.map