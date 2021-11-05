const db = require("../createDb")

const knex = require("knex")({
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "Jayshri@123",
      database: "meraki",
    },
  });

  
getCourses =(req,res)=>{
  knex.from('courseDetails').select("*")
    .then((rows) => {
      res.send(rows)
    })
}
getCourseById = (req,res)=>{
  const {id} = req.params;
  knex.schema.hasTable("courseDetails").then(function (exists) {
    if (exists) {
    return knex.from('courseDetails').select("*").where("id",id)
    .then(function(result){
      if (result != 0){res.send(result)}
      else{res.status(500).send("id is not found")}
    }) 
    }
  })
}
createCourse = (req,res)=>{
  const newcourse = req.body;
  // console.log(newcourse);
  knex.schema.hasTable("courseDetails").then(function (exists) {
    if (exists) {
      res.send('new course has been added to database')
      return knex("courseDetails").insert({id:newcourse.id,name:newcourse.name,logo:newcourse.logo,notes:newcourse.notes,days_to_complete:newcourse.days_to_complete,short_description:newcourse.short_description,type:newcourse.type,lang_available:newcourse.lang_available.toString()})}  
  })
}
deleteCourse = (req,res)=>{
  const {id} = req.params
  knex.schema.hasTable("courseDetails").then(function (exists) {
      if (exists) {
        res.send({ Success:`data deleted by id:${id} successfully.` });
        return knex("courseDetails").where("id", id).del();
      }
    })
}
updateCourse = (req,res)=>{
  const id = req.params.id
  var name = req.body.name;
  var logo = req.body.logo
  var notes = req.body.notes
  var days_to_complete = req.body.days_to_complete
  var short_description = req.body.short_description
  var type = req.body.type
  var lang_available = req.body.lang_available
  knex.schema.hasTable("courseDetails").then(function (exists) {
    if (exists) {
      res.send({ Success: `course data updated successfully.` })
      return knex("courseDetails")
      .update({name:name, logo:logo, notes:notes, days_to_complete:days_to_complete,short_description:short_description, type:type, lang_available:lang_available.toString() })
      .where("id", id)}
    })

}

module.exports = {
    getCourses,
    getCourseById,
    createCourse,
    deleteCourse,
    updateCourse
}
