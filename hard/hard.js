function person(){
    const pii = {
        name: "Martin Lazore",
        ssn: `000000000`,
    }

return{
    getName: () =>{
        return pii.name;
        }
    }
}

const p1 = person();

console.log(p1.getName());