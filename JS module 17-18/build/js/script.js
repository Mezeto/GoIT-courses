$(function(){function a(){this.name="Vasya",this.age=21,this.sex="man",this.stature=170,this.weight=75}function b(){var a=25;this.workingPlace="Заборостроитель",this.salary=2e3,this.working=function(){a--,alert("Осталось постороить еще "+a+" км забора")}}function c(){this.placeStudy="КПИ",this.scholarship=900,this.watchingTV=function(){alert("Сегодня смотрим Интернов 122 серию")}}var d=$("#tmpl").html();$(".search__btn").click(function(a){var b=$(".search__field"),c=b.val();$("main").html(""),b.val("").blur(),$.ajax({method:"GET",url:"https://pixabay.com/api/",data:"key=2701940-50686df15687ed4665dfca084&q="+c+"&image_type=photo&lang=ru,en",success:function(a){for(var b=0;b<a.hits.length;b++){var c=a.hits[b],e=tmpl(d,c);$("main").append(e)}}}),a.preventDefault()}),b.prototype=new a,c.prototype=new a;var e=new b,f=new c;console.log(e),console.log(f)}),function(){var a={};this.tmpl=function b(c,d){var e=/\W/.test(c)?new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+c.replace(/[\r\t\n]/g," ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');"):a[c]=a[c]||b(document.getElementById(c).innerHTML);return d?e(d):e}}();