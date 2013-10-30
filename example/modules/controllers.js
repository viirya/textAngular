var controllersModule = angular.module('controllers',[]);

function demoController($scope) {
    $scope.textAngularOpts = {
    textAngularEditors : {
        demo1 : {
                    toolbar : [
        {icon : "<i class='icon-code'></i>", name : "mark", title : "Toggle Mark"},
        {icon : "h1", name : "h1", title : "H1"},
        {icon : "h2", name : "h2", title : "H2"},
        {icon : "code", name : "code", title : "Code"},
        {icon : "<i class='icon-bold'></i>", name : "b", title : "Bold"},
        {icon : "<i class='icon-italic'></i>", name : "i", title : "Italics"},
                {icon : "p", name : "p", title : "Paragraph"},
        {icon : "<i class='icon-list-ul'></i>", name : "ul", title : "Unordered List"},
                {icon : "<i class='icon-list-ol'></i>", name : "ol", title : "Ordered List"},
        {icon : "<i class='icon-rotate-right'></i>", name : "redo", title : "Redo"},
        {icon : "<i class='icon-undo'></i>", name : "undo", title : "Undo"},
        {icon : "<i class='icon-ban-circle'></i>", name : "clear", title : "Clear"},
        {icon : "<i class='icon-file'></i>", name : "insertImage", title : "Insert Image"},
        {icon : "<i class='icon-html5'></i>", name : "insertHtml", title : "Insert Html"},
        {icon : "<i class='icon-link'></i>", name : "createLink", title : "Create Link"}
        ],
        mark : 
        ["##Try me!",
         "textAngular is a super cool WYSIWYG Text Editor directive for AngularJS",
        ].join("\n"),
        disableStyle : false,
                theme : {
                  editor : {
                    "font-family" : "Roboto",
                    "font-size" : "1.2em",
                    "border-radius" : "4px",
                    "padding" : "11px",
                    "background" : "white",
                    "border" : "1px solid rgba(2,2,2,0.1)"
                    },
                  insertFormBtn : {
                    "background" : "red",
                    "color" : "white",
                    "padding" : "2px 3px",
                    "font-size" : "15px",
                    "margin-top" : "4px",
                    "border-radius" : "4px",
                    "font-family" : "Roboto",
                    "border" : "2px solid red"
                  }
                }
        }
        
    }
   };
    $scope.$watch('textAngularOpts.textAngularEditors.textArea2.mark', function(val,newVal){
    console.log(newVal);
    },true);
}
