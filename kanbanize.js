(function () {
    var myConnector = tableau.makeConnector();

myConnector.getSchema = function (schemaCallback) {
    var cols = [
        { id : "taskid", alias : "Card ID", columnType: "discrete", dataType : tableau.dataTypeEnum.float },
        { id : "position", alias : "Position", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "type", alias : "Type", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "assignee", alias : "Assignee", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "description", alias : "Description", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "subtasks", alias : "Subtasks", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "subtaskscomplete", alias : "Complete Subtasks", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "color", alias : "Color", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "priority", alias : "Priority", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "size", alias : "Size", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.int },
        { id : "deadline", alias : "Deadline dd-mm", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "deadlineoriginalformat", alias : "Deadline yyyy-mm-dd", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "extlink", alias : "External Link", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "tags", alias : "Tags", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "columnid", alias : "Column ID", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.int },
        { id : "laneid", alias : "Lane ID", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.int },
        { id : "leadtime", alias : "Leadtime", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.int },
        { id : "blocked", alias : "Blocked", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.bool },
        { id : "blockedreason", alias : "Reason for Block", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "subtaskdetails", alias : "Subtask Details", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "comments", alias : "Comments", columnRole: "dimension", columnType: "discrete", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "columnname", alias : "Column Name", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "lanename", alias : "Lane Name", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "columnpath", alias : "Column Path", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "logedtime", alias : "Logged Time", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.int },
        { id : "attachments", alias : "Attachments", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "title", alias : "Title",columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string }
    ];

    var tableInfo = {
        id : "KanbanizeData",
        alias : "All Kanbanize Data",
        columns : cols
    };

    schemaCallback([tableInfo]);
};

myConnector.getData = function(table, doneCallback) {
  $.ajax({
    headers : { 'apikey' : 'EqnM1qQSfWpY7R8RJ76Ufd87ilW5dGReMHnAW1mA' },
    method: 'POST',
    url: 'https://globalnoc.kanbanize.com/index.php/api/kanbanize/get_all_tasks/boardid/2//format/json',
    dataType: 'jsonp',
    success: function(res) {
        console.log(res);
        }
    });
doneCallback();
}

tableau.registerConnector(myConnector);

    $(document).ready(function () {
        $("#submitButton").click(function () {
            tableau.connectionName = "Kanbanize Data";
            tableau.submit();
        });
    });
})();
