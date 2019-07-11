const db = require('./db')
const Query = {
   test: () => 'Test Success, GraphQL server is up & running !!',
   abc: () => 'Test abc, GraphQL server is up & running !!',
   students:() => db.students.list(), 
   colleges:()=>db.colleges.list(), 
   company:()=> db.companies.list(),
	companyWithID:()
	 hero(episode: $episode) {
 
}
module.exports = {Query}