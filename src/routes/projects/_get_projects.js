import fs from "fs";
import path from "path";
import fm from "front-matter";

let root_path = process.cwd(),
    path_to_projects = path.join(root_path,"static/projects");

export default function get_projects() {
  let project_file_list = fs.readdirSync(path_to_projects);
  let projects = project_file_list.map( project_folder_name =>{
    let md_file_path = path.join(path_to_projects, project_folder_name, "index.md");
    let medias_path = path.join(path_to_projects, project_folder_name, "medias");
    let medias_list = fs.readdirSync(medias_path);
    let raw_content = fs.readFileSync(md_file_path, {
      encoding: 'utf8'
    });
    raw_content = fm(raw_content);
    return {
      ...raw_content.attributes,
      medias:medias_list,
      slug:project_folder_name,
      body:raw_content.body
    };
  });
  return projects;
}
