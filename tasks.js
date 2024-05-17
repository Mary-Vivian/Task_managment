class taskmanager{
    constructor(){
        this.listoftask=[]
    }
    addtask(name,description,deadline,priority){
        let id=this.listoftask.length+1
        const newTask={
            name:name,
            description:description,
            deadline:deadline,
            priority:priority,
            id:id
        }
        this.listoftask.push(newTask);
        console.log("Task added succefully");
    }
    edittask(id,taskdetail={}){
        this.listoftask.filter(task=>{
            if(task.id===id){
                const keys=Object.keys(taskdetail)
                if(keys.length>=1){
                    keys.forEach(key =>{
                        task[key]=taskdetail[key]
                    });
                    return "Task successfully updated"
                }
                else{
                    return "Task successfully updated"
                }
            }
            else{
                return "Task does not exist"
            }
        });
       
    }
}
const adding=new taskmanager
adding.addtask("cooking","how to cook","tomorrow","high")
adding.addtask("Java","coding","monday","high")
console.log(adding);