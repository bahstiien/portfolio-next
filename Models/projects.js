import Db from "../db-config";

export const getProjects = () => {
  return Db.promise()
    .query("SELECT * FROM project")
    .then(([data]) => data);
};

export const getOneProjects = (id) => {
  return Db.promise()
    .query(`SELECT * FROM project WHERE id = ${id}`)
    .then(([data]) => data);
};
