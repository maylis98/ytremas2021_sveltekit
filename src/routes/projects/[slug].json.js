import get_projects from "./_get_projects.js";

export async function get({
  params
}) {
  const {slug} = params;
  let project = get_projects().find(
    project => project.slug === slug
  );
  if(!project) return {status:404};
  let body = JSON.stringify(project);
  return {
    body
  };
}
