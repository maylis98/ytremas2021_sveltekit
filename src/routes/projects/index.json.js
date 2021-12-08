import get_projects from "./_get_projects.js";

export async function get({
  params
}) {
  let projects = get_projects().map(project=>{
    return {
      title: project.title,
      slug: project.slug
    }
  });
  let body = JSON.stringify(projects);
  return {
    body
  };
}
