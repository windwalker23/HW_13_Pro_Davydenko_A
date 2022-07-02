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

let workDays = monday.concat(tuesday)
.map(
    function(task, index) {
        task[1] /= 60;
        return task;
    }
)
.filter(
    function(task) {
        return task[1] > 2;
    }
)
.map(
    function(task) {
        let pay = task[1] * amount;
        task.push(pay);
        return task;
    }
) 
.map(
    function(item) {
        return (`<tr>
            <td>Task name: ${item[0]}</td>
            <td>Taks duration: ${item[1]} hours</td>
            <td>Task amount: ${item[2]}$</td>
        </tr>`)
    }
)
.join("")
document.write(`<table width="700">${workDays}</table>`)