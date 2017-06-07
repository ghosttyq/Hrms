


(function ($) {
    "use strict";
    var mainApp = {
        slide_fun: function () {
            $('#carousel-example').carousel({
                interval:3000 // THIS TIME IS IN MILLI SECONDS
            })
        },
        dataTable_fun: function () {
            $('#dataTables-example').dataTable({
                language: {
                    lengthMenu: '<select class="form-control input-sm">' + '<option value="10">10</option>' +
                    '<option value="20">20</option>' + '<option value="30">30</option>' +
                    '<option value="40">40</option>' + '<option value="50">50</option>' +
                    '</select> 条记录/页',//左上角的分页大小显示。
                    search: '搜索',//右上角的搜索文本，可以写html标签
                    paginate: {//分页的样式内容。
                        previous: "上页",
                        next: "下页",
                        first: "第一页",
                        last: "最后"
                    },
                    zeroRecords: "没有内容",//table tbody内容为空时，tbody的内容。
                    //下面三者构成了总体的左下角的内容。
                    info: "总共_PAGES_ 页，第_START_ 到第 _END_ ",//左下角的信息显示，大写的词为关键字。
                    infoEmpty: "0条记录",//筛选为空时左下角的显示。
                    infoFiltered: "",//筛选之后的左下角筛选提示，
                    scrollX: false
                },
            });
        },

        custom_fun:function()
        {
        },

    }


    $(document).ready(function () {
        mainApp.slide_fun();
        mainApp.dataTable_fun();
        mainApp.custom_fun();
    });
}(jQuery));


