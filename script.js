let amount = 100;
let monday = [
  ['Write a tutorial',180],
  ['Some web development',120]
];
let tuesday = [
  ['Keep writing that tutorial',240],
  ['Some more web development',360],
  ['A whole lot of nothing',240] 
];

let workDays = monday.concat(tuesday);
let tasks = []
workDays.map(
    function(task, index) {
        return task[1] / 60;
    }
)
.filter(
    function(time, index) {
        if(time > 2) {
            tasks.push(workDays[index]);
            return time;
        }
    }
)
.forEach(
    function(time, index) {
        tasks[index][1] = `${time} hours`;
        let pay = time * 100;
        tasks[index].push(`${pay}$`);
    }
)

let tasksTable = tasks.map(
    function(item) {
        return (`<tr>
            <td>Task name: ${item[0]}</td>
            <td>Taks duration: ${item[1]}</td>
            <td>Task amount: ${item[2]}</td>
        </tr>`)
    }
)
.join("")
document.write(`<table width="700">${tasksTable}</table>`)