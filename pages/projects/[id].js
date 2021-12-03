import { getProjects, getOneProjects } from "../../Models/projects";

export default function ProjectsDetails(project) {
  console.log(project);

  return <h1> {project.description}</h1>;
}

export async function getStaticProps(context) {
  const project = await getOneProjects(context.params.id);

  return {
    props: { project }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  const projects = await getProjects();
  // Get the paths we want to pre-render based on posts
  const paths = projects.map((project) => ({
    params: { id: project.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: "blocking" };
}
