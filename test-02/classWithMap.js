// Create a class name Users and add get, set , delete and list method and also add  any inheritance function using prototype or extend

class Users{
    constructor(){
        this.map=new Map();
    }
    
    setMethod(key,value){
        this.map.set(key,value);
    }
    
    getMethod(key){
        if(this.map.get(key)){
            return this.map.get(key)
        }else{
            return "Key Not Avaliable"
        }
    }
    
    removeElement(key){
        if(this.map.get(key)){
            this.map.delete(key);
            console.log(`Delete sucessed ${key}`);
        }else{
            console.log(`${key} Not Available`)
        }
        
        
    }
    
    displayList(){
        this.map.forEach((value,key)=> console.log(key+" => "+value))
    }
}

Users.prototype.sizeOfmap=function (){
    console.log(this.map.size);
}

class Childuser extends Users{
    
}

const child=new Childuser()
child.setMethod("name","kk")
child.setMethod("age",21)
child.displayList()
console.log(child.getMethod("name"))
child.sizeOfmap()
child.removeElement("age")
child.displayList()
child.sizeOfmap()


// const user=new Users();
// user.setMethod("name","kk")
// console.log(user.getMethod("name"))
// user.setMethod("age",21)
// user.displayList()
// user.removeElement("age")
// user.displayList()