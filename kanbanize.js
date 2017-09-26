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
        { id : "size", alias : "Size", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "deadline", alias : "Deadline dd-mm", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "deadlineoriginalformat", alias : "Deadline yyyy-mm-dd", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "extlink", alias : "External Link", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "tags", alias : "Tags", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "columnid", alias : "Column ID", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "laneid", alias : "Lane ID", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "leadtime", alias : "Leadtime", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "blocked", alias : "Blocked", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "blockedreason", alias : "Reason for Block", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "subtaskdetails", alias : "Subtask Details", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "comments", alias : "Comments", columnRole: "dimension", columnType: "discrete", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "columnname", alias : "Column Name", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "lanename", alias : "Lane Name", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "columnpath", alias : "Column Path", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "logedtime", alias : "Logged Time", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "attachments", alias : "Attachments", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "title", alias : "Title",columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string }
    ];

    var tableInfo = {
        id : "earthquakeFeed",
        alias : "Earthquakes with magnitude greater than 4.5 in the last seven days",
        columns : cols
    };

    schemaCallback([tableInfo]);
};

    myConnector.getData = function (table, doneCallback) {

    };

    tableau.registerConnector(myConnector);

    $(document).ready(function () {
        $("#submitButton").click(function () {
            tableau.connectionName = "Kanbanize Data";
            tableau.submit();
        });
    });
})();