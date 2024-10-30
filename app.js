const yargs = require("yargs")
const dataexport = require("./data")
yargs.command({
    command :"add",
    describe : "this is add person",
    builder :{
        id : {
            describe : "this is id person",
            demandCommand :true
        },
        fname : {
            describe : "this is first name",
            demandCommand  :true
        },
        lname :{
            describe : "this is last name",
            demandCommand :true
        },
        age :{
            describe : "this is age",
            demandCommand :true
        },
        city:{
            describe : "this is city"
        }
    },
    handler : (x)=>{
        dataexport.addperson(x.id,x.fname,x.lname,x.age,x.city)
        // console.log(x)
    }
})

yargs.command({
    command : "view",
    describe : "this is show all data or all person specific",
    handler : (x)=>{
        // console.log(x.id)
        dataexport.viewdata(x.id)
    }
})

yargs.command({
    command : "delateOne",
    describe : "this is delate elment",
    buider :{
        id : {
          describe : "this is id desc",
          demandCommand : true,
          type :"string"
        }
      },
    handler : (x)=>{
        // console.log(x)
        dataexport.delateperson(x.id)
    }
})

yargs.command({
    command : "delateAll",
    describe : "this is remove all data",
    handler : ()=>{
        dataexport.removeall()
    }
})
yargs.parse()