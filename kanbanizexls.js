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
      //  { id : "columnpath", alias : "Column Path", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "logedtime", alias : "Logged Time", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.int },
      //  { id : "attachments", alias : "Attachments", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "title", alias : "Title",columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        { id : "createdat", alias : "Datetime Created",columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.datetime },
        { id : "timesmovedtoactive", alias : "Times Moved to Active",columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.int },
        { id : "timesmovedtoarchive", alias : "Times Moved to Archive",columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.int },
        { id : "timesmovedtoblocked", alias : "Times Moved to Blocked",columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.int },
        { id : "cycletime", alias : "Cycle Time (seconds)",columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.int },
        { id : "firstdatearchive", alias : "First Date Moved to Archive", columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.datetime },
        { id : "modifieddate", alias : "Last Modified Date",columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.datetime },
        { id : "lastdatearchive", alias : "Last Date Moved to Archive",columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.datetime },
        { id : "firstdateactive", alias : "First Date Moved to Active",columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.datetime },
        { id : "lastdateactive", alias : "Last Date Moved to Active",columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.datetime },
        { id : "firstdatedocumentwrapup", alias : "First Date Moved to Document/Wrap-up",columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.datetime },
        { id : "lastdatedocumentwrapup", alias : "Last Date Moved to Document/Wrap-up",columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.datetime },
        { id : "firstdatebacklog", alias : "First Date Moved to Backlog",columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.datetime },
        { id : "lastdatebacklog", alias : "Last Date Moved to Backlog",columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.datetime },
        { id : "firstdatekilled", alias : "First Date Moved to Killed",columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.datetime },
        { id : "lastdatekilled", alias : "Last Date Moved to Killed",columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.datetime },
        { id : "firstdateready", alias : "First Date Moved to Ready Stack",columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.datetime },
        { id : "lastdateready", alias : "Last Date Moved to Ready Stack",columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.datetime },
        { id : "firstdateblocked", alias : "First Date Moved to Blocked",columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.datetime },
        { id : "lastdateblocked", alias : "Last Date Moved to Blocked",columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.datetime },
        { id : "firstdatereadyforreview", alias : "First Date Moved to Ready for Review",columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.datetime },
        { id : "lastdatereadyforreview", alias : "Last Date Moved to Ready for Review",columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.datetime },
        { id : "section", alias : "Section",columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string }
        //{ id : "requester", alias : "requester",columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string },
        //{ id : "charterurl", alias : "Charter URL",columnRole: "dimension", columnType: "discrete", dataType : tableau.dataTypeEnum.string }
    ];

    var tableInfo = {
        id : "KanbanizeXLSData",
        alias : "Kanbanize XLS Data",
        columns : cols,
        incrementColumnId : "rowdate"
    };

    schemaCallback([tableInfo]);
    };

        myConnector.getData = function (table, doneCallback) {

              /* set up XMLHttpRequest */
              var url = "https://cors-anywhere.herokuapp.com/https://globalnoc.kanbanize.com/publicfilters/export?key=3f0748cfd8c46ecff152c2cd0ecd2f1c";

              var oReq = new XMLHttpRequest();

              oReq.open("GET", url, true);
              oReq.responseType = "arraybuffer";

              oReq.onload = function(e) {
                var arraybuffer = oReq.response;

                /* convert data to binary string */
                var data = new Uint8Array(arraybuffer);
                var arr = new Array();
                for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
                var bstr = arr.join("");

                /* Call XLSX */
                var workbook = XLSX.read(bstr, {type:"binary"});

                /* DO SOMETHING WITH workbook HERE */
                var first_sheet_name = workbook.SheetNames[0];
                /* Get worksheet */
                var worksheet = workbook.Sheets[first_sheet_name];

                var wb = XLSX.utils.sheet_to_json(worksheet);
                var tableData= [];
                console.log(wb);
              //  wb = ["erwer", "ere","ddd"]

                for (var i = 0, len = wb.length; i < len; i++) {
console.log(wb[i]['First Date Moved To Active']);
      //  for (var key in wb[i]) {console.log(key);}
                  //tableau.log("First Date Moved to Archive: " + wb[i]['First Date Moved to Archive']);
                  //create a timestamp of current date, current hour.
                   var curepochdate = new Date();
                   var curdate =
                     (curepochdate.getMonth() + 1) + "/" +
                     curepochdate.getDate() + "/" +
                     curepochdate.getFullYear() + " " +
                     curepochdate.getHours() + ":00:00";

                     tableData.push({
                       "rowdate": curdate,
                       "taskid": wb[i][ 'Card ID' ],
                       //"position": wb[i].position,
                       "type": wb[i]['Type Name'],
                       "assignee": wb[i].Assignee,
                      // "description": wb[i].description,
                      // "subtasks": wb[i].subtasks,
                      // "subtaskscomplete": wb[i].subtaskscomplete,
                       "color": wb[i].Color,
                       "priority": wb[i].Priority,
                       "size": wb[i].Size,
                      // "deadline": wb[i].deadline,
                      // "deadlineoriginalformat": wb[i].deadlineoriginalformat,
                      // "extlink": wb[i].extlink,
                      // "tags": wb[i].tags,
                      // "leadtime": wb[i].leadtime,
                      // "blocked": wb[i].blocked,
                       //"blockedreason": wb[i].blockedreason,
                      // "subtaskdetails": wb[i].subtaskdetails,
                       "columnname": wb[i]['Column Name'],
                       "lanename": wb[i]['Lane Name'],
                       "logedtime": wb[i]['Logged Time (seconds)'],
                      // "attachments": wb[i].attachments,
                       "title": wb[i].Title,
                       "createdat": wb[i]['Created At'],
                       "cycletime": wb[i]['Cycle Time (seconds)'],
                       "modifieddate": wb[i]['Last Modified'],
                       "requester": wb[i]['Requester / Taskboard'],
                       "firstdatearchive": wb[i]['First Date Moved to Archive'],
                       "lastdatearchive": wb[i]['Last Date Moved to Archive'],
                       "firstdateactive": wb[i]['First Date Moved To Active'],
                       "lastdateactive": wb[i]['Last Date Moved To Active'],
                       "firstdatedocumentwrapup": wb[i]['First Date Moved To Document/ Wrap-up'],
                       "lastdatedocumentwrapup": wb[i]['Last Date Moved To Document/ Wrap-up'],
                       "firstdatebacklog": wb[i]['First Date Moved To Backlog'],
                       "lastdatebacklog": wb[i]['Last Date Moved To Backlog'],
                       "firstdatekilled": wb[i]['First Date Moved To Killed'],
                       "lastdatekilled": wb[i]['Last Date Moved To Killed'],
                       "firstdateready": wb[i]['First Date Moved To Ready Stack'],
                       "lastdateready": wb[i]['Last Date Moved To Ready Stack'],
                       "firstdateblocked": wb[i]['First Date Moved To Blocked'],
                       "lastdateblocked": wb[i]['Last Date Moved To Blocked'],
                       "firstdatereadyforreview": wb[i]['First Date Moved To Ready For Review'],
                       "lastdatereadyforreview": wb[i]['Last Date Moved To Ready For Review'],
                       "section": wb[i].Section
                       });
                     }
                     console.log(tableData);
                 tableau.log("total items processed: "+i);
                 table.appendRows(tableData);
                 doneCallback();
              }

              oReq.send();

              //doneCallback();

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
