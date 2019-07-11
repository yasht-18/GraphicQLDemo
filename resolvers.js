const db = require('./db')
const Query = {
   test: () => 'Test Success, GraphQL server is up & running !!',
   abc: () => 'Test abc, GraphQL server is up & running !!',
   students:() => db.students.list(), 
   colleges:()=>db.colleges.list(), 
   company:()=> db.companies.list(),   

   findCompanyByID: function (parent, args, context, info) {
      // Called when an error occured during another 'request' interceptor call
      //return db.companies.list();
      let obj = db.companies.list().find(obj => obj.id == args.id);
      return obj;
  } , 
  findStudentByID: function (parent, args, context, info) { 
     let obj = db.students.list().find(obj => obj.id==(args.id)); 
      // for(var i=0;i<db.students.list().length;i++){
      //    if(db.students.list().id == args.id){
      //       return db.students[i];
      //    }
      // }
     return obj; 
  }

 
}



module.exports = {Query}