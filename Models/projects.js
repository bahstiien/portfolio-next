import Db from "../db-config";

export const getProjects = () => {
  return Db.promise()
    .query("SELECT * FROM project")
    .then(([data]) => data);
};
