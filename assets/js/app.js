$(document).ready(function(){
  function highlight_map_states(){
    if($(".states_section").length>0){
      $(".states_section .list_states .item .link").hover(function(){
        var a="#state_"+$(this).text().toLowerCase();
        $(a).attr("class","state hover")
      },function(){
        var a="#state_"+$(this).text().toLowerCase();
        $(a).attr("class","state")
      })
    }
  };

  function table_state(){
    var estado = $("a[id*='state']");
    var table = $('#filiadas-brasil');
    var colunaestado = $('#filiadas-brasil tbody tr td:last-child');
    $(estado).click(function(){
      var rex = new RegExp($(this).data("estado"), 'i');
      $('#filiadas-brasil .busca tr').hide();
      $('#filiadas-brasil .busca tr').filter(function () {
          return rex.test($(this).find(".uf").text());
      }).show();
      $(table).show();
    });
  }
  table_state();
  highlight_map_states();
})
