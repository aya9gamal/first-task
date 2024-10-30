const fs = require("fs");

const addperson = (id, firstname, lastname, age, city) => {
  const alldata = load();
  const duplicate = alldata.filter((obj) => {
    return obj.id === id;
  });
  if (duplicate.length === 0) {
    alldata.push({
      id: id,
      fname: firstname,
      lname: lastname,
      age: age,
      city: city,
    });
    savedata(alldata);
    console.log("add person successful")
  } else {
    console.log("have you already exists");
  }
};

const load = () => {
  try {
    const datajson = fs.readFileSync("datastore.json").toString();
    return JSON.parse(datajson);
  } catch {
    return [];
  }
};

const savedata = (data) => {
  const savealldata = JSON.stringify(data);
  fs.writeFileSync("datastore.json", savealldata);
};

const viewdata = (id) => {
  const data = load();

  const dataview = data.filter((obj) => {
    return obj.id == id;
  });

  if (dataview.length == 0) {
    console.log(data);
  } else {
    console.log(dataview);
  }
};

const delateperson = (id)=>{
    const data = load()
    const keepdata =data.filter(obj =>{
        return obj.id !== id
    })
    console.log(keepdata)
      savedata(keepdata)

  
}

const removeall = ()=>{
    const data = load()
    data.splice(0,data.length)
        savedata(data)
}
module.exports = {
  addperson,
  viewdata,
  delateperson,
  removeall
};
