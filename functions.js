<script type="text/javascript">

if (typeof String.prototype.startsWith != 'function') {
  String.prototype.startsWith = function (str){
    return this.indexOf(str) == 0;
  };
}     


var pathname =  window.top.location.href;
var url = window.location.href;
     
     console.log(pathname);
     console.log(window.location);
    
      if(!pathname.startsWith("https://module.lafourchette.com/")){
          $("#belt, .belt").css("display","none");
          
      }
</script>
