import{$ as W,Aa as oe,Ba as ne,Ca as ae,Ea as y,F as n,G as a,Ga as D,H as C,Ha as se,I as F,Ia as de,Ja as T,K as b,L as N,R as c,S as V,T as B,U,V as O,W as A,ba as q,ca as G,ea as P,f as $,fa as M,g as E,i as _,ja as H,k as h,ka as L,l as x,la as z,o as p,p as f,q as k,qa as J,ra as K,s as d,sa as Q,t as m,ta as X,ua as Y,va as Z,w as I,wa as ee,xa as te,y as u,ya as ie,za as re}from"./chunk-AXSZPWDI.js";var v=(()=>{let e=class e{constructor(t,i,o){this.http=t,this.authService=i,this.settings=o,this.apiUrl="http://127.0.0.1:8000/api/budgets",this.apiUrl=`${this.settings.getApiUrl()}/budgets`}createBudget(t){return this.http.post(`${this.apiUrl}/`,t)}getBudgets(){return this.http.get(`${this.apiUrl}/`)}getBudgetByID(t){return this.http.get(`${this.apiUrl}/${t}`)}updateBudget(t){let i=t.id;return this.http.put(`${this.apiUrl}/${i}/`,t)}deleteBudget(t){return this.http.delete(`${this.apiUrl}/${t}/`)}};e.\u0275fac=function(i){return new(i||e)(_(z),_(de),_(se))},e.\u0275prov=$({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();function fe(r,e){if(r&1&&(n(0,"option",12),c(1),a()),r&2){let s=e.$implicit;u("ngValue",s.name),d(),V(s.name)}}var j=(()=>{let e=class e{constructor(t,i){this.budgetService=t,this.router=i,this.formType="Create",this.budget={amount:0,category:{id:0,name:""}},this.afterBudgetCreateEvent=new k,this.categories=[]}createBudget(){console.log("budget is ",this.budget),this.budgetService.createBudget(this.budget).subscribe(t=>{console.log("Expense created successfully:",t),this.budget={amount:0,category:{id:0,name:""}},this.predictedCategory="",this.afterBudgetCreateEvent.emit()})}updateBudget(){this.budgetService.updateBudget(this.budget).subscribe(t=>{console.log("Expense updated successfully:",t),this.router.navigate(["/budgets"])},t=>{console.log("something happend ",t)})}onFormSubmit(){this.formType==="Create"?this.createBudget():this.formType==="Update"&&this.updateBudget()}};e.\u0275fac=function(i){return new(i||e)(m(v),m(y))},e.\u0275cmp=h({type:e,selectors:[["budget-form"]],inputs:{formType:"formType",budget:"budget",categories:"categories"},outputs:{afterBudgetCreateEvent:"afterBudgetCreateEvent"},decls:17,vars:5,consts:[["BudgetForm","ngForm"],[1,"card","p-4","shadow-lg","bg-light","rounded"],[1,"card-title","text-center","mb-4","text-primary"],[1,"form-container",3,"ngSubmit"],[1,"mb-3"],["for","category",1,"form-label"],["id","category","name","category","required","",1,"form-select",3,"ngModelChange","ngModel"],["class","dropdown-item",3,"ngValue",4,"ngFor","ngForOf"],["for","amount",1,"form-label"],["type","number","id","amount","name","amount","required","",1,"form-control",3,"ngModelChange","ngModel"],[1,"d-flex","justify-content-center"],["type","submit",1,"btn","btn-primary"],[1,"dropdown-item",3,"ngValue"]],template:function(i,o){if(i&1){let g=F();n(0,"div",1)(1,"h2",2),c(2),a(),n(3,"form",3,0),b("ngSubmit",function(){return p(g),f(o.onFormSubmit())}),n(5,"div",4)(6,"label",5),c(7,"Category:"),a(),n(8,"select",6),A("ngModelChange",function(l){return p(g),O(o.budget.category.name,l)||(o.budget.category.name=l),f(l)}),I(9,fe,2,2,"option",7),a()(),n(10,"div",4)(11,"label",8),c(12,"Amount (INR):"),a(),n(13,"input",9),A("ngModelChange",function(l){return p(g),O(o.budget.amount,l)||(o.budget.amount=l),f(l)}),a()(),n(14,"div",10)(15,"button",11),c(16),a()()()()}i&2&&(d(2),B("",o.formType," Budget"),d(6),U("ngModel",o.budget.category.name),d(),u("ngForOf",o.categories),d(4),U("ngModel",o.budget.amount),d(3),B("",o.formType," Budget"))},dependencies:[M,Z,ie,re,J,ee,te,K,Q,oe,Y,X]});let r=e;return r})();var be=(r,e,s,t,i,o,g,w)=>({badge:!0,"category-badge":!0,"food-badge":r,"grocery-badge":e,"utilities-badge":s,"clothes-badge":t,"commute-badge":i,"health-badge":o,"entertainment-badge":g,"rent-badge":w});function ye(r,e){if(r&1){let s=F();n(0,"tr",12)(1,"td",13)(2,"span",14),c(3),a()(),n(4,"td"),c(5),q(6,"currency"),a(),n(7,"td",13)(8,"button",15),b("click",function(){let i=p(s).$implicit,o=N();return f(o.deleteBudget(i.id))}),C(9,"i",16),a(),n(10,"button",17),b("click",function(){let i=p(s).$implicit,o=N();return f(o.updateBudget(i.id))}),C(11,"i",18),a()()()}if(r&2){let s=e.$implicit;d(2),u("ngClass",W(6,be,s.category.name==="Food",s.category.name==="Grocery",s.category.name==="Utilities",s.category.name==="Clothes",s.category.name==="Commute",s.category.name==="Health",s.category.name==="Entertainment",s.category.name==="Rent")),d(),B(" ",s.category.name," "),d(2),V(G(6,3,s.amount,"INR"))}}var ue=(()=>{let e=class e{constructor(t,i,o){this.budgetService=t,this.expenseService=i,this.router=o,this.budgets=[],this.categories=[]}ngOnInit(){this.fetchBudgets(),this.fetchCategories()}fetchCategories(){this.expenseService.getCategories().subscribe(t=>{this.categories=t})}fetchBudgets(){this.budgetService.getBudgets().subscribe(t=>{console.log("Response for budgets ",t),this.budgets=t})}deleteBudget(t){confirm("Are you sure you want to delete this budget?")&&this.budgetService.deleteBudget(t).subscribe(()=>{console.log("Budget deleted successfully"),this.fetchBudgets()})}updateBudget(t){this.router.navigate(["/budgets/",t])}};e.\u0275fac=function(i){return new(i||e)(m(v),m(T),m(y))},e.\u0275cmp=h({type:e,selectors:[["app-budget-view"]],decls:20,vars:2,consts:[[1,"container-fluid","my-4"],[1,"row"],[1,"col-lg-5","col-md-6","mb-4"],["formType","Create",3,"afterBudgetCreateEvent","categories"],[1,"col-lg-7","col-md-6"],[1,"card","p-4","shadow-lg","bg-light","rounded"],[1,"card-title","text-center","mb-4","text-primary"],[1,"table-responsive","mt-4"],[1,"table","table-bordered"],[1,"data-table-header"],["scope","col"],["class","data-table-item",4,"ngFor","ngForOf"],[1,"data-table-item"],[1,"text-center"],[3,"ngClass"],["title","Delete",1,"btn","btn-danger",3,"click"],[1,"fa","fa-trash"],["title","Edit",1,"btn","btn-info","mx-2",3,"click"],[1,"fa","fa-edit"]],template:function(i,o){i&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"budget-form",3),b("afterBudgetCreateEvent",function(){return o.fetchBudgets()}),a()(),n(4,"div",4)(5,"div",5)(6,"h2",6),c(7,"Budgets"),a(),n(8,"div",7)(9,"table",8)(10,"thead",9)(11,"tr")(12,"th",10),c(13,"Category"),a(),n(14,"th",10),c(15,"Amount"),a(),n(16,"th",10),c(17,"Action"),a()()(),n(18,"tbody"),I(19,ye,12,15,"tr",11),a()()()()()()()),i&2&&(d(3),u("categories",o.categories),d(16),u("ngForOf",o.budgets))},dependencies:[P,M,j,H]});let r=e;return r})();var ge=(()=>{let e=class e{constructor(t,i,o,g){this.route=t,this.expenseService=i,this.router=o,this.budgetService=g,this.categories=[]}ngOnInit(){let t=this.route.snapshot.params.budgetId;this.expenseService.getCategories().subscribe(i=>{this.categories=i}),this.budget=this.budgetService.getBudgetByID(t).subscribe(i=>{console.log("Got budget:",i),this.budget=i},i=>{console.error("Theres some error in getting budget:",i)})}updateBudget(){this.budgetService.updateBudget(this.budget).subscribe(t=>{console.log("Budget updated successfully:",t),this.router.navigate(["/budgets"])},t=>{console.log("something happend ",t)})}};e.\u0275fac=function(i){return new(i||e)(m(ae),m(T),m(y),m(v))},e.\u0275cmp=h({type:e,selectors:[["app-budget-update"]],decls:2,vars:2,consts:[[1,"container","mt-5"],["formType","Update",3,"categories","budget"]],template:function(i,o){i&1&&(n(0,"div",0),C(1,"budget-form",1),a()),i&2&&(d(),u("categories",o.categories)("budget",o.budget))},dependencies:[j]});let r=e;return r})();var ve=[{path:"",component:ue},{path:":budgetId",component:ge}],le=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=x({type:e}),e.\u0275inj=E({imports:[D.forChild(ve),D]});let r=e;return r})();var Ge=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=x({type:e}),e.\u0275inj=E({imports:[L,le,ne]});let r=e;return r})();export{Ge as BudgetModule};
