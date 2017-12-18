/**
 * Created by Yz on 2017/11/1.
 */
(function($){
    $.fn.maxHeight = function(){
        var max = 0;
        debugger;
        for(var i=0;i<this.length;i++){
            var height = $($(this)[i]).height();
            console.log(height);
        }
        return max;
    }
})(jQuery);