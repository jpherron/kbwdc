(function () {
    var myConnector = tableau.makeConnector();

    myConnector.init = function(initCallback) {
        initCallback();
        tableau.submit();
    };

    myConnector.getSchema = function (schemaCallback) {
    var cols = [
        { id : "rowdate", alias : "Record Timestamp", columnType: "discrete", dataType : tableau.dataTypeEnum.datetime },
        { id : "taskid", alias : "Card ID", columnType: "discrete", dataType : tableau.dataTypeEnum.int },
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
        { id : "deadlineoriginalformat", alias : "Deadline yyyy-mm-dd", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.date },
        { id : "extlink", alias : "External Link", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "tags", alias : "Tags", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "columnid", alias : "Column ID", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
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
        { id : "title", alias : "Title",columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "createdat", alias : "Datetime Created",columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.datetime },
        { id : "title", alias : "Title",columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "requester", alias : "requester",columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "charterurl", alias : "Charter URL",columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string }




    ];

    var tableInfo = {
        id : "KanbanizeData",
        alias : "Kanbanize Data",
        columns : cols,
        incrementColumnId : "rowdate"
    };

    schemaCallback([tableInfo]);
    };

        myConnector.getData = function (table, doneCallback) {

          $.ajax({
            headers : {
              'apikey' : 'EqnM1qQSfWpY7R8RJ76Ufd87ilW5dGReMHnAW1mA',
              'Access-Control-Allow-Origin': '*'
            },
            type: "POST",
            url: "https://cors-anywhere.herokuapp.com/https://globalnoc.kanbanize.com/index.php/api/kanbanize/get_all_tasks/boardid/2/subtasks/yes/comments/yes/format/json", //CORS hack required to get around WDC CORS issue
            dataType: 'json',
            success: function(result) {
              var tab = result, tableData = [];

              // Iterate over the JSON object
              for (var i = 0, len = tab.length; i < len; i++) {
                var rqstr = "";
                var chrtr = "";
                var curepochdate = new Date();
                var curdate =
                  (curepochdate.getMonth() + 1) + "/" +
                  curepochdate.getDate() + "/" +
                  curepochdate.getFullYear() + " " +
                  curepochdate.getHours() + ":00:00";

                for (var j = 0, len2 = tab[i].customfields.length; j < len2; j++) {
                  if (tab[i].customfields[j].fieldid =="10"){ rqstr = tab[i].customfields[j].value; }
                  if (tab[i].customfields[j].fieldid =="5") { chrtr = tab[i].customfields[j].value; }
                }
                  tableData.push({
                    "rowdate": curdate,
                    "taskid": tab[i].taskid,
                    "position": tab[i].position,
                    "type": tab[i].type,
                    "assignee": tab[i].assignee,
                    "description": tab[i].description,
                    "subtasks": tab[i].subtasks,
                    "subtaskscomplete": tab[i].subtaskscomplete,
                    "color": tab[i].color,
                    "priority": tab[i].priority,
                    "size": tab[i].size,
                    "deadline": tab[i].deadline,
                    "deadlineoriginalformat": tab[i].deadlineoriginalformat,
                    "extlink": tab[i].extlink,
                    "tags": tab[i].tags,
                    "columnid": tab[i].columnid,
                    "laneid": tab[i].laneid,
                    "leadtime": tab[i].leadtime,
                    "blocked": tab[i].blocked,
                    "blockedreason": tab[i].blockedreason,
                    "subtaskdetails": tab[i].subtaskdetails,
                    "comments": tab[i].comments,
                    "columnname": tab[i].columnname,
                    "lanename": tab[i].lanename,
                    "columnpath": tab[i].columnpath,
                    "logedtime": tab[i].logedtime,
                    "attachments": tab[i].attachments,
                    "requester": rqstr,
                    "charterurl": chrtr
                    });
                  }
              tableau.log("total items processed: "+i);
              table.appendRows(tableData);
              doneCallback();

          } //success
        }); //ajax
        }; //getData


        tableau.registerConnector(myConnector);
    })();
/* not needed, if not interactive
    $(document).ready(function () {
    $("#submitButton").click(function () {
        tableau.connectionName = "All Kanbanize Data";
        tableau.submit();
    });
});*/
