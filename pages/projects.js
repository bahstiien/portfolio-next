import Footer from "../components/Footer";
import Layout from "../components/Layout";
import { getProjects } from "../Models/projects";
import Image from "next/image";

const projects = ({ projects }) => {
  return (
    <div className="flex">
      <Layout name="Mes projets">
        {projects.map((project) => {
          return (
            <div key={project.id} className="flex flex-col w-96">
              <p> {project.title}</p>
              <img
                src={project.mainPictureUrl}
                alt="My desk"
                className="w-96"
              />

              <p> {project.description}) </p>
            </div>
          );
        })}
      </Layout>
    </div>
  );
};

export async function getStaticProps(context) {
  const projects = await getProjects();

  return {
    props: { projects }, // will be passed to the page component as props
  };
}

export default projects;
